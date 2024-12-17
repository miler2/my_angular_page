import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  device?: string;

  constructor() { }

  detectDevice(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/mobile/i.test(userAgent)) {
      document.body.setAttribute('device', 'mobile');
      return 'mobile';
    } else {
      document.body.setAttribute('device', 'desktop');
      return 'desktop';
    }
  }

  // This (deviceDetection & loadStylesheet) gets executed on the beginning of the creation of the website in "app.component.ts"

  // Detects the device and sets the variable to mobile or desktop
  deviceDetection(){
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile/i.test(userAgent)) {
      this.device = "mobile";
      // alert ("mobile");
    } else {
      this.device = "desktop";
      // alert ("desktop");
    }
  }

  // After knowing on what device the user is loged in with, we give the head of the html document the corresponding css document
  loadStylesheet() {
    const head = document.getElementsByTagName('head')[0];

    // *Create* a new <link> element for the head of the document and *save* it in the variable "linkElement"
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = this.device === 'mobile' 
      ? 'mobile.css' 
      : 'desktop.css';

    // Add the link element to the head
    head.appendChild(linkElement);
  }
}
