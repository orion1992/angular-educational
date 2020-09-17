import { Component, OnInit } from '@angular/core';
import {v4 as uuidV4} from 'uuid';

export type TodoListItem = {
  id: string,
  description: string,
  completed: boolean,
  completedDate?: Date
};

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosItems: TodoListItem[] = [];
  completedTodosItems: TodoListItem[] = [];

  constructor() { }

  todoDescription = '';

  handleDeleteItem = (id: string) => {
    this.todosItems = this.todosItems.filter(item => {
      if (item.id === id) {
        this.completedTodosItems.push({
          ...item,
          completed: true,
          completedDate: new Date()
        });
        return false;
      }
      return true;
    });
  }

  handleAddItem = () => {
    const newTodoItem = {
      id: uuidV4(),
      description: this.todoDescription,
      completed: false
    };

    this.todosItems.push(newTodoItem);
  }

  ngOnInit(): void {
  }

}
