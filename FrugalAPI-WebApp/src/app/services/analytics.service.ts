import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyticsSummary, EndpointAnalytics } from '../features/models/analytics.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAnalytics(): Observable<EndpointAnalytics[]> {
    return this.http.get<EndpointAnalytics[]>(`${this.API_URL}/analytics/project-123`);
  }

//   getApiKeys(): Observable<ApiKey[]> {
//     return this.http.get<ApiKey[]>(`${this.API_URL}/apikeys`);
//   }

//   generateApiKey(): Observable<ApiKey> {
//     return this.http.post<ApiKey>(`${this.API_URL}/apikeys/generate`, {});
//   }

//   getUserInfo(): Observable<any> {
//     return this.http.get(`${this.API_URL}/me`);
//   }
}