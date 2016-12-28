import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    user: User;
    successMessage: string = '';
    errorMessage: string = '';

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.userService.getUser(id)
            .subscribe(user => this.user = user);
    }

    updateUser() {
        this.successMessage = '';
        this.errorMessage = '';
        this.userService.updateUser(this.user)
            .subscribe(
                () => {
                    this.successMessage = 'User was updated.';
                },
                () => {
                    this.errorMessage = 'User could not be updated.'
                }
            );
    }

}
