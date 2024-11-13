import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsListComponent } from './components/incidents-list/incidents-list.component';
import { IncidentDetailsComponent } from './components/incidents-details/incidents-details.component';

const routes: Routes = [
  { path: '', component: IncidentsListComponent },
  { path: ':id', component: IncidentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule {}
