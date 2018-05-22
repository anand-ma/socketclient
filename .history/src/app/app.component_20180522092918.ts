import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  socket;
  constructor() {
    this.socket = io('http://localhost:8181/');
  }

  ngOninit() {
    this.socket.on('message', function () {
      console.log('message from server');
    });
  }
}
