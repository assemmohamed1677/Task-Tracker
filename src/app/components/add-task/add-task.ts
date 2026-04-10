import { Component , Output , EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Task } from '../../Task';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
@Output() onAddTask :EventEmitter<Task> = new EventEmitter()

text:string = "";
day:string ="";
reminder : boolean = false;
showAddTask : boolean = false;
subscription!: Subscription;

constructor(private uiService:Ui ){
    this.subscription = this.uiService.onToggle().subscribe(value =>this.showAddTask=value)

}


onSubmit(){
  if(!this.text){
    alert("please Add a Task");
    return;
  }
  const newTask = {
 text : this.text,
 day : this.day,
 reminder : this.reminder
  }

  this.onAddTask.emit(newTask)

  this.text = "";
  this.day = "";
  this.reminder = false;
}

}
