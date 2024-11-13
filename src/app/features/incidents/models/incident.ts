export interface Incident {
  id: number;
  title: string;
  description: string;
  status: IncidentStatus;
  priority: IncidentPriority;
  createdAt: Date;
  updatedAt: Date;
}

export enum IncidentStatus {
  Open = 'Open',
  InProgress = 'In Progress',
  Closed = 'Closed'
}

export enum IncidentPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}
