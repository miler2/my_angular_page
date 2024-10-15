import { Routes } from '@angular/router';

// Componentes
import { LandpageComponent } from './components/landpage/landpage.component';
import { MiCvComponent } from './components/mi-cv/mi-cv.component';

export const routes: Routes = [
    { path: 'mi_cv', component: MiCvComponent, title: 'Mi CV' },
    { path: 'landpage', component: LandpageComponent, title: 'Landpage' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
