import { Routes } from '@angular/router';
import { App } from './app';
import { CarDetails } from './components/car-details/car-details';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: App,
  // },
  {
    path: 'car',
    component: CarDetails,
  },
];
