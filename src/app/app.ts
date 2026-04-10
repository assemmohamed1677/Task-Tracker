import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [ Header ,Tasks ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-tracker');
}
