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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/observable/throw");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var users_component_1 = require("./users/users.component");
var user_list_component_1 = require("./users/user-list/user-list.component");
var user_single_component_1 = require("./users/user-single/user-single.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var user_service_1 = require("./shared/services/user.service");
var user_edit_component_1 = require("./users/user-edit/user-edit.component");
var user_create_component_1 = require("./users/user-create/user-create.component");
var login_component_1 = require("./login/login.component");
var auth_service_1 = require("./shared/services/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, users_component_1.UsersComponent, user_list_component_1.UserListComponent, user_single_component_1.UserSingleComponent, user_edit_component_1.UserEditComponent, user_create_component_1.UserCreateComponent, login_component_1.LoginComponent],
        providers: [user_service_1.UserService, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map