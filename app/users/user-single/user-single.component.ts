import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../shared/models/user";

@Component({
    templateUrl: './app/users/user-single/user-single.component.html'
})
export class UserSingleComponent implements OnInit {
    private user: User;

    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];

        this.userService.getUser(id)
            .subscribe(user => this.user = user);
    }

    deleteUser() {
        this.userService.deleteUser(this.user.id)
            .subscribe(() => {
                this.router.navigate(['/users']);
            })
    }
}
