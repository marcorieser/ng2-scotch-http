import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
    private authUrl: string = 'https://reqres.in/api';
    private loggedIn: boolean = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(username: string, password: string): Observable<string> {
        return this.http.post(`${this.authUrl}/login`, {username, password})
            .map(response => response.json())
            .do(response => {
                if (response.token) {
                    localStorage.setItem('auth_token', response.token);
                    this.loggedIn = true;
                }
            })
            .catch(this.handleError);
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    /**
     * Handle any errors from the API
     */
    private handleError(err) {
        let errorMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errorMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        } else {
            errorMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errorMessage);
    }
}
