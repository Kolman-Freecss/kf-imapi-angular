import {Injectable} from '@angular/core';
import {Incident, IncidentPriority, IncidentStatus} from '../models/incident';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  private incidents: Incident[] = [] = [
    { id: 1, title: 'Issue 1', description: 'Description of Issue 1', status: IncidentStatus.Open, priority: IncidentPriority.Low, createdAt: new Date(), updatedAt: new Date() },
    { id: 2, title: 'Issue 2', description: 'Description of Issue 2', status: IncidentStatus.InProgress, priority: IncidentPriority.Medium, createdAt: new Date(), updatedAt: new Date() },
    { id: 3, title: 'Issue 3', description: 'Description of Issue 3', status: IncidentStatus.Closed, priority: IncidentPriority.High, createdAt: new Date(), updatedAt: new Date() }
  ];

  getIncidents(): Observable<Incident[]> {
    return of(this.incidents);
  }

  getIncidentById(id: number): Observable<Incident | undefined> {
    return of(this.incidents.find(i => i.id === id));
  }

  addIncident(incident: Incident): void {
    this.incidents.push(incident);
  }

  updateIncident(updatedIncident: Incident): void {
    const index = this.incidents.findIndex(i => i.id === updatedIncident.id);
    if (index !== -1) this.incidents[index] = updatedIncident;
  }
}
