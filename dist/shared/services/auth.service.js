"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'https://reqres.in/api';
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.authUrl + "/login", { username: username, password: password })
            .map(function (response) { return response.json(); })
            .do(function (response) {
            if (response.token) {
                localStorage.setItem('auth_token', response.token);
                _this.loggedIn = true;
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    /**
     * Handle any errors from the API
     */
    AuthService.prototype.handleError = function (err) {
        var errorMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errorMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errorMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errorMessage);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map