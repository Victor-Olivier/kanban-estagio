import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  private baseUrl = 'http://localhost:3000/columns';

  constructor(private http: HttpClient) {}

  getAllColumns(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getColumn(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createColumn(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateColumn(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteColumn(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
