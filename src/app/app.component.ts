import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeviceDetectionService } from './services/device-detection.service';

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

  constructor(
    private deviceDetectionService: DeviceDetectionService,
  ) {
    this.deviceDetectionService.deviceDetection();
    this.deviceDetectionService.loadStylesheet();
  }
}