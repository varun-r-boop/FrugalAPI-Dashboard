import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenService {
  private readonly API_URL = 'http://localhost:3000/api/auth/';

  constructor(private http: HttpClient) { }

  getApiToken(projectId : string): Observable<string> {
    return this.http.get<string>(`${this.API_URL}/${projectId}`);
  }
}