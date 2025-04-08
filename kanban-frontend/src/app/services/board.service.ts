import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private baseUrl = 'http://localhost:3000/boards';

  constructor(private http: HttpClient) {}

  getAllBoards(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getBoard(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBoard(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateBoard(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteBoard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
