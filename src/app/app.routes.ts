import { Routes } from '@angular/router';

// Componentes
import { LandpageComponent } from './components/landpage/landpage.component';

export const routes: Routes = [
    { path: '', component: LandpageComponent, title: 'Landpage' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
