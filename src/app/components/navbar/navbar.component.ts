import { Component, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Services
import { NavbarRoutingServiceService } from '../../services/navbar-routing-service.service';
import { LanguagesService } from '../../services/languages.service';

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

  constructor(
    private router: Router,
    private navbarRoutingService: NavbarRoutingServiceService,
    private languagesService: LanguagesService
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
  }

  // BUTTON "CAMBIAR IDIOMA CV"
  // Si está en la url "mi_cv" muestra el botón "Cambiar idioma CV"
  update_in_cv(){
    this.navbarRoutingService.is_user_in_mi_cv();
  }


  // PAGE THEMES
  changeTheme(){
    const themeElement = document.body;
    const theme = themeElement.getAttribute('data-bs-theme');

    if (theme === "dark"){
      themeElement.setAttribute('data-bs-theme', 'light');
    } else if (theme === "light"){
      themeElement.setAttribute('data-bs-theme', 'dark');
    } else {
      alert('There was an error changing the theme...');
    }
  }


  // CV LANGUAGE
  change_cv_language(){
    this.languagesService.change_cv_language();
  }
}
