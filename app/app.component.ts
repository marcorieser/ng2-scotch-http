import {Component, OnInit} from '@angular/core';
import {User} from './shared/models/user';
import {UserService} from './shared/services/user.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe((users: User[]) => this.users = users);
    }
}
