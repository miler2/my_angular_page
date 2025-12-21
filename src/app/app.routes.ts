import { Routes } from '@angular/router';

// Componentes
import { LandpageComponent } from './components/landpage/landpage.component';
import { MiCvComponent } from './components/mi-cv/mi-cv.component';
import { LinkTreeComponent } from './components/link-tree/link-tree.component';

export const routes: Routes = [
    { path: 'portfolio', component: LinkTreeComponent, title: 'portfolio' },
    { path: 'mi_cv', component: MiCvComponent, title: 'Mi CV' },
    { path: '', component: LandpageComponent, title: 'Landpage' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
