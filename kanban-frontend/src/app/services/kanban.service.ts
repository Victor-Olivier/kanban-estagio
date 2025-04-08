// kanban.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private apiUrl = 'http://localhost:3000/boards';

  constructor(private http: HttpClient) {}

  getBoards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
