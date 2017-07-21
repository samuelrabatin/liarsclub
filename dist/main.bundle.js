webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(62);
var Observable_1 = __webpack_require__(2);
__webpack_require__(204);
__webpack_require__(205);
var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.apiUrl = 'https://liarsclubserver.herokuapp.com';
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], MainService);
exports.MainService = MainService;
var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuType;
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(MenuType = exports.MenuType || (exports.MenuType = {}));
//# sourceMappingURL=sidebar.metadata.js.map

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var main_service_1 = __webpack_require__(10);
var ProfileComponent = (function () {
    function ProfileComponent(mainService) {
        this.mainService = mainService;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.orgFirstname = '';
        this.orgLastname = '';
        this.orgEmail = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getProfileData().subscribe(function (d) {
            _this.mainService.loading = false;
            if (d.type) {
                _this.orgFirstname = d.profile.firstname;
                _this.orgLastname = d.profile.lastname;
                _this.orgEmail = d.profile.email;
                _this.firstName = d.profile.firstname;
                _this.lastName = d.profile.lastname;
                _this.email = d.profile.email;
            }
        });
    };
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        var profile = {
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email
        };
        this.mainService.saveProfile(profile).subscribe(function (d) {
            _this.mainService.loading = false;
            _this.orgFirstname = d.profile.firstname;
            _this.orgLastname = d.profile.lastname;
            _this.orgEmail = d.profile.email;
            console.log(d);
        }, function (e) {
            _this.mainService.loading = false;
            console.log(e);
        });
        return false;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__(195),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var router_1 = __webpack_require__(9);
var footer_component_1 = __webpack_require__(117);
var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [footer_component_1.FooterComponent],
        exports: [footer_component_1.FooterComponent]
    })
], FooterModule);
exports.FooterModule = FooterModule;
//# sourceMappingURL=footer.module.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var router_1 = __webpack_require__(9);
var navbar_component_1 = __webpack_require__(118);
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [navbar_component_1.NavbarComponent],
        exports: [navbar_component_1.NavbarComponent]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=navbar.module.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sidebar_metadata_1 = __webpack_require__(36);
exports.ROUTES = [
    { path: 'home', title: 'Home', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/clubs', title: 'Clubs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/meetings', title: 'Meetings', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/people', title: 'People', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'setups', title: 'Setups', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'discuss/forums', title: 'Forums', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-plugin' },
    { path: 'discuss/blogs', title: 'Blogs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-plugin' },
    { path: 'learn/articles', title: 'Articles', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-note2' },
    { path: 'learn/videos', title: 'Videos', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-note2' },
    { path: 'profile', title: 'Profile', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-note2' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var router_1 = __webpack_require__(9);
var sidebar_component_1 = __webpack_require__(119);
var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [sidebar_component_1.SidebarComponent],
        exports: [sidebar_component_1.SidebarComponent]
    })
], SidebarModule);
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=sidebar.module.js.map

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(98);
var app_module_1 = __webpack_require__(100);
var environment_1 = __webpack_require__(120);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(9);
var common_1 = __webpack_require__(8);
var main_service_1 = __webpack_require__(10);
var AppComponent = (function () {
    function AppComponent(location, mainService, router) {
        var _this = this;
        this.mainService = mainService;
        this.router = router;
        this.isUsers = true;
        this.location = location;
        router.events.subscribe(function (val) {
            _this.isUsers = val.url.includes('/users/');
            _this.mainService.validateUsertoken().subscribe(function (d) {
                if (d.type === false && !_this.isUsers) {
                    _this.router.navigate(['/users/login']);
                }
                _this.mainService.loading = false;
            }, function (e) {
                _this.mainService.loading = false;
                console.log(e);
                if (!_this.isUsers) {
                    _this.router.navigate(['/users/login']);
                }
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/init/initMenu.js');
        $.getScript('../assets/js/demo.js');
    };
    AppComponent.prototype.isMap = function () {
        // console.log(this.location);
        if (this.location.prepareExternalUrl(this.location.path()) === '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__(181),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(20);
var router_1 = __webpack_require__(9);
var http_1 = __webpack_require__(62);
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
var app_component_1 = __webpack_require__(99);
var dashboard_component_1 = __webpack_require__(106);
var dashboard_module_1 = __webpack_require__(107);
var footer_module_1 = __webpack_require__(64);
var sidebar_module_1 = __webpack_require__(67);
var navbar_module_1 = __webpack_require__(65);
var main_service_1 = __webpack_require__(10);
var common_1 = __webpack_require__(8);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            dashboard_module_1.DashboardModule,
            sidebar_module_1.SidebarModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            router_1.RouterModule.forRoot([]),
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            main_service_1.MainService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var main_service_1 = __webpack_require__(10);
var initDateTimePicker = __webpack_require__(229);
var AddClubComponent = (function () {
    function AddClubComponent(mainService) {
        this.mainService = mainService;
        this.clubAdded = new core_1.EventEmitter();
    }
    AddClubComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: true
        };
        var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Regular Map!'
        });
        marker.setMap(map);
        $('.selectpicker').selectpicker();
        initDateTimePicker();
    };
    AddClubComponent.prototype.addClub = function (evt) {
        var _this = this;
        var club = {
            title: this.clubName.nativeElement.value,
            address: this.clubAddress.nativeElement.value,
            type: this.regularly.nativeElement.checked ? 'Regularly' : 'Irreglarly',
            imgUrl: this.clubImg.nativeElement.src,
            regularType: this.repeatType.nativeElement.value,
            regularPeriod: this.repeatPeriod.nativeElement.value,
            dayOfWeek: this.dayOfWeek.nativeElement.value,
            time: this.time.nativeElement.value,
            starting: this.time.nativeElement.value,
            location: this.phsicalLocation.nativeElement.value,
            activeMembers: 0,
            pastMembers: 0
        };
        var requireInputs = $('input,select').filter('[required]:visible');
        requireInputs.map(function (index, val) {
            $(val).val() === '' ? $(val).parent().addClass('has-error') : $(val).parent().removeClass('has-error');
        });
        if ($('.has-error').length === 0) {
            this.mainService.addClub(club).subscribe(function (d) {
                _this.mainService.loading = false;
                _this.clubAdded.emit('club added');
            }, function (e) {
                _this.mainService.loading = false;
                console.log(e);
            });
        }
        return false;
    };
    AddClubComponent.prototype.locationChange = function (evt) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': evt.target.value }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var myLatlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    title: 'Regular Map!'
                });
                var mapOptions = {
                    zoom: 8,
                    center: myLatlng,
                    scrollwheel: true
                };
                var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
                marker.setMap(map);
            }
            else {
            }
        });
    };
    return AddClubComponent;
}());
__decorate([
    core_1.ViewChild('clubName'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "clubName", void 0);
__decorate([
    core_1.ViewChild('clubAddress'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "clubAddress", void 0);
__decorate([
    core_1.ViewChild('clubImg'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "clubImg", void 0);
__decorate([
    core_1.ViewChild('irregulary'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "irregulary", void 0);
__decorate([
    core_1.ViewChild('regularly'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "regularly", void 0);
__decorate([
    core_1.ViewChild('repeatPeriod'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "repeatPeriod", void 0);
__decorate([
    core_1.ViewChild('repeatType'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "repeatType", void 0);
__decorate([
    core_1.ViewChild('dayOfWeek'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "dayOfWeek", void 0);
__decorate([
    core_1.ViewChild('time'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "time", void 0);
__decorate([
    core_1.ViewChild('phsicalLocation'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "phsicalLocation", void 0);
__decorate([
    core_1.ViewChild('email'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild('websiteLink'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "websiteLink", void 0);
__decorate([
    core_1.ViewChild('facebookLink'),
    __metadata("design:type", Object)
], AddClubComponent.prototype, "facebookLink", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AddClubComponent.prototype, "clubAdded", void 0);
AddClubComponent = __decorate([
    core_1.Component({
        selector: 'app-add-club',
        template: __webpack_require__(182),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], AddClubComponent);
exports.AddClubComponent = AddClubComponent;
var _a, _b;
//# sourceMappingURL=add-club.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ClubComponent = (function () {
    function ClubComponent() {
        this.showDiag = false;
    }
    ClubComponent.prototype.ngOnInit = function () {
    };
    ClubComponent.prototype.editClick = function () {
        this.showDiag = true;
        $(".selectpicker").selectpicker();
    };
    ClubComponent.prototype.confirm = function () {
        this.showDiag = false;
    };
    ClubComponent.prototype.cancel = function () {
        this.showDiag = false;
    };
    return ClubComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ClubComponent.prototype, "club", void 0);
ClubComponent = __decorate([
    core_1.Component({
        selector: 'app-club',
        template: __webpack_require__(183),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], ClubComponent);
exports.ClubComponent = ClubComponent;
//# sourceMappingURL=club.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var main_service_1 = __webpack_require__(10);
var ClubsComponent = (function () {
    function ClubsComponent(mainService) {
        this.mainService = mainService;
    }
    ClubsComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    ClubsComponent.prototype.getClubs = function () {
        var _this = this;
        this.mainService.getClubs().subscribe(function (d) { _this.clubs = d.data; _this.mainService.loading = false; }, function (e) { console.log(e); _this.mainService.loading = false; });
    };
    return ClubsComponent;
}());
ClubsComponent = __decorate([
    core_1.Component({
        selector: 'clubs-cmp ',
        template: __webpack_require__(184),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ClubsComponent);
exports.ClubsComponent = ClubsComponent;
var _a;
//# sourceMappingURL=clubs.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var MeetingsComponent = (function () {
    function MeetingsComponent() {
    }
    MeetingsComponent.prototype.ngOnInit = function () {
    };
    return MeetingsComponent;
}());
MeetingsComponent = __decorate([
    core_1.Component({
        selector: ' meetings-cmp ',
        template: __webpack_require__(185)
    })
], MeetingsComponent);
exports.MeetingsComponent = MeetingsComponent;
//# sourceMappingURL=meetings.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var PeopleComponent = (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    core_1.Component({
        selector: ' people-cmp ',
        template: __webpack_require__(186)
    })
], PeopleComponent);
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-cmp',
        template: __webpack_require__(187)
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(9);
var platform_browser_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(97);
var footer_module_1 = __webpack_require__(64);
var sidebar_module_1 = __webpack_require__(67);
var navbar_module_1 = __webpack_require__(65);
var dashboard_routes_1 = __webpack_require__(108);
var profile_component_1 = __webpack_require__(63);
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
            sidebar_module_1.SidebarModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            forms_1.FormsModule
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS, profile_component_1.ProfileComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { DashboardComponent } from './dashboard.component';
var home_component_1 = __webpack_require__(111);
var clubs_component_1 = __webpack_require__(103);
var meetings_component_1 = __webpack_require__(104);
var people_component_1 = __webpack_require__(105);
var setups_component_1 = __webpack_require__(114);
var forums_component_1 = __webpack_require__(110);
var blogs_component_1 = __webpack_require__(109);
var articles_component_1 = __webpack_require__(112);
var videos_component_1 = __webpack_require__(113);
var login_component_1 = __webpack_require__(115);
var register_component_1 = __webpack_require__(116);
var profile_component_1 = __webpack_require__(63);
var club_component_1 = __webpack_require__(102);
var add_club_component_1 = __webpack_require__(101);
//
exports.MODULE_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'connect/clubs', component: clubs_component_1.ClubsComponent },
    { path: 'connect/meetings', component: meetings_component_1.MeetingsComponent },
    { path: 'connect/people', component: people_component_1.PeopleComponent },
    { path: 'setups', component: setups_component_1.SetupsComponent },
    { path: 'discuss/forums', component: forums_component_1.ForumsComponent },
    { path: 'discuss/blogs', component: blogs_component_1.BlogsComponent },
    { path: 'learn/articles', component: articles_component_1.ArticlesComponent },
    { path: 'learn/videos', component: videos_component_1.VideosComponent },
    { path: 'users/login', component: login_component_1.LoginComponent },
    { path: 'users/register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: '**', redirectTo: 'home' },
];
//
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    clubs_component_1.ClubsComponent,
    club_component_1.ClubComponent,
    add_club_component_1.AddClubComponent,
    meetings_component_1.MeetingsComponent,
    people_component_1.PeopleComponent,
    setups_component_1.SetupsComponent,
    forums_component_1.ForumsComponent,
    blogs_component_1.BlogsComponent,
    articles_component_1.ArticlesComponent,
    videos_component_1.VideosComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    profile_component_1.ProfileComponent,
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BlogsComponent = (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    return BlogsComponent;
}());
BlogsComponent = __decorate([
    core_1.Component({
        selector: ' blogs-cmp ',
        template: __webpack_require__(188)
    })
], BlogsComponent);
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ForumsComponent = (function () {
    function ForumsComponent() {
    }
    ForumsComponent.prototype.ngOnInit = function () {
    };
    return ForumsComponent;
}());
ForumsComponent = __decorate([
    core_1.Component({
        selector: ' forums-cmp ',
        template: __webpack_require__(189)
    })
], ForumsComponent);
exports.ForumsComponent = ForumsComponent;
//# sourceMappingURL=forums.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var main_service_1 = __webpack_require__(10);
var HomeComponent = (function () {
    function HomeComponent(mainService) {
        this.mainService = mainService;
        this.userLoggedIn = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: ' home-cmp ',
        template: __webpack_require__(190)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ArticlesComponent = (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    core_1.Component({
        selector: ' articles-cmp ',
        template: __webpack_require__(191)
    })
], ArticlesComponent);
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var VideosComponent = (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    return VideosComponent;
}());
VideosComponent = __decorate([
    core_1.Component({
        selector: ' videos-cmp ',
        template: __webpack_require__(192)
    })
], VideosComponent);
exports.VideosComponent = VideosComponent;
//# sourceMappingURL=videos.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var SetupsComponent = (function () {
    function SetupsComponent() {
    }
    SetupsComponent.prototype.ngOnInit = function () {
    };
    return SetupsComponent;
}());
SetupsComponent = __decorate([
    core_1.Component({
        selector: ' setups-cmp ',
        template: __webpack_require__(193)
    })
], SetupsComponent);
exports.SetupsComponent = SetupsComponent;
//# sourceMappingURL=setups.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(9);
var main_service_1 = __webpack_require__(10);
var LoginComponent = (function () {
    function LoginComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.loginFaildMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFaildMsg = '';
        var page = $('.full-page');
        var image_src = page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            page.append(image_container);
        }
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.mainService.login(this.username.nativeElement.value, this.password.nativeElement.value).subscribe(function (d) {
            if (d.data.token) {
                _this.mainService.loading = false;
                localStorage.setItem('username', _this.username.nativeElement.value);
                localStorage.setItem('liarsclubtoken', d.data.token);
                _this.loginFaildMsg = '';
                _this.router.navigate(['/home']);
            }
            else {
                _this.mainService.loading = false;
                _this.loginFaildMsg = d.data;
            }
        }, function (e) { console.log(e); });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('username'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "username", void 0);
__decorate([
    core_1.ViewChild('password'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__(194),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(9);
var main_service_1 = __webpack_require__(10);
var RegisterComponent = (function () {
    function RegisterComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var page = $('.full-page');
        var image_src = page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            page.append(image_container);
        }
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.errmsg = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.mainService.register(this.username.nativeElement.value, this.email.nativeElement.value, this.password.nativeElement.value).subscribe(function (d) {
            if (d.type) {
                _this.router.navigate(['/users/login']);
            }
            else {
                console.log(d.errmsg);
                _this.errmsg = d.errmsg;
            }
        }, function (e) {
            console.log(e);
        });
    };
    return RegisterComponent;
}());
__decorate([
    core_1.ViewChild('username'),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "username", void 0);
__decorate([
    core_1.ViewChild('email'),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild('password'),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "password", void 0);
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__(196),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer-cmp',
        template: __webpack_require__(197)
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var sidebar_routes_config_1 = __webpack_require__(66);
var sidebar_metadata_1 = __webpack_require__(36);
var common_1 = __webpack_require__(8);
var NavbarComponent = (function () {
    function NavbarComponent(location) {
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle.menuType !== sidebar_metadata_1.MenuType.BRAND; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar-cmp',
        template: __webpack_require__(198)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var sidebar_routes_config_1 = __webpack_require__(66);
var sidebar_metadata_1 = __webpack_require__(36);
var router_1 = __webpack_require__(9);
var main_service_1 = __webpack_require__(10);
var SidebarComponent = (function () {
    function SidebarComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = sidebar_routes_config_1.ROUTES.filter(function (menuItem) { return menuItem.menuType !== sidebar_metadata_1.MenuType.BRAND; });
    };
    SidebarComponent.prototype.logout = function (evt) {
        var _this = this;
        evt.preventDefault();
        this.mainService.logout().subscribe(function (d) {
            _this.mainService.loading = false;
            localStorage.setItem('username', '');
            localStorage.setItem('liarsclubtoken', '');
            _this.router.navigate(['/users/login']);
        }, function (e) {
            _this.mainService.loading = false;
            console.log(e);
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'sidebar-cmp',
        template: __webpack_require__(199),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".sidebar-background {\n  display: none;\n}\n\n.sidebar {\n  background-color: #224e54;\n}\n\nloading-gif {\n  position: fixed;\n  top: 75px;\n  left: 0;\n  background: rgba(210, 255, 255, 0.2);\n  z-index: 1000;\n  width: 100%;\n  height: 10000px;\n}\n\n.loading-gif img {\n  position: fixed;\n  width: 150px;\n  height: 150px;\n  left: calc(50% - 75px);\n  top: calc(50% - 75px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".panel .panel-body {\n  padding: 10px 0px;\n}\n\n.panel .panel-body .checkbox {\n  margin-top: 0px;\n}\n\n.repeat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.row {\n  padding: 0 20px;\n}\n\n.m-t-m-15 {\n  margin-top: -15px;\n}\n\n.m-t-m-10 {\n  margin-top: -10px;\n}\n\n.m-l-15 {\n  margin-left: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".card .card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px 40px;\n}\n\n.card .card-content > span {\n  width: calc(100% - 50px);\n  padding: 0 30px;\n}\n\n.card .card-content > span .club-title {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.card .card-content > span > span {\n  display: block;\n}\n\n.hover {\n  cursor: pointer;\n}\n\n.editDiag {\n  position: fixed;\n  left: calc(50% - 300px);\n  top: calc(50% - 200px);\n  width: 500px;\n  z-index: 101;\n}\n\n.editDiag > .card-content {\n  display: block;\n}\n\n.transparent-panel {\n  width: 100%;\n  height: 100%;\n  background: rgba(250, 0, 0, 0.1);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  z-index: 100;\n}\n\n.select-member {\n  margin-top: 30px;\n  height: 90px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "form > .card > .card-content > .row {\n  padding: 0 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".errmsg {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" *ngIf=\"!isUsers\" data-active-color=\"white\" data-background-color=\"red\">\n    <!-- <div class=\"sidebar\" data-color=\"red\" data-image=\"\"> -->\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg);\"></div>\n    </div>\n    <div class=\"{{!isUsers ? 'main-panel' : ''}}\">\n        <navbar-cmp class=\"{{!isUsers ? '' : 'hidden'}}\"></navbar-cmp>\n        <dashboard-cmp></dashboard-cmp>\n        <div *ngIf=\"!isMap()\" class=\"{{!isUsers ? '' : 'hidden'}}\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <legend>Add a Club</legend>\n  </div>\n  <div class=\"card-content\">\n    <form (submit)=\"addClub($event)\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Club Name</label>\n            <input class=\"form-control\" required #clubName />\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Club Address</label>\n            <input class=\"form-control\" required #clubAddress />\n          </div>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n          <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n            <div class=\"fileinput-new thumbnail\">\n              <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" #clubImg>\n            </div>\n            <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n            <div>\n              <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n                  <span class=\"fileinput-new\">Select image</span>\n                  <span class=\"fileinput-exists\">Change</span>\n                  <input type=\"file\" name=\"...\" />\n              </span>\n              <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists btn-sm\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div id=\"regularMap\" class=\"map\"></div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                <h4 class=\"panel-title\">\n                  Meets up...\n                  <i class=\"material-icons\">keyboard_arrow_down</i>\n                </h4>\n              </a>\n            </div>\n            <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                    <label>\n                      <input type=\"checkbox\" #irregulary>  Irregularly\n                    </label>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                    <label>\n                      <input type=\"checkbox\" #regularly>  Regularly\n                    </label>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">Every</label>\n                  <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 m-t-m-15\">\n                    <input type=\"number\" min=\"1\" class=\"form-control\" value=\"1\" #repeatPeriod required>\n                  </div>\n                  <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-6 m-t-m-10\">\n                    <select class=\"selectpicker\" data-style=\"select-with-transition\" required #repeatType>\n                      <option>weeks</option>\n                      <option>months</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">On</label>\n                  <div class=\"col-lg-10\">\n                    <select class=\"selectpicker\" multiple data-style=\"select-with-transition\" required #dayOfWeek>\n                      <option>Sunday</option>\n                      <option>Monday</option>\n                      <option>Tuesday</option>\n                      <option>Wednesday</option>\n                      <option>Thursday</option>\n                      <option>Friday</option>\n                      <option>Saturday</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">At</label>\n                  <div class=\"col-md-10 m-t-m-15\">\n                    <input type=\"text\"class=\"form-control timepicker\" #time>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Physical Location</label>\n          <input class=\"form-control\" (change)=\"locationChange($event)\" required #phsicalLocation />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Email address</label>\n          <input class=\"form-control\" type=\"email\" required #email />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Link to website</label>\n          <input class=\"form-control\" #websiteLink />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Link to Facebook page</label>\n          <input class=\"form-control\" required #facebookLink />\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-fill btn-rose pull-right\" >Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <i class=\"material-icons\">perm_contact_calendar</i>\n    <span>\n        <span class=\"club-title\">{{club.title}}</span>\n        <span class=\"club-desciption\">{{club.dayOfWeek}}s at {{club.time}}, {{club.activeMembers}} members</span>\n    </span>\n    <i class=\"material-icons hover\" (click)=\"editClick()\">info</i>\n  </div>\n</div>\n\n<div class=\"transparent-panel\" *ngIf=\"showDiag\" (click)=\"cancel()\">\n</div>\n\n\n<div class=' {{ showDiag ? \"card editDiag\" : \"card editDiag hidden\" }} '>\n  <div class=\"card-content\">\n    <h2>{{club.title}}</h2>\n    <p>{{club.location}}</p>\n    <p>{{club.activeMembers}} active members, {{club.pastMembers}} past members</p>\n    <p>Meets on {{club.dayOfWeek}}s at {{club.time}}</p>\n    <div class=\"select-member\">\n      <p>I am a ...</p>\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\">\n          <option value=\"active\">Active</option>\n          <option value=\"past\">Past</option>\n        </select>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\">\n          <option value=\"member\">Member</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-success pull-right\" (click)=\"confirm()\">Tag myself with this club</button>\n  </div>\n</div>\n"

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n            <app-club *ngFor=\"let club of clubs\" [club] = \"club\" ></app-club>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n            <app-add-club (clubAdded)=\"getClubs()\"></app-add-club>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" *ngIf=\"userLoggedIn\">\n            <div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <ul class=\"nav nav-pills nav-pills-icons nav-pills-rose nav-stacked\" role=\"tablist\">\n                                    <li class=\"active\">\n                                        <a href=\"#dashboard-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">dashboard</i> Updates\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#schedule-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">schedule</i> Social\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-md-10\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active\" id=\"dashboard-2\">\n                                        <div>\n                                            <i class=\"material-icons btn-lg\">event</i>\n                                            <span>The Stanford Liars Club is meeting on <strong>Sunday at 8pm</strong></span>\n                                        </div>\n                                        <div>\n                                            <i class=\"material-icons btn-lg\">receipt</i>\n                                            <span><strong>activatedalien</strong> has uploaded a new article, <strong>\"Ax Endgames\"</strong></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"schedule-2\">\n                                        <div>\n                                            <i class=\"material-icons\">straighten</i>\n                                            <span><strong>2 meetings</strong> near you this week</span>\n                                        </div>\n                                        <button class=\"btn btn-success btn-large\"> Review Your Games </button>\n                                        <button class=\"btn btn-success btn-large\"> Manage Your Groups </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"userLoggedIn\">\n            <div class=\"col-md-7 col-lg-7 col-xs-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <img src=\"../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\" alt=\"\" >\n                                <h4>Main Article</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content col-lg-6 col-md-6 col-sm-12 col-xs-6\">\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <img src=\"../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                                <h4>Article 1</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content col-lg-6 col-md-6 col-sm-12 col-xs-6\">\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <img src=\"/../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                                <h4>Article 2</h4>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5 col-lg-5 col-xs-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <img src=\"../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                        <h4>Main Forum/Blog Post</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"coming-soon\" *ngIf=\"!userLoggedIn\">\n            <h1>Signup Form here, coming soon</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/#/home\">Liars Club</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"/#/home\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"/#/users/register\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\" active \">\n          <a href=\"/#/users/login\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../assets/img/login.jpeg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n            <div class=\"card card-login card-hidden\">\n              <div class=\"card-header text-center\" data-background-color=\"rose\">\n                <h4 class=\"card-title\">Login</h4>\n              </div>\n              <p class=\"category text-center\" *ngIf=\"loginFaildMsg\">\n                {{loginFaildMsg}}\n              </p>\n              <div class=\"card-content\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">face</i>\n                  </span>\n                  <div class=\"form-group label-floating\">\n                    <label class=\"control-label\">Username</label>\n                    <input type=\"text\" class=\"form-control\" #username>\n                  </div>\n                </div>\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">lock_outline</i>\n                  </span>\n                  <div class=\"form-group label-floating\">\n                    <label class=\"control-label\">Password</label>\n                    <input type=\"password\" class=\"form-control\" #password>\n                  </div>\n                </div>\n              </div>\n              <div class=\"footer text-center\">\n                <button (click)=\"login()\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Login</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2\">\n      <form (submit)=\"saveProfile()\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <h3 class=\"text-center\">My Profile</h3>\n            </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">First Name</label>\n                  <input class=\"form-control\" required [(ngModel)]=\"firstName\" name=\"firstName\"/>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Last Name</label>\n                  <input class=\"form-control\" required [(ngModel)]=\"lastName\" name=\"lastName\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email address</label>\n                  <input class=\"form-control\" type=\"email\" required [(ngModel)]=\"email\" name=\"email\" />\n                </div>\n              </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"orgFirstname == firstName && orgLastname == lastName && orgEmail == email\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/#/home\">Liars Club</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"/#/home\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"active\">\n          <a href=\"/#/users/register\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"/#/users/login\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"../assets/img/register.jpeg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div class=\"card card-signup card-hidden\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"row text-center\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <div class=\"card-content\">\n                  <div>\n                    <span *ngIf=\"errmsg\" class=\"errmsg\">{{errmsg}}</span>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username...\" #username>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">email</i>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" #email>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                    <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" #password/>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                      <a>terms and conditions</a>.\n                    </label>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button class=\"btn btn-primary btn-round\" (click)=\"register()\" >Register</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}\n            <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n            </button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a href=\"#\">Mike John responded to your email</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">You have 5 new tasks</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">You're now friend with Andrew</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Another Notification</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Another One</a>\n                        </li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-search is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i>\n                    <div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav>\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"logo\">\n            <div class=\"logo-normal\">\n                <a href=\"\" class=\"simple-text\">\n                    Liars Club\n                </a>\n            </div>\n\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\n            </div>\n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                    <img src=\"../assets/img/faces/avatar.jpg\" />\n                </div>\n                <div class=\"info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            Tania Andrew\n                            <b class=\"caret\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\">\n                        <ul class=\"nav\">\n                            <li>\n                              <a [routerLink]=\"[menuItems[9].path]\">\n                                    <span class=\"sidebar-mini\">MP</span>\n                                    <span class=\"sidebar-normal\">My Profile</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"\" (click)=\"logout($event)\">\n                                    <span class=\"sidebar-mini\">L</span>\n                                    <span class=\"sidebar-normal\">Logout</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"nav-container\">\n                <ul class=\"nav\">\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[0].path]\">\n                            <i class=\"{{menuItems[0].icon}}\">dashboard</i>\n                            <p>{{menuItems[0].title}}</p>\n                        </a>\n                    </li>\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#componentsExamples\">\n                            <i class=\"material-icons\">apps</i>\n                            <p>Connect\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"componentsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[1].path]\">\n                                        <span class=\"sidebar-mini\">B</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[1].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[2].path]\">\n\n                                        <span class=\"sidebar-mini\">GS</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[2].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[3].path]\">\n                                        <span class=\"sidebar-mini\">P</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[3].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[4].path]\">\n                            <i class=\"{{menuItems[4].icon}}\">dashboard</i>\n                            <p>{{menuItems[4].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#formsExamples\">\n                            <i class=\"material-icons\">content_paste</i>\n                            <p>Discuss\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"formsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[5].path]\">\n                                        <span class=\"sidebar-mini\">RF</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[5].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[6].path]\">\n                                        <span class=\"sidebar-mini\">EF</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[6].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#tablesExamples\">\n                            <i class=\"material-icons\">grid_on</i>\n                            <p>Learn\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"tablesExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[7].path]\">\n                                        <span class=\"sidebar-mini\">RT</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[7].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[8].path]\">\n                                        <span class=\"sidebar-mini\">ET</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[8].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                </ul>\n            </div>\n\n        </div>\n"

/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {

    module.exports = function initDatetimepickers(){
            $('.datetimepicker').datetimepicker({
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove',
                    inline: true
                }
             });

             $('.datepicker').datetimepicker({
                format: 'MM/DD/YYYY',
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove',
                    inline: true
                }
             });

             $('.timepicker').datetimepicker({
    //          format: 'H:mm',    // use this format if you want the 24hours timepicker
                format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove',
                    inline: true

                }
             });
    }
}


/***/ }),
/* 230 */,
/* 231 */,
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ })
],[232]);
//# sourceMappingURL=main.bundle.js.map