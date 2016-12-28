import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserSingleComponent} from "./users/user-single/user-single.component";
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/services/user.service';
import {routing} from './app.routing';
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {UserCreateComponent} from "./users/user-create/user-create.component";

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [AppComponent, UsersComponent, UserListComponent, UserSingleComponent, UserEditComponent, UserCreateComponent],
    providers: [UserService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
