import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  changeTheme(){
    const themeElement = document.body;
    const theme = themeElement.getAttribute('data-bs-theme');

    if (theme === "dark"){
      themeElement.setAttribute('data-bs-theme', 'light');
    } else if (theme === "light"){
      themeElement.setAttribute('data-bs-theme', 'dark');
    } else {
      alert('There was an error changing the theme...')
      // alert(`Current theme is: ${theme}`);
    }
  }
}
