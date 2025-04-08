import { OnInit } from '@angular/core';
import { KanbanService } from './services/kanban.service';
export declare class AppComponent implements OnInit {
    private kanbanService;
    title: string;
    boards: any[];
    constructor(kanbanService: KanbanService);
    ngOnInit(): void;
    loadBoards(): void;
}
