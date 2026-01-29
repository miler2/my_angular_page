import { Routes } from '@angular/router';

// Componentes
import { LandpageComponent } from './components/landpage/landpage.component';
import { MiCvComponent } from './components/mi-cv/mi-cv.component';
import { LinkTreeComponent } from './components/link-tree/link-tree.component';

export const routes: Routes = [
    { path: 'portfolio', component: LinkTreeComponent },
    { path: 'mi_cv', component: MiCvComponent },
    { path: '', component: LandpageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
