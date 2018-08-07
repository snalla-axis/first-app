import { Component, OnInit } from '@angular/core';

@ Component({
    selector : 'app-server',
    templateUrl: './server.component.html',
})

export class ServerComponent implements OnInit {
    name = 'hello world';
    ngOnInit() {
    }
    ontestclick() {
        this.name = 'hell world tesing is done';
    }

}
