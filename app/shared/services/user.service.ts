import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
    private usersUrl: string = 'https://reqres.in/api/users';

    constructor(private http: Http) {
    }

    /**
     * Get all users
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map((response: Response) => response.json().data)
            .map(users => users.map(this.toUser))
            .catch(this.handleError);
    }

    /**
     * Get a single user
     */
    getUser(id: number): Observable<User> {
        return this.http.get(`${this.usersUrl}/${id}`)
            .map((response: Response) => response.json().data)
            .map(this.toUser)
            .catch(this.handleError);
    }

    /**
     * Update the user
     */
    updateUser(user: User): Observable<User> {
        return this.http.put(`${this.usersUrl}/${user.id}`, user)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    /**
     * Convert user info from API to our format
     */
    private toUser(user): User {
        return {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            username: user.first_name,
            avatar: user.avatar
        }
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
