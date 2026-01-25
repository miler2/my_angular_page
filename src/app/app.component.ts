import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeviceDetectionService } from './services/device-detection.service';
import { LavaLampBackgroundComponent } from "./lava-lamp-background/lava-lamp-background.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    LavaLampBackgroundComponent
],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private deviceDetectionService: DeviceDetectionService,
  ) {
    this.deviceDetectionService.deviceDetection();
  }
}