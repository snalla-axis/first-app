import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']})
export class ServersComponent implements OnInit {
  serverTesitng = 'This is testing';
  twoway = 'this is testig for two way binding';
  ngOnInit() {
  }
  ontestclick() {
    this.serverTesitng = 'hell world tesing is done';
}

onTestupdate(event: Event) {
  this.twoway = (<HTMLInputElement>event.target).value;
}
}
