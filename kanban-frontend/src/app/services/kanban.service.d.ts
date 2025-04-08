import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class KanbanService {
    private http;
    private apiUrl;
    constructor(http: HttpClient);
    getBoards(): Observable<any>;
}
