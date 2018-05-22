import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  socket;
  notifications: string[];
  url = 'http://localhost:8181/';

  constructor() {
    this.notifications = [];
    this.socket = io(this.url);

  }
  ngOnInit() {
    this.socket.on('message', (data) => {
      console.log(data);
      this.notifications.push(data);
    });
  }
}
