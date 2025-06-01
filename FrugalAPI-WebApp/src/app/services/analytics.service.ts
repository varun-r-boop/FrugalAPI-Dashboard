import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyticsSummary, EndpointAnalytics } from '../features/models/analytics.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly API_URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAnalytics(projectId : string): Observable<EndpointAnalytics[]> {
    return this.http.get<EndpointAnalytics[]>(`${this.API_URL}analytics/${projectId}`);
  }

}