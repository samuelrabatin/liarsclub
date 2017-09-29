webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar-background {\n  display: none;\n}\n\n.sidebar {\n  background-color: #224e54;\n}\n\nloading-gif {\n  position: fixed;\n  top: 75px;\n  left: 0;\n  background: rgba(210, 255, 255, 0.2);\n  z-index: 1000;\n  width: 100%;\n  height: 10000px;\n}\n\n.loading-gif img {\n  position: fixed;\n  width: 150px;\n  height: 150px;\n  left: calc(50% - 75px);\n  top: calc(50% - 75px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div class=\"sidebar\" *ngIf=\"!isUsers\" data-active-color=\"white\" data-background-color=\"red\">\n  <!-- <div class=\"sidebar\" data-color=\"red\" data-image=\"\"> -->\n    <sidebar-cmp></sidebar-cmp>\n    <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg);\"></div>\n  </div>\n  <div class=\"{{!isUsers ? 'main-panel' : ''}}\">\n    <navbar-cmp></navbar-cmp>\n    <dashboard-cmp></dashboard-cmp>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var AppComponent = (function () {
    function AppComponent(location, mainService, router, socketService) {
        var _this = this;
        this.mainService = mainService;
        this.router = router;
        this.socketService = socketService;
        this.isUsers = true;
        this.location = location;
        router.events.subscribe(function (val) {
            _this.isUsers = val.url.includes('/users/');
            if (val instanceof router_1.NavigationStart) {
                _this.mainService.validateUsertoken().subscribe(function (d) {
                    if (d.type === false && !_this.isUsers) {
                        _this.router.navigate(['/users/login']);
                    }
                    else {
                        _this.mainService.userRole = d.role;
                        _this.mainService.userId = d.id;
                        _this.socketService.sendMessage('userid', d.id);
                        _this.mainService.username = d.name;
                    }
                    _this.mainService.loading = false;
                }, function (e) {
                    _this.mainService.loading = false;
                    console.log(e);
                    if (!_this.isUsers) {
                        _this.router.navigate(['/users/login']);
                    }
                });
            }
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
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _d || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var ng2_auto_complete_1 = __webpack_require__("../../../../ng2-auto-complete/dist/index.js");
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var dashboard_module_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
var footer_module_1 = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
var sidebar_module_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
var navbar_module_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var topics_service_1 = __webpack_require__("../../../../../src/app/services/topics.service.ts");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
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
            http_1.HttpModule,
            ng2_auto_complete_1.Ng2AutoCompleteModule
        ],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            main_service_1.MainService,
            topics_service_1.TopicsService,
            posts_service_1.PostsService,
            storage_service_1.StorageService,
            articles_service_1.ArticlesService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>What is a Liars Club</h2>\n        </div>\n        <div class=\"card-content\">\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>What is Mafia</h2>\n        </div>\n        <div class=\"card-content\">\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>How should I use this website</h2>\n        </div>\n        <div class=\"card-content\">\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/about/about.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/dashboard/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-article-diag {\n  background: rgba(255, 0, 0, 0.1);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1111;\n}\n\n.add-article-diag > div {\n  padding: 80px;\n}\n\n.setting .card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card setting\">\n      <div class=\"card-header\">\n        <h3>Setting</h3>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"form-group\">\n          <label class=\"control-label\">Article Counts on Home Page</label>\n          <input class=\"form-control text-right\" type=\"number\" [(ngModel)]=\"setting.setting.count\" />\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success btn-sm pull-right\" (click)=\"saveSetting()\" [disabled]=\"orgSetting.count == setting.setting.count\">Save Setting</button>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>{{articles.length}} articles\n        <a class=\"btn btn-success btn-sm pull-right\" (click)=\"showAddDiag()\">New Article</a>\n        </h3>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\"text-primary\">\n              <tr>\n                <th>Created Date</th>\n                <th>Created User</th>\n                <th class=\"text-center\">Title</th>\n                <th class=\"text-center\">Text</th>\n                <th class=\"text-center\">Priority</th>\n                <th class=\"text-center\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let article of articles; let idx = index\" [draggable]=\"true\" (dragstart)=\"dragStart(idx)\" (dragenter)=\"dragEnter(idx)\" (dragend)=\"dragEnd(idx)\">\n                <td>{{ mainService.getDateTimeString(article.createdDate) }}</td>\n                <td>{{ mainService.userNames[article.createdUserId] }}</td>\n                <td class=\"text-center\">{{ article.title.length > 50 ? article.title.substr(0, 50) + '...' : article.title }}</td>\n                <td class=\"text-center\">{{ article.text.length > 50 ? article.text.substr(0, 50) + '...' : article.text }}</td>\n                <td><input class=\"form-control text-center\" type=\"number\" [value]=\"idx+1\" (change)=\"orderChange(idx, $event)\"></td>\n                <td class=\"text-center\">\n                  <a class=\"btn btn-warning btn-xs\" [routerLink]=\"['edit', article._id]\"><i class=\"material-icons\">edit</i>Edit</a>\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"removeArticle(idx)\"><i class=\"material-icons\">delete</i>Remove</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"isAdd\" class=\"add-article-diag\">\n  <div>\n    <app-add-article (add)=\"addArticle($event)\" (close)=\"isAdd = false\"></app-add-article>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var ManageArticlesComponent = (function () {
    function ManageArticlesComponent(mainService, articleService, router) {
        this.mainService = mainService;
        this.articleService = articleService;
        this.router = router;
        this.articles = [];
        this.tmpArticles = [];
        this.defaultOrders = [];
        this.isAdd = false;
        this.setting = {
            _id: '',
            type: 'article',
            setting: {
                count: 5
            }
        };
        this.orgSetting = {
            count: 0
        };
    }
    ManageArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
        this.getArticleSetting();
    };
    ManageArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles().subscribe(function (d) {
            if (d.type) {
                _this.articles = d.data;
                _this.tmpArticles = _this.articles.slice();
                _this.defaultOrders = _this.articles.map(function (val, idx) { return val.order; });
            }
            else {
                console.log(d.msg);
            }
        }, function (e) {
            console.log(e);
        });
    };
    ManageArticlesComponent.prototype.getArticleSetting = function () {
        var _this = this;
        this.articleService.getSettings().subscribe(function (d) {
            if (d.type) {
                _this.setting = d.setting;
                _this.orgSetting.count = d.setting.setting.count;
            }
        }, function (e) {
            console.log(e);
        });
    };
    ManageArticlesComponent.prototype.addArticle = function (article) {
        var _this = this;
        this.articleService.addArticle(article).subscribe(function (d) {
            _this.getArticles();
            _this.isAdd = false;
        }, function (e) {
            console.log(e);
            _this.isAdd = false;
        });
    };
    ManageArticlesComponent.prototype.removeArticle = function (idx) {
        var _this = this;
        this.articleService.removeArticleById(this.articles[idx]._id).subscribe(function (d) {
            _this.getArticles();
        }, function (e) {
            console.log(e);
        });
    };
    ManageArticlesComponent.prototype.saveSetting = function () {
        var _this = this;
        this.articleService.setSettings(this.setting).subscribe(function (d) {
            if (d.type) {
                _this.getArticleSetting();
            }
        }, function (e) {
            console.log(e);
        });
    };
    ManageArticlesComponent.prototype.showAddDiag = function () {
        this.isAdd = true;
    };
    ManageArticlesComponent.prototype.dragStart = function (idx) {
        this.dragStartIdx = idx;
    };
    ManageArticlesComponent.prototype.dragEnter = function (idx) {
        this.curDragIdx = idx;
        if (this.prevDragidx !== this.curDragIdx) {
            this.articles = this.tmpArticles.slice();
            this.articles.splice(this.dragStartIdx, 1);
            this.articles.splice(this.curDragIdx, 0, this.tmpArticles[this.dragStartIdx]);
            this.prevDragidx = this.curDragIdx;
        }
    };
    ManageArticlesComponent.prototype.dragEnd = function (idx) {
        for (var i = 0; i < this.articles.length; i++) {
            this.articles[i].order = this.defaultOrders[i];
        }
        this.tmpArticles = this.articles.slice();
        var start = this.getMin(this.dragStartIdx, this.curDragIdx);
        var end = this.getMax(this.dragStartIdx, this.curDragIdx);
        this.saveOrders(start, end);
    };
    ManageArticlesComponent.prototype.saveOrders = function (start, end) {
        for (var i = start; i <= end; i++) {
            this.articleService.updateArticle(this.articles[i]).subscribe();
        }
    };
    ManageArticlesComponent.prototype.orderChange = function (idx, evt) {
        if (idx + 1 !== Number.parseInt(evt.target.value)) {
            var start = idx;
            var end = Number.parseInt(evt.target.value) > this.articles.length ? this.articles.length : Number.parseInt(evt.target.value) - 1;
            this.articles = this.tmpArticles.slice();
            this.articles.splice(start, 1);
            this.articles.splice(end, 0, this.tmpArticles[start]);
            for (var i = 0; i < this.articles.length; i++) {
                this.articles[i].order = this.defaultOrders[i];
            }
            this.tmpArticles = this.articles.slice();
            this.saveOrders(this.getMin(start, end), this.getMax(start, end));
        }
    };
    ManageArticlesComponent.prototype.getMin = function (a, b) {
        return a > b ? b : a;
    };
    ManageArticlesComponent.prototype.getMax = function (a, b) {
        return a < b ? b : a;
    };
    return ManageArticlesComponent;
}());
ManageArticlesComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-articles',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ManageArticlesComponent);
exports.ManageArticlesComponent = ManageArticlesComponent;
var _a, _b, _c;
//# sourceMappingURL=manage-articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-clubs/club-detail-line/club-detail-line.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-clubs/club-detail-line/club-detail-line.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-clubs/club-detail-line/club-detail-line.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ClubDetailLineComponent = (function () {
    function ClubDetailLineComponent() {
    }
    ClubDetailLineComponent.prototype.ngOnInit = function () {
    };
    return ClubDetailLineComponent;
}());
__decorate([
    core_1.Input('club'),
    __metadata("design:type", Object)
], ClubDetailLineComponent.prototype, "club", void 0);
ClubDetailLineComponent = __decorate([
    core_1.Component({
        selector: 'app-club-detail-line',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-clubs/club-detail-line/club-detail-line.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-clubs/club-detail-line/club-detail-line.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClubDetailLineComponent);
exports.ClubDetailLineComponent = ClubDetailLineComponent;
//# sourceMappingURL=club-detail-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-clubs/manage-clubs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-clubs/manage-clubs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <td class=\"text-left\">Title</td>\n                  <td class=\"text-left\">Created User</td>\n                  <td class=\"text-left\">Created Date</td>\n                  <td class=\"text-center\">Location</td>\n                  <td class=\"text-center\">Address</td>\n                  <td class=\"text-center\">Members</td>\n                  <td class=\"text-center\">Actions</td>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let club of clubs; let idx = index;\">\n                  <td class=\"text-left\"><a [routerLink]=\"['/connect/clubs/club/' + club._id]\">{{club.title}}</a></td>\n                  <td class=\"text-left\">{{mainService.userNames[club.userId]}}</td>\n                  <td class=\"text-left\">{{mainService.getDateString(club.created)}}</td>\n                  <td class=\"text-center\">{{club.location}}</td>\n                  <td class=\"text-center\">{{club.address}}</td>\n                  <td class=\"text-center\"><a [routerLink]=\"['userslist/' + club._id]\">{{club.pastMembers + club.activeMembers}} {{waitingMsg(club)}}</a></td>\n                  <td class=\"text-center\">\n                    <button class=\"btn btn-success btn-xs\" *ngIf=\"!club.confirmed\" (click)=\"approveClub(club._id)\">\n                      <i class=\"material-icons\">check</i>\n                      Approve\n                    </button>\n                    <button class=\"btn btn-warning btn-xs\" *ngIf=\"club.confirmed\" (click)=\"rejectClub(club._id)\">\n                      <i class=\"material-icons\">close</i>\n                      Reject\n                    </button>\n                    <button class=\"btn btn-danger btn-xs\" (click)=\"deleteClub(club._id)\">\n                      <i class=\"material-icons\">delete</i>\n                      Delete\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-clubs/manage-clubs.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ManageClubsComponent = (function () {
    function ManageClubsComponent(mainService) {
        this.mainService = mainService;
        this.clubs = [];
    }
    ManageClubsComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    ManageClubsComponent.prototype.getClubs = function () {
        var _this = this;
        this.mainService.getClubs().subscribe(function (d) {
            _this.clubs = d.data;
            _this.mainService.loading = false;
        }, function (e) { console.log(e); _this.mainService.loading = false; });
    };
    ManageClubsComponent.prototype.generateLines = function () {
    };
    ManageClubsComponent.prototype.approveClub = function (clubId) {
        var _this = this;
        this.mainService.approveClub(clubId).subscribe(function (d) {
            if (d.type) {
                _this.getClubs();
            }
        }, function (e) {
            console.log(e);
        });
    };
    ManageClubsComponent.prototype.rejectClub = function (clubId) {
        var _this = this;
        this.mainService.rejectClub(clubId).subscribe(function (d) {
            if (d.type) {
                _this.getClubs();
            }
        }, function (e) {
            console.log(e);
        });
    };
    ManageClubsComponent.prototype.deleteClub = function (clubId) {
        var _this = this;
        this.mainService.removeClub(clubId).subscribe(function (d) {
            if (d.type) {
                _this.getClubs();
            }
        }, function (e) {
            console.log(e);
        });
    };
    ManageClubsComponent.prototype.waitingMsg = function (club) {
        if (club.tagWaitingMembers === 1) {
            return '(one is waiting for approval)';
        }
        else if (club.tagWaitingMembers > 1) {
            return "(" + club.tagWaitingMembers + " are waiting for approval)";
        }
        else {
            return '';
        }
    };
    return ManageClubsComponent;
}());
ManageClubsComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-clubs',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-clubs/manage-clubs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-clubs/manage-clubs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ManageClubsComponent);
exports.ManageClubsComponent = ManageClubsComponent;
var _a;
//# sourceMappingURL=manage-clubs.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/forums-list/forums-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/forums-list/forums-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-content tabledata\">\n      <table class=\"table\">\n        <thead class=\"text-primary\">\n        <tr>\n          <th class=\"text-left hidden\">ID</th>\n          <th class=\"text-left\">Title</th>\n          <th class=\"text-left\">Description</th>\n          <th class=\"text-center\">Created User</th>\n          <th class=\"text-center\">Created Date</th>\n          <th class=\"text-center\">Topics</th>\n          <th class=\"text-center\">Posts</th>\n          <th class=\"text-center\">Last Replied</th>\n          <th class=\"text-center\">Action</th>\n          <th class=\"text-center\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"false\">\n          <td class=\"hidden\"></td>\n          <td><input class=\"form-control\" [(ngModel)]=\"newTitle\" /></td>\n          <td colspan=\"4\"><input class=\"form-control\" [(ngModel)]=\"newDescription\" /></td>\n          <td></td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-success btn-xs\" (click)=\"addNewForum()\">\n              <i class=\"material-icons\">add_circle</i>\n              Add New Forum\n            </button>\n          </td>\n        </tr>\n        <tr *ngFor=\"let forum of forums; let idx = index\" [draggable]=\"true\" (dragstart)=\"forumDragStart(idx)\" (dragend)=\"forumDragEnd(idx)\" (dragenter)=\"forumDragEnter(idx)\">\n          <td class=\"text-left hidden\">{{idx + 1}}</td>\n          <td class=\"text-left\"><a (click)=\"gotoTopic(idx)\">{{forum.title}}</a></td>\n          <td class=\"text-left\">{{forum.description.length > 50 ? forum.description.substr(0, 50) : forum.description}}</td>\n          <td class=\"text-center\">{{storageService.userNames[forum.createdUserId]}}</td>\n          <td class=\"text-center\">{{mainService.getDateString(forum.createdDate)}}</td>\n          <td class=\"text-center\"><a (click)=\"gotoTopic(idx)\">{{forum.topics}}</a></td>\n          <td class=\"text-center\">{{forum.posts}}</td>\n          <td class=\"text-center\">{{mainService.getDateTimeString(forum.lastreplied)}}</td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-success btn-xs\" *ngIf=\"!forum.confirmed\" (click)=\"activate(forum._id, idx)\">\n              <i class=\"material-icons\">check</i>\n              Approve\n            </button>\n            <button class=\"btn btn-warning btn-xs\" *ngIf=\"forum.confirmed\" (click)=\"deactivate(forum._id, idx)\">\n              <i class=\"material-icons\">close</i>\n              Reject\n            </button>\n            <button class=\"btn btn-danger btn-xs\" (click)=\"delete(forum._id, idx)\">\n              <i class=\"material-icons\">delete</i>\n              Delete\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/forums-list/forums-list.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var ForumsListComponent = (function () {
    function ForumsListComponent(mainService, storageService) {
        this.mainService = mainService;
        this.storageService = storageService;
        this.tmpForums = [];
        this.gotoTopicEvent = new core_1.EventEmitter();
    }
    ForumsListComponent.prototype.ngOnInit = function () {
        this.getForumData();
    };
    ForumsListComponent.prototype.getForumData = function () {
        var _this = this;
        this.mainService.getAllForums().subscribe(function (d) {
            _this.forums = d;
            _this.forumSelectOptions = d.map(function (val, idx) {
                return { id: val._id, name: val.title };
            });
        }, function (e) {
            console.log(e);
        });
    };
    ForumsListComponent.prototype.activate = function (id, idx) {
        var _this = this;
        this.mainService.activateForum(id).subscribe(function (d) {
            if (d.type === 'true') {
                _this.forums[idx].confirmed = true;
            }
        }, function (e) {
            console.log(e);
        });
    };
    ForumsListComponent.prototype.deactivate = function (id, idx) {
        var _this = this;
        this.mainService.deactivateForum(id).subscribe(function (d) {
            if (d.type === 'true') {
                _this.forums[idx].confirmed = false;
            }
        }, function (e) {
            console.log(e);
        });
    };
    ForumsListComponent.prototype.delete = function (id, idx) {
        var _this = this;
        this.mainService.deleteForum(id).subscribe(function (d) {
            if (d.type === 'true') {
                _this.forums.splice(idx, 1);
            }
        }, function (e) {
            console.log(e);
        });
    };
    ForumsListComponent.prototype.forumAdded = function () {
        this.getForumData();
    };
    ForumsListComponent.prototype.addNewForum = function () {
        var _this = this;
        this.mainService.addForum({ title: this.newTitle, description: this.newDescription }).subscribe(function (d) {
            _this.newTitle = '';
            _this.newDescription = '';
            _this.forumAdded();
        }, function (e) {
            console.log(e);
        });
    };
    ForumsListComponent.prototype.gotoTopic = function (idx) {
        this.gotoTopicEvent.emit(idx);
    };
    ForumsListComponent.prototype.forumDragStart = function (idx) {
        this.tmpForums = this.forums.slice();
        this.curDragStart = idx;
        this.curDragIndex = idx;
    };
    ForumsListComponent.prototype.forumDragEnd = function (idx) {
        this.mainService.updateForumsOrder(this.forums).subscribe(function (d) {
        }, function (e) {
            console.log(e);
        });
    };
    ForumsListComponent.prototype.forumDragEnter = function (idx) {
        if (idx !== this.curDragIndex) {
            this.curDragIndex = idx;
            this.forums = this.tmpForums.slice();
            var row = this.forums[this.curDragStart];
            this.forums.splice(this.curDragStart, 1);
            this.forums.splice(idx, 0, row);
        }
    };
    return ForumsListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ForumsListComponent.prototype, "gotoTopicEvent", void 0);
ForumsListComponent = __decorate([
    core_1.Component({
        selector: 'app-forums-list',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/forums-list/forums-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/forums-list/forums-list.component.css"), __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _c || Object])
], ForumsListComponent);
exports.ForumsListComponent = ForumsListComponent;
var _a, _b, _c;
//# sourceMappingURL=forums-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabledata {\n  overflow: auto;\n}\n\na {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"nav-center\">\n        <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons\" role=\"tablist\">\n          <li class=\"active\">\n            <a data-toggle=\"tab\" href=\"#forum-list\" role=\"tab\" aria-expanded=\"true\" #forumsListToggleButton>Forums List</a>\n          </li>\n          <li>\n            <a data-toggle=\"tab\" href=\"#topics-list\" role=\"tab\" aria-expanded=\"false\" #topicsListToggleButton>Topics List</a>\n          </li>\n          <li>\n            <a data-toggle=\"tab\" href=\"#posts-list\" role=\"tab\" aria-expanded=\"false\" #postsListToggleButton>Posts List</a>\n          </li>\n          <li>\n            <a data-toggle=\"tab\" href=\"#reported-posts-list\" role=\"tab\" aria-expanded=\"false\" #reportedpostsListToggleButton>Flagged by Users</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"forum-list\" #forumsListTab>\n          <app-forums-list (gotoTopicEvent)=\"gotoTopic($event)\" #forumsList></app-forums-list>\n        </div>\n        <div class=\"tab-pane\" id=\"topics-list\" #topicsListTab>\n          <app-topics-list [forumSelectOptions]=\"forumsList.forumSelectOptions\" (topicUpdated)=\"topicUpdated()\" (gotoPostsEvent)=\"gotoPosts($event)\" #topicsList></app-topics-list>\n        </div>\n        <div class=\"tab-pane\" id=\"posts-list\" #postsListTab>\n          <app-posts-list (postDeleted)=\"postUpdated()\" #postsList></app-posts-list>\n        </div>\n        <div class=\"tab-pane\" id=\"reported-posts-list\" #reportedpostsListTab>\n          <app-reported-posts-list #reportedpostsList></app-reported-posts-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ManageForumsComponent = (function () {
    function ManageForumsComponent(mainService) {
        this.mainService = mainService;
        this.currentForums = [];
    }
    ManageForumsComponent.prototype.ngOnInit = function () {
    };
    ManageForumsComponent.prototype.gotoTopic = function (idx) {
        this.currentForums = [this.forumsListComponent.forums[idx]];
        this.topicsListComponent.updateForum(this.forumsListComponent.forums[idx]._id);
        this.topicsListToggleButton.nativeElement.setAttribute('aria-expanded', true);
        this.forumsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
        this.postsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
        this.reportedpostsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
        if (!this.topicsListTab.nativeElement.className.includes(' active')) {
            this.topicsListTab.nativeElement.className += ' active';
            this.topicsListToggleButton.nativeElement.parentElement.className = 'active';
        }
        this.forumsListTab.nativeElement.className = this.topicsListTab.nativeElement.className.replace(' active', '');
        this.forumsListToggleButton.nativeElement.parentElement.className = '';
        this.postsListTab.nativeElement.className = this.postsListTab.nativeElement.className.replace(' active', '');
        this.postsListToggleButton.nativeElement.parentElement.className = '';
        this.reportedpostsListTab.nativeElement.className = this.reportedpostsListTab.nativeElement.className.replace(' active', '');
        this.reportedpostsListToggleButton.nativeElement.parentElement.className = '';
    };
    ManageForumsComponent.prototype.gotoPosts = function (topic) {
        this.postsListComponent.changeTopic(topic);
        this.topicsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
        this.forumsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
        this.reportedpostsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
        this.postsListToggleButton.nativeElement.setAttribute('aria-expanded', true);
        if (!this.postsListTab.nativeElement.className.includes(' active')) {
            this.postsListTab.nativeElement.className += ' active';
            this.postsListToggleButton.nativeElement.parentElement.className = 'active';
        }
        this.forumsListTab.nativeElement.className = this.topicsListTab.nativeElement.className.replace(' active', '');
        this.forumsListToggleButton.nativeElement.parentElement.className = '';
        this.topicsListTab.nativeElement.className = this.postsListTab.nativeElement.className.replace(' active', '');
        this.topicsListToggleButton.nativeElement.parentElement.className = '';
        this.reportedpostsListTab.nativeElement.className = this.reportedpostsListTab.nativeElement.className.replace(' active', '');
        this.reportedpostsListToggleButton.nativeElement.parentElement.className = '';
    };
    ManageForumsComponent.prototype.topicUpdated = function () {
        this.forumsListComponent.getForumData();
    };
    ManageForumsComponent.prototype.postUpdated = function () {
        this.forumsListComponent.getForumData();
        this.topicsListComponent.getTopicData();
    };
    return ManageForumsComponent;
}());
__decorate([
    core_1.ViewChild('forumsList'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "forumsListComponent", void 0);
__decorate([
    core_1.ViewChild('topicsList'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "topicsListComponent", void 0);
__decorate([
    core_1.ViewChild('postsList'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "postsListComponent", void 0);
__decorate([
    core_1.ViewChild('reportedpostsList'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "reportedpostsListComponent", void 0);
__decorate([
    core_1.ViewChild('forumsListToggleButton'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "forumsListToggleButton", void 0);
__decorate([
    core_1.ViewChild('topicsListToggleButton'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "topicsListToggleButton", void 0);
__decorate([
    core_1.ViewChild('postsListToggleButton'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "postsListToggleButton", void 0);
__decorate([
    core_1.ViewChild('reportedpostsListToggleButton'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "reportedpostsListToggleButton", void 0);
__decorate([
    core_1.ViewChild('forumsListTab'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "forumsListTab", void 0);
__decorate([
    core_1.ViewChild('topicsListTab'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "topicsListTab", void 0);
__decorate([
    core_1.ViewChild('postsListTab'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "postsListTab", void 0);
__decorate([
    core_1.ViewChild('reportedpostsListTab'),
    __metadata("design:type", Object)
], ManageForumsComponent.prototype, "reportedpostsListTab", void 0);
ManageForumsComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-forums',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ManageForumsComponent);
exports.ManageForumsComponent = ManageForumsComponent;
var _a;
//# sourceMappingURL=manage-forums.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/posts-list/posts-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/posts-list/posts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  <div class=\"card topic-list-card\">\n    <div class=\"card-header\" *ngIf=\"currentTopic\">\n      <h3>\n        {{currentTopic.title}}\n        <div><small>Created by {{userNames[currentTopic.createdUserId]}} on {{mainService.getDateString(currentTopic.createdDate)}}</small></div>\n      </h3>\n      <h4>\n        {{currentTopic.text}}\n      </h4>\n    </div>\n    <div class=\"card-content tabledata\">\n      <table class=\"table\">\n        <thead class=\"text-primary\">\n        <tr>\n          <th class=\"text-left hidden\">ID</th>\n          <th class=\"text-left\">Replied User</th>\n          <th class=\"text-left\">Text</th>\n          <th class=\"text-center\">Replied Date</th>\n          <th class=\"text-center\">Likes</th>\n          <th class=\"text-center\">Unlikes</th>\n          <th class=\"text-center\">Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let post of posts; let idx = index\">\n          <td class=\"text-left hidden\">{{idx + 1}}</td>\n          <td class=\"text-left\">{{storageService.userNames[post.createdUserId]}}</td>\n          <td class=\"text-left\">{{post.text.length > 50 ? post.text.substr(0, 50) + '...' : post.text}}</td>\n          <td class=\"text-center\">{{mainService.getDateString(post.createdDate)}}</td>\n          <td class=\"text-center\">{{post.likeUsersId.length}}</td>\n          <td class=\"text-center\">{{post.unlikeUsersId.length}}</td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-danger btn-xs\" (click)=\"delete(post._id, idx)\">\n              <i class=\"material-icons\">delete</i>\n              Delete\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/posts-list/posts-list.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var topics_service_1 = __webpack_require__("../../../../../src/app/services/topics.service.ts");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var PostsListComponent = (function () {
    function PostsListComponent(mainService, topicsService, postService, storageService) {
        this.mainService = mainService;
        this.topicsService = topicsService;
        this.postService = postService;
        this.storageService = storageService;
        this.userNames = [];
        this.postDeleted = new core_1.EventEmitter();
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostsListComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (d) {
            _this.posts = [];
            if (_this.currentTopic) {
                for (var i = 0; i < d.length; i++) {
                    if (d[i].topicId === _this.currentTopic._id) {
                        _this.posts.push(d[i]);
                    }
                }
            }
            else {
                _this.posts = d;
            }
        }, function (e) {
            console.log(e);
        });
    };
    PostsListComponent.prototype.getCreatedUserProfile = function (id) {
        var _this = this;
        this.mainService.getUserProfileById(id).subscribe(function (d) {
            _this.createUser = d;
            console.log(_this.createUser);
        }, function (e) {
            console.log(e);
        });
    };
    PostsListComponent.prototype.changeTopic = function (topic) {
        this.currentTopic = topic;
        this.getPosts();
    };
    PostsListComponent.prototype.addPost = function () {
        var _this = this;
        this.postService.addPost({ text: this.replyText, topicId: this.currentTopic._id }).subscribe(function (d) {
            _this.getPosts();
        }, function (e) {
            console.log(e);
        });
    };
    PostsListComponent.prototype.delete = function (id, idx) {
        var _this = this;
        this.postService.deletePost(id).subscribe(function (d) {
            _this.getPosts();
            _this.postDeleted.emit('a post deleted');
        }, function (e) {
            console.log(e);
        });
    };
    return PostsListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PostsListComponent.prototype, "postDeleted", void 0);
PostsListComponent = __decorate([
    core_1.Component({
        selector: 'app-posts-list',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/posts-list/posts-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/posts-list/posts-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof topics_service_1.TopicsService !== "undefined" && topics_service_1.TopicsService) === "function" && _c || Object, typeof (_d = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _d || Object, typeof (_e = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _e || Object])
], PostsListComponent);
exports.PostsListComponent = PostsListComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=posts-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/reported-posts-list/reported-posts-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.report-diag {\n  opacity: 0;\n  display: none;\n  transition: opacity 0.1s linear;\n}\n\n.report-diag.show {\n  opacity: 1;\n  display: block;\n}\n\n.reported-text {\n  color: red;\n}\n\n.report-diag .card-content {\n  max-height: 550px;\n  overflow: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/reported-posts-list/reported-posts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-content tabledata\">\n      <table class=\"table\">\n        <thead class=\"text-primary\">\n        <tr>\n          <th class=\"text-left hidden\">ID</th>\n          <th class=\"text-left\">Forum</th>\n          <th class=\"text-left\">Topic</th>\n          <th class=\"text-left\">Reported User</th>\n          <th class=\"text-left\">Text</th>\n          <th class=\"text-center\">Reported Date</th>\n          <th class=\"text-center\">Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let post of posts; let idx = index\">\n          <td class=\"text-left hidden\">{{idx + 1}}</td>\n          <td class=\"text-left\">{{post.forum.title}}</td>\n          <td class=\"text-left\">{{post.topic.title}}</td>\n          <td class=\"text-left\">{{storageService.userNames[post.createdUserId]}}</td>\n          <td class=\"text-left\">{{post.text.length > 50 ? post.text.substr(0, 50) + '...' : post.text}}</td>\n          <td class=\"text-center\">{{mainService.getDateString(post.createdDate)}}</td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-success btn-xs\" (click)=\"showDiagToggle(post)\">\n              <i class=\"material-icons\">pageview</i>\n              View\n            </button>\n            <button class=\"btn btn-danger btn-xs\">\n              <i class=\"material-icons\">delete</i>\n              Delete\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div [class]=\"showDiag ? 'report-diag show' : 'report-diag'\" [ngStyle]=\"diagBackgroundStyle\" *ngIf=\"curPost\">\n  <div [ngStyle]=\"diagStyle\">\n    <div class=\"card report-card\">\n      <div class=\"card-header\" data-background-color=\"blue\">\n        <h4>Reported Post</h4>\n      </div>\n      <div class=\"card-content\">\n          <h5>Created By {{mainService.userNames[curPost.createdUserId]}} on {{mainService.getDateTimeString(curPost.createdDate)}}</h5>\n          <p [innerHTML]=\"curPost.text\"></p>\n          <h6>----------------------------------------------------------------------------------------------------------</h6>\n          <h5>Flagged By {{mainService.userNames[curReportedPost.createdUserId]}} on {{mainService.getDateTimeString(curReportedPost.createdDate)}}</h5>\n          <p [innerHTML]=\"curReportedPost.text\"></p>\n      </div>\n      <div class=\"card-footer text-center\">\n        <button class=\"btn btn-success\" (click)=\"deletePost(curPost._id)\">Delete</button>\n        <button class=\"btn btn-danger\" (click)=\"hideDiag()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/reported-posts-list/reported-posts-list.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var ReportedPostsListComponent = (function () {
    function ReportedPostsListComponent(mainService, postsService, storageService) {
        this.mainService = mainService;
        this.postsService = postsService;
        this.storageService = storageService;
        this.showDiag = false;
        this.diagBackgroundStyle = {};
        this.diagStyle = {};
        this.loading = false;
        this.deleted = new core_1.EventEmitter();
    }
    ReportedPostsListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ReportedPostsListComponent.prototype.getData = function () {
        var _this = this;
        this.postsService.getReportedPosts().subscribe(function (d) {
            _this.posts = d;
        }, function (e) {
            console.log(e);
        });
    };
    ReportedPostsListComponent.prototype.showDiagToggle = function (post) {
        var _this = this;
        this.postsService.getPostById(post.postId).subscribe(function (d) {
            if (d.type) {
                _this.curPost = d.data;
                _this.curReportedPost = post;
                _this.showDiag = true;
                _this.diagBackgroundStyle = {
                    'position': 'fixed',
                    'width': '100%',
                    'height': (document.getElementsByClassName('main-content')[0].getClientRects()[0].height + 500) + 'px',
                    'z-index': 11,
                    'top': 0,
                    'left': 0,
                    'background': 'rgba(255, 0, 0, 0.1)'
                };
                var scroll = document.getElementsByClassName('ps-scrollbar-y-rail')[1];
                _this.diagStyle = {
                    'width': '600px',
                    'position': 'fixed',
                    'left': 'calc(50% - 250px)',
                    'top': "calc(" + (scroll ? scroll.style.top : document.querySelector('.perfect-scrollbar-off .main-panel').scrollTop + 'px') + " + 50% - 350px)"
                };
            }
        }, function (e) {
            console.log(e);
        });
    };
    ReportedPostsListComponent.prototype.hideDiag = function () {
        this.showDiag = false;
    };
    ReportedPostsListComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.postsService.deletePost(this.curPost._id).subscribe(function (d) {
            if (d.type) {
                _this.deleted.emit('deleted');
                if (_this.loading) {
                    _this.getData();
                    _this.loading = false;
                    _this.showDiag = false;
                }
                else {
                    _this.loading = true;
                }
            }
        }, function (e) {
            console.log(e);
        });
        this.postsService.deleteReportedPost(this.curReportedPost._id).subscribe(function (d) {
            if (d.type) {
                _this.deleted.emit('deleted');
                if (_this.loading) {
                    _this.getData();
                    _this.loading = false;
                    _this.showDiag = false;
                }
                else {
                    _this.loading = true;
                }
            }
        }, function (e) {
            console.log(e);
        });
    };
    return ReportedPostsListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ReportedPostsListComponent.prototype, "deleted", void 0);
ReportedPostsListComponent = __decorate([
    core_1.Component({
        selector: 'app-reported-posts-list',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/reported-posts-list/reported-posts-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/reported-posts-list/reported-posts-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _c || Object, typeof (_d = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _d || Object])
], ReportedPostsListComponent);
exports.ReportedPostsListComponent = ReportedPostsListComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=reported-posts-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/topics-list/topics-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-content {\n  min-height: 400px;\n}\n\nss-multiselect-dropdown {\n  width: 100%;\n}\n\n.font-size-20 {\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/topics-list/topics-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  <div class=\"card topic-list-card\">\n    <div class=\"card-header\">\n      <h4 *ngIf=\"false\"><ss-multiselect-dropdown [options]=\"forumSelectOptions\" [settings]=\"selectSettings\" [texts]=\"selectText\" [(ngModel)]=\"parentForumId\" (ngModelChange)=\"parentForumChanged()\"></ss-multiselect-dropdown></h4>\n    </div>\n    <div class=\"card-content tabledata\">\n      <table class=\"table\">\n        <thead class=\"text-primary\">\n        <tr>\n          <th class=\"text-left\">ID</th>\n          <th class=\"text-left\">Title</th>\n          <th class=\"text-center\">Created User</th>\n          <th class=\"text-center\">Created Date</th>\n          <th class=\"text-center\">Views</th>\n          <th class=\"text-center\">Replies</th>\n          <th class=\"text-center\">Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"false && canAdd && parentForumId.length\">\n          <td></td>\n          <td><input class=\"form-control\" [(ngModel)]=\"newTitle\" /></td>\n          <td colspan=\"4\"><input class=\"form-control\" [(ngModel)]=\"newDescription\" /></td>\n          <td>\n            <!--<ss-multiselect-dropdown [options]=\"forumSelectOptions\" [settings]=\"selectSettings\" [(ngModel)]=\"parentForum\"></ss-multiselect-dropdown>-->\n          </td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-success btn-xs\" (click)=\"addNewTopic()\" [disabled]=\"!canAdd || !parentForumId.length\">\n              <i class=\"material-icons\">add_circle</i>\n              Add New Topic\n            </button>\n          </td>\n        </tr>\n        <tr *ngFor=\"let topic of filterTopics; let idx = index\">\n          <td class=\"text-left\">{{idx + 1}}</td>\n          <td class=\"text-left\"><a (click)=\"gotoPosts(idx)\">{{topic.title}}</a></td>\n          <td class=\"text-center\">{{storageService.userNames[topic.createdUserId]}}</td>\n          <td class=\"text-center\">{{mainService.getDateString(topic.createdDate)}}</td>\n          <td class=\"text-center\">{{topic.views}}</td>\n          <td class=\"text-center\">{{topic.replies}}</td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-success btn-xs\" *ngIf=\"!topic.confirmed\" (click)=\"activate(topic._id, idx)\">\n              <i class=\"material-icons\">check</i>\n              Approve\n            </button>\n            <button class=\"btn btn-warning btn-xs\" *ngIf=\"topic.confirmed\" (click)=\"deactivate(topic._id, idx)\">\n              <i class=\"material-icons\">close</i>\n              Disprove\n            </button>\n            <button class=\"btn btn-danger btn-xs\" (click)=\"delete(topic._id, idx)\">\n              <i class=\"material-icons\">delete</i>\n              Delete\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-forums/topics-list/topics-list.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var topics_service_1 = __webpack_require__("../../../../../src/app/services/topics.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var TopicsListComponent = (function () {
    function TopicsListComponent(mainService, topicService, storageService) {
        this.mainService = mainService;
        this.topicService = topicService;
        this.storageService = storageService;
        this.gotoPostsEvent = new core_1.EventEmitter();
        this.topicUpdated = new core_1.EventEmitter();
        this.canAdd = false;
    }
    TopicsListComponent.prototype.ngOnInit = function () {
        this.getTopicData();
        this.selectSettings = {
            checkedStyle: 'fontawesome',
            containerClasses: '',
            buttonClasses: 'btn-group select-with-transition form-control font-size-20 text-left',
            itemClasses: 'w-100',
            dynamicTitleMaxItems: 3,
            selectionLimit: 1,
            autoUnselect: true,
            enableSearch: true,
            closeOnSelect: true
        };
        this.selectText = {
            defaultTitle: 'All Topics'
        };
    };
    TopicsListComponent.prototype.getTopicData = function () {
        var _this = this;
        this.topicService.getAllTopics().subscribe(function (d) {
            _this.topics = d;
            _this.forumSelectOption = _this.forumSelectOptions;
            _this.updateForum(_this.parentForumId);
        }, function (e) {
            console.log(e);
        });
    };
    TopicsListComponent.prototype.updateForum = function (forumId) {
        this.filterTopics = [];
        if (!forumId) {
            this.filterTopics = this.topics;
        }
        else {
            this.canAdd = true;
            this.parentForumId = forumId;
            for (var i = 0; i < this.topics.length; i++) {
                if (this.topics[i].forumId === forumId) {
                    this.filterTopics.push(this.topics[i]);
                }
            }
        }
    };
    TopicsListComponent.prototype.activate = function (id, idx) {
        var _this = this;
        this.topicService.activateTopic(id).subscribe(function (d) {
            if (d.type === 'true') {
                _this.filterTopics[idx].confirmed = true;
            }
        }, function (e) {
            console.log(e);
        });
    };
    TopicsListComponent.prototype.deactivate = function (id, idx) {
        var _this = this;
        this.topicService.deactivateTopic(id).subscribe(function (d) {
            if (d.type === 'true') {
                _this.filterTopics[idx].confirmed = false;
            }
        }, function (e) {
            console.log(e);
        });
    };
    TopicsListComponent.prototype.delete = function (id, idx) {
        var _this = this;
        this.topicService.deleteTopic(id).subscribe(function (d) {
            if (d.type === 'true') {
                _this.filterTopics.splice(idx, 1);
                _this.topicUpdated.emit('topic deleted');
            }
        }, function (e) {
            console.log(e);
        });
    };
    TopicsListComponent.prototype.topicAdded = function () {
        this.getTopicData();
    };
    TopicsListComponent.prototype.addNewTopic = function () {
        var _this = this;
        this.topicService.addTopic({ title: this.newTitle, text: this.newDescription, forumId: this.parentForumId }).subscribe(function (d) {
            _this.newTitle = '';
            _this.newDescription = '';
            _this.topicAdded();
            _this.topicUpdated.emit('topic added');
        }, function (e) {
            console.log(e);
        });
    };
    TopicsListComponent.prototype.gotoPosts = function (idx) {
        this.gotoPostsEvent.emit(this.filterTopics[idx]);
    };
    TopicsListComponent.prototype.parentForumChanged = function () {
        this.updateForum(this.parentForumId[0]);
    };
    return TopicsListComponent;
}());
__decorate([
    core_1.Input('forumSelectOptions'),
    __metadata("design:type", Object)
], TopicsListComponent.prototype, "forumSelectOptions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TopicsListComponent.prototype, "gotoPostsEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TopicsListComponent.prototype, "topicUpdated", void 0);
TopicsListComponent = __decorate([
    core_1.Component({
        selector: 'app-topics-list',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/topics-list/topics-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/topics-list/topics-list.component.css"), __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof topics_service_1.TopicsService !== "undefined" && topics_service_1.TopicsService) === "function" && _d || Object, typeof (_e = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _e || Object])
], TopicsListComponent);
exports.TopicsListComponent = TopicsListComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=topics-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\n  max-height: 80px;\n}\n\ntd .image {\n  max-width: 40px;\n  display: inline-block;\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n              <tr>\n                <th class=\"text-left\">Setup Name</th>\n                <th class=\"left\">User</th>\n                <th class=\"text-center\">Created Date</th>\n                <th class=\"text-center\">Updated Date</th>\n                <th class=\"text-center\">Action</th>\n              </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let setup of setups;\">\n                  <td class=\"text-left\">\n                    <div class=\"image\">\n                      <cl-image data-u=\"image\" public-id=\"{{setup.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"80\" width=\"100\" format=\"jpg\">\n                      </cl-image>\n                    </div>\n                    {{setup.name}}\n                  </td>\n                  <td class=\"left\">{{setup.createdUser}}</td>\n                  <td class=\"text-center\">{{getDateString(setup.created_date)}}</td>\n                  <td class=\"text-center\">{{getDateString(setup.updated_date)}}</td>\n                  <td class=\"text-center\">\n                    <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/setups/add', setup._id]\">\n                      <i class=\"material-icons\">edit</i>\n                      Edit\n                    </a>\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"removeSetup(setup._id)\">\n                      <i class=\"material-icons\">block</i>\n                      Hide\n                    </button>\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteSetup(setup._id)\">\n                      <i class=\"material-icons\">close</i>\n                      Delete\n                    </button>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let setup of hiddensetups;\">\n                  <td class=\"text-left\">\n                    <div class=\"image\">\n                      <cl-image data-u=\"image\" public-id=\"{{setup.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"80\" width=\"100\" format=\"jpg\">\n                      </cl-image>\n                    </div>\n                    {{setup.name}}\n                  </td>\n                  <td class=\"left\">{{setup.createdUser}}</td>\n                  <td class=\"text-center\">{{getDateString(setup.created_date)}}</td>\n                  <td class=\"text-center\">{{getDateString(setup.updated_date)}}</td>\n                  <td class=\"text-center\">\n                    <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/setups/add', setup._id]\">\n                      <i class=\"material-icons\">edit</i>\n                      Edit\n                    </a>\n                    <button class=\"btn btn-success btn-sm\" (click)=\"restoreSetup(setup._id)\">\n                      <i class=\"material-icons\">restore</i>\n                      Show\n                    </button>\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteSetup(setup._id)\">\n                      <i class=\"material-icons\">close</i>\n                      Delete\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ManageSetupsComponent = (function () {
    function ManageSetupsComponent(mainService) {
        this.mainService = mainService;
    }
    ManageSetupsComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    ManageSetupsComponent.prototype.updateData = function () {
        var _this = this;
        this.mainService.getSetups().subscribe(function (d) {
            _this.setups = d.data;
        }, function (e) {
            console.log(e);
        });
        this.mainService.getRemovedSetups().subscribe(function (d) {
            _this.hiddensetups = d.data;
        }, function (e) {
            console.log(e);
        });
    };
    ManageSetupsComponent.prototype.getDateString = function (str) {
        var date = new Date(str);
        return date.toLocaleDateString();
    };
    ManageSetupsComponent.prototype.removeSetup = function (id) {
        var _this = this;
        this.mainService.removeSetup(id).subscribe(function (d) {
            _this.updateData();
        }, function (e) {
            console.log(e);
        });
    };
    ManageSetupsComponent.prototype.restoreSetup = function (id) {
        var _this = this;
        this.mainService.restoreSetup(id).subscribe(function (d) {
            _this.updateData();
        }, function (e) {
            console.log(e);
        });
    };
    ManageSetupsComponent.prototype.deleteSetup = function (id) {
        var _this = this;
        this.mainService.deleteSetup(id).subscribe(function (d) {
            _this.updateData();
        }, function (e) {
            console.log(e);
        });
    };
    return ManageSetupsComponent;
}());
ManageSetupsComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-setups',
        template: __webpack_require__("../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ManageSetupsComponent);
exports.ManageSetupsComponent = ManageSetupsComponent;
var _a;
//# sourceMappingURL=manage-setups.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-article/add-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-content .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card-content .header .title {\n  width: 80%;\n  padding: 0 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-article/add-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <div class=\"header\">\n      <app-uploader (uploaded)=\"imgUploaded($event)\" (changed)=\"imgChanged = true\" [autoupload]=\"true\"></app-uploader>\n      <div class=\"form-group title\">\n        <label class=\"control-label\">Title</label>\n        <input class=\"form-control\" [(ngModel)]=\"title\"/>\n      </div>\n    </div>\n    <div class=\"form-group \">\n      <textarea class=\"tinymce-editor\"></textarea>\n    </div>\n  </div>\n  <div class=\"card-footer text-center\">\n    <button class=\"btn btn-success\" (click)=\"addArticle()\" [disabled]=\"title == '' && imgId\">Save</button>\n    <button class=\"btn btn-danger\" (click)=\"closeArticle()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-article/add-article.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var AddArticleComponent = (function () {
    function AddArticleComponent(mainService, articleService) {
        this.mainService = mainService;
        this.articleService = articleService;
        this.title = '';
        this.imgChanged = false;
        this.imgId = '';
        this.add = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    AddArticleComponent.prototype.ngOnInit = function () {
        this.mainService.initTinyMCE();
    };
    AddArticleComponent.prototype.addArticle = function () {
        this.add.emit({
            title: this.title,
            text: this.mainService.editor.getContent(),
            featuredImage: this.imgId
        });
        this.title = '';
        this.mainService.editor.setContent('');
    };
    AddArticleComponent.prototype.closeArticle = function () {
        this.close.emit('close');
        this.title = '';
        this.mainService.editor.setContent('');
    };
    AddArticleComponent.prototype.imgUploaded = function (imgId) {
        this.imgId = imgId;
    };
    return AddArticleComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AddArticleComponent.prototype, "add", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], AddArticleComponent.prototype, "close", void 0);
AddArticleComponent = __decorate([
    core_1.Component({
        selector: 'app-add-article',
        template: __webpack_require__("../../../../../src/app/dashboard/components/add-article/add-article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/add-article/add-article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _d || Object])
], AddArticleComponent);
exports.AddArticleComponent = AddArticleComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=add-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-dialog/add-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-dialog/add-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-dialog/add-dialog.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AddDialogComponent = (function () {
    function AddDialogComponent() {
    }
    AddDialogComponent.prototype.ngOnInit = function () {
    };
    return AddDialogComponent;
}());
AddDialogComponent = __decorate([
    core_1.Component({
        selector: 'app-add-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/components/add-dialog/add-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/add-dialog/add-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddDialogComponent);
exports.AddDialogComponent = AddDialogComponent;
//# sourceMappingURL=add-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card-content .article-text {\n  width: calc(100% - 150px);\n  padding: 0 40px;\n}\n\ni.material-icons {\n  cursor: pointer;\n}\n\ni.material-icons.liked {\n  color: red;\n}\n\n.loading-image {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.card {\n  height: calc(100% - 50px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"!articleId\">\n  <div class=\"card-header\">\n    <h3><a [routerLink]=\"['/article', article._id]\">{{article.title}}</a></h3>\n    <h5>\n      <i>Author: {{mainService.userNames[article.createdUserId]}}</i>,\n      <i>Likes: {{article.likedUsers.length}}</i>\n      <i [class]=\"isLiked(idx) ? 'material-icons pull-right liked' : 'material-icons pull-right'\" (click)=\"like(idx)\">thumb_up</i>\n      <img class=\"loading-image pull-right\" src=\"../../../../assets/img/loading.gif\" *ngIf=\"updating\" />\n    </h5>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"article-image\">\n      <cl-image data-u=\"image\" public-id=\"{{article.featuredImage}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"150\" width=\"150\" format=\"jpg\">\n      </cl-image>\n    </div>\n    <div class=\"article-text\" [innerHTML]=\"shortform ? article.text.length > 50 ? article.text.substr(0, 50) + '...' : article.text : article.text\"></div>\n  </div>\n</div>\n\n<div class=\"main-content\" *ngIf=\"articleId && article\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>{{article.title}}</h3>\n        <h5>\n          <i>Author: {{mainService.userNames[article.createdUserId]}}</i>,\n          <i>Likes: {{article.likedUsers.length}}</i>\n          <i [class]=\"isLiked(idx) ? 'material-icons pull-right liked' : 'material-icons pull-right'\" (click)=\"like(idx)\">thumb_up</i>\n          <img class=\"loading-image pull-right\" src=\"../../../../assets/img/loading.gif\" *ngIf=\"updating\" />\n        </h5>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"article-image\">\n          <cl-image data-u=\"image\" public-id=\"{{article.featuredImage}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"150\" width=\"150\" format=\"jpg\">\n          </cl-image>\n        </div>\n        <div class=\"article-text\" [innerHTML]=\"shortform ? article.abstractText : article.text\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/article/article.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var ArticleComponent = (function () {
    function ArticleComponent(mainService, articleService, route) {
        this.mainService = mainService;
        this.articleService = articleService;
        this.route = route;
        this.articleId = '';
        this.updating = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.articleId = params['id']; // (+) converts string 'id' to a number
            if (_this.articleId) {
                _this.articleService.getArticleById(_this.articleId).subscribe(function (d) {
                    _this.article = d.article;
                }, function (e) {
                    console.log(e);
                });
            }
        });
    };
    ArticleComponent.prototype.isLiked = function (idx) {
        return this.article.likedUsers.indexOf(this.mainService.userId) > -1;
    };
    ArticleComponent.prototype.like = function (idx) {
        var _this = this;
        if (this.updating) {
            return;
        }
        this.updating = true;
        if (!this.isLiked(idx)) {
            this.article.likedUsers.push(this.mainService.userId);
        }
        else {
            this.article.likedUsers.splice(this.article.likedUsers.indexOf(this.mainService.userId), 1);
        }
        this.articleService.updateArticle(this.article).subscribe(function (d) {
            _this.updating = false;
        }, function (e) {
            console.log(e);
        });
    };
    return ArticleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "article", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "shortform", void 0);
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/dashboard/components/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;
var _a, _b, _c;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content club-members-list\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"text-left\">User</th>\n                <th class=\"text-center\">Tagged Date</th>\n                <th class=\"text-center\">Member State</th>\n                <th class=\"text-center\">Member Type</th>\n                <th class=\"text-center\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users; let idx = index;\">\n                <td class=\"text-left\">{{user.user}}</td>\n                <td class=\"text-center\">{{mainService.getDateString(user.taggedDate)}}</td>\n                <td class=\"text-center\">\n                  <select class=\"selectpicker text-center\" data-style=\"select-with-transition\" [value]=\"memberState[idx]\" [(ngModel)]=\"memberState[idx]\">\n                    <option value=\"active\">Active</option>\n                    <option value=\"past\">Past</option>\n                  </select>\n                </td>\n                <td class=\"text-center\">\n                  <select class=\"selectpicker text-center\" data-style=\"select-with-transition\" [value]=\"memberType[idx]\" [(ngModel)]=\"memberType[idx]\">\n                    <option value=\"admin\">Admin</option>\n                    <option value=\"member\">Member</option>\n                  </select>\n                </td>\n                <td class=\"text-center\">\n                  <button class=\"btn btn-success btn-xs\" [disabled]=\"memberState[idx] == user.memberState && memberType[idx] == user.memberType\" (click)=\"updateUser(idx, user)\">\n                    <i class=\"material-icons\">save</i>\n                    Save\n                  </button>\n                  <button class=\"btn btn-success btn-xs\" *ngIf=\"!user.confirmed\" (click)=\"approveTag(user)\">\n                    <i class=\"material-icons\">check</i>\n                    Approve\n                  </button>\n                  <button class=\"btn btn-warning btn-xs\" *ngIf=\"user.confirmed\" (click)=\"rejectTag(user)\">\n                    <i class=\"material-icons\">close</i>\n                    Reject\n                  </button>\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"removeTag(user)\">\n                    <i class=\"material-icons\">delete</i>\n                    Delete\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ClubMembersListComponent = (function () {
    function ClubMembersListComponent(mainService, router, route) {
        this.mainService = mainService;
        this.router = router;
        this.route = route;
        this.activeUsers = [];
        this.pastUsers = [];
        this.waitingUsers = [];
        this.users = [];
        this.memberState = [];
        this.memberType = [];
    }
    ClubMembersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.clubId = id;
            _this.getClub();
        });
    };
    ClubMembersListComponent.prototype.ngAfterViewChecked = function () {
        $('.selectpicker').selectpicker({
            containerClass: 'text-center'
        });
    };
    ClubMembersListComponent.prototype.getClub = function () {
        var _this = this;
        this.users = [];
        this.activeUsers = [];
        this.pastUsers = [];
        this.waitingUsers = [];
        this.mainService.getClubById(this.clubId).subscribe(function (d) {
            if (d.type) {
                _this.club = d.club;
                for (var i = 0; _this.club.taggedUsers && i < _this.club.taggedUsers.length; i++) {
                    var user = _this.club.taggedUsers[i];
                    if (user.confirmed === false) {
                        _this.waitingUsers.push(user);
                    }
                    else if (user.memberState === 'active') {
                        _this.activeUsers.push(user);
                    }
                    else if (user.memberState === 'past') {
                        _this.pastUsers.push(user);
                    }
                }
                _this.users = _this.activeUsers.concat(_this.pastUsers.concat(_this.waitingUsers));
                for (var i = 0; i < _this.users.length; i++) {
                    _this.memberState[i] = _this.users[i].memberState;
                    _this.memberType[i] = _this.users[i].memberType;
                }
            }
        }, function (e) {
            console.log(e);
        });
    };
    ClubMembersListComponent.prototype.updateUser = function (idx, user) {
        user.memberState = this.memberState[idx];
        user.memberType = this.memberType[idx];
        this.updateUserTag(user);
    };
    ClubMembersListComponent.prototype.approveTag = function (user) {
        user.confirmed = true;
        this.updateUserTag(user);
    };
    ClubMembersListComponent.prototype.rejectTag = function (user) {
        user.confirmed = false;
        this.updateUserTag(user);
    };
    ClubMembersListComponent.prototype.updateUserTag = function (user) {
        this.mainService.updateUserTag(this.clubId, user).subscribe(function (d) {
            if (d.type) {
                // this.getClub();
            }
        }, function (e) {
            console.log(e);
        });
    };
    ClubMembersListComponent.prototype.removeTag = function (user) {
        var _this = this;
        this.mainService.untagClubWithUserId(this.clubId, user.userId).subscribe(function (d) {
            if (d.type) {
                _this.getClub();
            }
        }, function (e) {
            console.log(e);
        });
    };
    return ClubMembersListComponent;
}());
ClubMembersListComponent = __decorate([
    core_1.Component({
        selector: 'app-club-members-list',
        template: __webpack_require__("../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], ClubMembersListComponent);
exports.ClubMembersListComponent = ClubMembersListComponent;
var _a, _b, _c;
//# sourceMappingURL=club-members-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/edit-article/edit-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-content .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card-content .header .titles {\n  width: 80%;\n  padding: 0 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/edit-article/edit-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\" *ngIf=\"article\">\n      <div class=\"card-content\">\n        <div class=\"header\">\n          <div>\n            <app-uploader [imgId]=\"article.featuredImage\" (uploaded)=\"imgUploaded($event)\" [autoupload]=\"true\"></app-uploader>\n          </div>\n          <div class=\"titles\">\n            <div class=\"form-group title\">\n              <label class=\"control-label\">Title</label>\n              <input class=\"form-control\" [(ngModel)]=\"article.title\"/>\n            </div>\n            <div class=\"form-group abstract-text\">\n              <label class=\"control-label\">Abstract Text</label>\n              <input class=\"form-control\" [(ngModel)]=\"article.abstractText\"/>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"tinymce-editor form-control\"></textarea>\n        </div>\n      </div>\n      <div class=\"card-footer text-center\">\n        <button class=\"btn btn-success\" (click)=\"saveArticle()\" [disabled]=\"!articleChanged()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/edit-article/edit-article.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var EditArticleComponent = (function () {
    function EditArticleComponent(route, articleService, mainService) {
        this.route = route;
        this.articleService = articleService;
        this.mainService = mainService;
        this.articleId = '';
        this.article = {
            title: '',
            abstractText: '',
            text: '',
            featuredImage: ''
        };
        this.orgArticle = {
            title: '',
            abstractText: '',
            text: '',
            featuredImage: ''
        };
        this.imgChanged = false;
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.articleId = params['id']; // (+) converts string 'id' to a number
            _this.getArticle();
        });
    };
    EditArticleComponent.prototype.getArticle = function () {
        var _this = this;
        this.articleService.getArticleById(this.articleId).subscribe(function (d) {
            if (d.type) {
                _this.mainService.initTinyMCE();
                _this.article = d.article;
                _this.orgArticle = {
                    title: d.article.title,
                    text: d.article.text,
                    abstractText: d.article.abstractText,
                    featuredImage: d.article.featuredImage
                };
                _this.mainService.editor.setContent(_this.article.text);
                _this.imgChanged = false;
            }
            else {
            }
        });
    };
    EditArticleComponent.prototype.articleChanged = function () {
        return this.article.title !== ''
            && (this.orgArticle.featuredImage !== this.article.featuredImage
                || this.orgArticle.title !== this.article.title
                || this.orgArticle.abstractText !== this.article.abstractText
                || this.orgArticle.text !== this.mainService.editor.getContent()
                || this.imgChanged);
    };
    EditArticleComponent.prototype.imgUploaded = function (imgId) {
        this.article.featuredImage = imgId;
        this.imgChanged = true;
    };
    EditArticleComponent.prototype.saveArticle = function () {
        var _this = this;
        this.article.text = this.mainService.editor.getContent();
        this.articleService.updateArticle(this.article).subscribe(function (d) {
            _this.getArticle();
        }, function (e) {
            console.log(e);
        });
    };
    return EditArticleComponent;
}());
EditArticleComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-article',
        template: __webpack_require__("../../../../../src/app/dashboard/components/edit-article/edit-article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/edit-article/edit-article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _b || Object, typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object])
], EditArticleComponent);
exports.EditArticleComponent = EditArticleComponent;
var _a, _b, _c;
//# sourceMappingURL=edit-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".event-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #eee;\n  margin: 5px;\n  padding: 5px;\n}\n\n.has-error.event-container {\n  border-color: red;\n}\n\ni {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"datafilled ? 'event-container' : 'event-container has-error'\">\n  <div class=\"featured-image col-xs-12 col-sm-4\">\n    <app-uploader [imgId]=\"event.imgUrl\" [autoupload]=\"true\" (uploaded)=\"imageUpdated($event)\"></app-uploader>\n  </div>\n  <div class=\"event-detail col-xs-12 col-sm-8\">\n    <i class=\"material-icons pull-right\" (click)=\"deleteEvent()\" *ngIf=\"event.createdUserId == mainService.userId\">delete</i>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Title</label>\n      <input class=\"form-control\" [(ngModel)]=\"event.title\" (change)=\"eventUpdated()\" [readonly]=\"event.defaultEvt\" />\n    </div>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Date</label>\n      <input class=\"form-control event-date-picker\" [(ngModel)]=\"event.date\" (blur)=\"timeChanged($event)\" [readonly]=\"event.defaultEvt\" />\n    </div>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Location</label>\n      <input class=\"form-control\" required [(ngModel)]=\"event.location\" (change)=\"eventUpdated()\" [readonly]=\"event.defaultEvt\" />\n    </div>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Description</label>\n      <input class=\"form-control\" required [(ngModel)]=\"event.description\" (change)=\"eventUpdated()\" />\n    </div>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Notification Text</label>\n      <input class=\"form-control\" required [(ngModel)]=\"event.notificationText\" (change)=\"eventUpdated()\" [readonly]=\"event.defaultEvt\" />\n    </div>\n    <div class=\"form-group \">\n      <label class=\"control-label\">Notification Sending Date</label>\n      <input class=\"form-control event-date-picker\" [(ngModel)]=\"event.notifyDate\" (blur)=\"notifyTimeChanged($event)\" [readonly]=\"event.defaultEvt\" />\n    </div>\n    <button class=\"btn btn-success btn-sm pull-right\" (click)=\"sendNotification()\">Send Notification Now</button>\n    <button class=\"btn btn-success btn-sm pull-right\" (click)=\"saveEvent()\">Save Event</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/event/event.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var EventComponent = (function () {
    function EventComponent(mainService) {
        this.mainService = mainService;
        this.updated = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.firstLoad = true;
    }
    EventComponent.prototype.ngOnInit = function () {
        this.initDatePicker();
    };
    EventComponent.prototype.ngAfterViewChecked = function () {
    };
    EventComponent.prototype.initDatePicker = function () {
        this.mainService.jQuery('.event-date-picker').datetimepicker({
            format: 'MM/DD/YYYY h:mm A',
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
    };
    EventComponent.prototype.eventUpdated = function () {
        this.updated.emit(this.event);
    };
    EventComponent.prototype.timeChanged = function (evt) {
        var today = new Date();
        var newDate = new Date(evt.target.value);
        this.event.date = this.mainService.getDateTimeString(today.getTime() > newDate.getTime()
            ? new Date(today.getTime() + 1000 * 60 * 60 * 24)
            : new Date(evt.target.value));
        this.eventUpdated();
    };
    EventComponent.prototype.notifyTimeChanged = function (evt) {
        this.event.notifyDate = this.mainService.getDateTimeString(new Date(evt.target.value));
        this.eventUpdated();
    };
    EventComponent.prototype.imageUpdated = function (imgUrl) {
        this.event.imgUrl = imgUrl;
        this.updated.emit(this.event);
    };
    EventComponent.prototype.deleteEvent = function () {
        this.delete.emit('delete');
    };
    EventComponent.prototype.sendNotification = function () {
        this.mainService.sendNotification(this.event).subscribe(function (d) {
        }, function (e) {
            console.log(e);
        });
    };
    EventComponent.prototype.saveEvent = function () {
        this.save.emit('save now');
    };
    return EventComponent;
}());
__decorate([
    core_1.Input('event'),
    __metadata("design:type", Object)
], EventComponent.prototype, "event", void 0);
__decorate([
    core_1.Input('datafilled'),
    __metadata("design:type", Object)
], EventComponent.prototype, "datafilled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], EventComponent.prototype, "updated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], EventComponent.prototype, "save", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], EventComponent.prototype, "delete", void 0);
EventComponent = __decorate([
    core_1.Component({
        selector: 'app-event',
        template: __webpack_require__("../../../../../src/app/dashboard/components/event/event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/event/event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _d || Object])
], EventComponent);
exports.EventComponent = EventComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/post-reply/post-reply.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/post-reply/post-reply.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <textarea class=\"tinymce-editor\" [(ngModel)]=\"text\"></textarea>\n    <div>\n      <button class=\"btn btn-success pull-right\" (click)=\"reply()\" [disabled]=\"mainService.editor.getContent() == ''\">Reply</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/post-reply/post-reply.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var PostReplyComponent = (function () {
    function PostReplyComponent(postService, mainService) {
        this.postService = postService;
        this.mainService = mainService;
        this.replied = new core_1.EventEmitter();
    }
    PostReplyComponent.prototype.ngOnInit = function () {
        this.mainService.initTinyMCE();
    };
    PostReplyComponent.prototype.reply = function () {
        var _this = this;
        this.postService.addPost({ text: this.mainService.editor.getContent(), topicId: this.topic._id }).subscribe(function (d) {
            if (d.type) {
                _this.replied.emit('replied');
                _this.mainService.editor.setContent('');
            }
            else {
                console.log(d);
            }
        }, function (e) {
            console.log(e);
        });
    };
    return PostReplyComponent;
}());
__decorate([
    core_1.Input('topic'),
    __metadata("design:type", Object)
], PostReplyComponent.prototype, "topic", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PostReplyComponent.prototype, "replied", void 0);
PostReplyComponent = __decorate([
    core_1.Component({
        selector: 'app-post-reply',
        template: __webpack_require__("../../../../../src/app/dashboard/components/post-reply/post-reply.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/post-reply/post-reply.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _b || Object, typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object])
], PostReplyComponent);
exports.PostReplyComponent = PostReplyComponent;
var _a, _b, _c;
//# sourceMappingURL=post-reply.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/view-topic/post-item/post-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-description {\n  padding: 30px;\n}\n\n.report-diag {\n  opacity: 0;\n  display: none;\n  transition: opacity 0.1s linear;\n}\n\n.report-diag.show {\n  opacity: 1;\n  display: block;\n}\n\n.reported-text {\n  color: red;\n}\n\n.row.profile > div {\n  min-width: 150px;\n  max-width: calc(100% - 150px);\n}\n\n.btn-report {\n  background-color: rgb(255, 255, 212);\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/view-topic/post-item/post-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <div class=\"row profile\" *ngIf=\"profile && post\">\n      <div class=\"col-lg-1 col-md-2 col-sm-4 col-xs-6\">\n        <div>\n          <a>\n            <cl-image data-u=\"image\" public-id=\"{{profile.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"200\" width=\"200\" format=\"gif\">\n            </cl-image>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-11 col-md-10 col-sm-8 col-xs-6\">\n        <div class=\"buttons\">\n          {{mainService.userId === post.createdUserId ? 'You' : mainService.userDisplayNames[post.createdUserId]}} replied {{mainService.getDateTimeDifference(post.createdDate)}}\n          <button class=\"btn btn-orange btn-xs pull-right\" (click)=\"quote()\">\n            <i class=\"material-icons\">format_quote</i>\n          </button>\n          <button class=\"btn btn-red btn-xs pull-right\" *ngIf=\"!isUnLike() && mainService.userId !== post.createdUserId\" (click)=\"dislike()\">\n            <i class=\"material-icons\">thumb_down</i>\n          </button>\n          <button class=\"btn btn-red btn-xs pull-right\" *ngIf=\"isUnLike() && mainService.userId !== post.createdUserId\" (click)=\"removeDislike()\">\n            <i class=\"material-icons text-warning\">thumb_down</i>\n          </button>\n          <button class=\"btn btn-green btn-xs pull-right\" *ngIf=\"isLike() && mainService.userId !== post.createdUserId\" (click)=\"removeLike()\">\n            <i class=\"material-icons text-warning\">thumb_up</i>\n          </button>\n          <button class=\"btn btn-green btn-xs pull-right\" *ngIf=\"!isLike() && mainService.userId !== post.createdUserId\" (click)=\"like()\">\n            <i class=\"material-icons\">thumb_up</i>\n          </button>\n        </div>\n        <div class=\"description\">\n          {{post.likeUsersId.length}} users like and {{post.unlikeUsersId.length}} users dislike\n        </div>\n        <div class=\"reported-text\" *ngIf=\"isReported\" data-color=\"rose\">\n          You reported this post\n        </div>\n        <div class=\"buttons\">\n          <button class=\"btn btn-xs btn-report\" *ngIf=\"mainService.userId !== post.createdUserId && !isReported\" (click)=\"reportDiagToggle()\">\n            <i class=\"material-icons\">report</i> Flag inappropriate content\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 post-description\" [innerHTML]=\"postHTML\">\n    </div>\n    <div [class]=\"showReport ? 'report-diag show' : 'report-diag'\" [ngStyle]=\"diagBackgroundStyle\">\n      <div [ngStyle]=\"diagStyle\">\n        <div class=\"card report-card\">\n          <div class=\"card-header\" data-background-color=\"orange\">\n            <h4>Report Post</h4>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Why are you reporting this post?</label>\n              <textarea class=\"form-control\" [(ngModel)]=\"reportText\"></textarea>\n            </div>\n          </div>\n          <div class=\"card-footer text-center\">\n            <button class=\"btn btn-success\" (click)=\"report()\" [disabled]=\"reportText == ''\">Report</button>\n            <button class=\"btn btn-danger\" (click)=\"hideDiag()\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/view-topic/post-item/post-item.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var copy = __webpack_require__("../../../../copy-to-clipboard/index.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var PostItemComponent = (function () {
    function PostItemComponent(mainService, postService, satizer) {
        this.mainService = mainService;
        this.postService = postService;
        this.satizer = satizer;
        this.updated = new core_1.EventEmitter();
        this.quoted = new core_1.EventEmitter();
        this.showReport = false;
        this.reportText = '';
        this.diagBackgroundStyle = {};
        this.diagStyle = {};
    }
    PostItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postHTML = this.satizer.bypassSecurityTrustHtml(this.post.text);
        this.mainService.getUserProfileById(this.post.createdUserId).subscribe(function (d) {
            if (d.type) {
                _this.profile = d.profile;
            }
            else {
                console.log(d.msg);
            }
        }, function (e) {
            console.log(e);
        });
    };
    PostItemComponent.prototype.isLike = function () {
        return this.post.likeUsersId.indexOf(this.mainService.userId) > -1;
    };
    PostItemComponent.prototype.isUnLike = function () {
        return this.post.unlikeUsersId.indexOf(this.mainService.userId) > -1;
    };
    PostItemComponent.prototype.dislike = function () {
        var _this = this;
        if (this.post.createdUserId !== this.mainService.userId) {
            this.postService.dislikePost(this.post._id).subscribe(function (d) {
                if (d.type) {
                    _this.removeLike();
                }
            }, function (e) {
                console.log(e);
            });
        }
    };
    PostItemComponent.prototype.removeDislike = function () {
        var _this = this;
        this.postService.removeDislikePost(this.post._id).subscribe(function (d) {
            if (d.type) {
                _this.updated.emit('udpated');
            }
        }, function (e) {
            console.log(e);
        });
    };
    PostItemComponent.prototype.like = function () {
        var _this = this;
        if (this.post.createdUserId !== this.mainService.userId) {
            this.postService.likePost(this.post._id).subscribe(function (d) {
                if (d.type) {
                    _this.removeDislike();
                }
            }, function (e) {
                console.log(e);
            });
        }
    };
    PostItemComponent.prototype.removeLike = function () {
        var _this = this;
        this.postService.removeLikePost(this.post._id).subscribe(function (d) {
            if (d.type) {
                _this.updated.emit('udpated');
            }
        }, function (e) {
            console.log(e);
        });
    };
    PostItemComponent.prototype.reportDiagToggle = function () {
        this.showReport = true;
        if (this.showReport) {
            this.diagBackgroundStyle = {
                'position': 'fixed',
                'width': '100%',
                'height': (document.getElementsByClassName('main-content')[0].getClientRects()[0].height + 500) + 'px',
                'z-index': 11,
                'top': 0,
                'left': 0,
                'background': 'rgba(255, 0, 0, 0.1)'
            };
            var scroll = document.getElementsByClassName('ps-scrollbar-y-rail')[1];
            this.diagStyle = {
                'width': '500px',
                'position': 'fixed',
                'left': 'calc(50% - 250px)',
                'top': "calc(" + (scroll ? scroll.style.top : document.querySelector('.perfect-scrollbar-off .main-panel').scrollTop + 'px') + " + 50% - 200px)"
            };
        }
    };
    PostItemComponent.prototype.report = function () {
        var _this = this;
        this.postService.reportPost(this.post._id, this.reportText).subscribe(function (d) {
            if (d.type) {
                _this.updated.emit('udpated');
            }
        }, function (e) {
            console.log(e);
        });
        this.showReport = false;
    };
    PostItemComponent.prototype.hideDiag = function () {
        this.showReport = false;
    };
    PostItemComponent.prototype.quote = function () {
        var quoteString = "<div><blockquote>\n      \"" + this.post.text + "\"\n      <p style=\"font-style: italic\">" + this.mainService.userDisplayNames[this.post.createdUserId] + "</p>\n    </blockquote></div><div></div>";
        copy(quoteString);
        this.mainService.editor.execCommand('mceInsertContent', false, quoteString);
        this.quoted.emit(quoteString);
    };
    return PostItemComponent;
}());
__decorate([
    core_1.Input('post'),
    __metadata("design:type", Object)
], PostItemComponent.prototype, "post", void 0);
__decorate([
    core_1.Input('isReported'),
    __metadata("design:type", Object)
], PostItemComponent.prototype, "isReported", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PostItemComponent.prototype, "updated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], PostItemComponent.prototype, "quoted", void 0);
PostItemComponent = __decorate([
    core_1.Component({
        selector: 'app-post-item',
        template: __webpack_require__("../../../../../src/app/dashboard/components/view-topic/post-item/post-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/view-topic/post-item/post-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _d || Object, typeof (_e = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _e || Object])
], PostItemComponent);
exports.PostItemComponent = PostItemComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=post-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/view-topic/view-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "small {\n  color: white !important;\n  font-style: italic;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/view-topic/view-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card row\" *ngIf=\"topic\">\n      <div class=\"card-header\" data-background-color=\"rose\">\n        <h3 [innerHTML]=\"topic.title\"></h3>\n        <small><h4>Created by {{mainService.userNames[topic.createdUserId]}} on {{mainService.getDateString(topic.createdDate)}}</h4></small>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"row col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <h5>\n            {{topic.text}}\n          </h5>\n        </div>\n        <div class=\"row\" *ngFor=\"let post of posts; let idx = index;\">\n          <app-post-item (updated)=\"getData()\" [isReported]=\"reported[idx]\" [post]=\"post\"></app-post-item>\n        </div>\n        <div>\n          <app-post-reply [topic]=\"topic\" (replied)=\"getData()\"></app-post-reply>\n        </div>\n      </div>\n      <div class=\"card-footer\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/view-topic/view-topic.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var topics_service_1 = __webpack_require__("../../../../../src/app/services/topics.service.ts");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var VIewTopicComponent = (function () {
    function VIewTopicComponent(route, router, mainService, topicsService, postService) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.topicsService = topicsService;
        this.postService = postService;
        this.posts = [];
        this.reportedPosts = [];
        this.reported = [];
    }
    VIewTopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.topicId = params['id'];
            if (_this.topicId) {
                _this.getData();
                _this.topicsService.increaseView(_this.topicId).subscribe(function (d) {
                    if (d.type === false) {
                        console.log(d);
                    }
                }, function (e) {
                    console.log(e);
                });
            }
        });
    };
    VIewTopicComponent.prototype.getData = function () {
        var _this = this;
        this.topicsService.getTopicById(this.topicId).subscribe(function (d) {
            if (d.type) {
                _this.topic = d.data;
            }
            else {
                console.log(d.msg);
            }
        }, function (e) {
            console.log(e);
        });
        this.postService.getPostsByTopicId(this.topicId).subscribe(function (d) {
            if (d.type) {
                _this.posts = d.data;
                _this.isReported();
            }
            else {
                console.log(d.msg);
            }
        }, function (e) {
            console.log(e);
        });
        this.postService.getReportedPosts().subscribe(function (d) {
            _this.reportedPosts = d;
            _this.isReported();
        }, function (e) {
            console.log(e);
        });
    };
    VIewTopicComponent.prototype.isReported = function () {
        var reportedPostIds = [];
        for (var i = 0; i < this.reportedPosts.length; i++) {
            if (this.reportedPosts[i].createdUserId === this.mainService.userId) {
                reportedPostIds.push(this.reportedPosts[i].postId);
            }
        }
        for (var i = 0; i < this.posts.length; i++) {
            if (reportedPostIds.indexOf(this.posts[i]._id) > -1) {
                this.reported[i] = true;
            }
        }
    };
    return VIewTopicComponent;
}());
VIewTopicComponent = __decorate([
    core_1.Component({
        selector: 'app-view-topic',
        template: __webpack_require__("../../../../../src/app/dashboard/components/view-topic/view-topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/view-topic/view-topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof topics_service_1.TopicsService !== "undefined" && topics_service_1.TopicsService) === "function" && _d || Object, typeof (_e = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _e || Object])
], VIewTopicComponent);
exports.VIewTopicComponent = VIewTopicComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=view-topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/add-club/add-club.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel .panel-body {\n  padding: 10px 0px;\n}\n\n.panel .panel-body .checkbox {\n  margin-top: 0px;\n}\n\n.repeat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.row {\n  padding: 0 20px;\n}\n\n.m-t-m-15 {\n  margin-top: -15px;\n}\n\n.m-t-m-10 {\n  margin-top: -10px;\n}\n\n.m-l-15 {\n  margin-left: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/add-club/add-club.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <legend>Add a Club</legend>\n  </div>\n  <div class=\"card-content\">\n    <form (submit)=\"addClub($event)\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Club Name</label>\n            <input class=\"form-control\" required [(ngModel)]=\"club.title\" name=\"title\" />\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Club Address</label>\n            <input class=\"form-control\" id=\"clubAddress\" [(ngModel)]=\"club.address\" name=\"address\" required (keyup)=\"locationChange($event)\"/>\n          </div>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n          <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n            <div class=\"fileinput-new thumbnail\">\n              <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" #clubImg>\n            </div>\n            <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n            <div>\n              <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n                  <span class=\"fileinput-new\">Select image</span>\n                  <span class=\"fileinput-exists\">Select image</span>\n                  <input type=\"file\" name=\"...\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged = true\" />\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div id=\"regularMap\" class=\"map\"></div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                <h4 class=\"panel-title\">\n                  Meets up...\n                  <i class=\"material-icons\">keyboard_arrow_down</i>\n                </h4>\n              </a>\n            </div>\n            <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                    <label>\n                      <input type=\"checkbox\" [(ngModel)]=\"club.irregularly\" name=\"type\">  Irregularly\n                    </label>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                    <label>\n                      <input type=\"checkbox\" [(ngModel)]=\"club.regularly\" name=\"type\">  Regularly\n                    </label>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">Every</label>\n                  <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 m-t-m-15\">\n                    <input type=\"number\" min=\"1\" class=\"form-control\" value=\"1\" required [(ngModel)]=\"club.regularPeriod\" name=\"regularPeriod\">\n                  </div>\n                  <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-6 m-t-m-10\">\n                    <select class=\"selectpicker\" data-style=\"select-with-transition\" required [(ngModel)]=\"club.regularType\" name=\"regularType\">\n                      <option value=\"weeks\">weeks</option>\n                      <option value=\"months\">months</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">On</label>\n                  <div class=\"col-lg-10\">\n                    <select class=\"selectpicker\" multiple data-style=\"select-with-transition\" required [(ngModel)]=\"club.dayOfWeek\" name=\"dayOfWeek\">\n                      <option>Sunday</option>\n                      <option>Monday</option>\n                      <option>Tuesday</option>\n                      <option>Wednesday</option>\n                      <option>Thursday</option>\n                      <option>Friday</option>\n                      <option>Saturday</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">At</label>\n                  <div class=\"col-md-10 m-t-m-15\">\n                    <input type=\"text\"class=\"form-control timepicker\" (blur)=\"timeChanged($event)\" [(ngModel)]=\"club.time\" name=\"time\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Physical Location</label>\n          <input class=\"form-control\" id=\"physicalLocation\" required [(ngModel)]=\"club.location\" name=\"location\" />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Email address</label>\n          <input class=\"form-control\" type=\"email\" required [(ngModel)]=\"club.email\" name=\"email\" />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Link to website</label>\n          <input class=\"form-control\" [(ngModel)]=\"club.websiteLink\" name=\"websiteLink\" />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Link to Facebook page</label>\n          <input class=\"form-control\" [(ngModel)]=\"club.facebookLink\" name=\"facebookLink\" />\n        </div>\n      </div>\n\n      <input type=\"submit\" class=\"btn btn-fill btn-rose pull-right\" value=\"Create New Club\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/add-club/add-club.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ng2_cloudinary_1 = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var initDateTimePicker = __webpack_require__("../../../../../src/assets/js/init/initDatetimepickers.js");
var AddClubComponent = (function () {
    function AddClubComponent(mainService) {
        var _this = this;
        this.mainService = mainService;
        this.imgChanged = false;
        this.clubAdded = new core_1.EventEmitter();
        window.addClubComponent = this;
        this.uploader = new ng2_cloudinary_1.CloudinaryUploader(new ng2_cloudinary_1.CloudinaryOptions({
            cloudName: this.mainService.cloudName,
            uploadPreset: this.mainService.cloudinaryUploadPresets.clubs
        }));
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var img = JSON.parse(response);
            _this.club.imgUrl = img.public_id;
            return { item: item, response: response, status: status, headers: headers };
        };
        this.uploader.onCompleteAll = function () {
            _this.save();
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            $.notify({
                icon: 'notifications',
                message: 'Image Upload Failed'
            }, {
                type: 'success',
                timer: 3000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        };
        this.club = {
            title: '',
            address: '',
            type: '',
            imgUrl: '',
            regularType: '',
            regularPeriod: '',
            dayOfWeek: '',
            time: '',
            starting: '',
            location: '',
            email: '',
            websiteLink: '',
            facebookLink: ''
        };
    }
    AddClubComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: true
        };
        var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
        map.addListener('click', this.mapLocationChange);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Regular Map!'
        });
        marker.setMap(map);
        $('.selectpicker').selectpicker();
        initDateTimePicker();
    };
    AddClubComponent.prototype.mapLocationChange = function (e) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': e.latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    var myLatlng = e.latLng;
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        title: 'Regular Map!'
                    });
                    var mapOptions = {
                        zoom: 8,
                        center: myLatlng,
                        scrollwheel: true
                    };
                    $('#clubAddress').val(results[1].formatted_address);
                    $('#clubAddress').parent().removeClass('is-empty');
                    $('#clubAddress').parent().removeClass('has-error');
                    var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
                    map.addListener('click', window.addClubComponent.mapLocationChange);
                    marker.setMap(map);
                }
                else {
                    console.log('results not found');
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    };
    AddClubComponent.prototype.save = function () {
        var _this = this;
        console.log(this.club);
        this.mainService.addClub(this.club).subscribe(function (d) {
            _this.mainService.loading = false;
            _this.club = {
                title: '',
                address: '',
                type: '',
                imgUrl: '',
                regularType: '',
                regularPeriod: '',
                dayOfWeek: '',
                time: '',
                starting: '',
                location: '',
                email: '',
                websiteLink: '',
                facebookLink: ''
            };
            _this.clubAdded.emit('club added');
        }, function (e) {
            _this.mainService.loading = false;
            console.log(e);
        });
        return false;
    };
    AddClubComponent.prototype.addClub = function (evt) {
        if (this.imgChanged) {
            this.uploader.uploadAll();
        }
        else {
            this.save();
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
                map.addListener('click', window.addClubComponent.mapLocationChange);
                marker.setMap(map);
            }
            else {
            }
        });
    };
    AddClubComponent.prototype.timeChanged = function (evt) {
        this.club.time = evt.target.value;
    };
    return AddClubComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AddClubComponent.prototype, "clubAdded", void 0);
AddClubComponent = __decorate([
    core_1.Component({
        selector: 'app-add-club',
        template: __webpack_require__("../../../../../src/app/dashboard/connect/clubs/add-club/add-club.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/connect/clubs/add-club/add-club.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], AddClubComponent);
exports.AddClubComponent = AddClubComponent;
var _a, _b;
//# sourceMappingURL=add-club.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-header input {\n  font-size: 30px;\n}\n\n.featured-image {\n  max-width: 210px;\n  padding: 30px;\n}\n\n.container-fluid > .row > .card > .card-content {\n  padding: 0 80px;\n}\n\n.panel .panel-body .checkbox {\n  margin-top: 0px;\n}\n\n.repeat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.row {\n  padding: 0 20px;\n}\n\n.m-t-m-15 {\n  margin-top: -15px;\n}\n\n.m-t-m-10 {\n  margin-top: -10px;\n}\n\n.m-l-15 {\n  margin-left: 15px;\n}\n\ni {\n  cursor: pointer;\n}\n\n.events .card-content {\n  transition: max-height 0.2s;\n  transition: padding 0.2s;\n  max-height: 1000px;\n  overflow: auto;\n}\n\n.events .card-content.collpased {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content club-members-list\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div *ngIf=\"canEdit && club.title\" class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"featured-image col-xs-5\">\n              <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                <div class=\"fileinput-new thumbnail\">\n                  <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" #clubImg *ngIf=\"imgChanged\">\n                  <cl-image *ngIf=\"!imgChanged\" data-u=\"image\" public-id=\"{{club.imgUrl}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"150\" width=\"150\" format=\"gif\">\n                  </cl-image>\n                </div>\n                <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                <div>\n                <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n                    <span class=\"fileinput-new\">Select image</span>\n                    <span class=\"fileinput-exists\">Select image</span>\n                    <input type=\"file\" name=\"...\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged = true\" />\n                </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-7\">\n              <div class=\"form-group \">\n                <label class=\"control-label\">Title</label>\n                <input class=\"form-control\" required [(ngModel)]=\"club.title\" name=\"title\" />\n              </div>\n              <div class=\"form-group \">\n                <label class=\"control-label\">Address</label>\n                <input class=\"form-control\" id=\"clubAddress\" [(ngModel)]=\"club.address\" name=\"address\" required (keyup)=\"locationChange($event)\"/>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div id=\"regularMap\" class=\"map\"></div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  <h4 class=\"panel-title\">\n                    Meets up...\n                    <i class=\"material-icons\">keyboard_arrow_down</i>\n                  </h4>\n                </a>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                      <label>\n                        <input type=\"checkbox\" [(ngModel)]=\"club.irregularly\" name=\"regularflag\">  Irregularly\n                      </label>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                      <label>\n                        <input type=\"checkbox\" [(ngModel)]=\"club.regularly\" name=\"irregularflag\">  Regularly\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"row repeat\">\n                    <label class=\"col-sm-2 label-on-left\">Every</label>\n                    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 m-t-m-15\">\n                      <input type=\"number\" min=\"1\" class=\"form-control\" required [(ngModel)]=\"club.regularPeriod\" name=\"regularPeriod\">\n                    </div>\n                    <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-6 m-t-m-10\">\n                      <ss-multiselect-dropdown [options]=\"regularTypeSelectOption\" [settings]=\"regularTypeSettings\" [(ngModel)]=\"club.regularType\" name=\"regularType\"></ss-multiselect-dropdown>\n                    </div>\n                  </div>\n                  <div class=\"row repeat\">\n                    <label class=\"col-sm-2 label-on-left\">On</label>\n                    <div class=\"col-sm-10\">\n                      <ss-multiselect-dropdown [options]=\"weeksSelectOption\" [settings]=\"selectSettings\" [(ngModel)]=\"club.dayOfWeek\" name=\"dayOfWeek\"></ss-multiselect-dropdown>\n                    </div>\n                  </div>\n                  <div class=\"row repeat\">\n                    <label class=\"col-sm-2 label-on-left\">At</label>\n                    <div class=\"col-md-10 m-t-m-15\">\n                      <input type=\"text\"class=\"form-control club-detail-timepicker\" (blur)=\"timeChanged($event)\" [value]=\"club.time\" name=\"time\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group \">\n              <label class=\"control-label\">Physical Location</label>\n              <input class=\"form-control\" id=\"physicalLocation\" required [(ngModel)]=\"club.location\" name=\"location\" />\n            </div>\n            <div class=\"form-group \">\n              <label class=\"control-label\">Email address</label>\n              <input class=\"form-control\" type=\"email\" required [(ngModel)]=\"club.email\" name=\"email\" />\n            </div>\n            <div class=\"form-group \">\n              <label class=\"control-label\">Link to website</label>\n              <input class=\"form-control\" [(ngModel)]=\"club.websiteLink\" name=\"websiteLink\" />\n            </div>\n            <div class=\"form-group \">\n              <label class=\"control-label\">Link to Facebook page</label>\n              <input class=\"form-control\" [(ngModel)]=\"club.facebookLink\" name=\"facebookLink\" />\n            </div>\n          </div>\n\n          <div class=\"row events\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h3>\n                  {{upcomingEvents.length}} upcoming events\n                  <i class=\"material-icons pull-right\" (click)=\"expanded = false\" *ngIf=\"expanded\">expand_less</i>\n                  <i class=\"material-icons pull-right\" (click)=\"expanded = true\" *ngIf=\"!expanded\">expand_more</i>\n                  <i class=\"material-icons pull-right\" (click)=\"addEvent()\">alarm_add</i>\n                </h3>\n              </div>\n              <div [class]=\"expanded ? 'card-content' : 'card-content collpased'\">\n                <h4 *ngIf=\"!upcomingEvents || !upcomingEvents.length\">No upcoming events</h4>\n                <div *ngFor=\"let evt of upcomingEvents; let idx = index;\">\n                  <app-event [event]=\"evt\" [datafilled]=\"evt.date && evt.title\" (updated)=\"eventUpdated(evt, $event)\" (delete)=\"removeEvent(idx)\" (save)=\"saveClub($event)\"></app-event>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <button (click)=\"saveClub($event)\" class=\"btn btn-fill btn-rose pull-right\" [disabled]=\"isNotChanged()\">Save Changes</button>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"!canEdit && club.title\" class=\"card\">\n        <div class=\"card-header\">\n          <h3>{{club.title}}</h3>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"row\">\n            <div class=\"featured-image col-xs-5\">\n              <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                <div class=\"fileinput-new thumbnail\">\n                  <cl-image data-u=\"image\" public-id=\"{{club.imgUrl}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"150\" width=\"150\" format=\"jpg\">\n                  </cl-image>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-7\">\n              <div class=\"form-group \">\n                <label class=\"control-label\">Address</label>\n                <input class=\"form-control\" [value]=\"club.address\" readonly/>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div id=\"regularMap1\" class=\"map\"></div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingOne1\">\n                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne1\" aria-expanded=\"true\" aria-controls=\"collapseOne1\">\n                  <h4 class=\"panel-title\">\n                    Meets up...\n                    <i class=\"material-icons\">keyboard_arrow_down</i>\n                  </h4>\n                </a>\n              </div>\n              <div id=\"collapseOne1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne1\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                      <label>\n                        <input type=\"checkbox\" [value]=\"club.irregularly\" readonly [disabled]=\"true\">  Irregularly\n                      </label>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                      <label>\n                        <input type=\"checkbox\" [value]=\"club.regularly\" readonly [disabled]=\"true\">  Regularly\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"row repeat\">\n                    <label class=\"col-sm-2 label-on-left\">Every</label>\n                    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 m-t-m-15\">\n                      <input type=\"number\" min=\"1\" class=\"form-control\" required [value]=\"club.regularPeriod\" readonly>\n                    </div>\n                    <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-6 m-t-m-10\">\n                      <input class=\"form-control\" required readonly [value]=\"club.regularType\" />\n                    </div>\n                  </div>\n                  <div class=\"row repeat\">\n                    <label class=\"col-sm-2 label-on-left\">On</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" readonly [value]=\"club.dayOfWeek\" />\n                    </div>\n                  </div>\n                  <div class=\"row repeat\">\n                    <label class=\"col-sm-2 label-on-left\">At</label>\n                    <div class=\"col-md-10 m-t-m-15\">\n                      <input type=\"text\" class=\"form-control\" readonly [value]=\"club.time\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group \">\n              <label class=\"control-label\">Physical Location</label>\n              <input class=\"form-control\" required [value]=\"club.location\" readonly/>\n            </div>\n            <div class=\"form-group \">\n              <label class=\"control-label\">Email address</label>\n              <input class=\"form-control\" type=\"email\" required [value]=\"club.email\" readonly/>\n            </div>\n            <div class=\"form-group \">\n              <label class=\"control-label\">Link to website</label>\n              <input class=\"form-control\" [value]=\"club.websiteLink\" readonly/>\n            </div>\n            <div class=\"form-group \">\n              <label class=\"control-label\">Link to Facebook page</label>\n              <input class=\"form-control\" [value]=\"club.facebookLink\" readonly/>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var ng2_cloudinary_1 = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var ClubDetailComponent = (function () {
    function ClubDetailComponent(mainService, storageService, router, route) {
        var _this = this;
        this.mainService = mainService;
        this.storageService = storageService;
        this.router = router;
        this.route = route;
        this.canEdit = false;
        window.editClubComponent = this;
        this.uploader = new ng2_cloudinary_1.CloudinaryUploader(new ng2_cloudinary_1.CloudinaryOptions({
            cloudName: this.mainService.cloudName,
            uploadPreset: this.mainService.cloudinaryUploadPresets.clubs
        }));
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var img = JSON.parse(response);
            _this.club.imgUrl = img.public_id;
            return { item: item, response: response, status: status, headers: headers };
        };
        this.uploader.onCompleteAll = function () {
            _this.save();
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            $.notify({
                icon: 'notifications',
                message: 'Image Upload Failed'
            }, {
                type: 'success',
                timer: 3000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        };
    }
    ClubDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectSettings = {
            checkedStyle: 'fontawesome',
            containerClasses: '',
            buttonClasses: 'btn-group select-with-transition form-control text-left',
            itemClasses: 'w-100',
            dynamicTitleMaxItems: 7
        };
        this.weeksSelectOption = [
            { id: 'Monday', name: 'Monday' },
            { id: 'Tuesday', name: 'Tuesday' },
            { id: 'Wednesday', name: 'Wednesday' },
            { id: 'Thursday', name: 'Thursday' },
            { id: 'Friday', name: 'Friday' },
            { id: 'Saturday', name: 'Saturday' },
            { id: 'Sunday', name: 'Sunday' },
        ];
        this.regularTypeSettings = {
            checkedStyle: 'fontawesome',
            containerClasses: '',
            buttonClasses: 'btn-group select-with-transition form-control text-left',
            itemClasses: 'w-100',
            dynamicTitleMaxItems: 3,
            selectionLimit: 1,
            autoUnselect: true,
            closeOnSelect: true
        };
        this.regularTypeSelectOption = [
            { id: 'weeks', name: 'Weeks' },
            { id: 'months', name: 'Months' }
        ];
        this.canEdit = this.mainService.userRole === 'admin';
        this.imgChanged = false;
        this.eventChanged = false;
        this.club = {
            title: '',
            address: '',
            type: '',
            imgUrl: '',
            regularType: '',
            regularPeriod: '',
            dayOfWeek: '',
            time: '',
            starting: '',
            location: '',
            email: '',
            websiteLink: '',
            facebookLink: ''
        };
        this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.clubId = id;
            _this.getClub();
        });
    };
    ClubDetailComponent.prototype.ngAfterViewChecked = function () {
        if (this.club) {
            $('.club-detail-selectpicker').selectpicker();
            $('.club-detail-timepicker').datetimepicker({
                format: 'h:mm A',
                icons: {
                    time: 'fa fa-clock-o',
                    date: 'fa fa-calendar',
                    up: 'fa fa-chevron-up',
                    down: 'fa fa-chevron-down',
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove',
                    inline: true
                }
            });
        }
    };
    ClubDetailComponent.prototype.getClub = function () {
        var _this = this;
        this.mainService.getClubById(this.clubId).subscribe(function (d) {
            if (d.type) {
                _this.club = d.club;
                _this.orgClub = {};
                var keys = Object.keys(_this.club);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    _this.orgClub[key] = _this.club[key];
                }
                var taggedUserNames = _this.club.taggedUsers.map(function (val, index) {
                    return val.user;
                });
                var tagIdx = taggedUserNames.indexOf(_this.mainService.username);
                if (tagIdx > -1) {
                    _this.clubTag = _this.club.taggedUsers[tagIdx];
                    _this.canEdit = _this.clubTag.memberType === 'admin';
                }
                _this.canEdit = _this.canEdit || _this.mainService.userRole === 'admin';
                _this.upcomingEvents = [];
                _this.orgUpcomingEvents = [];
                _this.pastEvents = [];
                if (_this.club.events) {
                    for (var _a = 0, _b = _this.club.events; _a < _b.length; _a++) {
                        var event = _b[_a];
                        var eventDate = new Date(event.date);
                        var today = new Date();
                        today = new Date(today.toUTCString());
                        if (today.getTime() < eventDate.getTime()) {
                            event.defaultEvt = true;
                            _this.upcomingEvents.push(event);
                            _this.orgUpcomingEvents.push({
                                title: event.title,
                                date: event.date,
                                location: event.location,
                                imgUrl: event.imgUrl,
                                description: event.description,
                            });
                        }
                        else {
                            _this.pastEvents.push(event);
                        }
                    }
                }
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'address': _this.club.address }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        var myLatlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                        var mapOptions = {
                            zoom: 8,
                            center: myLatlng,
                            scrollwheel: true,
                            fullscreenControl: false
                        };
                        var map = void 0;
                        if (document.getElementById('regularMap')) {
                            map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
                            map.addListener('click', window.editClubComponent.mapLocationChange);
                        }
                        else {
                            map = new google.maps.Map(document.getElementById('regularMap1'), mapOptions);
                        }
                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            title: 'Regular Map!'
                        });
                        marker.setMap(map);
                    }
                });
            }
        }, function (e) {
            console.log(e);
        });
    };
    ClubDetailComponent.prototype.save = function () {
        var _this = this;
        this.club.events = this.upcomingEvents.slice();
        this.mainService.updateClub(this.club).subscribe(function (d) {
            if (d.type) {
                _this.imgChanged = false;
                _this.getClub();
            }
        }, function (e) {
            _this.mainService.loading = false;
            console.log(e);
        });
        return false;
    };
    ClubDetailComponent.prototype.saveClub = function (evt) {
        if (this.imgChanged) {
            this.uploader.uploadAll();
        }
        else {
            this.save();
        }
        return false;
    };
    ClubDetailComponent.prototype.timeChanged = function (evt) {
        this.club.time = evt.target.value;
    };
    ClubDetailComponent.prototype.isNotChanged = function () {
        var flag = !this.imgChanged;
        var keys = Object.keys(this.club);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            flag = flag && this.club[key] === this.orgClub[key];
        }
        if ($('.event-container.has-error').length === 0) {
            flag = flag && this.upcomingEvents.length === this.orgUpcomingEvents.length;
            for (var i = 0; i < this.upcomingEvents.length; i++) {
                flag = flag && this.upcomingEvents[i].title === this.orgUpcomingEvents[i].title
                    && this.upcomingEvents[i].date === this.orgUpcomingEvents[i].date
                    && this.upcomingEvents[i].description === this.orgUpcomingEvents[i].description
                    && this.upcomingEvents[i].location === this.orgUpcomingEvents[i].location
                    && this.upcomingEvents[i].imgUrl === this.orgUpcomingEvents[i].imgUrl;
            }
        }
        return flag;
    };
    ClubDetailComponent.prototype.addEvent = function () {
        var newEvent = {
            title: '',
            date: '',
            location: '',
            imgUrl: '',
            description: '',
            notificationText: '',
            notifyDate: '',
            clubId: this.clubId,
            createdUserId: this.mainService.userId,
            createdDate: new Date()
        };
        this.upcomingEvents.push(newEvent);
        this.expanded = true;
    };
    ClubDetailComponent.prototype.eventUpdated = function (evt, newEvt) {
        evt = newEvt;
        this.eventChanged = true;
    };
    ClubDetailComponent.prototype.removeEvent = function (idx) {
        this.upcomingEvents.splice(idx, 1);
        this.saveClub('deleted');
    };
    ClubDetailComponent.prototype.mapLocationChange = function (e) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': e.latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    var myLatlng = e.latLng;
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        title: 'Regular Map!'
                    });
                    var mapOptions = {
                        zoom: 8,
                        center: myLatlng,
                        scrollwheel: true
                    };
                    $('#clubAddress').val(results[1].formatted_address);
                    $('#clubAddress').parent().removeClass('is-empty');
                    $('#clubAddress').parent().removeClass('has-error');
                    var map = document.getElementById('regularMap') ?
                        new google.maps.Map(document.getElementById('regularMap'), mapOptions) :
                        new google.maps.Map(document.getElementById('regularMap1'), mapOptions);
                    map.addListener('click', window.editClubComponent.mapLocationChange);
                    marker.setMap(map);
                }
                else {
                    console.log('results not found');
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    };
    ClubDetailComponent.prototype.locationChange = function (evt) {
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
                    scrollwheel: true,
                    fullscreenControl: false
                };
                var map = document.getElementById('regularMap') ?
                    new google.maps.Map(document.getElementById('regularMap'), mapOptions) :
                    new google.maps.Map(document.getElementById('regularMap1'), mapOptions);
                map.addListener('click', window.editClubComponent.mapLocationChange);
                marker.setMap(map);
            }
            else {
            }
        });
    };
    return ClubDetailComponent;
}());
ClubDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-club-detail',
        template: __webpack_require__("../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object])
], ClubDetailComponent);
exports.ClubDetailComponent = ClubDetailComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=club-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/club/club.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px 40px;\n}\n\n.card .card-content > span {\n  width: calc(100% - 50px);\n  padding: 0 30px;\n}\n\n.card .card-content > span .club-title {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.card .card-content > span > span {\n  display: block;\n}\n\n.hover {\n  cursor: pointer;\n}\n\n.editDiag {\n  position: fixed;\n  left: calc(50% - 300px);\n  top: calc(50% - 200px);\n  width: 500px;\n  z-index: 101;\n}\n\n.editDiag > .card-content {\n  display: block;\n}\n\n.transparent-panel {\n  width: 100%;\n  height: 100%;\n  background: rgba(250, 0, 0, 0.1);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  z-index: 100;\n}\n\n.select-member {\n  margin-top: 30px;\n  height: 90px;\n}\n\n.edit {\n  display: block !important;\n  padding: 0 50px;\n}\n\n.edit > div {\n  display: block;\n}\n\ni {\n  margin-left: 7px;\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/club/club.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <cl-image data-u=\"image\" public-id=\"{{club.imgUrl}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"80\" width=\"80\" format=\"gif\">\n    </cl-image>\n    <span>\n        <span class=\"club-title\">\n          <a [routerLink]=\"['club/' + club._id]\" *ngIf=\"club.tagged && club.tagConfirmed\">{{club.title}}</a>\n          <a *ngIf=\"!club.tagged || !club.tagConfirmed\">{{club.title}}</a>\n          <small>{{club.tagged ? '   -- You tagged yourself as ' + (club.taggedUsers[club.taggedIndex].memberState === 'active' ? 'an ' : 'a ')\n            + club.taggedUsers[club.taggedIndex].memberState + ' ' + club.taggedUsers[club.taggedIndex].memberType + ' of this club'\n            + (!club.tagConfirmed ? ' (waiting for approval)' : '')\n            : ''}}</small>\n        </span>\n        <span class=\"club-desciption\">Every {{club.dayOfWeek}} at {{club.time}}, {{club.activeMembers + club.pastMembers}} members</span>\n    </span>\n    <i class=\"material-icons hover delete-icon\" (click)=\"clubDelete()\" *ngIf=\"isMine(club)\">delete</i>\n    <i class=\"material-icons hover\" (click)=\"showEditDiag = !showEditDiag\">info</i>\n  </div>\n\n  <div class=\"card-footer\" *ngIf=\"showEditDiag\">\n    <div class=\"edit\">\n      <p>Location: {{club.location}}</p>\n      <p>{{club.activeMembers}} active members, {{club.pastMembers}} past members</p>\n      <p>Meets on {{club.dayOfWeek}}s at {{club.time}}</p>\n      <div class=\"select-member\" *ngIf=\"!club.tagged\">\n        <p>I am a ...</p>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n          <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberState\" name=\"memberState\">\n            <option value=\"active\">Active</option>\n            <option value=\"past\">Past</option>\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n          <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberType\" name=\"memberType\">\n            <option value=\"member\">Member</option>\n            <option value=\"admin\">Admin</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"text-right\">\n        <button class=\"btn btn-success btn-sm\" (click)=\"tag()\" *ngIf=\"!club.tagged\">Tag myself with this club</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"unTag()\" *ngIf=\"club.tagged && club.tagConfirmed\">Untag this club</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"transparent-panel\" *ngIf=\"showDiag\" (click)=\"cancel()\">\n</div>\n\n\n<div class=' {{ showDiag ? \"card editDiag\" : \"card editDiag hidden\" }} ' #editDiag>\n  <div class=\"card-content\">\n    <h2>{{club.title}}</h2>\n    <p>{{club.location}}</p>\n    <p>{{club.activeMembers}} active members, {{club.pastMembers}} past members</p>\n    <p>Meets on {{club.dayOfWeek}}s at {{club.time}}</p>\n    <div class=\"select-member\">\n      <p>I am a ...</p>\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberState\" name=\"memberState\">\n          <option value=\"active\">Active</option>\n          <option value=\"past\">Past</option>\n        </select>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberType\" name=\"memberType\">\n          <option value=\"member\">Member</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-success pull-right\" (click)=\"tag()\" *ngIf=\"!club.tagged\">Tag myself with this club</button>\n    <button class=\"btn btn-danger pull-right\" (click)=\"unTag()\" *ngIf=\"club.tagged\">Untag myself with this club</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/club/club.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ClubComponent = (function () {
    function ClubComponent(mainService) {
        this.mainService = mainService;
        this.showDiag = false;
        this.memberState = 'active';
        this.memberType = 'member';
        this.tagChanged = new core_1.EventEmitter();
        this.showEditDiag = false;
    }
    ClubComponent.prototype.ngOnInit = function () {
    };
    ClubComponent.prototype.ngAfterViewChecked = function () {
        $('.selectpicker').selectpicker();
    };
    ClubComponent.prototype.editClick = function () {
        this.showDiag = true;
    };
    ClubComponent.prototype.confirm = function () {
        this.showDiag = false;
        this.showEditDiag = false;
    };
    ClubComponent.prototype.cancel = function () {
        this.showDiag = false;
        this.showEditDiag = false;
    };
    ClubComponent.prototype.tag = function () {
        var _this = this;
        this.mainService.tagClub(this.club._id, this.memberState, this.memberType).subscribe(function (d) { _this.tagChanged.emit('tagged'); _this.confirm(); }, function (e) { console.log(e); });
    };
    ClubComponent.prototype.unTag = function () {
        var _this = this;
        this.mainService.untagClub(this.club._id).subscribe(function (d) { _this.tagChanged.emit('untagged'); _this.confirm(); }, function (e) { console.log(e); });
    };
    ClubComponent.prototype.isMine = function (club) {
        return club.username === localStorage.getItem('username');
    };
    ClubComponent.prototype.clubDelete = function () {
        var _this = this;
        this.mainService.removeClub(this.club._id).subscribe(function (d) {
            _this.tagChanged.emit('club removed');
        }, function (e) { console.log(e); });
    };
    return ClubComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ClubComponent.prototype, "club", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ClubComponent.prototype, "tagChanged", void 0);
__decorate([
    core_1.ViewChild('editDiag'),
    __metadata("design:type", Object)
], ClubComponent.prototype, "editDiag", void 0);
ClubComponent = __decorate([
    core_1.Component({
        selector: 'app-club',
        template: __webpack_require__("../../../../../src/app/dashboard/connect/clubs/club/club.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/connect/clubs/club/club.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], ClubComponent);
exports.ClubComponent = ClubComponent;
var _a, _b;
//# sourceMappingURL=club.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/clubs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/clubs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n            <app-club *ngFor=\"let club of clubs\" [club] = \"club\" (tagChanged)=\"getClubs()\" ></app-club>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n            <app-add-club (clubAdded)=\"clubAdded()\" ></app-add-club>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/clubs/clubs.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ClubsComponent = (function () {
    function ClubsComponent(mainService) {
        this.mainService = mainService;
    }
    ClubsComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    ClubsComponent.prototype.getClubs = function () {
        var _this = this;
        this.mainService.getConfirmedClubs().subscribe(function (d) {
            _this.clubs = d.data;
            for (var i = 0; i < _this.clubs.length; i++) {
                var taggedUsers = _this.clubs[i].taggedUsers.map(function (val, index) { return val.user; });
                var index = taggedUsers.indexOf(localStorage.getItem('username'));
                if (index !== -1) {
                    _this.clubs[i].tagged = true;
                    _this.clubs[i].tagConfirmed = _this.clubs[i].taggedUsers[index].confirmed;
                    _this.clubs[i].taggedIndex = index;
                }
                else {
                    _this.clubs[i].tagged = false;
                }
            }
            _this.mainService.loading = false;
        }, function (e) { console.log(e); _this.mainService.loading = false; });
    };
    ClubsComponent.prototype.clubAdded = function () {
        $.notify({
            icon: 'notifications',
            message: 'Your new club request is under review'
        }, {
            timer: 3000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    return ClubsComponent;
}());
ClubsComponent = __decorate([
    core_1.Component({
        selector: 'clubs-cmp ',
        template: __webpack_require__("../../../../../src/app/dashboard/connect/clubs/clubs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/connect/clubs/clubs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ClubsComponent);
exports.ClubsComponent = ClubsComponent;
var _a;
//# sourceMappingURL=clubs.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/meetings/meetings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/meetings/meetings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
        template: __webpack_require__("../../../../../src/app/dashboard/connect/meetings/meetings.component.html")
    })
], MeetingsComponent);
exports.MeetingsComponent = MeetingsComponent;
//# sourceMappingURL=meetings.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/connect/people/people.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
        template: __webpack_require__("../../../../../src/app/dashboard/connect/people/people.component.html")
    })
], PeopleComponent);
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var ng2_cloudinary_1 = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var ngx_color_picker_1 = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
var footer_module_1 = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
var sidebar_module_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
var navbar_module_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
var angular_2_dropdown_multiselect_1 = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
var dashboard_routes_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.routes.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/dashboard/users/profile/profile.component.ts");
var add_edit_component_1 = __webpack_require__("../../../../../src/app/dashboard/setups/add-edit/add-edit.component.ts");
var club_detail_line_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-clubs/club-detail-line/club-detail-line.component.ts");
var uploader_component_1 = __webpack_require__("../../../../../src/app/dashboard/setups/uploader/uploader.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/dashboard/about/about.component.ts");
var setup_detail_component_1 = __webpack_require__("../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.ts");
var manage_setups_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.ts");
var add_forum_component_1 = __webpack_require__("../../../../../src/app/dashboard/discuss/forums/add-forum/add-forum.component.ts");
var manage_forums_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.ts");
var forums_list_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/forums-list/forums-list.component.ts");
var topics_list_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/topics-list/topics-list.component.ts");
var posts_list_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/posts-list/posts-list.component.ts");
var add_dialog_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/add-dialog/add-dialog.component.ts");
var view_topic_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/view-topic/view-topic.component.ts");
var post_item_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/view-topic/post-item/post-item.component.ts");
var post_reply_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/post-reply/post-reply.component.ts");
var reported_posts_list_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/reported-posts-list/reported-posts-list.component.ts");
var club_members_list_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.ts");
var club_detail_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.ts");
var event_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/event/event.component.ts");
var manage_articles_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.ts");
var article_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/article/article.component.ts");
var add_article_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/add-article/add-article.component.ts");
var edit_article_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/edit-article/edit-article.component.ts");
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
            forms_1.FormsModule,
            ng2_cloudinary_1.Ng2CloudinaryModule,
            ngx_color_picker_1.ColorPickerModule,
            ng2_file_upload_1.FileUploadModule,
            angular_2_dropdown_multiselect_1.MultiselectDropdownModule
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS, profile_component_1.ProfileComponent, add_edit_component_1.AddEditComponent, club_detail_line_component_1.ClubDetailLineComponent, uploader_component_1.UploaderComponent,
            about_component_1.AboutComponent, setup_detail_component_1.SetupDetailComponent, manage_setups_component_1.ManageSetupsComponent, add_forum_component_1.AddForumComponent, manage_forums_component_1.ManageForumsComponent,
            forums_list_component_1.ForumsListComponent, topics_list_component_1.TopicsListComponent, posts_list_component_1.PostsListComponent, add_dialog_component_1.AddDialogComponent, view_topic_component_1.VIewTopicComponent,
            post_item_component_1.PostItemComponent, post_reply_component_1.PostReplyComponent, reported_posts_list_component_1.ReportedPostsListComponent, club_members_list_component_1.ClubMembersListComponent, club_detail_component_1.ClubDetailComponent, event_component_1.EventComponent, manage_articles_component_1.ManageArticlesComponent, article_component_1.ArticleComponent, add_article_component_1.AddArticleComponent, edit_article_component_1.EditArticleComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { DashboardComponent } from './dashboard.component';
var home_component_1 = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
var clubs_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/clubs/clubs.component.ts");
var meetings_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/meetings/meetings.component.ts");
var people_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/people/people.component.ts");
var setups_component_1 = __webpack_require__("../../../../../src/app/dashboard/setups/setups.component.ts");
var forums_component_1 = __webpack_require__("../../../../../src/app/dashboard/discuss/forums/forums.component.ts");
var blogs_component_1 = __webpack_require__("../../../../../src/app/dashboard/discuss/blogs/blogs.component.ts");
var articles_component_1 = __webpack_require__("../../../../../src/app/dashboard/learn/articles/articles.component.ts");
var edit_article_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/edit-article/edit-article.component.ts");
var videos_component_1 = __webpack_require__("../../../../../src/app/dashboard/learn/videos/videos.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/dashboard/users/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/dashboard/users/register/register.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/dashboard/users/profile/profile.component.ts");
var club_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/clubs/club/club.component.ts");
var add_club_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/clubs/add-club/add-club.component.ts");
var add_edit_component_1 = __webpack_require__("../../../../../src/app/dashboard/setups/add-edit/add-edit.component.ts");
var setup_detail_component_1 = __webpack_require__("../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.ts");
var manage_clubs_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-clubs/manage-clubs.component.ts");
var manage_setups_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-setups/manage-setups.component.ts");
var manage_forums_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-forums/manage-forums.component.ts");
var manage_articles_component_1 = __webpack_require__("../../../../../src/app/dashboard/admin/manage-articles/manage-articles.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/dashboard/about/about.component.ts");
var view_topic_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/view-topic/view-topic.component.ts");
var club_members_list_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/club-members-list/club-members-list.component.ts");
var article_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/article/article.component.ts");
var club_detail_component_1 = __webpack_require__("../../../../../src/app/dashboard/connect/clubs/club-detail/club-detail.component.ts");
//
exports.MODULE_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'connect/clubs', component: clubs_component_1.ClubsComponent },
    { path: 'connect/meetings', component: meetings_component_1.MeetingsComponent },
    { path: 'connect/people', component: people_component_1.PeopleComponent },
    { path: 'setups', component: setups_component_1.SetupsComponent },
    { path: 'setups/add/:index', component: add_edit_component_1.AddEditComponent },
    { path: 'setups/view', component: setup_detail_component_1.SetupDetailComponent },
    { path: 'discuss/forums', component: forums_component_1.ForumsComponent },
    { path: 'discuss/forums/topic/:id', component: view_topic_component_1.VIewTopicComponent },
    { path: 'discuss/blogs', component: blogs_component_1.BlogsComponent },
    { path: 'learn/articles', component: articles_component_1.ArticlesComponent },
    { path: 'learn/videos', component: videos_component_1.VideosComponent },
    { path: 'users/login', component: login_component_1.LoginComponent },
    { path: 'users/register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'admin/clubs', component: manage_clubs_component_1.ManageClubsComponent },
    { path: 'admin/clubs/userslist/:id', component: club_members_list_component_1.ClubMembersListComponent },
    { path: 'admin/setups', component: manage_setups_component_1.ManageSetupsComponent },
    { path: 'admin/forums', component: manage_forums_component_1.ManageForumsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'connect/clubs/club/:id', component: club_detail_component_1.ClubDetailComponent },
    { path: 'admin/articles', component: manage_articles_component_1.ManageArticlesComponent },
    { path: 'admin/articles/edit/:id', component: edit_article_component_1.EditArticleComponent },
    { path: 'article/:id', component: article_component_1.ArticleComponent },
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
    manage_clubs_component_1.ManageClubsComponent,
    about_component_1.AboutComponent
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/blogs/blogs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
        template: __webpack_require__("../../../../../src/app/dashboard/discuss/blogs/blogs.component.html")
    })
], BlogsComponent);
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/forums/add-forum/add-forum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  cursor: pointer;\n}\n\ntextarea {\n  min-height: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/forums/add-forum/add-forum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card container\">\n  <div class=\"card-header\">\n    <h4>\n      Add New Forum\n      <!--<i class=\"material-icons pull-right\" *ngIf=\"!expanded\" (click)=\"expanded = true\">expand_more</i>-->\n      <!--<i class=\"material-icons pull-right\" *ngIf=\"expanded\" (click)=\"expanded = false\">expand_less</i>-->\n    </h4>\n  </div>\n  <div class=\"card-content\" *ngIf=\"expanded\">\n    <div class=\"row\">\n      <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <label class=\"control-label\">Title</label>\n        <input class=\"form-control\" [(ngModel)]=\"title\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <textarea class=\"form-control\" [(ngModel)]=\"description\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\" *ngIf=\"expanded\">\n    <button class=\"btn btn-success pull-right\" (click)=\"addForum()\">Add</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/forums/add-forum/add-forum.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var AddForumComponent = (function () {
    function AddForumComponent(mainService) {
        this.mainService = mainService;
        this.expanded = true;
        this.added = new core_1.EventEmitter();
    }
    AddForumComponent.prototype.ngOnInit = function () {
    };
    AddForumComponent.prototype.addForum = function () {
        var _this = this;
        this.mainService.addForum({ title: this.title, description: this.description }).subscribe(function (d) {
            _this.title = '';
            _this.description = '';
            _this.added.emit('forum added');
        }, function (e) {
            console.log(e);
        });
    };
    return AddForumComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AddForumComponent.prototype, "added", void 0);
AddForumComponent = __decorate([
    core_1.Component({
        selector: 'app-add-forum',
        template: __webpack_require__("../../../../../src/app/dashboard/discuss/forums/add-forum/add-forum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/discuss/forums/add-forum/add-forum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], AddForumComponent);
exports.AddForumComponent = AddForumComponent;
var _a, _b;
//# sourceMappingURL=add-forum.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/forums/forums.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.diag {\n  opacity: 0;\n  display: none;\n  transition: opacity 0.1s linear;\n}\n\n.diag.show {\n  opacity: 1;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(255,0,0,0.1);\n  z-index: 11;\n}\n\n.diag.show > div {\n  width: 700px;\n  position: relative;\n  top: 100px;\n  left: calc(50% - 350px);\n  max-width: 100%;\n}\n\n.search-input {\n  display: inline-block;\n  width: auto;\n}\n\n.form-item .card-header {\n  display: block;\n}\n\na {\n  cursor: pointer;\n}\n\n.forum-list-card > .card-content > .row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/forums/forums.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card forum-list-card\" *ngIf=\"!isTopicList\">\n          <div class=\"card-header\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 label-floating form-group text-right\">\n                <h3 class=\"pull-left\">Forums</h3>\n                <input class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"searchText\" (keyup)=\"filterForums()\" />\n                <button *ngIf=\"mainService.userRole === 'admin'\" class=\"btn btn-success btn-sm\" (click)=\"showForumRequest = true\">New Forum</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"row\">\n              <div *ngFor=\"let forum of filteredForums; let idx = index;\" class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <div class=\"card form-item\">\n                  <div class=\"card-header btn btn-orange\" data-background-color=\"blue\" data-color=\"grey\" (click)=\"viewTopicList(idx)\">{{forum.title}}</div>\n                  <div class=\"card-content\">{{forum.description}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card topic-list-card\" *ngIf=\"isTopicList\">\n          <div class=\"card-header\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 label-floating form-group text-right\">\n                <h3 class=\"pull-left\"><a (click)=\"viewForumList()\">Forums</a> > {{filteredForums[currentForum].title}}</h3>\n                <input class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"searchText\" (keyup)=\"updateFilteredTopics()\" />\n                <button class=\"btn btn-success btn-sm\" (click)=\"showTopicRequest = true;this.mainService.initTinyMCE();\">New Topic</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-content tabledata\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n              <tr>\n                <th class=\"text-left hidden\">ID</th>\n                <th class=\"text-left\">Title</th>\n                <th class=\"text-center\">Created User</th>\n                <th class=\"text-center\">Created Date</th>\n                <th class=\"text-center\">Views</th>\n                <th class=\"text-center\">Replies</th>\n                <th class=\"text-center\">Last Replied</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let topic of filteredTopics; let idx = index\">\n                <td class=\"text-left hidden\">{{idx + 1}}</td>\n                <td class=\"text-left\"><a [routerLink]=\"'/discuss/forums/topic/' + topic._id\">{{topic.title}}</a></td>\n                <td class=\"text-center\">{{storageService.userNames[topic.createdUserId]}}</td>\n                <td class=\"text-center\">{{mainService.getDateString(topic.createdDate)}}</td>\n                <td class=\"text-center\">{{topic.views}}</td>\n                <td class=\"text-center\">{{topic.replies}}</td>\n                <td class=\"text-center\">{{mainService.getDateTimeString(topic.lastreplied)}}</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<div [class]=\"showForumRequest ? 'diag show' : 'diag'\" (scroll)=\"popupScroll($event)\">\n  <div>\n    <div class=\"card report-card\">\n      <div class=\"card-header\" data-background-color=\"orange\">\n        <h4>New Forum Request</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Forum Title</label>\n          <input class=\"form-control\" [(ngModel)]=\"newForumTitle\" />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Forum Description</label>\n          <textarea class=\"form-control\" [(ngModel)]=\"newForumDescription\"></textarea>\n        </div>\n      </div>\n      <div class=\"card-footer text-center\">\n        <button class=\"btn btn-success\" (click)=\"addNewForum()\" [disabled]=\"newForumTitle == ''\">Send Request</button>\n        <button class=\"btn btn-danger\" (click)=\"hideForumDiag()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div [class]=\"showTopicRequest ? 'diag show' : 'diag'\" (scroll)=\"popupScroll($event)\">\n  <div>\n    <div class=\"card report-card\">\n      <div class=\"card-header\" data-background-color=\"orange\">\n        <h4>New Topic Request</h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Topic</label>\n          <input class=\"form-control\" [(ngModel)]=\"newTopicTitle\" />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Text</label>\n          <textarea class=\"form-control tinymce-editor\" [(ngModel)]=\"newTopicDescription\"></textarea>\n        </div>\n      </div>\n      <div class=\"card-footer text-center\">\n        <button class=\"btn btn-success\" (click)=\"addNewTopic()\" [disabled]=\"newTopicTitle == ''\">Create Topic</button>\n        <button class=\"btn btn-danger\" (click)=\"hideTopicDiag()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/discuss/forums/forums.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var topics_service_1 = __webpack_require__("../../../../../src/app/services/topics.service.ts");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var storage_service_1 = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var ForumsComponent = (function () {
    function ForumsComponent(mainService, topicsService, postService, storageService, router) {
        this.mainService = mainService;
        this.topicsService = topicsService;
        this.postService = postService;
        this.storageService = storageService;
        this.router = router;
        this.forums = [];
        this.topics = [];
        this.totalTopics = [];
        this.filteredForums = [];
        this.filteredTopics = [];
        this.newForumTitle = '';
        this.newForumDescription = '';
        this.newTopicTitle = '';
        this.newTopicDescription = '';
        this.searchText = '';
        this.showForumRequest = false;
        this.showTopicRequest = false;
        this.isTopicList = false;
        this.selectSettings = {
            checkedStyle: 'fontawesome',
            containerClasses: 'dropdown-container',
            buttonClasses: 'btn-group select-with-transition form-control font-size-20 text-left',
            itemClasses: 'w-100',
            dynamicTitleMaxItems: 3,
            selectionLimit: 1,
            autoUnselect: true,
            enableSearch: true,
            closeOnSelect: true
        };
        this.selectText = {
            defaultTitle: 'All Topics'
        };
    }
    ForumsComponent.prototype.ngOnInit = function () {
        this.getAllForums();
    };
    ForumsComponent.prototype.getAllForums = function () {
        var _this = this;
        this.mainService.getConfirmedForums().subscribe(function (d) {
            _this.forums = d.slice();
            _this.filteredForums = d.slice();
            _this.getTopics();
        }, function (e) {
            console.log(e);
        });
    };
    ForumsComponent.prototype.filterForums = function () {
        this.filteredForums = [];
        for (var i = 0; i < this.forums.length; i++) {
            if (this.searchText === '' || this.forums[i].title.toUpperCase().includes(this.searchText.toUpperCase())
                || this.forums[i].description.toUpperCase().includes(this.searchText.toUpperCase())) {
                this.filteredForums.push(this.forums[i]);
            }
        }
    };
    ForumsComponent.prototype.getTopicsByForumId = function (i) {
        var _this = this;
        this.topicsService.getConfirmedTopicsByForumId(this.filteredForums[i]).subscribe(function (d) {
            _this.filteredForums[i].totalTopics = d.slice();
        }, function (e) {
            console.log(e);
        });
    };
    ForumsComponent.prototype.getTopics = function () {
        for (var i = 0; i < this.filteredForums.length; i++) {
            this.getTopicsByForumId(i);
        }
    };
    ForumsComponent.prototype.filterTopics = function (topics) {
        var tmp = [];
        for (var i = 0; topics && i < topics.length; i++) {
            if (topics[i].title.toUpperCase().includes(this.searchText.toUpperCase()) || this.searchText === '') {
                tmp.push(topics[i]);
            }
        }
        return tmp;
    };
    ForumsComponent.prototype.updateFilteredTopics = function () {
        this.filteredTopics = this.filterTopics(this.filteredForums[this.currentForum].totalTopics);
    };
    ForumsComponent.prototype.addNewForum = function () {
        var _this = this;
        this.mainService.addForum({ title: this.newForumTitle, description: this.newForumDescription }).subscribe(function (d) {
            _this.newForumTitle = '';
            _this.newForumDescription = '';
            _this.showForumRequest = false;
            _this.getAllForums();
        }, function (e) {
            console.log(e);
        });
    };
    ForumsComponent.prototype.addNewTopic = function () {
        var _this = this;
        this.topicsService.addTopic({
            title: this.newTopicTitle,
            forumId: this.filteredForums[this.currentForum]._id
        }).subscribe(function (d) {
            _this.newTopicTitle = '';
            _this.postService.addPost({ text: _this.mainService.editor.getContent(), topicId: d.topic._id }).subscribe(function (d1) {
                _this.newTopicDescription = '';
                _this.showTopicRequest = false;
                // this.getTopics();
                _this.router.navigate(["discuss/forums/topic/" + d.topic._id]);
                console.log(d.topic);
            }, function (e1) {
                console.log(e1);
            });
        }, function (e) {
            console.log(e);
        });
    };
    ForumsComponent.prototype.hideForumDiag = function () {
        this.showForumRequest = false;
    };
    ForumsComponent.prototype.hideTopicDiag = function () {
        this.showTopicRequest = false;
    };
    ForumsComponent.prototype.searchTopics = function () {
        var arrTopics = [];
        for (var i = 0; i < this.totalTopics.length; i++) {
            if (this.searchText === ''
                || this.totalTopics[i].title.toUpperCase().includes(this.searchText.toUpperCase())
                || this.totalTopics[i].text.toUpperCase().includes(this.searchText.toUpperCase())) {
                arrTopics.push(this.totalTopics[i]);
            }
        }
        this.topics = arrTopics.slice();
    };
    ForumsComponent.prototype.viewTopicList = function (idx) {
        this.searchText = '';
        this.currentForum = idx;
        this.updateFilteredTopics();
        this.isTopicList = true;
    };
    ForumsComponent.prototype.viewForumList = function () {
        this.isTopicList = false;
        this.searchText = '';
        this.filterForums();
    };
    ForumsComponent.prototype.popupScroll = function (evt) {
        console.log(evt);
        evt.stopPropagation();
        evt.preventDefault();
    };
    return ForumsComponent;
}());
ForumsComponent = __decorate([
    core_1.Component({
        selector: ' forums-cmp ',
        template: __webpack_require__("../../../../../src/app/dashboard/discuss/forums/forums.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/discuss/forums/forums.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof topics_service_1.TopicsService !== "undefined" && topics_service_1.TopicsService) === "function" && _b || Object, typeof (_c = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _c || Object, typeof (_d = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], ForumsComponent);
exports.ForumsComponent = ForumsComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=forums.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".articles {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row articles\" *ngIf=\"userLoggedIn\">\n            <app-article class=\"col-sm-12 col-xs-12\" [article]=\"articles[0]\" *ngIf=\"articles[0]\" [shortform]=\"true\"></app-article>\n            <app-article class=\"col-sm-6 col-xs-12\" *ngFor=\"let article of articles.slice(1, articles.length)\" [article]=\"article\" [shortform]=\"true\"></app-article>\n        </div>\n        <div class=\"coming-soon\" *ngIf=\"!userLoggedIn\">\n            <h1>Signup Form here, coming soon</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var HomeComponent = (function () {
    function HomeComponent(mainService, articleService) {
        this.mainService = mainService;
        this.articleService = articleService;
        this.userLoggedIn = true;
        this.articles = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getHomeArticles().subscribe(function (d) {
            _this.articles = d.data;
        }, function (e) {
            console.log(e);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: ' app-home-cmp ',
        template: __webpack_require__("../../../../../src/app/dashboard/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/learn/articles/articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/learn/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div *ngFor=\"let article of articles; let idx = index\">\n        <app-article [article]=\"article\"></app-article>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/learn/articles/articles.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var articles_service_1 = __webpack_require__("../../../../../src/app/services/articles.service.ts");
var ArticlesComponent = (function () {
    function ArticlesComponent(mainService, articleService) {
        this.mainService = mainService;
        this.articleService = articleService;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles().subscribe(function (d) {
            _this.articles = d.data;
        }, function (e) {
            console.log(e);
        });
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    core_1.Component({
        selector: ' app-articles-cmp ',
        template: __webpack_require__("../../../../../src/app/dashboard/learn/articles/articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/learn/articles/articles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" && _b || Object])
], ArticlesComponent);
exports.ArticlesComponent = ArticlesComponent;
var _a, _b;
//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/learn/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/learn/videos/videos.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
        template: __webpack_require__("../../../../../src/app/dashboard/learn/videos/videos.component.html")
    })
], VideosComponent);
exports.VideosComponent = VideosComponent;
//# sourceMappingURL=videos.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/add-edit/add-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .users-option::before {\n  content: '\\E87C';\n}\n\n.setup-image {\n  text-align: center;\n}\n\n.setup-image > div {\n  max-width: 150px;\n}\n\n.row {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.description {\n  font-style: italic;\n  font-size: 16px;\n  margin-left: 10px;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\ni {\n  position: relative;\n  top: 5px;\n  left: 10px;\n}\n\n.row {\n  padding-bottom: 40px;\n}\n\n.mins-text {\n  position: relative;\n  top: 25px;\n}\n\n.card-footer {\n  text-align: center;\n}\n\n.card-footer button {\n  width: 250px;\n}\n\n.bigger-textarea {\n  height: 150px;\n}\n\n.colorpicker {\n  width: 30px;\n}\n\n.narrations-list .multiselection label {\n  margin-right: 30px;\n}\n\n.row .row {\n  padding-bottom: 0;\n}\n\n.container-fluid > .card > .card-content {\n  height: calc(100vh - 315px) !important;\n  overflow: auto !important;\n}\n\ntextarea {\n  min-height: 120px;\n}\n\n.setup-image {\n  max-height: 250px;\n  width: auto;\n}\n\n.roles-list .row {\n  padding: 10px 20px;\n  margin: 15px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/add-edit/add-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>{{isEdit ? 'Edit Setup' : 'Add Setup'}}</h3>\n      </div>\n      <div class=\"card-content\">\n        <form (submit)=\"saveSetup()\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 setup-image\">\n              <app-uploader [imgId]=\"imgId\" (changed)=\"uploading = true;\" (uploaded)=\"mainImgUploaded($event)\" [autoupload]=\"true\" #mainUploader></app-uploader>\n            </div>\n            <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                <label class=\"control-label\">Setup Name</label>\n                <input class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" required />\n              </div>\n              <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                <label class=\"control-label\">Created by:</label>\n                <input class=\"form-control\" list=\"usernames\" [(ngModel)]=\"createdUser\" name=\"createdUser\" required>\n                <datalist id=\"usernames\"  multiple data-style=\"select-with-transition\" required>\n                  <option *ngFor=\"let user of users\">\n                    {{user.name}}\n                  </option>\n                </datalist>\n              </div>\n              <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                  <label class=\"control-label\">Expected Play Time (mins)</label>\n                  <input class=\"form-control\" required type=\"number\" min=\"1\" [(ngModel)]=\"playTime\" name=\"playTime\"/>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Difficulty level</label>\n                  <select class=\"form-control\" [(ngModel)]=\"difficulty\" name=\"difficulty\">\n                    <option>Beginner</option>\n                    <option>Intermediate</option>\n                    <option>Advanced</option>\n                    <option>Expert</option>\n                  </select>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row setup-description\">\n            <div class=\"cheader\">\n              <h3>\n                Description\n              </h3>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <textarea class=\"form-control\" required [(ngModel)]=\"setupDescription\" name=\"setupDescription\" ></textarea>\n            </div>\n          </div>\n\n          <div class=\"row member-count\">\n            <div class=\"cheader\">\n              <h3>\n                Recommended Number of Players\n              </h3>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                <label class=\"control-label\">Minimum</label>\n                <input class=\"form-control\" required type=\"number\" [(ngModel)]=\"minimumMember\" (change)=\"minChange()\" name=\"minimumMember\" min=\"1\" />\n              </div>\n              <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                <label class=\"control-label\">Maximum</label>\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"maximumMember\" (change)=\"maxChange()\" name=\"maximumMember\" min=\"1\" required />\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row teams\">\n            <div class=\"cheader\">\n              <h3>\n                Teams and Win Conditions\n                <span class=\"description\">What teams are in the game?</span>\n                <i class=\"material-icons\" (click)=\"addNewTeam()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"teams-list\">\n              <div class=\"row team\" *ngFor=\"let team of teams; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeTeam(idx)\">delete</i>\n                <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                  <label class=\"control-label\">Name</label>\n                  <input class=\"form-control\" [(ngModel)]=\"team.name\" required name=\"{{'teamname' + idx}}\"/>\n                </div>\n                <div class=\"form-group label-floating col-lg-3 col-md-3 col-sm-3\">\n                  <input class=\"colorpicker\" [(colorPicker)]=\"team.color\" [style.background]=\"team.color\" readonly/>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Win Condition</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"team.description\" required name=\"{{'teamdescription' + idx}}\" ></textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <a (click)=\"addNewTeam()\" class=\"btn btn-primary btn-sm pull-right\">Add</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row roles\">\n            <div class=\"cheader\">\n              <h3>\n                Roles <span class=\"description\">What roles are in the game and how do they work?</span>\n                <i class=\"material-icons\" (click)=\"addNewRole()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"roles-list\">\n              <div class=\"row\" *ngFor=\"let role of roles; let ii = index;\" [ngStyle]=\"getBorderColor(role)\">\n                <i class=\"material-icons pull-right\" (click)=\"removeRole(ii)\">delete</i>\n                <i class=\"material-icons pull-right\" (click)=\"roleDown(ii)\" *ngIf=\"ii != roles.length - 1\">arrow_downward</i>\n                <i class=\"material-icons pull-right\" (click)=\"roleUp(ii)\" *ngIf=\"ii != 0\">arrow_upward</i>\n                <app-uploader class=\"col-md-2 col-lg-2 col-sm-2\" [imgId]=\"role.imgId\" (changed)=\"uploaders[ii] = true\" [autoupload]=\"true\" (uploaded)=\"roleImgUploaded(ii, $event);\"></app-uploader>\n                <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group\">\n                    <label class=\"control-label\">Role Name</label>\n                    <input class=\"form-control\" list=\"defalutRolesLists\" [(ngModel)]=\"role.name\" name=\"{{'rolename' + ii}}\" [attr.index]=\"ii\" required (blur)=\"roleNameChanged($event)\" />\n                    <datalist id=\"defalutRolesLists\" [attr.index]=\"ii\">\n                      <option *ngFor=\"let role1 of defaultRoles; let i = index\" [attr.id]=\"role1._id\" [attr.value]=\"role1.name\" [attr.roleIndex]=\"i\" selected=\"{{ role._id == role1._id ? 'selected' : '' }}\" >\n                        {{role1.name}}\n                      </option>\n                    </datalist>\n                  </div>\n                  <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\n                    <label class=\"control-label\">Team</label>\n                    <select class=\"form-control\" [(ngModel)]=\"role.team\" name=\"{{'roleteam' + ii}}\">\n                      <option value=\"N/A\">N/A</option>\n                      <option *ngFor=\"let team of teams; let i = index\" [attr.value]=\"team.name\">\n                        {{team.name}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Description</label>\n                    <textarea class=\"form-control\" required [(ngModel)]=\"role.description\" name=\"{{'roledescription' + ii}}\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <a (click)=\"addNewRole()\" class=\"btn btn-primary btn-sm pull-right\">Add</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row intersection\">\n            <div class=\"cheader\">\n              <h3>\n                Interactions\n                <i class=\"material-icons\" (click)=\"addNewIntersection()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"interactions-list\">\n              <div class=\"row team\" *ngFor=\"let intersection of intersections; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeIntersection(idx)\">delete</i>\n                <div class=\"form-group multiselection\">\n                  <label class=\"control-label\">Roles/Teams</label>\n                  <ss-multiselect-dropdown [options]=\"getIntersectionSelectOptions()\" [settings]=\"selectSettings\" [(ngModel)]=\"intersection.roles\" name=\"{{'intersection' + idx}}\"></ss-multiselect-dropdown>\n                  <i class=\"material-icons pull-right\">up</i>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"intersection.description\" required name=\"{{'intersectiondescription' + idx}}\" ></textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <a (click)=\"addNewIntersection()\" class=\"btn btn-primary btn-sm pull-right\">Add</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row narration\">\n            <div class=\"cheader\">\n              <h3>\n                Narration <span class=\"description\">Does the order in which roles are woken up matter? What is announced when people die? etc.</span>\n                <i class=\"material-icons\" (click)=\"addNewNarration()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list\">\n              <div class=\"row team\" *ngFor=\"let narration of narrations; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeNarration(idx)\">delete</i>\n                <i class=\"material-icons pull-right\" (click)=\"narrationDown(idx)\" *ngIf=\"idx != narrations.length - 1\">arrow_downward</i>\n                <i class=\"material-icons pull-right\" (click)=\"narrationUp(idx)\" *ngIf=\"idx != 0\">arrow_upward</i>\n                <div class=\"\">\n                  <div class=\"\">\n                    <ss-multiselect-dropdown [options]=\"getRolesSelectOptions()\" [texts]=\"selectedTexts\" [settings]=\"selectSettings\" [(ngModel)]=\"narration.roles\" name=\"{{'narration' + idx}}\"></ss-multiselect-dropdown>\n                  </div>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Narration</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"narration.description\" required name=\"{{'narrdescription' + idx}}\" ></textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <a (click)=\"addNewNarration()\" class=\"btn btn-primary btn-sm pull-right\">Add</a>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row voting-roles\">\n            <div class=\"cheader\">\n              <h3>\n                Voting Rules <span class=\"description\">How does voting work? Are ties possible? etc.</span>\n              </h3>\n            </div>\n            <div class=\"voting-rules-list\">\n              <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Voting Name</label>\n                  <input class=\"form-control\" list=\"defalutVotingsLists\" value=\"{{voting.name}}\" (blur)=\"votingNameChanged($event)\" required/>\n                  <datalist id=\"defalutVotingsLists\">\n                    <option *ngFor=\"let cvoting of defaultVotings\">\n                      {{cvoting.name}}\n                    </option>\n                  </datalist>\n                </div>\n                <div class=\"{{voting.description ? 'form-group label-floating col-lg-12 col-md-12 col-sm-12' : 'form-group label-floating col-lg-12 col-md-12 col-sm-12 is-empty'}}\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" value=\"{{voting.description}}\" required ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row missing-rules\">\n            <div class=\"cheader\">\n              <h3>\n                Additional Rules and Corner Cases <span class=\"description\">What rules have you missed?</span>\n                <i class=\"material-icons\" (click)=\"addNewAdditionalRule()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"additonal-rules-list\">\n              <div class=\"row\" *ngFor=\"let additionalRule of additionalRules; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeAdditionalRule(idx)\">delete</i>\n                <div class=\"form-group multiselection\">\n                  <label class=\"control-label\">Roles/Teams</label>\n                  <ss-multiselect-dropdown [options]=\"getIntersectionSelectOptions()\" [settings]=\"selectSettings\" [(ngModel)]=\"additionalRule.roles\" name=\"{{'additionalrules' + idx}}\"></ss-multiselect-dropdown>\n                  <i class=\"material-icons pull-right\">up</i>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"additionalRule.description\" required name=\"{{'additionalRule' + idx}}\" ></textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <a (click)=\"addNewAdditionalRule()\" class=\"btn btn-primary btn-sm pull-right\">Add</a>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row role-frequecies\">\n            <div class=\"cheader\">\n              <h3>\n                Role Frequencies\n              </h3>\n              <h5>\n                Do you use randomization to generate your set of roles? If so, how?\n              </h5>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <textarea class=\"form-control\" required [(ngModel)]=\"roleFrequencies\" name=\"roleFrequencies\" ></textarea>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <div class=\"card\">\n                <div class=\"card-content\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                      <thead class=\"text-primary\">\n                      <tr>\n                        <th>Number of players</th>\n                        <th *ngFor=\"let val of numbers\">{{val}}</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr *ngFor=\"let role of roles; let roleIdx = index;\">\n                        <td>{{role.name}}</td>\n                        <td *ngFor=\"let val of numbers; let valIdx = index;\">\n                          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"tblVal[roleIdx][val]\" name=\"{{'tblVal-' + valIdx + '-' + roleIdx}}\" />\n                        </td>\n                      </tr>\n                      </tbody>\n                      <tfoot>\n                      <tr>\n                        <td>Total</td>\n                        <td *ngFor=\"let val of numbers\">{{calcSum(val)}}</td>\n                      </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-primary\" [disabled]=\"dataChanged()\" (click)=\"save()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/add-edit/add-edit.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var AddEditComponent = (function () {
    function AddEditComponent(mainService, route, router) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.roles = [];
        this.users = [];
        this.defaultRoles = [];
        this.defaultVotings = [];
        this.teams = [];
        this.narrations = [];
        this.intersections = [];
        this.additionalRules = [];
        this.imgChanged = false;
        this.roleImgChanged = [];
        this.rolImgId = [];
        this.isUpload = false;
        // input values
        this.name = '';
        this.createdUser = '';
        this.setupDescription = '';
        this.difficulty = '';
        this.playTime = '';
        this.narrationText = '';
        this.missingRules = '';
        this.roleFrequencies = '';
        this.imgId = '';
        this.uploaders = [];
        this.saving = false;
        this.cancelled = new core_1.EventEmitter();
        this.saved = new core_1.EventEmitter();
        this.tblVal = [];
        this.orgData = {
            name: '',
            createdUser: '',
            setupDescription: '',
            difficulty: '',
            minimumMember: '',
            maximumMember: '',
            playTime: '',
            narrationText: '',
            missingRules: '',
            roleFrequencies: '',
            narrations: [],
            roles: [],
            teams: [],
            additionalRules: [],
            voting: {
                name: '',
                description: ''
            },
            intersections: []
        };
    }
    AddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = [];
        this.voting = {
            name: '',
            description: ''
        };
        this.selectSettings = {
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn-group select-with-transition',
            dynamicTitleMaxItems: 3,
        };
        this.mainService.getAllRoles().subscribe(function (d) {
            _this.defaultRoles = d.data;
        }, function (e) { return console.log(); });
        this.mainService.getAllUsers().subscribe(function (d) {
            _this.users = d.users;
        }, function (e) {
            console.log(e);
        });
        this.mainService.getAllVotings().subscribe(function (d) {
            _this.defaultVotings = d.data;
        }, function (e) { return console.log(); });
        this.route.params.subscribe(function (params) {
            var id = params['index']; // (+) converts string 'id' to a number
            _this.objectId = id;
            if (id !== '-1') {
                _this.isEdit = true;
                _this.mainService.getSetupById(id).subscribe(function (d) {
                    var setup = d.data;
                    _this.orgData = setup;
                    _this.name = _this.orgData.name;
                    _this.createdUser = _this.orgData.createdUser;
                    _this.setupDescription = _this.orgData.setupDescription;
                    _this.difficulty = _this.orgData.difficulty;
                    _this.minimumMember = _this.orgData.minimumMember;
                    _this.maximumMember = _this.orgData.maximumMember;
                    _this.playTime = _this.orgData.playTime;
                    _this.narrationText = _this.orgData.narrationText;
                    _this.missingRules = _this.orgData.missingRules;
                    _this.roleFrequencies = _this.orgData.roleFrequencies;
                    _this.imgId = _this.orgData.imgId;
                    _this.roles = _this.cloneArray(_this.orgData.roles);
                    _this.voting = _this.orgData.voting;
                    _this.tblVal = _this.cloneArray(_this.orgData.tblVal);
                    _this.teams = _this.cloneArray(_this.orgData.teams);
                    _this.narrations = _this.cloneArray(_this.orgData.narrations);
                    _this.intersections = _this.cloneArray(_this.orgData.intersections);
                    _this.additionalRules = _this.cloneArray(_this.orgData.additionalRules);
                    _this.fillNumbers();
                    $('.is-empty').removeClass('is-empty');
                }, function (e) { return console.log(e); });
            }
            // In a real app: dispatch action to load the details here.
        });
    };
    AddEditComponent.prototype.ngAfterViewChecked = function () {
    };
    AddEditComponent.prototype.addNewRole = function () {
        var newRole = {
            imgId: '',
            name: '',
            team: '',
            description: ''
        };
        this.tblVal[this.roles.length] = [];
        for (var i = 0; i <= this.maximumMember - this.minimumMember; i++) {
            this.tblVal[this.roles.length][i] = 1;
        }
        this.roles.push(newRole);
    };
    AddEditComponent.prototype.addNewTeam = function () {
        var newTeam = {
            color: '#000000',
            name: '',
            description: ''
        };
        this.teams.push(newTeam);
    };
    AddEditComponent.prototype.addNewNarration = function () {
        var newNarration = {
            roles: [],
            team: '',
            description: ''
        };
        this.narrations.push(newNarration);
    };
    AddEditComponent.prototype.addNewIntersection = function () {
        var newIntersections = {
            roles: [],
            description: ''
        };
        this.intersections.push(newIntersections);
    };
    AddEditComponent.prototype.addNewAdditionalRule = function () {
        var newRule = {
            roles: [],
            description: ''
        };
        this.additionalRules.push(newRule);
    };
    AddEditComponent.prototype.removeRole = function (idx) {
        this.roles.splice(idx, 1);
    };
    AddEditComponent.prototype.removeTeam = function (idx) {
        this.teams.splice(idx, 1);
    };
    AddEditComponent.prototype.removeNarration = function (idx) {
        this.narrations.splice(idx, 1);
    };
    AddEditComponent.prototype.removeIntersection = function (idx) {
        this.intersections.splice(idx, 1);
    };
    AddEditComponent.prototype.removeAdditionalRule = function (idx) {
        this.additionalRules.splice(idx, 1);
    };
    AddEditComponent.prototype.roleNameChanged = function (evt) {
        for (var i = 0; i < this.defaultRoles.length; i++) {
            if (this.defaultRoles[i].name === evt.target.value) {
                this.roles[evt.target.getAttribute('index')] = this.defaultRoles[i];
            }
        }
    };
    AddEditComponent.prototype.votingNameChanged = function (evt) {
        for (var i = 0; i < this.defaultVotings.length; i++) {
            if (this.defaultVotings[i].name === evt.target.value) {
                this.voting = this.defaultVotings[i];
            }
        }
    };
    AddEditComponent.prototype.cancel = function () {
        this.cancelled.emit('cancelled');
    };
    AddEditComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        for (var i = 0; i < this.uploaders.length; i++) {
            if (this.uploaders[i]) {
                return;
            }
        }
        var data = {
            name: this.name,
            createdUser: this.createdUser,
            setupDescription: this.setupDescription,
            difficulty: this.difficulty,
            minimumMember: this.minimumMember,
            maximumMember: this.maximumMember,
            playTime: this.playTime,
            narrationText: this.narrationText,
            missingRules: this.missingRules,
            roleFrequencies: this.roleFrequencies,
            imgId: this.imgId,
            roles: this.roles,
            voting: this.voting,
            teams: this.teams,
            narrations: this.narrations,
            intersections: this.intersections,
            additionalRules: this.additionalRules,
            tblVal: this.tblVal
        };
        var requireInputs = $('input,select').filter('[required]:visible');
        requireInputs.map(function (index, val) {
            $(val).val() === '' ? $(val).parent().addClass('has-error') : $(val).parent().removeClass('has-error');
        });
        if ($('.has-error').length === 0) {
            if (this.isEdit) {
                this.mainService.updateSetup(data, this.objectId).subscribe(function (d) {
                    _this.saved.emit('saved');
                    _this.orgData = data;
                    _this.router.navigate(['/setups']);
                }, function (e) { return console.log(e); });
            }
            else {
                this.mainService.addSetup(data).subscribe(function (d) {
                    _this.saved.emit('saved');
                    _this.orgData = data;
                }, function (e) { return console.log(e); });
            }
        }
    };
    AddEditComponent.prototype.dataChanged = function () {
        return (this.orgData.name === this.name
            && this.orgData.createdUser === this.createdUser
            && this.orgData.setupDescription === this.setupDescription
            && this.orgData.difficulty === this.difficulty
            && this.orgData.minimumMember === this.minimumMember
            && this.orgData.maximumMember === this.maximumMember
            && this.orgData.playTime === this.playTime
            && this.orgData.narrationText === this.narrationText
            && this.orgData.missingRules === this.missingRules
            && this.orgData.voting === this.voting
            && this.compareTwoArray(this.orgData.roles, this.roles)
            && this.compareTwoArray(this.orgData.tblVal, this.tblVal)
            && this.compareTwoArray(this.orgData.narrations, this.narrations)
            && this.compareTwoArray(this.orgData.teams, this.teams)
            && this.compareTwoArray(this.orgData.intersections, this.intersections)
            && this.compareTwoArray(this.orgData.additionalRules, this.additionalRules)
            && this.orgData.roleFrequencies === this.roleFrequencies && !this.imgChanged && !this.isUpload);
    };
    AddEditComponent.prototype.minChange = function () {
        if (this.maximumMember < this.minimumMember) {
            this.minimumMember = this.maximumMember;
        }
        this.fillNumbers();
    };
    AddEditComponent.prototype.maxChange = function () {
        if (this.maximumMember < this.minimumMember) {
            this.maximumMember = this.minimumMember;
        }
        this.fillNumbers();
    };
    AddEditComponent.prototype.fillNumbers = function () {
        this.numbers = [];
        for (var i = parseInt(this.minimumMember, 0); i <= parseInt(this.maximumMember, 0); i++) {
            this.numbers.push(i);
        }
        for (var i = 0; i < this.roles.length; i++) {
            for (var j = 0; j < this.minimumMember; j++) {
                this.tblVal[i][j] = 0;
            }
            for (var j = this.minimumMember; j <= this.maximumMember; j++) {
                if (this.tblVal[i][j] === 0) {
                    this.tblVal[i][j] = 1;
                }
            }
            for (var j = this.maximumMember + 1; j < this.tblVal[i].length; j++) {
                this.tblVal[i][j] = 0;
            }
        }
    };
    AddEditComponent.prototype.calcNumTotal = function () {
        var sum = [];
        for (var i = 0; i < this.tblVal.length; i++) {
            for (var j = 0; j < this.tblVal[i].length; j++) {
                sum[j] = 0;
            }
        }
        for (var i = 0; i < this.tblVal.length; i++) {
            for (var j = 0; j < this.tblVal[i].length; j++) {
                sum[j] += Number.parseInt(this.tblVal[i][j]);
            }
        }
        return sum;
    };
    AddEditComponent.prototype.tblValChange = function (evt, roleIdx, valIdx) {
        this.tblVal[roleIdx][valIdx] = evt.target.value;
    };
    AddEditComponent.prototype.cloneArray = function (arr1) {
        return JSON.parse(JSON.stringify(arr1));
    };
    AddEditComponent.prototype.compareTwoArray = function (arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    };
    AddEditComponent.prototype.mainImgUploaded = function (evt) {
        this.imgId = evt;
        console.log(this.mainUploader);
    };
    AddEditComponent.prototype.roleImgUploaded = function (ii, evt) {
        this.roles[ii].imgId = evt;
        this.uploaders[ii] = false;
        if (this.saving) {
            this.save();
        }
    };
    AddEditComponent.prototype.getRolesSelectOptions = function () {
        this.rolesSelectOptions = this.roles.map(function (val, index) { return { id: index, name: val.name }; });
        this.rolesSelectOptions.sort(this.sortFunction);
        return this.rolesSelectOptions;
    };
    AddEditComponent.prototype.getIntersectionSelectOptions = function () {
        var _this = this;
        var rolesAndTeams = this.roles.map(function (val, index) { return { id: index, name: val.name }; });
        var teams = this.teams.map(function (val, index) { return { id: index + _this.roles.length, name: val.name }; });
        rolesAndTeams = rolesAndTeams.concat(teams);
        rolesAndTeams.sort(this.sortFunction);
        return rolesAndTeams;
    };
    AddEditComponent.prototype.sortFunction = function (v1, v2) {
        return v1.name > v2.name ? 1 : v1.name === v2.name ? 0 : -1;
    };
    AddEditComponent.prototype.roleDown = function (idx) {
        if (idx !== this.roles.length - 1) {
            _a = [this.roles[idx + 1], this.roles[idx]], this.roles[idx] = _a[0], this.roles[idx + 1] = _a[1];
            _b = [this.tblVal[idx + 1], this.tblVal[idx]], this.tblVal[idx] = _b[0], this.tblVal[idx + 1] = _b[1];
        }
        var _a, _b;
    };
    AddEditComponent.prototype.roleUp = function (idx) {
        if (idx !== 0) {
            _a = [this.roles[idx - 1], this.roles[idx]], this.roles[idx] = _a[0], this.roles[idx - 1] = _a[1];
            _b = [this.tblVal[idx - 1], this.tblVal[idx]], this.tblVal[idx] = _b[0], this.tblVal[idx - 1] = _b[1];
        }
        var _a, _b;
    };
    AddEditComponent.prototype.narrationDown = function (idx) {
        if (idx !== this.narrations.length - 1) {
            _a = [this.narrations[idx + 1], this.narrations[idx]], this.narrations[idx] = _a[0], this.narrations[idx + 1] = _a[1];
        }
        var _a;
    };
    AddEditComponent.prototype.narrationUp = function (idx) {
        if (idx !== 0) {
            _a = [this.narrations[idx - 1], this.narrations[idx]], this.narrations[idx] = _a[0], this.narrations[idx - 1] = _a[1];
        }
        var _a;
    };
    AddEditComponent.prototype.calcSum = function (num) {
        var sum = 0;
        for (var i = 0; i < this.roles.length; i++) {
            sum += this.tblVal[i][num];
        }
        return sum;
    };
    AddEditComponent.prototype.getBorderColor = function (role) {
        for (var i = 0; i < this.teams.length; i++) {
            if (role.team === this.teams[i].name) {
                return { border: '3px solid ' + this.teams[i].color };
            }
        }
    };
    return AddEditComponent;
}());
__decorate([
    core_1.ViewChild('roleNameLists'),
    __metadata("design:type", Object)
], AddEditComponent.prototype, "roleNameLists", void 0);
__decorate([
    core_1.ViewChild('mainUploader'),
    __metadata("design:type", Object)
], AddEditComponent.prototype, "mainUploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AddEditComponent.prototype, "cancelled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], AddEditComponent.prototype, "saved", void 0);
AddEditComponent = __decorate([
    core_1.Component({
        selector: 'app-add-edit',
        template: __webpack_require__("../../../../../src/app/dashboard/setups/add-edit/add-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/setups/add-edit/add-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], AddEditComponent);
exports.AddEditComponent = AddEditComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding: 20px;\n}\n\n.color {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n\n.setup-image {\n  max-height: 250px;\n  width: auto;\n}\n\ntextarea {\n  min-height: 110px;\n}\n\nform .row.card .card-content {\n  display: none;\n}\n\nform .row.card.expanded .card-content {\n  display: block;\n}\n\ni {\n  cursor: pointer;\n  font-size: 40px;\n  font-weight: lighter;\n}\n\n.players {\n  margin-top: 9px;\n}\n\n.roles-list .row {\n  padding: 10px 20px;\n  margin: 15px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card row\">\n      <div class=\"card-header\">\n        <h3>{{setup.name}}\n          <button class=\"btn btn-success pull-right\" (click)=\"goBack()\">Go Back</button>\n        </h3>\n        <div class=\"row filter-panel\">\n          <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-23\">\n            <label class=\"control-label\">Number of Players</label>\n            <input class=\"form-control players\" min=\"0\" [(ngModel)]=\"players\" name=\"players\" (change)=\"playerFiltered()\" />\n          </div>\n          <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-23\">\n            <label class=\"control-label\">Teams</label>\n            <ss-multiselect-dropdown [(ngModel)]=\"teamFilter\" name=\"teamFilter\" [options]=\"teamSelectSettings\" [settings]=\"selectSettings\" [texts]=\"selectedText\" (ngModelChange)=\"teamFiltered()\"></ss-multiselect-dropdown>\n          </div>\n          <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-23\">\n            <label class=\"control-label\">Roles</label>\n            <ss-multiselect-dropdown [(ngModel)]=\"rolesFilter\" name=\"rolesFilter\" [options]=\"roleSelectSettings\" [settings]=\"selectSettings\" [texts]=\"selectedText\" (ngModelChange)=\"roleFiltered()\"></ss-multiselect-dropdown>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-content main-card-content\">\n        <form>\n          <div class=\"row\">\n            <div class=\"\">\n              <div class=\"col-sm-12 col-xs-12 setup-image\">\n                <cl-image data-u=\"image\" public-id=\"{{setup.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"200\" width=\"280\" format=\"gif\">\n                </cl-image>\n              </div>\n              <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n                <div class=\"form-group col-lg-12 col-md-12 label-floating\">\n                  <label class=\"control-label\">Setup Name</label>\n                  <input class=\"form-control\" [value]=\"setup.name\" readonly />\n                </div>\n                <div class=\"form-group col-lg-12 col-md-12 label-floating\">\n                  <label class=\"control-label\">Created by:</label>\n                  <input class=\"form-control\" [value]=\"setup.createdUser\" readonly>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Difficulty level</label>\n                  <input class=\"form-control\" [value]=\"setup.difficulty\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                  <label class=\"control-label\">Playing Time</label>\n                  <input class=\"form-control\" readonly [value]=\"setup.playTime + ' mins'\" />\n                </div>\n              </div>\n              <div class=\"col-md-12 col-lg-12\">\n                <textarea class=\"form-control\" [value]=\"setup.setupDescription\" readonly ></textarea>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row teams card\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Teams and Win Conditions\n                <small>What teams are in the game?</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">expand_more</i>\n              </h3>\n            </div>\n            <div class=\"teams-list card-content\">\n              <div class=\"team\" *ngFor=\"let team of filteredTeams; let idx = index;\">\n                <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                  <label class=\"control-label\">Name</label>\n                  <input class=\"form-control\" readonly [value]=\"team.name\" />\n                </div>\n                <div class=\"form-group label-floating col-lg-3 col-md-3 col-sm-3\">\n                  <div class=\"color\" [style.background]=\"team.color\"></div>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Win Condition</label>\n                  <textarea class=\"form-control\" [value]=\"team.description\" readonly></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row roles card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Roles <small class=\"description\">What roles are in the game and how do they work?</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">expand_less</i>\n              </h3>\n            </div>\n            <div class=\"roles-list card-content\">\n              <div class=\"row\" *ngFor=\"let role of filterIndividualRole(); let ii = index;\" [ngStyle]=\"getBorderColor(role)\">\n                <div class=\"col-md-2 col-lg-2 col-sm-2\">\n                  <cl-image data-u=\"image\" public-id=\"{{role.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"gif\">\n                  </cl-image>\n                </div>\n                <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                  <div class=\"col-lg-4 col-md-4 col-sm-4 roles-names form-group label-floating\">\n                    <label class=\"control-label\">Role Name</label>\n                    <input class=\"form-control\" [value]=\"role.name\" readonly />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-4\">\n                    <label class=\"control-label\">Team</label>\n                    <input class=\"form-control\" [value]=\"role.team\" readonly />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-4\">\n                    <label class=\"control-label\">Frequency</label>\n                    <input class=\"form-control\" [value]=\"calcFrequency(setup.tblVal[setup.roles.indexOf(role)])\" readonly />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Description</label>\n                    <textarea class=\"form-control\" readonly [value]=\"role.description\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row intersection card\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Interactions\n                <small>What rules come into play when certain roles perform actions on each other?</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">expand_more</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list card-content\">\n              <div class=\"team\" *ngFor=\"let intersection of setup.intersections; let idx = index;\">\n                <div *ngIf=\"intersectionFiltered(intersection)\">\n                  <div class=\"form-group label-floating multiselection\">\n                    <label class=\"control-label\">Roles/Teams</label>\n                    <input class=\"form-control\" [value]=\"getIntersectionSelectOptions(intersection)\" readonly />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Description</label>\n                    <textarea class=\"form-control\" [value]=\"intersection.description\" readonly></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row narration card\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Narration <small class=\"description\">Does the order in which roles are woken up matter? What is announced when people die? etc.</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">expand_more</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list card-content\">\n              <div class=\"team\" *ngFor=\"let narration of setup.narrations; let idx = index;\">\n                <div *ngIf=\"intersectionFiltered(narration)\">\n                  <div class=\"form-group label-floating col-lg-6 col-md-6\">\n                    <label class=\"control-label\">Teams</label>\n                    <input class=\"form-control\" [value]=\"getRolesSelectOptions(narration)\" readonly />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Narration</label>\n                    <textarea class=\"form-control\" readonly [value]=\"narration.description\" ></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row voting-roles card\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Voting Rules <small class=\"description\">How does voting work? Are ties possible? etc.</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">expand_more</i>\n              </h3>\n            </div>\n            <div class=\"voting-rules-list card-content\">\n              <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Voting Name</label>\n                  <input class=\"form-control\" [value]=\"setup.voting.name\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [value]=\"setup.voting.description\" readonly ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row missing-rules card\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Additional Rules and Corner Cases <small class=\"description\">What rules have you missed?</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">expand_more</i>\n              </h3>\n            </div>\n            <div class=\"additonal-rules-list card-content\">\n              <div class=\"\" *ngFor=\"let additionalRule of setup.additionalRules; let idx = index;\">\n                <div *ngIf=\"intersectionFiltered(additionalRule)\">\n                  <div class=\"form-group label-floating\">\n                    <label class=\"control-label\">Roles/Teams</label>\n                    <input class=\"form-control\" [value]=\"getRolesTeams(additionalRule)\" readonly />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Description</label>\n                    <textarea class=\"form-control\" [value]=\"additionalRule.description\" readonly ></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var SetupDetailComponent = (function () {
    function SetupDetailComponent(mainService) {
        this.mainService = mainService;
        this.back = new core_1.EventEmitter();
        this.playersFilter = [];
        this.teamFilter = [];
        this.rolesFilter = [];
        this.filteredPlayers = [];
        this.filteredRoles = [];
        this.filteredTeams = [];
        this.players = 0;
    }
    SetupDetailComponent.prototype.ngOnInit = function () {
        this.selectSettings = {
            showUncheckAll: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn-group select-with-transition',
            dynamicTitleMaxItems: 5
        };
        this.players = parseInt(this.setup.maximumMember, 0);
        this.selectedText = {
            uncheckAll: 'View All',
            defaultTitle: 'All'
        };
        this.roleSelectSettings = this.setup.roles.map(function (val, idx) {
            // this.rolesFilter.push(val.name);
            return { id: idx, name: val.name };
        });
        this.teamSelectSettings = this.setup.teams.map(function (val, idx) {
            // this.teamFilter.push(val.name);
            return { id: idx, name: val.name };
        });
        var tmpPlayerArray = [];
        for (var i = parseInt(this.setup.minimumMember, 0); i <= parseInt(this.setup.maximumMember, 0); i++) {
            tmpPlayerArray.push({ id: i, name: i });
        }
        this.playerSelectSettings = tmpPlayerArray;
        this.playerFiltered();
    };
    SetupDetailComponent.prototype.getRolesSelectOptions = function (narration) {
        var _this = this;
        var str = '';
        narration.roles.map(function (val, index) { str += index === narration.roles.length - 1 ? _this.setup.roles[val].name : _this.setup.roles[val].name + ', '; });
        return str;
    };
    SetupDetailComponent.prototype.getIntersectionSelectOptions = function (intersection) {
        var _this = this;
        var str = '';
        intersection.roles.map(function (val, index) {
            if (index > _this.setup.roles.length) {
                str += _this.setup.teams[val - _this.setup.roles.length].name;
            }
            else {
                str += _this.setup.roles[val].name;
            }
            if (index !== intersection.roles.length - 1) {
                str += ', ';
            }
        });
        return str;
    };
    SetupDetailComponent.prototype.getRolesTeams = function (rule) {
        var str = '';
        var rolesTeams = this.setup.roles.concat(this.setup.teams);
        rule.roles.map(function (val, index) { str += index === rule.roles.length - 1 ? rolesTeams[val].name : rolesTeams[val].name + ', '; });
        return str;
    };
    SetupDetailComponent.prototype.collapseExpand = function (evt) {
        var card = evt.target.parentElement.parentElement.parentElement;
        evt.target.innerHTML = evt.target.innerHTML === 'expand_more' ? 'expand_less' : 'expand_more';
        card.className = card.className.includes('expanded') ? card.className.replace(' expanded', '') : card.className + ' expanded';
    };
    SetupDetailComponent.prototype.teamFiltered = function () {
        var _this = this;
        if (this.teamFilter.length !== 0) {
            this.filteredTeams = this.teamFilter.map(function (val, idx) {
                return val === _this.setup.teams.length ? { color: '#eee', name: 'N/A', description: 'N/A' } : _this.setup.teams[val];
            });
        }
        else {
            this.filteredTeams = this.setup.teams.map(function (val, idx) { return val; });
            this.filteredTeams.push({
                color: '#eee',
                name: 'N/A',
                description: 'N/A'
            });
        }
        var teamNames = this.filteredTeams.map(function (val, idx) { return val.name; });
        this.filteredRoles = [];
        this.setup.roles.map(function (val, idx) {
            _this.setup.tblVal[idx].map(function (val1, idx1) {
                if (val1 > 0 && (idx1 === _this.players || _this.players === 'All') && teamNames.indexOf(val.team) > -1) {
                    if (_this.filteredRoles.indexOf(val) === -1) {
                        _this.filteredRoles.push(val);
                    }
                }
            });
        });
        var tmpRolesSelection = this.filteredRoles.map(function (val, idx) {
            // this.rolesFilter.push(val.name);
            return { id: idx, name: val.name };
        });
        tmpRolesSelection.sort(this.sortFunction);
        this.roleSelectSettings = tmpRolesSelection;
        this.rolesFilter = [];
        this.roleFiltered();
    };
    SetupDetailComponent.prototype.roleFiltered = function () {
        var _this = this;
        var teamNames = this.filteredTeams.map(function (val, idx) { return val.name; });
        this.setup.roles.map(function (val, idx) {
            if ((_this.rolesFilter.length === 0 || _this.filteredRoles.indexOf(idx)) && teamNames.indexOf(val.team) > -1) {
                _this.setup.tblVal[idx].map(function (val1, idx1) {
                    if (val1 > 0 && (idx1 === _this.players || _this.players === 'All')) {
                        if (_this.filteredRoles.indexOf(val) === -1) {
                            _this.filteredRoles.push(val);
                        }
                    }
                });
            }
        });
    };
    SetupDetailComponent.prototype.playerFiltered = function () {
        var _this = this;
        if (this.playersFilter.length === 0) {
            this.filteredPlayers = [];
            for (var i = parseInt(this.setup.minimumMember, 0); i <= parseInt(this.setup.maximumMember, 0); i++) {
                this.filteredPlayers.push(i);
                // this.playersFilter.push(i);
            }
        }
        else {
            this.filteredPlayers = this.playersFilter;
        }
        this.players = parseInt(this.players, 0) || parseInt(this.setup.maximumMember, 0);
        var teamNames = [];
        this.setup.tblVal.map(function (val, idx) {
            val.map(function (val1, idx1) {
                if (val1 > 0 && (idx1 === _this.players || _this.players === 'All') && teamNames.indexOf(_this.setup.roles[idx].team)) {
                    teamNames.push(_this.setup.roles[idx].team);
                }
            });
        });
        var tmpSetting = [];
        this.filteredTeams = [];
        this.setup.teams.map(function (val, idx) {
            if (teamNames.indexOf(val.name) > -1) {
                tmpSetting.push({ id: idx, name: val.name });
                _this.filteredTeams.push(val);
            }
        });
        this.filteredTeams = this.setup.teams.map(function (val, idx) { return val; });
        this.filteredTeams.push({
            color: '#eee',
            name: 'N/A',
            description: 'N/A'
        });
        tmpSetting = this.setup.teams.map(function (val, idx) { return { id: idx, name: val.name }; });
        tmpSetting.sort(this.sortFunction);
        tmpSetting = tmpSetting.concat({ id: this.setup.teams.length, name: 'N/A' });
        this.teamSelectSettings = tmpSetting;
        this.teamFilter = [];
        this.teamFiltered();
    };
    SetupDetailComponent.prototype.intersectionFiltered = function (intersection) {
        var inRoles = [];
        var inTeams = [];
        for (var i = 0; i < intersection.roles.length; i++) {
            if (intersection.roles[i] > this.setup.roles.length) {
                inTeams.push(this.setup.teams[intersection.roles[i] - this.setup.roles.length]);
            }
            else {
                inRoles.push(this.setup.roles[intersection.roles[i]]);
            }
        }
        for (var i = 0; i < inTeams.length; i++) {
            var idx = this.filteredTeams.indexOf(inTeams[i]);
            if ((this.teamFilter.length === 0 && idx > -1) || this.teamFilter.indexOf(idx) > -1) {
                return true;
            }
        }
        for (var i = 0; i < inRoles.length; i++) {
            var idx = this.filteredRoles.indexOf(inRoles[i]);
            if ((this.rolesFilter.length === 0 && idx > -1) || this.rolesFilter.indexOf(idx) > -1) {
                return true;
            }
        }
        return false;
    };
    SetupDetailComponent.prototype.calcFrequency = function (roleFreq) {
        var _this = this;
        var sum = 0;
        console.log(this.players);
        roleFreq.map(function (val, idx) {
            sum += (idx === _this.players || _this.players === 'All') ? val : 0;
        });
        return sum;
    };
    SetupDetailComponent.prototype.sortFunction = function (v1, v2) {
        return v1.name > v2.name ? 1 : v1.name === v2.name ? 0 : -1;
    };
    SetupDetailComponent.prototype.goBack = function () {
        this.back.emit('go back');
    };
    SetupDetailComponent.prototype.getBorderColor = function (role) {
        for (var i = 0; i < this.setup.teams.length; i++) {
            if (role.team === this.setup.teams[i].name) {
                return { border: '3px solid ' + this.setup.teams[i].color };
            }
        }
    };
    SetupDetailComponent.prototype.filterIndividualRole = function () {
        var roles = [];
        for (var i = 0; i < this.filteredRoles.length; i++) {
            if (this.rolesFilter.indexOf(i) > -1 || this.rolesFilter.length === 0) {
                roles.push(this.filteredRoles[i]);
            }
        }
        return roles;
    };
    SetupDetailComponent.prototype.filterIndividualTeam = function () {
        var teams = [];
        var filteredroles = this.filterIndividualRole().map(function (val, idx) { return val.team; });
        for (var i = 0; i < this.filteredTeams.length; i++) {
            if (filteredroles.indexOf(this.filteredTeams[i].name)) {
                //teams.push()
            }
        }
    };
    return SetupDetailComponent;
}());
__decorate([
    core_1.Input('setup'),
    __metadata("design:type", Object)
], SetupDetailComponent.prototype, "setup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SetupDetailComponent.prototype, "back", void 0);
SetupDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-setup-detail',
        template: __webpack_require__("../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/setups/setup-detail/setup-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], SetupDetailComponent);
exports.SetupDetailComponent = SetupDetailComponent;
var _a, _b;
//# sourceMappingURL=setup-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/setups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n\n.row.add-button {\n  margin-bottom: 50px;\n}\n\na {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/setups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"!viewDetails\">\n  <div class=\"container-fluid\">\n    <div class=\"row add-button\">\n      <a [routerLink]=\"['/setups/add', -1]\" class=\"btn btn-primary\">Add Setup</a>\n    </div>\n    <div class=\"row fadeOutUp\">\n      <div class=\"col-lg-6 col-md-6\" *ngFor=\"let setup of setups; let idx = index\">\n        <div class=\"card card-product\">\n          <div class=\"card-image\" data-header-animation=\"true\">\n            <a>\n              <img class=\"img\" src=\"../../../../../assets/img/image_placeholder.jpg\" *ngIf=\"!setup.imgId\">\n              <cl-image data-u=\"image\" public-id=\"{{setup.imgId}}\" *ngIf=\"setup.imgId\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n              </cl-image>\n            </a>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"card-actions\" [attr.idx]=\"idx\">\n              <a type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Edit\" [routerLink]=\"['/setups/add', setup._id]\">\n                <i class=\"material-icons\">edit</i>\n                Edit Setup\n              </a>\n            </div>\n            <h4 class=\"card-title\">\n              <a (click)=\"viewDetailsClick(setup)\">{{setup.name}}</a>\n            </h4>\n            <div class=\"card-description\">\n              {{setup.setupDescription.substr(0, 100)}}{{setup.setupDescription.length > 100 ? ' ...' : ''}}\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"players-count\">\n              <p>Ideal for {{setup.minimumMember}}~{{setup.maximumMember}} members</p>\n              <p>Difficulty: {{setup.difficulty}} Level</p>\n            </div>\n            <div class=\"stats pull-right\">\n              <p class=\"category\"><i class=\"material-icons\">access_time</i> {{setup.playTime}} mins</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-setup-detail [setup]=\"currentSetup\" *ngIf=\"viewDetails\" (back)=\"viewDetails = false\"></app-setup-detail>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/setups.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var SetupsComponent = (function () {
    function SetupsComponent(mainService) {
        this.mainService = mainService;
        this.isAddsetup = false;
        this.isEditsetup = false;
        this.viewDetails = false;
    }
    SetupsComponent.prototype.ngOnInit = function () {
        this.getSetups();
        this.viewDetails = false;
        this.viewSetup = {};
        this.mainService.currentViewSetup = this;
    };
    SetupsComponent.prototype.ngAfterViewChecked = function () {
        if (this.isEditsetup) {
            this.editDiag.updateSetupValue(this.currentSetup);
        }
    };
    SetupsComponent.prototype.addSetup = function () {
        this.isAddsetup = true;
    };
    SetupsComponent.prototype.cancel = function () {
        this.isAddsetup = false;
        this.isEditsetup = false;
    };
    SetupsComponent.prototype.update = function () {
        this.isAddsetup = false;
        this.isEditsetup = false;
        this.getSetups();
    };
    SetupsComponent.prototype.getSetups = function () {
        var _this = this;
        this.mainService.getSetups().subscribe(function (d) {
            _this.setups = d.data;
        }, function (e) { return console.log(e); });
    };
    SetupsComponent.prototype.editSetup = function (evt) {
    };
    SetupsComponent.prototype.viewDetailsClick = function (setup) {
        this.currentSetup = setup;
        this.viewDetails = true;
    };
    return SetupsComponent;
}());
__decorate([
    core_1.ViewChild('editDiag'),
    __metadata("design:type", Object)
], SetupsComponent.prototype, "editDiag", void 0);
SetupsComponent = __decorate([
    core_1.Component({
        selector: ' setups-cmp ',
        template: __webpack_require__("../../../../../src/app/dashboard/setups/setups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/setups/setups.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], SetupsComponent);
exports.SetupsComponent = SetupsComponent;
var _a;
//# sourceMappingURL=setups.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/uploader/uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uploading-image {\n  width: 20px;\n  height: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/uploader/uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n  <div class=\"fileinput-new thumbnail\">\n    <img src=\"../../../../assets/img/image_placeholder.jpg\" alt=\"...\" *ngIf=\"isChanged || !imgId\">\n    <cl-image data-u=\"image\" public-id=\"{{imgId}}\" *ngIf=\"!isChanged && imgId\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"gif\">\n    </cl-image>\n  </div>\n  <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n  <div>\n    <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n        <span class=\"fileinput-new\">Select image <img src=\"../../../../assets/img/loading.gif\" class=\"uploading-image\" *ngIf=\"uploading\"/></span>\n        <span class=\"fileinput-exists\">Select image <img src=\"../../../../assets/img/loading.gif\" class=\"uploading-image\" *ngIf=\"uploading\"/></span>\n        <input type=\"file\" name=\"...\" #avatar class=\"btn btn-file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged()\"/>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/setups/uploader/uploader.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng2_cloudinary_1 = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var UploaderComponent = (function () {
    function UploaderComponent(mainService) {
        var _this = this;
        this.mainService = mainService;
        this.uploading = false;
        this.isChanged = false;
        this.uploaded = new core_1.EventEmitter();
        this.changed = new core_1.EventEmitter();
        ///////////////                 Main Image Uploader         ////////////////
        this.uploader = new ng2_cloudinary_1.CloudinaryUploader(new ng2_cloudinary_1.CloudinaryOptions({
            cloudName: this.mainService.cloudName,
            uploadPreset: this.mainService.cloudinaryUploadPresets.setups
        }));
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var img = JSON.parse(response);
            var index = _this.uploader.queue.indexOf(item);
            _this.uploading = false;
            _this.uploaded.emit(img.public_id);
            return { item: item, response: response, status: status, headers: headers };
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploading = false;
            console.log(item, response);
        };
    }
    UploaderComponent.prototype.ngOnInit = function () {
    };
    UploaderComponent.prototype.imgChanged = function () {
        this.isChanged = true;
        this.changed.emit('changed');
        this.uploading = true;
        if (this.autoupload) {
            this.uploadAll();
        }
    };
    UploaderComponent.prototype.uploadAll = function () {
        this.uploader.uploadAll();
    };
    return UploaderComponent;
}());
__decorate([
    core_1.Input('imgId'),
    __metadata("design:type", Object)
], UploaderComponent.prototype, "imgId", void 0);
__decorate([
    core_1.Input('autoupload'),
    __metadata("design:type", Object)
], UploaderComponent.prototype, "autoupload", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], UploaderComponent.prototype, "uploaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], UploaderComponent.prototype, "changed", void 0);
UploaderComponent = __decorate([
    core_1.Component({
        selector: 'app-uploader',
        template: __webpack_require__("../../../../../src/app/dashboard/setups/uploader/uploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/setups/uploader/uploader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object])
], UploaderComponent);
exports.UploaderComponent = UploaderComponent;
var _a, _b, _c;
//# sourceMappingURL=uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/#/home\">Liars Club</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"/#/home\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"/#/users/register\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\" active \">\n          <a href=\"/#/users/login\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../assets/img/login.jpeg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <form (submit)=\"login()\">\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n              <div class=\"card card-login card-hidden\">\n                <div class=\"card-header text-center\" data-background-color=\"rose\">\n                  <h4 class=\"card-title\">Login</h4>\n                </div>\n                <p class=\"category text-center\" *ngIf=\"loginFaildMsg\">\n                  {{loginFaildMsg}}\n                </p>\n                <div class=\"card-content\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                    </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Username</label>\n                      <input type=\"text\" class=\"form-control\" #username>\n                    </div>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Password</label>\n                      <input type=\"password\" class=\"form-control\" #password>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Login</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/users/login/login.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
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
                _this.mainService.getProfileData().subscribe(function (dd) {
                    _this.mainService.avatarPublicId = dd.profile.imgId;
                    _this.mainService.name = dd.profile.firstname + " " + dd.profile.lastname;
                }, function (ee) { return console.log(ee); });
                _this.mainService.avatarPublicId = d.data.imgId;
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
        template: __webpack_require__("../../../../../src/app/dashboard/users/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/users/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/users/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form > .card > .card-content > .row {\n  padding: 0 20px;\n}\n\n.upload-avatar {\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2\">\n      <form (submit)=\"saveProfile()\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <h3 class=\"text-center\">My Profile</h3>\n            </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"row\">\n                <div class=\"col-md-5 pull-right upload-avatar\">\n                  <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                      <div class=\"fileinput-new thumbnail\">\n                        <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" #clubImg *ngIf=\"imgChanged\">\n                        <cl-image data-u=\"image\" public-id=\"{{imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n                        </cl-image>\n                      </div>\n                      <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                      <div>\n                        <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n                            <span class=\"fileinput-new\">Select image</span>\n                            <span class=\"fileinput-exists\">Select image</span>\n                            <input type=\"file\" name=\"...\" #avatar class=\"btn btn-file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged = true\"/>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-7\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">First Name</label>\n                    <input class=\"form-control\" required [(ngModel)]=\"firstName\" name=\"firstName\"/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Last Name</label>\n                    <input class=\"form-control\" required [(ngModel)]=\"lastName\" name=\"lastName\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Display Name</label>\n                  <input class=\"form-control\" required [(ngModel)]=\"displayName\" name=\"displayName\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email address</label>\n                  <input class=\"form-control\" type=\"email\" required [(ngModel)]=\"email\" name=\"email\" />\n                </div>\n              </div>\n            <div class=\"row\">\n              <h3><small>I tagged myself as a member of these clubs</small></h3>\n              <div class=\"\" *ngFor=\"let club of clubs\">\n                <p>{{club.mytag.memberState}} {{club.mytag.memberType}} of {{club.title}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"orgFirstname == firstName && orgLastname == lastName && orgEmail == email && !imgChanged && orgDisplayName == displayName\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/users/profile/profile.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng2_cloudinary_1 = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ProfileComponent = (function () {
    function ProfileComponent(mainService) {
        var _this = this;
        this.mainService = mainService;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.imgId = '';
        this.displayName = '';
        this.orgFirstname = '';
        this.orgLastname = '';
        this.orgEmail = '';
        this.orgDisplayName = '';
        this.imgChanged = false;
        this.clubs = [];
        this.uploader = new ng2_cloudinary_1.CloudinaryUploader(new ng2_cloudinary_1.CloudinaryOptions({
            cloudName: this.mainService.cloudName,
            uploadPreset: this.mainService.cloudinaryUploadPresets.profile
        }));
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var img = JSON.parse(response);
            _this.imgId = img.public_id;
            _this.updateProfile();
            return { item: item, response: response, status: status, headers: headers };
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            $.notify({
                icon: 'notifications',
                message: 'Image Upload Failed'
            }, {
                type: 'success',
                timer: 3000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
            return { item: item, response: response, status: status, headers: headers };
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfileData();
    };
    ProfileComponent.prototype.getProfileData = function () {
        var _this = this;
        this.mainService.getProfileData().subscribe(function (d) {
            _this.mainService.loading = false;
            if (d.type) {
                _this.orgFirstname = d.profile.firstname;
                _this.orgLastname = d.profile.lastname;
                _this.orgEmail = d.profile.email;
                _this.orgDisplayName = d.profile.displayname;
                _this.firstName = d.profile.firstname;
                _this.lastName = d.profile.lastname;
                _this.email = d.profile.email;
                _this.imgId = d.profile.imgId;
                _this.displayName = d.profile.displayname;
                _this.getClubsData();
            }
        }, function (e) {
            console.log(e);
        });
    };
    ProfileComponent.prototype.getClubsData = function () {
        var _this = this;
        this.mainService.getClubs().subscribe(function (d) {
            _this.mainService.loading = false;
            if (d.data.length) {
                d.data.map(function (val, idx) {
                    var taggedUsers = val.taggedUsers.map(function (val1, index) { return val1.user; });
                    var index = taggedUsers.indexOf(localStorage.getItem('username'));
                    if (index > -1) {
                        val.mytag = val.taggedUsers[index];
                        _this.clubs.push(val);
                    }
                });
                console.log(_this.clubs);
            }
        }, function (e) {
            console.log(e);
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        var profile = {
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            imgId: this.imgId,
            displayname: this.displayName
        };
        this.mainService.saveProfile(profile).subscribe(function (d) {
            _this.mainService.loading = false;
            _this.orgFirstname = d.profile.firstname;
            _this.orgLastname = d.profile.lastname;
            _this.orgEmail = d.profile.email;
            _this.orgDisplayName = d.profile.displayname;
            _this.imgChanged = false;
            _this.mainService.avatarPublicId = d.profile.imgId;
            _this.mainService.name = d.profile.firstname + " " + d.profile.lastname;
            $.notify({
                icon: 'notifications',
                message: d.msg
            }, {
                type: 'success',
                timer: 3000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        }, function (e) {
            _this.mainService.loading = false;
            console.log(e);
        });
    };
    ProfileComponent.prototype.saveProfile = function () {
        this.imgChanged ? this.uploader.uploadAll() : this.updateProfile();
        return false;
    };
    return ProfileComponent;
}());
__decorate([
    core_1.ViewChild('avatar'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "avatar", void 0);
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/users/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/users/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/users/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".errmsg {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/#/home\">Liars Club</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"/#/home\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"active\">\n          <a href=\"/#/users/register\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"/#/users/login\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"../assets/img/register.jpeg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div class=\"card card-signup card-hidden\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"row text-center\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <div class=\"card-content\">\n                  <div>\n                    <span *ngIf=\"errmsg\" class=\"errmsg\">{{errmsg}}</span>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username...\" #username>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">email</i>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" #email>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                    <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" #password/>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                      <a>terms and conditions</a>.\n                    </label>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button class=\"btn btn-primary btn-round\" (click)=\"register()\" >Register</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/users/register/register.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
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
        template: __webpack_require__("../../../../../src/app/dashboard/users/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/users/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/articles.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var ArticlesService = (function () {
    function ArticlesService(http, mainService) {
        this.http = http;
        this.mainService = mainService;
    }
    ArticlesService.prototype.getArticles = function () {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/article/getall/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.getHomeArticles = function () {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/article/gethome/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.getSettings = function () {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/setting/article/get/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.setSettings = function (setting) {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/setting/article/set/', { access_token: token, articleSetting: setting })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.getArticleById = function (id) {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/article/getbyid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.addArticle = function (article) {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/article/add/', { access_token: token, article: article })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.removeArticleById = function (id) {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/article/remove/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.updateArticle = function (article) {
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/article/update/', { access_token: token, article: article })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ArticlesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ArticlesService.prototype.handleError = function (error) {
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
    return ArticlesService;
}());
ArticlesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], ArticlesService);
exports.ArticlesService = ArticlesService;
var _a, _b;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/main.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var MainService = (function () {
    function MainService(http, satizer) {
        var _this = this;
        this.http = http;
        this.satizer = satizer;
        this.apiUrl = environment_1.environment.apiurl;
        this.jQuery = $;
        this.cloudinaryUploadPresets = {
            profile: 'dnqs3sro',
            clubs: 'vzyghp9n',
            setups: 'mvfr6hdk'
        };
        this.cloudName = 'liars-club';
        this.userNames = [];
        this.userDisplayNames = [];
        this.name = 'User';
        this.userRole = '';
        this.userId = '';
        this.username = '';
        this.avatarPublicId = '';
        if (http) {
            this.getProfileData().subscribe(function (d) {
                _this.loading = false;
                if (d.type) {
                    _this.name = d.profile.firstname + " " + d.profile.lastname;
                    _this.avatarPublicId = d.profile.imgId;
                }
            }, function (e) {
                console.log(e);
            });
            this.getUserName();
        }
    }
    MainService.prototype.getUserName = function () {
        var _this = this;
        this.getAllUsers().subscribe(function (d) {
            _this.getAllProfiles().subscribe(function (profiles) {
                d.users.map(function (val, idx) {
                    _this.userNames[val._id] = val.name;
                    _this.userDisplayNames[val._id] = val.name;
                    for (var i = 0; i < profiles.length; i++) {
                        if (profiles[i].username === val.name) {
                            _this.userNames[val._id] = _this.userNames[val._id] + " (" + profiles[i].firstname + " " + profiles[i].lastname + ")";
                            profiles[i].displayname ?
                                _this.userDisplayNames[val._id] = _this.userDisplayNames[val._id] + " (" + profiles[i].displayname + ")" :
                                _this.userDisplayNames[val._id] = "" + _this.userDisplayNames[val._id];
                        }
                    }
                });
            }, function (e1) {
                console.log(e1);
            });
        }, function (e) {
            console.log(e);
        });
    };
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
        return this.http.get(this.apiUrl + '/users/')
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getUserProfileById = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/users/getuserbyid/', { access_token: token, id: id })
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
    MainService.prototype.getAllProfiles = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/users/getallprofiles/', { access_token: token })
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
    MainService.prototype.getClubById = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/getclubbyid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getConfirmedClubs = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/confirmed/', { access_token: token })
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
    MainService.prototype.updateClub = function (club) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        var data = {
            access_token: token,
            club: club
        };
        return this.http.post(this.apiUrl + '/clubs/update/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.updateUserTag = function (clubId, user) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        var data = {
            access_token: token,
            id: clubId,
            user: user
        };
        return this.http.post(this.apiUrl + '/clubs/updateusertag/', data);
    };
    MainService.prototype.approveClub = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        var data = {
            access_token: token,
            id: id
        };
        return this.http.post(this.apiUrl + '/clubs/approve/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.rejectClub = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        var data = {
            access_token: token,
            id: id
        };
        return this.http.post(this.apiUrl + '/clubs/reject/', data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.removeClub = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        var data = {
            access_token: token,
            id: id
        };
        return this.http.post(this.apiUrl + '/clubs/remove/', data)
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
    MainService.prototype.untagClubWithUserId = function (id, userId) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/admin/untag/', { access_token: token, clubId: id, userId: userId })
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
    MainService.prototype.getSetupById = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/getsetupbyid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.removeSetup = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/removesetup/', { access_token: token, setupId: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.restoreSetup = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/restoresetup/', { access_token: token, setupId: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getRemovedSetups = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/getremovedsetups/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.deleteSetup = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/setups/deletesetup/', { access_token: token, setupId: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ////////--------  Forums Services --------------/////////////////////
    MainService.prototype.addForum = function (data) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/addforum/', { access_token: token, data: data })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getConfirmedForums = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/getconfirmedforums/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.getAllForums = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/getforums/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.activateForum = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/activateforum/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.deactivateForum = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/deactivateforum/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.deleteForum = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/deleteforum/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.updateForumsOrder = function (forums) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/forums/updateforumsorder/', { access_token: token, forums: forums })
            .map(this.extractData)
            .catch(this.handleError);
    };
    // -----    Notifications API   ----- //
    MainService.prototype.getNotifications = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/notifications/get/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.sendNotification = function (event) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/sendnotificationnow/', { access_token: token, event: event })
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
    MainService.prototype.getDateString = function (str) {
        if (!str) {
            return '';
        }
        var date = new Date(str);
        return date.toLocaleDateString();
    };
    MainService.prototype.getDateTimeString = function (str) {
        if (!str) {
            return '';
        }
        var date = new Date(str);
        return date.toLocaleString();
    };
    MainService.prototype.getDateTimeDifference = function (str) {
        if (!str) {
            return '';
        }
        else {
            var today = new Date();
            var cday = new Date(str);
            var diff = today.getTime() - cday.getTime();
            if (diff < 1000 * 60) {
                return (diff / 1000).toFixed(0) + " second" + ((diff / 1000).toFixed(0) === '1' ? '' : 's' + ' ago');
            }
            else if (diff < 1000 * 60 * 60) {
                return (diff / 1000 / 60).toFixed(0) + " minute" + ((diff / 1000 / 60).toFixed(0) === '1' ? '' : 's' + ' ago');
            }
            else if (diff < 1000 * 60 * 60 * 24) {
                return (diff / 1000 / 60 / 60).toFixed(0) + " hour"
                    + ((diff / 1000 / 60 / 60).toFixed(0) === '1' ? '' : 's' + ' ago');
            }
            else if (diff < 1000 * 60 * 60 * 24 * 30) {
                return (diff / 1000 / 60 / 60 / 24).toFixed(0) + " day"
                    + ((diff / 1000 / 60 / 60 / 24).toFixed(0) === '1' ? '' : 's' + ' ago');
            }
            else if (diff < 1000 * 60 * 60 * 24 * 365) {
                return (diff / 1000 / 60 / 60 / 24 / 30).toFixed(0) + " month"
                    + ((diff / 1000 / 60 / 60 / 24 / 30).toFixed(0) === '1' ? '' : 's' + ' ago');
            }
            else {
                return (diff / 1000 / 60 / 60 / 24 / 365).toFixed(0) + " year"
                    + ((diff / 1000 / 60 / 60 / 24 / 365).toFixed(0) === '1' ? '' : 's' + ' ago');
            }
        }
    };
    MainService.prototype.initTinyMCE = function (defaultText) {
        var _this = this;
        if (defaultText === void 0) { defaultText = ''; }
        var me = this;
        tinymce.init({
            selector: '.tinymce-editor',
            plugins: [
                'link image hr anchor pagebreak',
                'searchreplace wordcount code fullscreen',
                'insertdatetime table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc youtube'
            ],
            toolbar1: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
            toolbar2: 'forecolor backcolor emoticons | codesample | createspan removespan | youtube',
            menubar: 'edit insert view format table tools',
            relative_urls: false,
            document_base_url: 'assets/js/plugins/tinymce/',
            skin_url: 'skins/lightgray',
            branding: false,
            image_advtab: true,
            paste_preprocess: function (plugin, args) {
                while (args.content.includes('&lt;')) {
                    args.content = args.content.replace('&lt;', '<');
                }
                while (args.content.includes('&gt;')) {
                    args.content = args.content.replace('&gt;', '>');
                }
            },
            extended_valid_elements: '+iframe[src|width|height|name|align|class]',
            file_picker_callback: function (callback, value, meta) {
                if (meta.filetype === 'image') {
                    $('#upload').trigger('click');
                    $('#upload').on('change', function (evt) {
                        me.readFile(callback, evt.target);
                    });
                }
            },
            height: 200,
            max_height: 'calc(100% - 500px)',
            paste_data_images: true,
            setup: function (editor) {
                _this.editor = editor;
                _this.editor.on('paste', function (e) {
                });
            },
        });
    };
    MainService.prototype.readFile = function (callback, inputFile) {
        var file = inputFile.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
        };
        myReader.onload = function (e) {
            callback(e.target.result, {
                alt: ''
            });
        };
        myReader.readAsDataURL(file);
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _b || Object])
], MainService);
exports.MainService = MainService;
var _a, _b;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var PostsService = (function () {
    function PostsService(http, mainService) {
        this.http = http;
        this.mainService = mainService;
    }
    PostsService.prototype.getAllPosts = function () {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/getallposts/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.getPostsByTopicId = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/getpostsbytopicid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.getPostById = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/getpostbyid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.addPost = function (data) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/addpost/', { access_token: token, data: data })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.deletePost = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/deletepost/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.deleteReportedPost = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/deletereportedpostbyid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.likePost = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/likepost/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.dislikePost = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/dislikepost/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.removeLikePost = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/removelikepost/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.removeDislikePost = function (id) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/removedislikepost/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.getReportedPosts = function () {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/getreportposts/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.reportPost = function (id, text) {
        this.mainService.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/reportpostbyid/', { access_token: token, postId: id, userId: this.mainService.userId, text: text })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    PostsService.prototype.handleError = function (error) {
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
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], PostsService);
exports.PostsService = PostsService;
var _a, _b;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var io = __webpack_require__("../../../../socket.io-client/lib/index.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var SocketService = (function () {
    function SocketService(mainService) {
        this.mainService = mainService;
        this.url = this.mainService.apiUrl;
    }
    SocketService.prototype.sendMessage = function (type, message) {
        this.socket.emit(type, message);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on('message', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], SocketService);
exports.SocketService = SocketService;
var _a;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var posts_service_1 = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var topics_service_1 = __webpack_require__("../../../../../src/app/services/topics.service.ts");
var StorageService = (function () {
    function StorageService(mainService, postService, topicService) {
        this.mainService = mainService;
        this.postService = postService;
        this.topicService = topicService;
        this.profileData = [];
        this.allProfiles = [];
        this.clubs = [];
        this.allRoles = [];
        this.allVotings = [];
        this.setups = [];
        this.confirmedForums = [];
        this.allForums = [];
        this.allPosts = [];
        this.reportedPosts = [];
        this.confirmedTopics = [];
        this.allTopics = [];
        this.userNames = [];
        this.getUserName();
        this.getAllForums();
        this.getAllPosts();
        this.getAllProfiles();
        this.getAllRoles();
        this.getAllTopics();
        this.getAllUsers();
        this.getAllVotings();
        this.getConfirmedForums();
        this.getConfirmedTopics();
        this.getProfileData();
        this.getReportedPosts();
        this.getSetups();
    }
    StorageService.prototype.getUserName = function () {
        this.mainService.getUserName();
    };
    StorageService.prototype.getAllUsers = function () {
        var _this = this;
        this.mainService.getAllUsers().subscribe(function (d) {
            _this.allUsers = d;
            if (_this.allProfiles.length) {
                var profiles_1 = _this.allProfiles;
                d.users.map(function (val, idx) {
                    _this.userNames[val._id] = val.name;
                    for (var i = 0; i < profiles_1.length; i++) {
                        if (profiles_1[i].username === val.name) {
                            _this.userNames[val._id] = _this.userNames[val._id] + " (" + profiles_1[i].firstname + " " + profiles_1[i].lastname + ")";
                        }
                    }
                });
            }
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getProfileData = function () {
        var _this = this;
        this.mainService.getProfileData().subscribe(function (d) {
            _this.profileData = d;
            _this.mainService.avatarPublicId = d.profile.imgId;
            _this.mainService.name = d.profile.firstname + " " + d.profile.lastname;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getAllProfiles = function () {
        var _this = this;
        this.mainService.getAllProfiles().subscribe(function (d) {
            _this.allProfiles = d;
            if (_this.allUsers && _this.allUsers.users.length) {
                var profiles_2 = _this.allProfiles;
                _this.allUsers.users.map(function (val, idx) {
                    _this.userNames[val._id] = val.name;
                    for (var i = 0; i < profiles_2.length; i++) {
                        if (profiles_2[i].username === val.name) {
                            _this.userNames[val._id] = _this.userNames[val._id] + " (" + profiles_2[i].firstname + " " + profiles_2[i].lastname + ")";
                        }
                    }
                });
            }
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getClubs = function () {
        var _this = this;
        this.mainService.getClubs().subscribe(function (d) {
            _this.clubs = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getAllRoles = function () {
        var _this = this;
        this.mainService.getAllRoles().subscribe(function (d) {
            _this.allRoles = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getAllVotings = function () {
        var _this = this;
        this.mainService.getAllVotings().subscribe(function (d) {
            _this.allVotings = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getSetups = function () {
        var _this = this;
        this.mainService.getSetups().subscribe(function (d) {
            _this.setups = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getConfirmedForums = function () {
        var _this = this;
        this.mainService.getConfirmedForums().subscribe(function (d) {
            _this.confirmedForums = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getAllForums = function () {
        var _this = this;
        this.mainService.getAllForums().subscribe(function (d) {
            _this.allForums = d;
        }, function (e) {
            console.log(e);
        });
    };
    //////----------------    Posts Service   --------------////////////
    StorageService.prototype.getAllPosts = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (d) {
            _this.allPosts = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getReportedPosts = function () {
        var _this = this;
        this.postService.getReportedPosts().subscribe(function (d) {
            _this.reportedPosts = d;
        }, function (e) {
            console.log(e);
        });
    };
    //////----------------    Topics Service   --------------////////////
    StorageService.prototype.getConfirmedTopics = function () {
        var _this = this;
        this.topicService.getConfirmedTopics().subscribe(function (d) {
            _this.confirmedTopics = d;
        }, function (e) {
            console.log(e);
        });
    };
    StorageService.prototype.getAllTopics = function () {
        var _this = this;
        this.topicService.getAllTopics().subscribe(function (d) {
            _this.allTopics = d;
        }, function (e) {
            console.log(e);
        });
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" && _b || Object, typeof (_c = typeof topics_service_1.TopicsService !== "undefined" && topics_service_1.TopicsService) === "function" && _c || Object])
], StorageService);
exports.StorageService = StorageService;
var _a, _b, _c;
//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/topics.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var TopicsService = (function () {
    function TopicsService(http, mainService) {
        this.http = http;
        this.mainService = mainService;
    }
    TopicsService.prototype.addTopic = function (data) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/addtopic/', { access_token: token, data: data })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.getConfirmedTopics = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/getconfirmedtopics/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.getConfirmedTopicsByForumId = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/getconfirmedtopicsbyforumid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.getAllTopics = function () {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/gettopics/', { access_token: token })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.getTopicById = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/gettopicbyid/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.activateTopic = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/activatetopic/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.deactivateTopic = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/deactivatetopic/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.deleteTopic = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/deletetopic/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.increaseView = function (id) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.mainService.apiUrl + '/forums/topic/increaseview/', { access_token: token, id: id })
            .map(this.extractData)
            .catch(this.handleError);
    };
    TopicsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TopicsService.prototype.handleError = function (error) {
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
    return TopicsService;
}());
TopicsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], TopicsService);
exports.TopicsService = TopicsService;
var _a, _b;
//# sourceMappingURL=topics.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}\n            <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var footer_component_1 = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
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

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n            </button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">{{notificationTexts.length}}</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li *ngFor=\"let notification of notificationTexts\">\n                            <a>{{notification}}</a>\n                        </li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"/profile\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var sidebar_routes_config_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
var sidebar_metadata_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.metadata.ts");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var NavbarComponent = (function () {
    function NavbarComponent(location, mainService, socketService) {
        this.mainService = mainService;
        this.socketService = socketService;
        this.notifications = [];
        this.notificationTexts = [];
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle.menuType !== sidebar_metadata_1.MenuType.BRAND; });
        this.getNotifications();
        this.connection = this.socketService.getMessages().subscribe(function (message) {
            // this.notifications.push(message);
            if (message['type'] === 'notification') {
                if (message['msg'] === 'updated') {
                    _this.getNotifications();
                }
            }
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
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
    NavbarComponent.prototype.getNotifications = function () {
        var _this = this;
        this.mainService.getNotifications().subscribe(function (d) {
            _this.notifications = d.notifications;
            _this.notificationTexts = [];
            for (var i = 0; i < _this.notifications.length; i++) {
                if (_this.notifications[i].type === 'event') {
                    _this.notificationTexts.push(_this.notifications[i].text.notificationText);
                }
            }
        }, function (e) {
            console.log(e);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof socket_service_1.SocketService !== "undefined" && socket_service_1.SocketService) === "function" && _c || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var navbar_component_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var socket_service_1 = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
            common_1.CommonModule
        ],
        declarations: [navbar_component_1.NavbarComponent],
        exports: [navbar_component_1.NavbarComponent],
        providers: [
            main_service_1.MainService,
            socket_service_1.SocketService
        ]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar-routes.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sidebar_metadata_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.metadata.ts");
exports.ROUTES = [
    { path: 'home', title: 'Home', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/clubs', title: 'Clubs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/events', title: 'Events', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/people', title: 'People', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'setups', title: 'Setups', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'discuss/forums', title: 'Forums', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'discuss/blogs', title: 'Blogs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'learn/articles', title: 'Articles', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'learn/videos', title: 'Videos', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'profile', title: 'Profile', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'admin/clubs', title: 'Manage Clubs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'about', title: 'About Us', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'admin/setups', title: 'Manage Setups', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'admin/forums', title: 'Manage Forums', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'admin/articles', title: 'Manage Articles', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"logo\">\n            <div class=\"logo-normal\">\n                <a href=\"\" class=\"simple-text\">\n                    Liars Club\n                </a>\n            </div>\n\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/Logo-6.png\"/>\n            </div>\n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                  <cl-image data-u=\"image\" public-id=\"{{mainService.avatarPublicId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"860\" width=\"860\" format=\"gif\">\n                  </cl-image>\n                </div>\n                <div class=\"info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            {{ mainService.name }}\n                            <b class=\"caret\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\">\n                        <ul class=\"nav\">\n                            <li>\n                              <a [routerLink]=\"[menuItems[9].path]\">\n                                <i class=\"material-icons\">person</i>\n                                <p>My Profile</p>\n                              </a>\n                            </li>\n                            <li>\n                              <a href=\"\" (click)=\"logout($event)\">\n                                <i class=\"{{menuItems[0].icon}}\">power_settings_new</i>\n                                <p>Logout</p>\n                              </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"nav-container\">\n                <ul class=\"nav\">\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[0].path]\">\n                            <i class=\"{{menuItems[0].icon}}\">home</i>\n                            <p>{{menuItems[0].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                      <a  [routerLink]=\"[menuItems[11].path]\">\n                        <i class=\"{{menuItems[11].icon}}\">info</i>\n                        <p>{{menuItems[11].title}}</p>\n                      </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#componentsExamples\">\n                            <i class=\"material-icons\">public</i>\n                            <p>Connect\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"componentsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[1].path]\">\n                                      <i class=\"{{menuItems[0].icon}}\">room</i>\n                                      <p>{{menuItems[1].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[2].path]\">\n                                      <i class=\"{{menuItems[0].icon}}\">date_range</i>\n                                      <p>{{menuItems[2].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[3].path]\">\n                                      <i class=\"{{menuItems[0].icon}}\">people</i>\n                                      <p>{{menuItems[3].title}}</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a (click)=\"gotoSetup()\" [routerLink]=\"[menuItems[4].path]\">\n                            <i class=\"{{menuItems[4].icon}}\">library_books</i>\n                            <p>{{menuItems[4].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#formsExamples\">\n                            <i class=\"material-icons\">chat</i>\n                            <p>Discuss\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"formsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[5].path]\">\n                                      <i class=\"{{menuItems[5].icon}}\">forum</i>\n                                      <p>{{menuItems[5].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[6].path]\">\n                                      <i class=\"{{menuItems[6].icon}}\">speaker_notes</i>\n                                      <p>{{menuItems[6].title}}</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#tablesExamples\">\n                            <i class=\"material-icons\">help</i>\n                            <p>Learn\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"tablesExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[7].path]\">\n                                      <i class=\"{{menuItems[7].icon}}\">view_headline</i>\n                                      <p>{{menuItems[7].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[8].path]\">\n                                      <i class=\"{{menuItems[8].icon}}\">videocam</i>\n                                      <p>{{menuItems[8].title}}</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                  <li routerLinkActive=\"active\" *ngIf=\"mainService.userRole != 'admin'\">\n                    <a  [routerLink]=\"[menuItems[10].path]\">\n                      <i class=\"{{menuItems[10].icon}}\">account_balance</i>\n                      <p>{{menuItems[10].title}}</p>\n                    </a>\n                  </li>\n\n                  <li routerLinkActive=\"active\" *ngIf=\"mainService.userRole == 'admin'\">\n                    <a data-toggle=\"collapse\" href=\"#adminPanel\">\n                      <i class=\"material-icons\">account_box</i>\n                      <p>Admin\n                        <b class=\"caret\"></b>\n                      </p>\n                    </a>\n                    <div class=\"collapse\" id=\"adminPanel\">\n                      <ul class=\"nav\">\n                        <li routerLinkActive=\"active\">\n                          <a  [routerLink]=\"[menuItems[10].path]\">\n                            <i class=\"{{menuItems[10].icon}}\">account_balance</i>\n                            <p>{{menuItems[10].title}}</p>\n                          </a>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                          <a  [routerLink]=\"[menuItems[12].path]\">\n                            <i class=\"{{menuItems[12].icon}}\">account_balance</i>\n                            <p>{{menuItems[12].title}}</p>\n                          </a>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                          <a  [routerLink]=\"[menuItems[13].path]\">\n                            <i class=\"{{menuItems[13].icon}}\">account_balance</i>\n                            <p>{{menuItems[13].title}}</p>\n                          </a>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                          <a  [routerLink]=\"[menuItems[14].path]\">\n                            <i class=\"{{menuItems[14].icon}}\">account_balance</i>\n                            <p>{{menuItems[14].title}}</p>\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n\n                </ul>\n            </div>\n\n        </div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var sidebar_routes_config_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
var sidebar_metadata_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.metadata.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var main_service_1 = __webpack_require__("../../../../../src/app/services/main.service.ts");
var SidebarComponent = (function () {
    function SidebarComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.loaded = false;
        this.firstLoad = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = sidebar_routes_config_1.ROUTES.filter(function (menuItem) { return menuItem.menuType !== sidebar_metadata_1.MenuType.BRAND; });
    };
    SidebarComponent.prototype.ngAfterViewChecked = function () {
        if (this.loaded && this.firstLoad) {
            $.getScript('../../assets/js/sidebar-moving-tab.js');
            this.firstLoad = false;
            this.loaded = false;
        }
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
    SidebarComponent.prototype.gotoSetup = function () {
        if (this.mainService.currentViewSetup) {
            this.mainService.currentViewSetup.viewDetails = false;
        }
        this.router.navigate(['setups']);
    };
    return SidebarComponent;
}());
__decorate([
    core_1.ViewChild('adminPanel'),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "adminPanel", void 0);
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.metadata.ts":
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

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var ng2_cloudinary_1 = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule, ng2_cloudinary_1.Ng2CloudinaryModule],
        declarations: [sidebar_component_1.SidebarComponent],
        exports: [sidebar_component_1.SidebarComponent]
    })
], SidebarModule);
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/assets/js/init/initDatetimepickers.js":
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

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiurl: 'http://192.168.4.36:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map