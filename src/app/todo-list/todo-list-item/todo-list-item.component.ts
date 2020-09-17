import {Component, Input, OnInit} from '@angular/core';
import { TodoListItem } from '../todo-list.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: TodoListItem;
  @Input() onDestroy;
  @Input() disabled: boolean;
  @Input() idx: number;

  constructor() { }

  handleItemRemove = () => {
    setTimeout(() => {
      this.onDestroy(this.todo.id);
    }, 800);
  }
  ngOnInit(): void {
  }

}
