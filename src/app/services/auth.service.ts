import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8082/jewelry/user';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/login`, user, httpOptions);
  }

  signup(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/signup`, user, httpOptions);
  }
}
