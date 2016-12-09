import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './shared/services/user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, UsersComponent],
    providers: [UserService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
