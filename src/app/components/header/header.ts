import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
showAddTask: boolean = false;
subscription!: Subscription;
constructor (private uiService: Ui){
  this.subscription = this.uiService.onToggle().subscribe(value =>this.showAddTask=value)
}


toggleAddTask(){

this.uiService.toggleAddTask();

}
}
