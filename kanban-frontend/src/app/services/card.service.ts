import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) {}

  getAllCards(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCard(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCard(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateCard(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteCard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
