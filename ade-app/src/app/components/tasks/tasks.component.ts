import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../classes/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: String;

  constructor(private taskService: TaskService) {
    this.taskService.getTask()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  addTask(event) {
    event.preventDefault();
    var newTask = {
      title: this.title,
      isDone: false
    }
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      })
  }

  deleteTask(id) {
    var tasks = this.tasks;
    this.taskService.deleteTask(id)
      .subscribe(data => {
        if(data.n == 1){
          this.tasks = tasks.filter((task) => {
            return (task._id != id);
          })
        }
      })
  }

  updateStatus(task) {
    var _task = {
      _id: task._id,
      title : task.title,
      isDone : !task.isDone
    }
    this.taskService.updateStatus(_task)
      .subscribe( data => {
        task.isDone = !task.isdone;
      })
  }

  ngOnInit() {

  }

}
