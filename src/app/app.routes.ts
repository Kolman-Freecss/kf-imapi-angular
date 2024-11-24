import {Routes} from '@angular/router';
import {HOME_PATH, INCIDENCES_PATH} from './shared/paths';
import {authGuard} from './shared/guards/auth.guard';
import {dataResolver} from './shared/resolvers/data.resolver';

const routes: Routes = [
  {path: '', redirectTo: HOME_PATH, pathMatch: 'full'},
  {
    path: HOME_PATH,
    canActivate: [authGuard],
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: INCIDENCES_PATH,
    canActivate: [authGuard],
    resolve: {
      incidents: dataResolver // Using the functional resolver we defined
    },
    loadChildren: () => import('./features/incidents/incidents-routing.module').then(m => m.IncidentsRoutingModule)
  },
];

export {routes};
