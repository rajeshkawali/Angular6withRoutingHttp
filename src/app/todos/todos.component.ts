import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Object;
  constructor(private data :DataService) { }

  ngOnInit() {
      this.data.getTodos().subscribe(
          data => this.todos = data 
      );
  }

}
