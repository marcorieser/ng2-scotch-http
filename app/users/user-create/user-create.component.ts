import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/models/user";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './app/users/user-create/user-create.component.html'
})
export class UserCreateComponent implements OnInit {
    user: User = {name: '', username: '', avatar: ''};
    successMessage: string = '';
    errorMessage: string = '';

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    createUser() {
        this.successMessage = '';
        this.errorMessage = '';
        this.userService.createUser(this.user)
            .subscribe(
                () => {
                    this.successMessage = 'User was created.';
                    this.router.navigate(['/users']);
                },
                () => {
                    this.errorMessage = 'User could not be created.';
                }
            );
    }
}
