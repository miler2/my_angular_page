import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {

  constructor() { }

  detectDevice(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/mobile/i.test(userAgent)) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }
}
