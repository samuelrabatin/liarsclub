webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
var http_1 = __webpack_require__(40);
var Observable_1 = __webpack_require__(2);
__webpack_require__(257);
__webpack_require__(104);
var MainService = (function () {
    function MainService(http) {
        var _this = this;
        this.http = http;
        this.apiUrl = 'https://liarsclubserver.herokuapp.com';
        this.cloudinaryUploadPresets = {
            profile: 'hhfktgrl',
            clubs: 'mpahsbqu',
            setups: 'w5wu0ytu'
        };
        this.cloudName = 'da2w1aszs';
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
    MainService.prototype.untagClubWithUsername = function (id, username) {
        this.loading = true;
        var token = localStorage.getItem('liarsclubtoken');
        return this.http.post(this.apiUrl + '/clubs/admin/untag/', { access_token: token, clubId: id, user: username })
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], MainService);
exports.MainService = MainService;
var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
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
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
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
        template: __webpack_require__(229),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),
/* 77 */
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
var router_1 = __webpack_require__(10);
var main_service_1 = __webpack_require__(5);
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
                _this.mainService.getSetups().subscribe(function (d) {
                    var setups = d.data;
                    for (var i = 0; i < setups.length; i++) {
                        if (setups[i]._id === id) {
                            _this.orgData = setups[i];
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
                        }
                    }
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
        for (var i = this.minimumMember; i <= this.maximumMember; i++) {
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
        return this.rolesSelectOptions;
    };
    AddEditComponent.prototype.getIntersectionSelectOptions = function () {
        var _this = this;
        var rolesAndTeams = this.roles.map(function (val, index) { return { id: index, name: val.name }; });
        var teams = this.teams.map(function (val, index) { return { id: index + _this.roles.length, name: val.name }; });
        rolesAndTeams = rolesAndTeams.concat(teams);
        return rolesAndTeams;
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
        template: __webpack_require__(243),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], AddEditComponent);
exports.AddEditComponent = AddEditComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-edit.component.js.map

/***/ }),
/* 78 */
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
var main_service_1 = __webpack_require__(5);
var SetupDetailComponent = (function () {
    function SetupDetailComponent(mainService) {
        this.mainService = mainService;
        this.playersFilter = [];
        this.teamFilter = [];
        this.rolesFilter = [];
        this.filteredRoles = [];
        this.filteredTeams = [];
    }
    SetupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.setup);
        this.selectSettings = {
            showCheckAll: true,
            showUncheckAll: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn-group select-with-transition',
            dynamicTitleMaxItems: 5,
        };
        this.roleSelectSettings = this.setup.roles.map(function (val, idx) { _this.rolesFilter.push(val.name); return { id: val.name, name: val.name }; });
        this.teamSelectSettings = this.setup.teams.map(function (val, idx) { _this.teamFilter.push(val.name); return { id: val.name, name: val.name }; });
        var tmpPlayerArray = [];
        for (var i = this.setup.minimumMember; i <= this.setup.maximumMember; i++) {
            tmpPlayerArray.push({ id: i, name: i });
            this.playersFilter.push(i);
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
    SetupDetailComponent.prototype.getIntersectionSelectOptions = function () {
        var _this = this;
        var str = '';
        this.setup.roles.map(function (val, index) { str += val.name + ', '; });
        this.setup.teams.map(function (val, index) { str += index === _this.setup.teams.length - 1 ? val.name : val.name + ', '; });
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
        card.className = card.className.includes('expanded') ? card.className.replace(' expanded', '') : card.className + ' expanded';
    };
    SetupDetailComponent.prototype.teamFiltered = function (team) {
        var filtered = false;
        if (this.filteredTeams.indexOf(team.name) !== -1 && this.teamFilter.indexOf(team.name) !== -1) {
            filtered = true;
        }
        return filtered;
    };
    SetupDetailComponent.prototype.roleFiltered = function (role) {
        var filtered = false;
        if (this.filteredRoles.indexOf(role) !== -1 && this.rolesFilter.indexOf(role.name) !== -1) {
            filtered = true;
        }
        return filtered;
    };
    SetupDetailComponent.prototype.playerFiltered = function () {
        var _this = this;
        this.filteredRoles = [];
        this.setup.tblVal.map(function (val, idx) {
            for (var i = 0; i < _this.playersFilter.length; i++) {
                if (val[parseInt(_this.playersFilter[i], 0)] > 0 && _this.filteredRoles.indexOf(_this.setup.roles[idx]) === -1) {
                    _this.filteredRoles.push(_this.setup.roles[idx]);
                }
            }
        });
        this.filteredTeams = this.filteredRoles.map(function (val, idx) {
            return val.team;
        });
    };
    return SetupDetailComponent;
}());
__decorate([
    core_1.Input('setup'),
    __metadata("design:type", Object)
], SetupDetailComponent.prototype, "setup", void 0);
SetupDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-setup-detail',
        template: __webpack_require__(244),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], SetupDetailComponent);
exports.SetupDetailComponent = SetupDetailComponent;
var _a;
//# sourceMappingURL=setup-detail.component.js.map

/***/ }),
/* 79 */
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
var ng2_cloudinary_1 = __webpack_require__(28);
var main_service_1 = __webpack_require__(5);
var ProfileComponent = (function () {
    function ProfileComponent(mainService) {
        var _this = this;
        this.mainService = mainService;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.imgId = '';
        this.orgFirstname = '';
        this.orgLastname = '';
        this.orgEmail = '';
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
                _this.firstName = d.profile.firstname;
                _this.lastName = d.profile.lastname;
                _this.email = d.profile.email;
                _this.imgId = d.profile.imgId;
                _this.getClubsData();
            }
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
            imgId: this.imgId
        };
        this.mainService.saveProfile(profile).subscribe(function (d) {
            _this.mainService.loading = false;
            _this.orgFirstname = d.profile.firstname;
            _this.orgLastname = d.profile.lastname;
            _this.orgEmail = d.profile.email;
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
        template: __webpack_require__(248),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 80 */
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
var common_1 = __webpack_require__(6);
var router_1 = __webpack_require__(10);
var footer_component_1 = __webpack_require__(145);
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
/* 81 */
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
var common_1 = __webpack_require__(6);
var router_1 = __webpack_require__(10);
var navbar_component_1 = __webpack_require__(146);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sidebar_metadata_1 = __webpack_require__(41);
exports.ROUTES = [
    { path: 'home', title: 'Home', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/clubs', title: 'Clubs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/meetings', title: 'Meetings', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'connect/people', title: 'People', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'setups', title: 'Setups', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'discuss/forums', title: 'Forums', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'discuss/blogs', title: 'Blogs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'learn/articles', title: 'Articles', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'learn/videos', title: 'Videos', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'profile', title: 'Profile', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'admin/clubs', title: 'Manage Clubs', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
    { path: 'about', title: 'About Us', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'material-icons' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),
/* 83 */
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
var common_1 = __webpack_require__(6);
var router_1 = __webpack_require__(10);
var sidebar_component_1 = __webpack_require__(147);
var ng2_cloudinary_1 = __webpack_require__(28);
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
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 118;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(123);
var app_module_1 = __webpack_require__(125);
var environment_1 = __webpack_require__(148);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
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
var router_1 = __webpack_require__(10);
var common_1 = __webpack_require__(6);
var main_service_1 = __webpack_require__(5);
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
        template: __webpack_require__(228),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 125 */
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
var router_1 = __webpack_require__(10);
var http_1 = __webpack_require__(40);
var ng2_auto_complete_1 = __webpack_require__(218);
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
var app_component_1 = __webpack_require__(124);
var dashboard_component_1 = __webpack_require__(133);
var dashboard_module_1 = __webpack_require__(134);
var footer_module_1 = __webpack_require__(80);
var sidebar_module_1 = __webpack_require__(83);
var navbar_module_1 = __webpack_require__(81);
var main_service_1 = __webpack_require__(5);
var common_1 = __webpack_require__(6);
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
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),
/* 126 */
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
        template: __webpack_require__(230),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [])
], ClubDetailLineComponent);
exports.ClubDetailLineComponent = ClubDetailLineComponent;
//# sourceMappingURL=club-detail-line.component.js.map

/***/ }),
/* 127 */
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
var main_service_1 = __webpack_require__(5);
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
            for (var i = 0; i < _this.clubs.length; i++) {
                var taggedUsers = _this.clubs[i].taggedUsers.map(function (val, index) { return val.user; });
                var index = taggedUsers.indexOf(localStorage.getItem('username'));
                if (index !== -1) {
                    _this.clubs[i].tagged = true;
                    _this.clubs[i].tagInfo = _this.clubs[i].taggedUsers[index];
                }
                else {
                    _this.clubs[i].tagged = false;
                }
            }
            _this.generateLines();
            _this.mainService.loading = false;
        }, function (e) { console.log(e); _this.mainService.loading = false; });
    };
    ManageClubsComponent.prototype.generateLines = function () {
        var line = '';
        for (var j = 0; j < this.clubs.length; j++) {
            var club = this.clubs[j];
            for (var i = 0; i < club.taggedUsers.length; i++) {
                var item = club.taggedUsers[i];
                var taggedDate = new Date(item.taggedDate);
                line += "<tr>\n          <td class=\"text-left\">" + club.title + "</td>\n          <td class=\"text-center\">" + item.user + "</td>\n          <td class=\"text-center\">" + item.memberState + "</td>\n          <td class=\"text-center\">" + item.memberType + "</td>\n          <td class=\"text-center\">" + taggedDate.getFullYear() + "-" + (taggedDate.getMonth() + 1 > 9 ?
                    taggedDate.getMonth() + 1 : '0' + (taggedDate.getMonth() + 1)) + "-" + (taggedDate.getDay() > 9
                    ? taggedDate.getDay() : '0' + taggedDate.getDay()) + "</td>\n          <td class=\"text-center\">\n            <button type=\"button\" club-id=\"" + club._id + "\" username=\"" + item.user + "\" rel=\"tooltip\" class=\"btn btn-danger\">\n              <i class=\"material-icons\">close</i>\n            </button>\n          </td>\n        </tr>";
            }
        }
        this.tblBody.nativeElement.innerHTML = line;
    };
    ManageClubsComponent.prototype.tblClicked = function (evt) {
        var _this = this;
        if (evt.target.tagName === 'BUTTON') {
            var clubId = evt.target.getAttribute('club-id');
            var username = evt.target.getAttribute('username');
            this.mainService.untagClubWithUsername(clubId, username).subscribe(function (d) { _this.getClubs(); }, function (e) { console.log(e); });
        }
    };
    return ManageClubsComponent;
}());
__decorate([
    core_1.ViewChild('tblBody'),
    __metadata("design:type", Object)
], ManageClubsComponent.prototype, "tblBody", void 0);
ManageClubsComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-clubs',
        template: __webpack_require__(231),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ManageClubsComponent);
exports.ManageClubsComponent = ManageClubsComponent;
var _a;
//# sourceMappingURL=manage-clubs.component.js.map

/***/ }),
/* 128 */
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
var main_service_1 = __webpack_require__(5);
var ng2_cloudinary_1 = __webpack_require__(28);
var initDateTimePicker = __webpack_require__(282);
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
            _this.imgUrl = img.public_id;
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
        var club = {
            title: this.clubName.nativeElement.value,
            address: this.clubAddress.nativeElement.value,
            type: this.regularly.nativeElement.checked ? 'Regularly' : 'Irreglarly',
            imgUrl: this.imgUrl,
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
    AddClubComponent.prototype.addClub = function (evt) {
        if (this.imgChanged) {
            console.log('ch');
            this.uploader.uploadAll();
        }
        else {
            console.log('unch');
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
        template: __webpack_require__(232),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], AddClubComponent);
exports.AddClubComponent = AddClubComponent;
var _a, _b;
//# sourceMappingURL=add-club.component.js.map

/***/ }),
/* 129 */
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
var main_service_1 = __webpack_require__(5);
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
        template: __webpack_require__(233),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _b || Object])
], ClubComponent);
exports.ClubComponent = ClubComponent;
var _a, _b;
//# sourceMappingURL=club.component.js.map

/***/ }),
/* 130 */
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
var main_service_1 = __webpack_require__(5);
var ClubsComponent = (function () {
    function ClubsComponent(mainService) {
        this.mainService = mainService;
    }
    ClubsComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    ClubsComponent.prototype.getClubs = function () {
        var _this = this;
        this.mainService.getClubs().subscribe(function (d) {
            _this.clubs = d.data;
            for (var i = 0; i < _this.clubs.length; i++) {
                var taggedUsers = _this.clubs[i].taggedUsers.map(function (val, index) { return val.user; });
                var index = taggedUsers.indexOf(localStorage.getItem('username'));
                if (index !== -1) {
                    _this.clubs[i].tagged = true;
                    _this.clubs[i].taggedIndex = index;
                }
                else {
                    _this.clubs[i].tagged = false;
                }
            }
            _this.mainService.loading = false;
        }, function (e) { console.log(e); _this.mainService.loading = false; });
    };
    return ClubsComponent;
}());
ClubsComponent = __decorate([
    core_1.Component({
        selector: 'clubs-cmp ',
        template: __webpack_require__(234),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], ClubsComponent);
exports.ClubsComponent = ClubsComponent;
var _a;
//# sourceMappingURL=clubs.component.js.map

/***/ }),
/* 131 */
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
        template: __webpack_require__(235)
    })
], MeetingsComponent);
exports.MeetingsComponent = MeetingsComponent;
//# sourceMappingURL=meetings.component.js.map

/***/ }),
/* 132 */
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
        template: __webpack_require__(236)
    })
], PeopleComponent);
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map

/***/ }),
/* 133 */
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
        template: __webpack_require__(237)
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 134 */
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
var router_1 = __webpack_require__(10);
var platform_browser_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(22);
var ng2_cloudinary_1 = __webpack_require__(28);
var ng2_file_upload_1 = __webpack_require__(36);
var ngx_color_picker_1 = __webpack_require__(225);
var footer_module_1 = __webpack_require__(80);
var sidebar_module_1 = __webpack_require__(83);
var navbar_module_1 = __webpack_require__(81);
var angular_2_dropdown_multiselect_1 = __webpack_require__(150);
var dashboard_routes_1 = __webpack_require__(135);
var profile_component_1 = __webpack_require__(79);
var add_edit_component_1 = __webpack_require__(77);
var club_detail_line_component_1 = __webpack_require__(126);
var uploader_component_1 = __webpack_require__(142);
var about_component_1 = __webpack_require__(76);
var setup_detail_component_1 = __webpack_require__(78);
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
            angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
        ],
        declarations: [dashboard_routes_1.MODULE_COMPONENTS, profile_component_1.ProfileComponent, add_edit_component_1.AddEditComponent, club_detail_line_component_1.ClubDetailLineComponent, uploader_component_1.UploaderComponent, about_component_1.AboutComponent, setup_detail_component_1.SetupDetailComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { DashboardComponent } from './dashboard.component';
var home_component_1 = __webpack_require__(138);
var clubs_component_1 = __webpack_require__(130);
var meetings_component_1 = __webpack_require__(131);
var people_component_1 = __webpack_require__(132);
var setups_component_1 = __webpack_require__(141);
var forums_component_1 = __webpack_require__(137);
var blogs_component_1 = __webpack_require__(136);
var articles_component_1 = __webpack_require__(139);
var videos_component_1 = __webpack_require__(140);
var login_component_1 = __webpack_require__(143);
var register_component_1 = __webpack_require__(144);
var profile_component_1 = __webpack_require__(79);
var club_component_1 = __webpack_require__(129);
var add_club_component_1 = __webpack_require__(128);
var add_edit_component_1 = __webpack_require__(77);
var setup_detail_component_1 = __webpack_require__(78);
var manage_clubs_component_1 = __webpack_require__(127);
var about_component_1 = __webpack_require__(76);
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
    { path: 'discuss/blogs', component: blogs_component_1.BlogsComponent },
    { path: 'learn/articles', component: articles_component_1.ArticlesComponent },
    { path: 'learn/videos', component: videos_component_1.VideosComponent },
    { path: 'users/login', component: login_component_1.LoginComponent },
    { path: 'users/register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'admin/clubs', component: manage_clubs_component_1.ManageClubsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
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
/* 136 */
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
        template: __webpack_require__(238)
    })
], BlogsComponent);
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map

/***/ }),
/* 137 */
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
        template: __webpack_require__(239)
    })
], ForumsComponent);
exports.ForumsComponent = ForumsComponent;
//# sourceMappingURL=forums.component.js.map

/***/ }),
/* 138 */
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
var main_service_1 = __webpack_require__(5);
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
        template: __webpack_require__(240)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 139 */
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
        template: __webpack_require__(241)
    })
], ArticlesComponent);
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map

/***/ }),
/* 140 */
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
        template: __webpack_require__(242)
    })
], VideosComponent);
exports.VideosComponent = VideosComponent;
//# sourceMappingURL=videos.component.js.map

/***/ }),
/* 141 */
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
var main_service_1 = __webpack_require__(5);
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
    };
    SetupsComponent.prototype.ngAfterViewChecked = function () {
        if (this.isEditsetup) {
            console.log(1, this.currentSetup);
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
        template: __webpack_require__(245),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object])
], SetupsComponent);
exports.SetupsComponent = SetupsComponent;
var _a;
//# sourceMappingURL=setups.component.js.map

/***/ }),
/* 142 */
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
var ng2_cloudinary_1 = __webpack_require__(28);
var main_service_1 = __webpack_require__(5);
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
        this.uploader.uploadAll();
    };
    return UploaderComponent;
}());
__decorate([
    core_1.Input('imgId'),
    __metadata("design:type", Object)
], UploaderComponent.prototype, "imgId", void 0);
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
        template: __webpack_require__(246),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _c || Object])
], UploaderComponent);
exports.UploaderComponent = UploaderComponent;
var _a, _b, _c;
//# sourceMappingURL=uploader.component.js.map

/***/ }),
/* 143 */
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
var router_1 = __webpack_require__(10);
var main_service_1 = __webpack_require__(5);
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
        template: __webpack_require__(247),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 144 */
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
var router_1 = __webpack_require__(10);
var main_service_1 = __webpack_require__(5);
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
        template: __webpack_require__(249),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 145 */
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
        template: __webpack_require__(250)
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 146 */
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
var sidebar_routes_config_1 = __webpack_require__(82);
var sidebar_metadata_1 = __webpack_require__(41);
var common_1 = __webpack_require__(6);
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
        template: __webpack_require__(251)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 147 */
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
var sidebar_routes_config_1 = __webpack_require__(82);
var sidebar_metadata_1 = __webpack_require__(41);
var router_1 = __webpack_require__(10);
var main_service_1 = __webpack_require__(5);
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
        template: __webpack_require__(252),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof main_service_1.MainService !== "undefined" && main_service_1.MainService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 148 */
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
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".sidebar-background {\n  display: none;\n}\n\n.sidebar {\n  background-color: #224e54;\n}\n\nloading-gif {\n  position: fixed;\n  top: 75px;\n  left: 0;\n  background: rgba(210, 255, 255, 0.2);\n  z-index: 1000;\n  width: 100%;\n  height: 10000px;\n}\n\n.loading-gif img {\n  position: fixed;\n  width: 150px;\n  height: 150px;\n  left: calc(50% - 75px);\n  top: calc(50% - 75px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "textarea {\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".panel .panel-body {\n  padding: 10px 0px;\n}\n\n.panel .panel-body .checkbox {\n  margin-top: 0px;\n}\n\n.repeat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.row {\n  padding: 0 20px;\n}\n\n.m-t-m-15 {\n  margin-top: -15px;\n}\n\n.m-t-m-10 {\n  margin-top: -10px;\n}\n\n.m-l-15 {\n  margin-left: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".card .card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px 40px;\n}\n\n.card .card-content > span {\n  width: calc(100% - 50px);\n  padding: 0 30px;\n}\n\n.card .card-content > span .club-title {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.card .card-content > span > span {\n  display: block;\n}\n\n.hover {\n  cursor: pointer;\n}\n\n.editDiag {\n  position: fixed;\n  left: calc(50% - 300px);\n  top: calc(50% - 200px);\n  width: 500px;\n  z-index: 101;\n}\n\n.editDiag > .card-content {\n  display: block;\n}\n\n.transparent-panel {\n  width: 100%;\n  height: 100%;\n  background: rgba(250, 0, 0, 0.1);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  z-index: 100;\n}\n\n.select-member {\n  margin-top: 30px;\n  height: 90px;\n}\n\n.edit {\n  display: block !important;\n  padding: 0 50px;\n}\n\n.edit > div {\n  display: block;\n}\n\n.md-card-image {\n  max-width: 250px;\n}\n\ni.delete-icon {\n  margin-left: 7px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "li .users-option::before {\n  content: '\\E87C';\n}\n\n.setup-image {\n  text-align: center;\n}\n\n.setup-image > div {\n  max-width: 150px;\n}\n\n.row {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.description {\n  font-style: italic;\n  font-size: 16px;\n  margin-left: 10px;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\ni {\n  position: relative;\n  top: 5px;\n  left: 10px;\n}\n\n.row {\n  padding-bottom: 40px;\n}\n\n.mins-text {\n  position: relative;\n  top: 25px;\n}\n\n.card-footer {\n  text-align: center;\n}\n\n.card-footer button {\n  width: 250px;\n}\n\n.bigger-textarea {\n  height: 150px;\n}\n\n.colorpicker {\n  width: 30px;\n}\n\n.narrations-list .multiselection label {\n  margin-right: 30px;\n}\n\n.row .row {\n  padding-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".row {\n  padding: 20px;\n}\n\n.color {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n}\n\n.setup-image {\n  max-height: 250px;\n  width: auto;\n}\n\ntextarea {\n  min-height: 110px;\n}\n\nform .row.card .card-content {\n  display: none;\n}\n\nform .row.card.expanded .card-content {\n  display: block;\n}\n\ni {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".row {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n\n.row.add-button {\n  margin-bottom: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "form > .card > .card-content > .row {\n  padding: 0 20px;\n}\n\n.upload-avatar {\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".errmsg {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
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
/* 228 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" *ngIf=\"!isUsers\" data-active-color=\"white\" data-background-color=\"red\">\n    <!-- <div class=\"sidebar\" data-color=\"red\" data-image=\"\"> -->\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg);\"></div>\n    </div>\n    <div class=\"{{!isUsers ? 'main-panel' : ''}}\">\n        <navbar-cmp class=\"{{!isUsers ? '' : 'hidden'}}\"></navbar-cmp>\n        <dashboard-cmp></dashboard-cmp>\n    </div>\n</div>\n\n"

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>What is a Liars Club</h2>\n        </div>\n        <div class=\"card-content\">\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>What is Mafia</h2>\n        </div>\n        <div class=\"card-content\">\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>How should I use this website</h2>\n        </div>\n        <div class=\"card-content\">\n          <textarea class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th class=\"text-left\">Club Name</th>\n                  <th class=\"text-center\">Tagged Username</th>\n                  <th class=\"text-center\">Tagged User Type</th>\n                  <th class=\"text-center\">Tagged User State</th>\n                  <th class=\"text-center\">Tagged Date</th>\n                  <th class=\"text-center\">Action</th>\n                </tr>\n              </thead>\n              <tbody #tblBody (click)=\"tblClicked($event)\">\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <legend>Add a Club</legend>\n  </div>\n  <div class=\"card-content\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Club Name</label>\n            <input class=\"form-control\" required #clubName />\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Club Address</label>\n            <input class=\"form-control\" id=\"clubAddress\" #clubAddress required (keyup)=\"locationChange($event)\" />\n          </div>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n          <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n            <div class=\"fileinput-new thumbnail\">\n              <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" #clubImg>\n            </div>\n            <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n            <div>\n              <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n                  <span class=\"fileinput-new\">Select image</span>\n                  <span class=\"fileinput-exists\">Select image</span>\n                  <input type=\"file\" name=\"...\" #clubImg ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged = true\" />\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div id=\"regularMap\" class=\"map\"></div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                <h4 class=\"panel-title\">\n                  Meets up...\n                  <i class=\"material-icons\">keyboard_arrow_down</i>\n                </h4>\n              </a>\n            </div>\n            <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                    <label>\n                      <input type=\"checkbox\" #irregulary>  Irregularly\n                    </label>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 checkbox\">\n                    <label>\n                      <input type=\"checkbox\" #regularly>  Regularly\n                    </label>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">Every</label>\n                  <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 m-t-m-15\">\n                    <input type=\"number\" min=\"1\" class=\"form-control\" value=\"1\" #repeatPeriod required>\n                  </div>\n                  <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-6 m-t-m-10\">\n                    <select class=\"selectpicker\" data-style=\"select-with-transition\" required #repeatType>\n                      <option>weeks</option>\n                      <option>months</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">On</label>\n                  <div class=\"col-lg-10\">\n                    <select class=\"selectpicker\" multiple data-style=\"select-with-transition\" required #dayOfWeek>\n                      <option>Sunday</option>\n                      <option>Monday</option>\n                      <option>Tuesday</option>\n                      <option>Wednesday</option>\n                      <option>Thursday</option>\n                      <option>Friday</option>\n                      <option>Saturday</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row repeat\">\n                  <label class=\"col-sm-2 label-on-left\">At</label>\n                  <div class=\"col-md-10 m-t-m-15\">\n                    <input type=\"text\"class=\"form-control timepicker\" #time>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Physical Location</label>\n          <input class=\"form-control\" id=\"physicalLocation\" required #phsicalLocation />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Email address</label>\n          <input class=\"form-control\" type=\"email\" required #email />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Link to website</label>\n          <input class=\"form-control\" #websiteLink />\n        </div>\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Link to Facebook page</label>\n          <input class=\"form-control\" #facebookLink />\n        </div>\n      </div>\n\n      <a (click)=\"addClub($event)\" class=\"btn btn-fill btn-rose pull-right\" >Submit</a>\n    </form>\n  </div>\n</div>\n"

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <cl-image data-u=\"image\" public-id=\"{{club.imgUrl}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n    </cl-image>\n    <span>\n        <span class=\"club-title\">\n          {{club.title}}\n          <small>{{club.tagged ? '   -- You tagged yourself as ' + (club.taggedUsers[club.taggedIndex].memberState === 'active' ? 'an ' : 'a ')\n            +  club.taggedUsers[club.taggedIndex].memberState + ' ' + club.taggedUsers[club.taggedIndex].memberType + ' of this club' : ''}}</small>\n        </span>\n        <span class=\"club-desciption\">{{club.dayOfWeek}}s at {{club.time}}, {{club.activeMembers + club.pastMembers}} members</span>\n    </span>\n    <i class=\"material-icons hover\" (click)=\"showEditDiag = !showEditDiag\">info</i>\n    <i class=\"material-icons hover delete-icon\" (click)=\"clubDelete()\" *ngIf=\"isMine(club)\">cancel</i>\n  </div>\n  <div class=\"card-footer\" *ngIf=\"showEditDiag\">\n    <div class=\"edit\">\n      <p>Location: {{club.location}}</p>\n      <p>{{club.activeMembers}} active members, {{club.pastMembers}} past members</p>\n      <p>Meets on {{club.dayOfWeek}}s at {{club.time}}</p>\n      <div class=\"select-member\" *ngIf=\"!club.tagged\">\n        <p>I am a ...</p>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n          <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberState\" name=\"memberState\">\n            <option value=\"active\">Active</option>\n            <option value=\"past\">Past</option>\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n          <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberType\" name=\"memberType\">\n            <option value=\"member\">Member</option>\n            <option value=\"admin\">Admin</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"\">\n        <button class=\"btn btn-success pull-right\" (click)=\"tag()\" *ngIf=\"!club.tagged\">Tag myself with this club</button>\n        <button class=\"btn btn-danger pull-right\" (click)=\"unTag()\" *ngIf=\"club.tagged\">Untag this club</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"transparent-panel\" *ngIf=\"showDiag\" (click)=\"cancel()\">\n</div>\n\n\n<div class=' {{ showDiag ? \"card editDiag\" : \"card editDiag hidden\" }} ' #editDiag>\n  <div class=\"card-content\">\n    <h2>{{club.title}}</h2>\n    <p>{{club.location}}</p>\n    <p>{{club.activeMembers}} active members, {{club.pastMembers}} past members</p>\n    <p>Meets on {{club.dayOfWeek}}s at {{club.time}}</p>\n    <div class=\"select-member\">\n      <p>I am a ...</p>\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberState\" name=\"memberState\">\n          <option value=\"active\">Active</option>\n          <option value=\"past\">Past</option>\n        </select>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n        <select class=\"selectpicker\" data-style=\"select-with-transition\" data-size=\"7\" [(ngModel)]=\"memberType\" name=\"memberType\">\n          <option value=\"member\">Member</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-success pull-right\" (click)=\"tag()\" *ngIf=\"!club.tagged\">Tag myself with this club</button>\n    <button class=\"btn btn-danger pull-right\" (click)=\"unTag()\" *ngIf=\"club.tagged\">Untag myself with this club</button>\n  </div>\n</div>\n"

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n            <app-club *ngFor=\"let club of clubs\" [club] = \"club\" (tagChanged)=\"getClubs()\" ></app-club>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n            <app-add-club (clubAdded)=\"getClubs()\" ></app-add-club>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" *ngIf=\"userLoggedIn\">\n            <div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <ul class=\"nav nav-pills nav-pills-icons nav-pills-rose nav-stacked\" role=\"tablist\">\n                                    <li class=\"active\">\n                                        <a href=\"#dashboard-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">dashboard</i> Updates\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#schedule-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">schedule</i> Social\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-md-10\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active\" id=\"dashboard-2\">\n                                        <div>\n                                            <i class=\"material-icons btn-lg\">event</i>\n                                            <span>The Stanford Liars Club is meeting on <strong>Sunday at 8pm</strong></span>\n                                        </div>\n                                        <div>\n                                            <i class=\"material-icons btn-lg\">receipt</i>\n                                            <span><strong>activatedalien</strong> has uploaded a new article, <strong>\"Ax Endgames\"</strong></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"schedule-2\">\n                                        <div>\n                                            <i class=\"material-icons\">straighten</i>\n                                            <span><strong>2 meetings</strong> near you this week</span>\n                                        </div>\n                                        <button class=\"btn btn-success btn-large\"> Review Your Games </button>\n                                        <button class=\"btn btn-success btn-large\"> Manage Your Groups </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"userLoggedIn\">\n            <div class=\"col-md-7 col-lg-7 col-xs-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <img src=\"../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\" alt=\"\" >\n                                <h4>Main Article</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content col-lg-6 col-md-6 col-sm-12 col-xs-6\">\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <img src=\"../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                                <h4>Article 1</h4>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content col-lg-6 col-md-6 col-sm-12 col-xs-6\">\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <img src=\"/../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                                <h4>Article 2</h4>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5 col-lg-5 col-xs-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <img src=\"../../../assets/img/image_placeholder.jpg\" class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\">\n                        <h4>Main Forum/Blog Post</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"coming-soon\" *ngIf=\"!userLoggedIn\">\n            <h1>Signup Form here, coming soon</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h1>Coming Soon!</h1>\n    </div>\n</div>\n"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>{{isEdit ? 'Edit Setup' : 'Add Setup'}}</h3>\n      </div>\n      <div class=\"card-content\">\n        <form (submit)=\"saveSetup()\">\n          <div class=\"row\">\n            <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">Setup Name</label>\n                <input class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" required />\n              </div>\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">Created by:</label>\n                <input class=\"form-control\" list=\"usernames\" [(ngModel)]=\"createdUser\" name=\"createdUser\" required>\n                <datalist id=\"usernames\"  multiple data-style=\"select-with-transition\" required>\n                  <option *ngFor=\"let user of users\">\n                    {{user.name}}\n                  </option>\n                </datalist>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12 setup-image\">\n              <app-uploader [imgId]=\"imgId\" (changed)=\"uploading = true;\" (uploaded)=\"mainImgUploaded($event)\" #mainUploader></app-uploader>\n            </div>\n          </div>\n\n\n          <div class=\"row setup-description\">\n            <div class=\"cheader\">\n              <h3>\n                Description\n              </h3>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <textarea class=\"form-control\" required [(ngModel)]=\"setupDescription\" name=\"setupDescription\" ></textarea>\n            </div>\n          </div>\n\n\n          <div class=\"row difficulty\">\n            <div class=\"cheader\">\n              <h3>\n                Difficulty\n              </h3>\n            </div>\n            <div class=\"col-md-4 col-lg-4\">\n              <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                <label class=\"control-label\">Difficulty level</label>\n                <select class=\"form-control\" [(ngModel)]=\"difficulty\" name=\"difficulty\">\n                  <option>Beginner</option>\n                  <option>Intermediate</option>\n                  <option>Advanced</option>\n                  <option>Expert</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row member-count\">\n            <div class=\"cheader\">\n              <h3>\n                Recommended Number of Players\n              </h3>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                <label class=\"control-label\">Minimum</label>\n                <input class=\"form-control\" required type=\"number\" [(ngModel)]=\"minimumMember\" (change)=\"minChange()\" name=\"minimumMember\" min=\"1\" />\n              </div>\n              <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                <label class=\"control-label\">Maximum</label>\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"maximumMember\" (change)=\"maxChange()\" name=\"maximumMember\" min=\"1\" required />\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row playTime\">\n            <div class=\"cheader\">\n              <h3>\n                Expected Play Time\n              </h3>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                <label class=\"control-label\"></label>\n                <input class=\"form-control\" required type=\"number\" min=\"1\" [(ngModel)]=\"playTime\" name=\"playTime\"/>\n              </div>\n              <span class=\"mins-text\">mins</span>\n            </div>\n          </div>\n\n          <div class=\"row teams\">\n            <div class=\"cheader\">\n              <h3>\n                Teams\n                <i class=\"material-icons\" (click)=\"addNewTeam()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"teams-list\">\n              <div class=\"row team\" *ngFor=\"let team of teams; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeTeam(idx)\">delete</i>\n                <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                  <label class=\"control-label\">Name</label>\n                  <input class=\"form-control\" [(ngModel)]=\"team.name\" required name=\"{{'teamname' + idx}}\"/>\n                </div>\n                <div class=\"form-group label-floating col-lg-3 col-md-3 col-sm-3\">\n                  <input class=\"colorpicker\" [(colorPicker)]=\"team.color\" [style.background]=\"team.color\" readonly/>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Win Condition</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"team.description\" required name=\"{{'teamdescription' + idx}}\" ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row roles\">\n            <div class=\"cheader\">\n              <h3>\n                Roles <span class=\"description\">What roles are in the game and how do they work?</span>\n                <i class=\"material-icons\" (click)=\"addNewRole()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"roles-list\">\n              <div class=\"row\" *ngFor=\"let role of roles; let ii = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeRole(idx)\">delete</i>\n                <app-uploader class=\"col-md-2 col-lg-2 col-sm-2\" [imgId]=\"role.imgId\" (changed)=\"uploaders[ii] = true\" (uploaded)=\"roleImgUploaded(ii, $event);\"></app-uploader>\n                <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group\">\n                    <label class=\"control-label\">Role Name</label>\n                    <input class=\"form-control\" list=\"defalutRolesLists\" [(ngModel)]=\"role.name\" name=\"{{'rolename' + ii}}\" [attr.index]=\"ii\" required (blur)=\"roleNameChanged($event)\" />\n                    <datalist id=\"defalutRolesLists\" [attr.index]=\"ii\">\n                      <option *ngFor=\"let role1 of defaultRoles; let i = index\" [attr.id]=\"role1._id\" [attr.value]=\"role1.name\" [attr.roleIndex]=\"i\" selected=\"{{ role._id == role1._id ? 'selected' : '' }}\" >\n                        {{role1.name}}\n                      </option>\n                    </datalist>\n                  </div>\n                  <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\n                    <label class=\"control-label\">Team</label>\n                    <select class=\"form-control\" [(ngModel)]=\"role.team\" name=\"{{'roleteam' + ii}}\">\n                      <option value=\"N/A\">N/A</option>\n                      <option *ngFor=\"let team of teams; let i = index\" [attr.value]=\"team.name\">\n                        {{team.name}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Description</label>\n                    <textarea class=\"form-control\" required [(ngModel)]=\"role.description\" name=\"{{'roledescription' + ii}}\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row intersection\">\n            <div class=\"cheader\">\n              <h3>\n                Interactions\n                <i class=\"material-icons\" (click)=\"addNewIntersection()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list\">\n              <div class=\"row team\" *ngFor=\"let intersection of intersections; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeIntersection(idx)\">delete</i>\n                <div class=\"form-group multiselection\">\n                  <label class=\"control-label\">Roles/Teams</label>\n                  <ss-multiselect-dropdown [options]=\"getIntersectionSelectOptions()\" [settings]=\"selectSettings\" [(ngModel)]=\"intersection.roles\" name=\"{{'intersection' + idx}}\"></ss-multiselect-dropdown>\n                  <i class=\"material-icons pull-right\">up</i>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"intersection.description\" required name=\"{{'narrdescription' + idx}}\" ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row narration\">\n            <div class=\"cheader\">\n              <h3>\n                Narration <span class=\"description\">Does the order in which roles are woken up matter? What is announced when people die? etc.</span>\n                <i class=\"material-icons\" (click)=\"addNewNarration()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list\">\n              <div class=\"row team\" *ngFor=\"let narration of narrations; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeNarration(idx)\">delete</i>\n                <i class=\"material-icons pull-right\" (click)=\"narrationDown(idx)\" *ngIf=\"idx != narrations.length - 1\">arrow_downward</i>\n                <i class=\"material-icons pull-right\" (click)=\"narrationUp(idx)\" *ngIf=\"idx != 0\">arrow_upward</i>\n                <div class=\"\">\n                  <div class=\"\">\n                    <ss-multiselect-dropdown [options]=\"getRolesSelectOptions()\" [texts]=\"selectedTexts\" [settings]=\"selectSettings\" [(ngModel)]=\"narration.roles\" name=\"{{'narration' + idx}}\"></ss-multiselect-dropdown>\n                  </div>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Narration</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"narration.description\" required name=\"{{'narrdescription' + idx}}\" ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row voting-roles\">\n            <div class=\"cheader\">\n              <h3>\n                Voting Rules <span class=\"description\">How does voting work? Are ties possible? etc.</span>\n              </h3>\n            </div>\n            <div class=\"roles-list\">\n              <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Voting Name</label>\n                  <input class=\"form-control\" list=\"defalutVotingsLists\" value=\"{{voting.name}}\" (blur)=\"votingNameChanged($event)\" required/>\n                  <datalist id=\"defalutVotingsLists\">\n                    <option *ngFor=\"let cvoting of defaultVotings\">\n                      {{cvoting.name}}\n                    </option>\n                  </datalist>\n                </div>\n                <div class=\"{{voting.description ? 'form-group label-floating col-lg-12 col-md-12 col-sm-12' : 'form-group label-floating col-lg-12 col-md-12 col-sm-12 is-empty'}}\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" value=\"{{voting.description}}\" required ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row missing-rules\">\n            <div class=\"cheader\">\n              <h3>\n                Additional Rules and Corner Cases <span class=\"description\">What rules have you missed</span>\n                <i class=\"material-icons\" (click)=\"addNewAdditionalRule()\">add_circle</i>\n              </h3>\n            </div>\n            <div class=\"additonal-rules-list\">\n              <div class=\"row\" *ngFor=\"let additionalRule of additionalRules; let idx = index;\">\n                <i class=\"material-icons pull-right\" (click)=\"removeAdditionalRule(idx)\">delete</i>\n                <div class=\"form-group multiselection\">\n                  <label class=\"control-label\">Roles/Teams</label>\n                  <ss-multiselect-dropdown [options]=\"getIntersectionSelectOptions()\" [settings]=\"selectSettings\" [(ngModel)]=\"additionalRule.roles\" name=\"{{'intersection' + idx}}\"></ss-multiselect-dropdown>\n                  <i class=\"material-icons pull-right\">up</i>\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"additionalRule.description\" required name=\"{{'additionalRule' + idx}}\" ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row role-frequecies\">\n            <div class=\"cheader\">\n              <h3>\n                Role Frequencies\n              </h3>\n              <h5>\n                Do you use randomization to generate your set of roles? If so, how?\n              </h5>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <textarea class=\"form-control\" required [(ngModel)]=\"roleFrequencies\" name=\"roleFrequencies\" ></textarea>\n            </div>\n            <div class=\"col-md-12 col-lg-12\">\n              <div class=\"card\">\n                <div class=\"card-content\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                      <thead class=\"text-primary\">\n                      <tr>\n                        <th>Number of players</th>\n                        <th *ngFor=\"let val of numbers\">{{val}}</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr *ngFor=\"let role of roles; let roleIdx = index;\">\n                        <td>{{role.name}}</td>\n                        <td *ngFor=\"let val of numbers; let valIdx = index;\">\n                          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"tblVal[roleIdx][val]\" name=\"{{'tblVal' + valIdx}}\" />\n                        </td>\n                      </tr>\n                      </tbody>\n                      <tfoot>\n                      <tr>\n                        <td>Total</td>\n                        <td *ngFor=\"let val of numbers\">{{calcSum(val)}}</td>\n                      </tr>\n                      </tfoot>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-primary\" [disabled]=\"dataChanged()\" (click)=\"save()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card row\">\n      <div class=\"card-header\">\n        <h3>{{setup.name}}</h3>\n      </div>\n      <div class=\"card-content\">\n        <form>\n          <div class=\"row\">\n            <div class=\"\">\n              <div class=\"col-sm-12 col-xs-12 setup-image\">\n                <cl-image data-u=\"image\" public-id=\"{{setup.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"200\" width=\"280\" format=\"jpg\">\n                </cl-image>\n              </div>\n              <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n                <div class=\"form-group col-lg-12 col-md-12 label-floating\">\n                  <label class=\"control-label\">Setup Name</label>\n                  <input class=\"form-control\" [value]=\"setup.name\" readonly />\n                </div>\n                <div class=\"form-group col-lg-12 col-md-12 label-floating\">\n                  <label class=\"control-label\">Created by:</label>\n                  <input class=\"form-control\" [value]=\"setup.createdUser\" readonly>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Difficulty level</label>\n                  <input class=\"form-control\" [value]=\"setup.difficulty\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                  <label class=\"control-label\">Playing Time</label>\n                  <input class=\"form-control\" readonly [value]=\"setup.playTime + ' mins'\" />\n                </div>\n              </div>\n              <div class=\"col-md-12 col-lg-12\">\n                <textarea class=\"form-control\" [value]=\"setup.setupDescription\" readonly ></textarea>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row filter-panel\">\n            <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-23\">\n              <label class=\"control-label\">Number of Players</label>\n              <ss-multiselect-dropdown [(ngModel)]=\"playersFilter\" name=\"playersFilter\" [options]=\"playerSelectSettings\" [settings]=\"selectSettings\" (ngModelChange)=\"playerFiltered()\"></ss-multiselect-dropdown>\n            </div>\n            <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-23\">\n              <label class=\"control-label\">Roles</label>\n              <ss-multiselect-dropdown [(ngModel)]=\"rolesFilter\" name=\"rolesFilter\" [options]=\"roleSelectSettings\" [settings]=\"selectSettings\" (ngModelChange)=\"playerFiltered()\"></ss-multiselect-dropdown>\n            </div>\n            <div class=\"form-group label-floating col-lg-4 col-md-4 col-sm-23\">\n              <label class=\"control-label\">Teams</label>\n              <ss-multiselect-dropdown [(ngModel)]=\"teamFilter\" name=\"teamFilter\" [options]=\"teamSelectSettings\" [settings]=\"selectSettings\"></ss-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div class=\"row roles card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Roles <small class=\"description\">What roles are in the game and how do they work?</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">code</i>\n              </h3>\n            </div>\n            <div class=\"roles-list card-content\">\n              <div class=\"\" *ngFor=\"let role of filteredRoles; let ii = index;\">\n                <div *ngIf=\"roleFiltered(role)\">\n                  <div class=\"col-md-2 col-lg-2 col-sm-2\">\n                    <cl-image data-u=\"image\" public-id=\"{{role.imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n                    </cl-image>\n                  </div>\n                  <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                      <label class=\"control-label\">Role Name</label>\n                      <input class=\"form-control\" [value]=\"role.name\" readonly />\n                    </div>\n                    <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                      <label class=\"control-label\">Team</label>\n                      <input class=\"form-control\" [value]=\"role.team\" readonly />\n                    </div>\n                    <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                      <label class=\"control-label\">Description</label>\n                      <textarea class=\"form-control\" readonly [value]=\"role.description\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row teams card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Teams\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">code</i>\n              </h3>\n            </div>\n            <div class=\"teams-list card-content\">\n              <div class=\"team\" *ngFor=\"let team of setup.teams; let idx = index;\">\n                <div *ngIf=\"teamFiltered(team)\">\n                  <div class=\"form-group label-floating col-lg-6 col-md-6 col-sm-6\">\n                    <label class=\"control-label\">Name</label>\n                    <input class=\"form-control\" readonly [value]=\"team.name\" />\n                  </div>\n                  <div class=\"form-group label-floating col-lg-3 col-md-3 col-sm-3\">\n                    <div class=\"color\" [style.background]=\"team.color\"></div>\n                  </div>\n                  <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                    <label class=\"control-label\">Win Condition</label>\n                    <textarea class=\"form-control\" [value]=\"team.description\" readonly></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row intersection card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Interactions\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">code</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list card-content\">\n              <div class=\"team\" *ngFor=\"let intersection of setup.intersections; let idx = index;\">\n                <div class=\"form-group label-floating multiselection\">\n                  <label class=\"control-label\">Roles/Teams</label>\n                  <input class=\"form-control\" [value]=\"getIntersectionSelectOptions()\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [value]=\"intersection.description\" readonly></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row narration card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Narration <small class=\"description\">Does the order in which roles are woken up matter? What is announced when people die? etc.</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">code</i>\n              </h3>\n            </div>\n            <div class=\"narrations-list card-content\">\n              <div class=\"team\" *ngFor=\"let narration of setup.narrations; let idx = index;\">\n                <div class=\"form-group label-floating col-lg-6 col-md-6\">\n                  <label class=\"control-label\">Teams</label>\n                  <input class=\"form-control\" [value]=\"getRolesSelectOptions(narration)\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Narration</label>\n                  <textarea class=\"form-control\" readonly [value]=\"narration.description\" ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row voting-roles card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Voting Rules <small class=\"description\">How does voting work? Are ties possible? etc.</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">code</i>\n              </h3>\n            </div>\n            <div class=\"roles-list card-content\">\n              <div class=\"col-md-10 col-lg-10 col-sm-10\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6 roles-names form-group label-floating\">\n                  <label class=\"control-label\">Voting Name</label>\n                  <input class=\"form-control\" [value]=\"setup.voting.name\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [value]=\"setup.voting.description\" readonly ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row missing-rules card expanded\">\n            <div class=\"cheader card-header\">\n              <h3>\n                Additional Rules and Corner Cases <small class=\"description\">What rules have you missed</small>\n                <i class=\"material-icons pull-right\" (click)=\"collapseExpand($event)\">code</i>\n              </h3>\n            </div>\n            <div class=\"additonal-rules-list card-content\">\n              <div class=\"\" *ngFor=\"let additionalRule of setup.additionalRules; let idx = index;\">\n                <div class=\"form-group label-floating\">\n                  <label class=\"control-label\">Roles/Teams</label>\n                  <input class=\"form-control\" [value]=\"getRolesTeams(additionalRule)\" readonly />\n                </div>\n                <div class=\"form-group label-floating col-lg-12 col-md-12 col-sm-12\">\n                  <label class=\"control-label\">Description</label>\n                  <textarea class=\"form-control\" [value]=\"additionalRule.description\" readonly ></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"!viewDetails\">\n  <div class=\"container-fluid\">\n    <div class=\"row add-button\">\n      <a [routerLink]=\"['/setups/add', -1]\" class=\"btn btn-primary\">Add Setup</a>\n    </div>\n    <div class=\"row fadeOutUp\">\n      <div class=\"col-lg-6 col-md-6\" *ngFor=\"let setup of setups; let idx = index\">\n        <div class=\"card card-product\">\n          <div class=\"card-image\" data-header-animation=\"true\">\n            <a>\n              <img class=\"img\" src=\"../../../../../assets/img/image_placeholder.jpg\" *ngIf=\"!setup.imgId\">\n              <cl-image data-u=\"image\" public-id=\"{{setup.imgId}}\" *ngIf=\"setup.imgId\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n              </cl-image>\n            </a>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"card-actions\" [attr.idx]=\"idx\">\n              <a type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Edit\" [routerLink]=\"['/setups/add', setup._id]\">\n                <i class=\"material-icons\">edit</i>\n                Edit Setup\n              </a>\n            </div>\n            <h4 class=\"card-title\">\n              <a (click)=\"viewDetailsClick(setup)\">{{setup.name}}</a>\n            </h4>\n            <div class=\"card-description\">\n              {{setup.setupDescription}}\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"players-count\">\n              <p>Ideal for {{setup.minimumMember}}~{{setup.maximumMember}} members</p>\n              <p>Difficulty: {{setup.difficulty}} Level</p>\n            </div>\n            <div class=\"stats pull-right\">\n              <p class=\"category\"><i class=\"material-icons\">access_time</i> {{setup.playTime}} mins</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-setup-detail [setup]=\"currentSetup\" *ngIf=\"viewDetails\"></app-setup-detail>\n"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n  <div class=\"fileinput-new thumbnail\">\n    <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" *ngIf=\"isChanged || !imgId\">\n    <cl-image data-u=\"image\" public-id=\"{{imgId}}\" *ngIf=\"!isChanged && imgId\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n    </cl-image>\n  </div>\n  <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n  <div>\n    <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n        <span class=\"fileinput-new\">Select image</span>\n        <span class=\"fileinput-exists\">Select image</span>\n        <input type=\"file\" name=\"...\" #avatar class=\"btn btn-file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged()\"/>\n    </span>\n  </div>\n</div>\n"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/#/home\">Liars Club</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"/#/home\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"/#/users/register\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\" active \">\n          <a href=\"/#/users/login\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../assets/img/login.jpeg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <form (submit)=\"login()\">\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n              <div class=\"card card-login card-hidden\">\n                <div class=\"card-header text-center\" data-background-color=\"rose\">\n                  <h4 class=\"card-title\">Login</h4>\n                </div>\n                <p class=\"category text-center\" *ngIf=\"loginFaildMsg\">\n                  {{loginFaildMsg}}\n                </p>\n                <div class=\"card-content\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                    </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Username</label>\n                      <input type=\"text\" class=\"form-control\" #username>\n                    </div>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Password</label>\n                      <input type=\"password\" class=\"form-control\" #password>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Login</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2\">\n      <form (submit)=\"saveProfile()\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-header\" data-background-color=\"orange\">\n              <h3 class=\"text-center\">My Profile</h3>\n            </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"row\">\n                <div class=\"col-md-5 pull-right upload-avatar\">\n                  <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\n                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                      <div class=\"fileinput-new thumbnail\">\n                        <img src=\"../../../../../assets/img/image_placeholder.jpg\" alt=\"...\" #clubImg *ngIf=\"imgChanged\">\n                        <cl-image data-u=\"image\" public-id=\"{{imgId}}\" cloud-name=\"{{mainService.cloudName}}\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"560\" width=\"860\" format=\"jpg\">\n                        </cl-image>\n                      </div>\n                      <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                      <div>\n                        <span class=\"btn btn-rose btn-round btn-file btn-sm\">\n                            <span class=\"fileinput-new\">Select image</span>\n                            <span class=\"fileinput-exists\">Select image</span>\n                            <input type=\"file\" name=\"...\" #avatar class=\"btn btn-file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imgChanged = true\"/>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-7\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">First Name</label>\n                    <input class=\"form-control\" required [(ngModel)]=\"firstName\" name=\"firstName\"/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Last Name</label>\n                    <input class=\"form-control\" required [(ngModel)]=\"lastName\" name=\"lastName\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email address</label>\n                  <input class=\"form-control\" type=\"email\" required [(ngModel)]=\"email\" name=\"email\" />\n                </div>\n              </div>\n            <div class=\"row\">\n              <h3><small>I tagged myself as a member of these clubs</small></h3>\n              <div class=\"\" *ngFor=\"let club of clubs\">\n                <p>{{club.mytag.memberState}} {{club.mytag.memberType}} of {{club.title}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"orgFirstname == firstName && orgLastname == lastName && orgEmail == email && !imgChanged\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/#/home\">Liars Club</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"/#/home\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"active\">\n          <a href=\"/#/users/register\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"/#/users/login\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"../assets/img/register.jpeg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div class=\"card card-signup card-hidden\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"row text-center\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <div class=\"card-content\">\n                  <div>\n                    <span *ngIf=\"errmsg\" class=\"errmsg\">{{errmsg}}</span>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username...\" #username>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">email</i>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" #email>\n                  </div>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                    <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" #password/>\n                  </div>\n                  <div class=\"checkbox\">\n                    <label>\n                      <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                      <a>terms and conditions</a>.\n                    </label>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button class=\"btn btn-primary btn-round\" (click)=\"register()\" >Register</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}\n            <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n            </button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a href=\"#\">Mike John responded to your email</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">You have 5 new tasks</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">You're now friend with Andrew</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Another Notification</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Another One</a>\n                        </li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"/profile\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"logo\">\n            <div class=\"logo-normal\">\n                <a href=\"\" class=\"simple-text\">\n                    Liars Club\n                </a>\n            </div>\n\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\n            </div>\n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                  <cl-image data-u=\"image\" public-id=\"{{mainService.avatarPublicId}}\" cloud-name=\"da2w1aszs\" class=\"md-card-image\" crop=\"fill\" quality=\"80\" height=\"860\" width=\"860\" format=\"jpg\">\n                  </cl-image>\n                </div>\n                <div class=\"info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            {{ mainService.name }}\n                            <b class=\"caret\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\">\n                        <ul class=\"nav\">\n                            <li>\n                              <a [routerLink]=\"[menuItems[9].path]\">\n                                <i class=\"material-icons\">person</i>\n                                <p>My Profile</p>\n                              </a>\n                            </li>\n                            <li>\n                              <a href=\"\" (click)=\"logout($event)\">\n                                <i class=\"{{menuItems[0].icon}}\">power_settings_new</i>\n                                <p>Logout</p>\n                              </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"nav-container\">\n                <ul class=\"nav\">\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[0].path]\">\n                            <i class=\"{{menuItems[0].icon}}\">home</i>\n                            <p>{{menuItems[0].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                      <a  [routerLink]=\"[menuItems[11].path]\">\n                        <i class=\"{{menuItems[11].icon}}\">info</i>\n                        <p>{{menuItems[11].title}}</p>\n                      </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#componentsExamples\">\n                            <i class=\"material-icons\">public</i>\n                            <p>Connect\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"componentsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[1].path]\">\n                                      <i class=\"{{menuItems[0].icon}}\">room</i>\n                                      <p>{{menuItems[1].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[2].path]\">\n                                      <i class=\"{{menuItems[0].icon}}\">date_range</i>\n                                      <p>{{menuItems[2].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[3].path]\">\n                                      <i class=\"{{menuItems[0].icon}}\">people</i>\n                                      <p>{{menuItems[3].title}}</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[4].path]\">\n                            <i class=\"{{menuItems[4].icon}}\">library_books</i>\n                            <p>{{menuItems[4].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#formsExamples\">\n                            <i class=\"material-icons\">chat</i>\n                            <p>Discuss\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"formsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[5].path]\">\n                                      <i class=\"{{menuItems[5].icon}}\">forum</i>\n                                      <p>{{menuItems[5].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[6].path]\">\n                                      <i class=\"{{menuItems[6].icon}}\">speaker_notes</i>\n                                      <p>{{menuItems[6].title}}</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#tablesExamples\">\n                            <i class=\"material-icons\">help</i>\n                            <p>Learn\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"tablesExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[7].path]\">\n                                      <i class=\"{{menuItems[7].icon}}\">view_headline</i>\n                                      <p>{{menuItems[7].title}}</p>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[8].path]\">\n                                      <i class=\"{{menuItems[8].icon}}\">videocam</i>\n                                      <p>{{menuItems[8].title}}</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                  <li routerLinkActive=\"active\">\n                    <a data-toggle=\"collapse\" href=\"#adminPanel\">\n                      <i class=\"material-icons\">account_box</i>\n                      <p>Admin\n                        <b class=\"caret\"></b>\n                      </p>\n                    </a>\n                    <div class=\"collapse\" id=\"adminPanel\">\n                      <ul class=\"nav\">\n                        <li routerLinkActive=\"active\">\n                          <a  [routerLink]=\"[menuItems[10].path]\">\n                            <i class=\"{{menuItems[10].icon}}\">account_balance</i>\n                            <p>{{menuItems[10].title}}</p>\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n\n                </ul>\n            </div>\n\n        </div>\n"

/***/ }),
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */
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
/* 283 */,
/* 284 */,
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(119);


/***/ })
],[285]);
//# sourceMappingURL=main.bundle.js.map