import { Routes } from '@angular/router';
import {HOME_PATH, INCIDENCES_PATH} from './shared/paths';

const routes: Routes = [
  { path: '', redirectTo: HOME_PATH, pathMatch: 'full' },
  { path: HOME_PATH, loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: INCIDENCES_PATH, loadChildren: () => import('./features/incidents/incidents-routing.module').then(m => m.IncidentsRoutingModule) },
];

export { routes };
