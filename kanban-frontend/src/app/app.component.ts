// app.component.ts
import { Component, OnInit } from '@angular/core';
import { KanbanService } from './services/kanban.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  boards: any[] = [];

  constructor(private kanbanService: KanbanService) {}

  ngOnInit() {
    this.kanbanService.getBoards().subscribe((data) => {
      this.boards = data;
    });
  }
}
