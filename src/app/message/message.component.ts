import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: String = '';
  socket;
  url = '/service/message';

  constructor(private httpClient: HttpClient) {
  }

  sendMessage() {
    console.log(this.message);
    const data = {'message': this.message};
    let headers1 = new HttpHeaders();
    headers1 = headers1.append('Content-Type', 'application/json');
    headers1 = headers1.append('Accept', 'application/json');

    this.httpClient.post(this.url, data, {headers: headers1}).subscribe(respObj => {
      console.dir(respObj);
    });
  }
  ngOnInit() {
  }

}
