// src/app/features/incidents/components/incidents-list/incidents-list.component.ts
import {Component, OnInit, signal} from '@angular/core';
import {IncidentsService} from '../../services/incidents.service';
import {Incident} from '../../models/incident';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {ReverseUppercasePipe} from '../../../../shared/pipes';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ReverseUppercasePipe],
  styleUrls: ['./incidents-list.component.scss']
})
export class IncidentsListComponent implements OnInit {

  // Define signals for incidents data and loading state
  incidentsSignal = signal<Incident[]>([]);
  loadingSignal = signal<boolean>(true); // Loading signal

  constructor(
    readonly incidentsService: IncidentsService,
    readonly route: ActivatedRoute
  ) {
    // Initialize the signal with data from the route resolver
    // const incidents = this.route.snapshot.data['incidents'];
    // this.incidentsSignal.set(incidents);  // Set initial incidents state from the resolver
  }

  ngOnInit(): void {
    // Fetch incidents asynchronously if needed
    this.incidentsService.getIncidents().subscribe(incidents => {
      this.incidentsSignal.set(incidents); // Update the signal state when the async data arrives
      this.loadingSignal.set(false);        // Set loading to false once data is fetched
    });
  }

}
