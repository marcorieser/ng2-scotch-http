import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
    private usersUrl: string = '//reqres.in/api/users';

    constructor(private http: Http) {
    }

    /**
     * Get all users
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map((response: Response) => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Get a single user
     */
    getUser(id: number): Observable<User> {
        return this.http.get(`${this.usersUrl}/${id}`)
            .map((response: Response) => response.json().data)
            .catch(this.handleError);
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
