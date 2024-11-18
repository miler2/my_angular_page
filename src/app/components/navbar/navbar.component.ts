import { Component, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

// Services
import { NavbarRoutingServiceService } from '../../services/navbar-routing-service.service';
import { LanguagesService } from '../../services/languages.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterContentInit{
  in_cv!: boolean;
  cv_language: string = "spanish";
  page_theme!: string;

  constructor(
    private router: Router,
    private navbarRoutingService: NavbarRoutingServiceService,
    private languagesService: LanguagesService,
    private cookies: CookieService
  )
  {}

  ngAfterContentInit(){
    // This is to show "Cambiar idioma CV" in the navbar

    // Listen to route changes using Router events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navbarRoutingService.is_user_in_mi_cv(); // This initializes the variable of the serice checking if the user is in the "/mi_cv" url or not.
        
        // This is a test for checking if we are in the right url. It'll show on the angular console.
        // console.log('Current URL: ' + this.router.url);
      });

    // I listen to the variable initialized just before so that every change to that variable also changes the local one.
    this.navbarRoutingService.data$.subscribe({
      next: (data) => {
        this.in_cv = data;
      }
    });

    this.updateTheme();
  }

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // BUTTON "CAMBIAR IDIOMA CV"
  // Si está en la url "mi_cv" muestra el botón "Cambiar idioma CV"
  update_in_cv(){
    this.navbarRoutingService.is_user_in_mi_cv();
  }


  // --------------------------------------------------------------------------------------------------------------------------------------------
  // PAGE THEMES
  // Possible themes are "light" and "dark"
  setThemeToken(value: string){
    this.cookies.set("theme", value)
  }

  /* In order to see what is the current theme when we reload the page we will need an observable,
  because when we reload the page the cookie takes longer to load than the code does to execute, so it uses the default value we give it here
  and not the one the cookie has. For that reason we need to use an observable that continuesly gives updates to the variable, and if it changes
  "updateTheme" can use it properly. */
  getThemeToken(): Observable<string>{
    return new Observable<string>((data) => {
      data.next(this.cookies.get("theme"));
    })
  }

  /* "data-bs-theme" is the variable for the css to select what theme we want.
  In order to change this we need to change the variable that is in the main html, "index.html".
  That's why I'm using document.body, to find that variable and then change it. */
  updateTheme(){
    this.getThemeToken().subscribe({
      next: (data) => {
        if (data === "dark"){
          document.body.setAttribute('data-bs-theme', 'dark'); // Change the actual CSS variable
        } else if (data === "light"){
          document.body.setAttribute('data-bs-theme', 'light');  // Change the actual CSS variable
        } else {
          console.warn('There was an error changing the theme...');
        }
      }
    })
  }

  // This is what is activated when we press the button to change the theme in the website
  changeTheme(){
    if (this.cookies.get("theme") === "dark"){
      document.body.setAttribute('data-bs-theme', 'light'); // Change the actual CSS variable
      this.setThemeToken("light");                          // Update the cookie status so we can use it in the future
    } else if (this.cookies.get("theme") === "light"){
      document.body.setAttribute('data-bs-theme', 'dark');  // Change the actual CSS variable
      this.setThemeToken("dark");                           // Update the cookie status so we can use it in the future
    } else {
      console.warn('There was an error changing the theme...');
    }
  }



  // --------------------------------------------------------------------------------------------------------------------------------------------
  // CV LANGUAGE
  change_cv_language(){
    this.languagesService.change_cv_language();
  }
}
