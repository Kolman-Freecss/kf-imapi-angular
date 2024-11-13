import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {IncidentsService} from '../../services/incidents.service';
import {Incident} from '../../models/incident';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./incident-details.component.scss']
})
export class IncidentDetailsComponent implements OnInit {

  incident: Incident | undefined;

  constructor(private route: ActivatedRoute, private incidentsService: IncidentsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.incidentsService.getIncidentById(id).subscribe(incident => this.incident = incident);
  }
}
