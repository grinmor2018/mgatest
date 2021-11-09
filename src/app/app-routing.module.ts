import { Routes } from '@angular/router';
import { SpaComponent } from './components/spa/spa.component';


export const Approutes: Routes = [
  {
    path: '',
    component: SpaComponent
  },
  {
    path: '**',
    component: SpaComponent
  }
];

