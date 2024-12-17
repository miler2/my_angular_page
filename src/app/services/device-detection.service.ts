import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  device?: string;

  constructor() { }
  
  // This (deviceDetection & loadStylesheet) gets executed on the beginning of the creation of the website in "app.component.ts"

  // Detects the device and sets the variable to mobile or desktop
  deviceDetection(){
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile/i.test(userAgent)) {
      document.body.setAttribute('device', 'mobile');
      // alert ("mobile");
    } else {
      document.body.setAttribute('device', 'desktop');
      // alert ("desktop");
    }
  }
}
