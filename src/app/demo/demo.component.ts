import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  socket;
  notifications: String[];
  constructor() {
    this.socket = io('http://localhost:8181/');
    this.socket.on('message', function (data) {
      console.log(data);
      this.notifications.push(data);
    });
  }
  ngOnInit() {
  }

}
