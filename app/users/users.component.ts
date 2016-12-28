import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/services/user.service";

@Component({
    selector: 'users',
    templateUrl: './app/users/users.component.html'
})
export class UsersComponent implements OnInit {
    private successMessage: string = '';
    private errorMessage: string = '';

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.userCreated$.subscribe(user => {
            this.successMessage = `${user.name} was created.`;
            this.clearMessages();
        });
        this.userService.userDeleted$.subscribe(() => {
            this.successMessage = 'The user has been deleted.';
            this.clearMessages();
        });
    }

    clearMessages() {
        setTimeout(() => {
            this.successMessage = '';
            this.errorMessage = '';
        }, 5000);
    }
}
