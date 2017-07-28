"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var MainService = (function () {
    function MainService(http) {
        var _this = this;
        this.http = http;
        //private apiUrl = 'https://liarsclubserver.herokuapp.com';
        this.apiUrl = 'http://localhost:3000';
        this.name = 'User';
        this.avatarPublicId = '';
        this.getProfileData().subscribe(function (d) {
            _this.loading = false;
            if (d.type) {
                _this.name = d.profile.firstname + " " + d.profile.lastname;
                _this.avatarPublicId = d.profile.imgId;
            }
        });
    }
    MainService.prototype.login = function (username, password) {
        this.loading = true;
        return this.http.post(this.apiUrl + '/users/login/', { name: username, password: password })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.register = function (username, email, password) {
        this.loading = true;
        return this.http.post(this.apiUrl + '/users/register/', { username: username, email: email, password: password })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.logout = function () {
        this.loading = true;
        return this.http.post(this.apiUrl + '/users/logout/', { username: localStorage.getItem('username') })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getUsersData = function () {
        this.loading = true;
        return this.http.get(this.apiUrl + '/users')
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getAllUsers = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/users/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.saveProfile = function (data) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        data.access_token = token;
        return this.http.post(this.apiUrl + '/users/saveprofile/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getProfileData = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/users/getprofile/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getClubs = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/all/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.addClub = function (data) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        data.access_token = token;
        return this.http.post(this.apiUrl + '/clubs/add/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.tagClub = function (id, memberState, memberType) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        var data = {
            access_token: token,
            clubId: id,
            memberState: memberState,
            memberType: memberType
        };
        return this.http.post(this.apiUrl + '/clubs/tag/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.untagClub = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/untag/', { access_token: token, clubId: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ////////-----------   Setups Services  --------------//////////////
    MainService.prototype.getAllRoles = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/getallroles/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    MainService.prototype.getAllVotings = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/getallvotings/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    MainService.prototype.addSetup = function (data) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        data.access_token = token;
        return this.http.post(this.apiUrl + '/setups/addsetup/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.updateSetup = function (data, id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        data.access_token = token;
        data.object_id = id;
        return this.http.post(this.apiUrl + '/setups/updatesetup/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getSetups = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/getallsetups/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /////////////////////////////////////////////////////////////////////
    MainService.prototype.validateUsertoken = function () {
        this.loading = false;
        var username = localStorage.getItem('username');
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/users/checktoken/', { name: username, token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    MainService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable()
], MainService);
exports.MainService = MainService;
