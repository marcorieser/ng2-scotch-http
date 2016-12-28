import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserService {
    private usersUrl: string = 'https://reqres.in/api/users';

    private userCreatedSource = new Subject<User>();
    private userDeletedSource = new Subject();

    userCreated$ = this.userCreatedSource.asObservable();
    userDeleted$ = this.userDeletedSource.asObservable();

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
        let headers = new Headers(),
            token = localStorage.getItem('auth_token');

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${token}`);

        return this.http.get(`${this.usersUrl}/${id}`, {headers})
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
     * Create a user
     */
    createUser(user: User): Observable<User> {
        return this.http.post(this.usersUrl, user)
            .map((response: Response) => response.json())
            .do(user => this.userCreated(user))
            .catch(this.handleError);
    }

    /**
     * Delete a user
     */
    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.usersUrl}/${id}`)
            .do((response: Response) => this.userDeleted())
            .catch(this.handleError);
    }

    /**
     * The user was created. Add this info to our stream.
     */
    private userCreated(user: User) {
        this.userCreatedSource.next(user);
    }

    /**
     * The user was deleted. Add this info to our stream.
     */
    private userDeleted() {
        this.userDeletedSource.next();
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
