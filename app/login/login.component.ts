import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './app/login/login.component.html'
})
export class LoginComponent implements OnInit {
    credentials = {username: '', password: ''};
    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    login() {
        this.errorMessage = '';
        this.authService.login(this.credentials.username, this.credentials.password)
            .subscribe(
                () => {
                    this.router.navigate(['']);
                },
                err => {
                    this.errorMessage = err;
                }
            )
    }
}
