import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.userService.getUser(id)
            .subscribe(user => this.user = user);
    }

    updateUser() {
        this.userService.updateUser(this.user)
            .subscribe(user => {
                console.log('user updated');
            });
    }

}
