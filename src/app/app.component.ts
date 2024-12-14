import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  device?: string;

  constructor() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile/i.test(userAgent)) {
      this.device = "mobile";
      // alert ("mobile");
    } else {
      this.device = "desktop";
      // alert ("desktop");
    }

    this.loadStylesheet();
  }

  loadStylesheet() {
    const head = document.getElementsByTagName('head')[0];

    // Create a new link element
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = this.device === 'mobile' 
      ? 'mobile.css' 
      : 'desktop.css';

    // Append the link element to the head
    head.appendChild(linkElement);
  }









  loadDeviceSpecificStyles() {
    let cssFileName = '';
    if (this.device === 'mobile') {
      cssFileName = 'mobile.css'; // Mobile-specific styles
    } else {
      cssFileName = 'desktop.css'; // Desktop-specific styles
    }

    // Dynamically load the CSS file into the document's head
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `assets/styles/${cssFileName}`;
    document.head.appendChild(linkElement);

    /* var fileref = document.createElement("stylesheet");

    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", "desktop.css");

    document.getElementsByTagName("head")[0].appendChild(fileref); */
  }
}