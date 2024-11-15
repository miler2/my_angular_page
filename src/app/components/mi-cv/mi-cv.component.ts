import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../../services/languages.service';

@Component({
  selector: 'app-mi-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-cv.component.html',
  styleUrl: './mi-cv.component.css'
})
export class MiCvComponent {

  constructor (private languagesService: LanguagesService)
  {
    // This listens to the cv_language variable changes in the languagesService
    this.languagesService.data$.subscribe({
      next: (data) => {
        this.cv_language = data;
      }
    });
  };

  cv_language: string = "spanish";
}
