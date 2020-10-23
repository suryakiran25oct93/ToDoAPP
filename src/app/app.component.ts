import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
  todos = [
  {
    id: 1252,
    task: 'Project Review',
    desc: 'Review on Mean Stack development projects',
    done: false,
    priority:3
  },
  {
    id: 1011,
    task: 'HoD Meeting',
    desc: 'Meeting with CCs and OCCs',
    done: false,
    priority:1
  },
];

deltodos = [];

addTask(task:string,desc:string,priority:any)
{
  var newTodo = {
    id: Math.floor(Math.random() * 5000)+1,
    task: task,
    desc: desc,
    priority: priority,
    done: false
  };
  if(task.length==0)
  alert("Task Should not be empty");
  else if(desc.length==0)
  alert("Description Should not be empty");
  else
  this.todos.push(newTodo);
}
deleteTodo(todo:any)
{
  var newTodo = {
    id: todo.id,
    task: todo.task,
    priority: todo.priority,
    desc: todo.desc,
    done: todo.done
  };
  this.deltodos.push(newTodo);
  this.todos = this.todos.filter(t => t.id !== todo.id);
}
editTodo(todo:any)
{
  if(confirm("Do You want to Mark this task as Finished / UnFinished ?"))
  {
    if(todo.done == true)
    {
      let Index = this.todos.findIndex(item => item.id == todo.id);
      this.todos[Index].done = false;
    }
    else
    {
      let Index = this.todos.findIndex(item => item.id == todo.id);
      this.todos[Index].done = true;
    }
  }
  else
  {
    ;
  }
}
}
