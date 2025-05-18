import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../enviroment/enviroment';
import { AUTHCONSTANT } from '../features/constants/auth.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'auth'; // Update with your API URL
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {
    // Check for existing token on service initialization
    const token = localStorage.getItem('token');
    if (token) {
      this.getCurrentUser().subscribe();
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setJWTToken(response.token);
        }
      })
    );
  }

  signup(email: string, password: string, customerAppName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { email, password, customerAppName });
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(AUTHCONSTANT.FRUGALTOKEN);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(AUTHCONSTANT.FRUGALTOKEN);
  }

  get currentUser$(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  setJWTToken(token : string){
    localStorage.setItem(AUTHCONSTANT.FRUGALTOKEN,token)
  }
} 