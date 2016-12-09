import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent implements OnInit {

    users: User[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.http.get('//reqres.in/api/users')
            .subscribe(data => {
                this.users = data.json().data;
            })
    }

}
