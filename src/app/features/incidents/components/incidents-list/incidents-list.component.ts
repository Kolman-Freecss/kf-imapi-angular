// src/app/features/incidents/components/incidents-list/incidents-list.component.ts
import {Component, OnInit} from '@angular/core';
import {IncidentsService} from '../../services/incidents.service';
import {Incident} from '../../models/incident';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./incidents-list.component.scss']
})
export class IncidentsListComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(
    readonly incidentsService: IncidentsService
  ) {}

  ngOnInit(): void {
    this.incidentsService.getIncidents().subscribe(incidents => this.incidents = incidents);
  }
}
