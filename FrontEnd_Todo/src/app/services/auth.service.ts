import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users';
  
 

  constructor(private http: HttpClient) {}

  login(email: string, mot_de_passe: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, mot_de_passe });
  }
  REGISTER(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  } 

  getTachesParJour(jour: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/taches/jour/${jour}`);
}

deleteTache(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/taches/${id}`);
}

}
