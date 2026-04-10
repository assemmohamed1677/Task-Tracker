import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/taaask';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-tasks',
  standalone: true,    
  imports: [CommonModule, TaskItem,AddTask], 
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit { 
  private taskService = inject(TaskService); 
  private cdr = inject(ChangeDetectorRef); 

  tasks: Task[] = []; 

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      
      this.cdr.detectChanges(); 
    }); 
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      this.cdr.detectChanges(); 
    }); 
  }

toggleReminder(task:Task){
task.reminder = !task.reminder
this.taskService.updateTaskReminder(task).subscribe()
}

addTask(task:Task){
this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
      
      this.cdr.detectChanges(); })}
    
    
    }
