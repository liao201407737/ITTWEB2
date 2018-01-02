webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workout_workout_component__ = __webpack_require__("../../../../../src/app/workout/workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'workout',
        component: __WEBPACK_IMPORTED_MODULE_2__workout_workout_component__["a" /* WorkoutComponent */]
    },
    { path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    { path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: '',
        redirectTo: '/workout',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-1 {width: 8.33%;}\r\n.col-2 {width: 16.66%;}\r\n.col-3 {width: 25%;}\r\n.col-4 {width: 33.33%;}\r\n.col-5 {width: 41.66%;}\r\n.col-6 {width: 50%;}\r\n.col-7 {width: 58.33%;}\r\n.col-8 {width: 66.66%;}\r\n.col-9 {width: 75%;}\r\n.col-10 {width: 83.33%;}\r\n.col-11 {width: 91.66%;}\r\n.col-12 {width: 100%;}\r\n\r\nsection {\r\n    margin: auto;\r\n    padding: 10px;\r\n}\r\ndiv#one {\r\n    width: 35%;\r\n    height: 200px;\r\n    float: left;\r\n}\r\ndiv#two {\r\n    margin-left: 40%;\r\n    height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1><h2>Workout Assignment</h2>\r\n<div class=\"navbar navbar-default\">\r\n    <nav>\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\">Home</a>\r\n\r\n        <a class=\"navbar-brand\" *ngIf=\"isLoggedIn()\" (click)=\"logOut()\">Log Out</a>  \r\n        <a class=\"navbar-brand\" *ngIf=\"!isLoggedIn()\" [routerLink]=\"['/login']\"> Log In</a>   \r\n        <a class=\"navbar-brand\" *ngIf=\"!isLoggedIn()\"[routerLink]=\"['/register']\"> Register </a>        \r\n    </nav>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.title = 'Assignment 3';
        this.lol = 'false';
        this.userService.isUserLoggedIn.subscribe(function (value) { return _this.isUserLoggedIn = value; });
    }
    AppComponent.prototype.logOut = function () {
        this.userService.logOff();
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workout_workout_component__ = __webpack_require__("../../../../../src/app/workout/workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workout_service__ = __webpack_require__("../../../../../src/app/workout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exercise_exercise_component__ = __webpack_require__("../../../../../src/app/exercise/exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_dialog_dialog_exercise_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sharred_service__ = __webpack_require__("../../../../../src/app/sharred.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__workout_workout_component__["a" /* WorkoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__exercise_exercise_component__["a" /* ExerciseComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_dialog_dialog_exercise_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__app_dialog_dialog_exercise_component__["a" /* DialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__workout_service__["a" /* WorkoutService */], __WEBPACK_IMPORTED_MODULE_13__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__sharred_service__["a" /* SharedService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(user) {
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.user.checkIfUserloggedIn();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add new Exercise</h1>\r\n<fieldset>\r\n        <div class=\"form-group\">\r\n            <mat-form-field>\r\n                <mat-label>Exercise Name</mat-label> \r\n                <input matInput [(ngModel)]=\"data.name\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <mat-form-field>\r\n                <mat-label>Exercise description</mat-label>\r\n                <input  matInput [(ngModel)]=\"data.description\">\r\n                    <!-- <input class=\"form-control\" matInput [(ngModel)]=\"data.description\" placeholder=\"description of exericse\" name=\"description\" > -->\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <mat-form-field>\r\n                <mat-label>Reps</mat-label>\r\n                <input matInput [(ngModel)]=\"data.reps\" type=\"number\" >\r\n                            <!-- <input class=\"form-control\" matInput [(ngModel)]=\"data.reps\" placeholder=\"Amount of reps\" type=\"number\" > -->\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <mat-form-field>\r\n                <mat-label>Sets</mat-label>\r\n                <input matInput [(ngModel)]=\"data.sets\" type=\"number\" >\r\n                <!-- <input class=\"form-control\" matInput [(ngModel)]=\"data.sets\" placeholder=\"Amount of Sets\" type=\"number\" > -->\r\n            </mat-form-field>\r\n        </div> \r\n    \r\n    </fieldset>\r\n\r\n<div mat-dialog-actions>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button mat-button [mat-dialog-close]=\"data\" class=\"btn btn-primary\" >Add</button>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button mat-button  mat-dialog-close (click)=\"onNoClick()\" class=\"btn btn-default\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.exercise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'exercise-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.exercise.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exercise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise() {
    }
    return Exercise;
}());



/***/ }),

/***/ "../../../../../src/app/exercise/exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"workout\">\r\n      \r\n<button *ngIf=\"isUserLoggedIn\" mat-raised-button class=\"btn btn-default\" (click)=\"openAddExerciseDialog()\">Add new exercise</button>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n      <table class=\"table table-striped table-hover\">\r\n            <th>Exercise</th>\r\n            <th>Description</th>\r\n            <th>Reps</th>\r\n            <th>Sets</th>\r\n            <th *ngIf=\"isUserLoggedIn\">Done</th>\r\n            <tr *ngFor=\"let exercise of workout.exercises\">\r\n                  <td>{{ exercise.name }}</td>\r\n                  <td>{{ exercise.description }}</td>\r\n                  <td>{{ exercise.reps }}</td>\r\n                  <td>{{ exercise.sets }}</td>\r\n                  <td *ngIf=\"isUserLoggedIn\" ><input type=\"checkbox\"></td>\r\n            </tr>\r\n      </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/exercise/exercise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workout__ = __webpack_require__("../../../../../src/app/workout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workout_service__ = __webpack_require__("../../../../../src/app/workout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_exercise_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharred_service__ = __webpack_require__("../../../../../src/app/sharred.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__exercise__ = __webpack_require__("../../../../../src/app/exercise.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExerciseComponent = (function () {
    function ExerciseComponent(workoutService, dialog, sharedService, userService) {
        var _this = this;
        this.workoutService = workoutService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.userService = userService;
        this.title = 'My Exercise';
        this.userService.isUserLoggedIn.subscribe(function (value) { return _this.isUserLoggedIn = value; });
        this.workoutService.selectedData.subscribe(function (value) { return _this.workout = value; });
    }
    ExerciseComponent.prototype.openAddExerciseDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_exercise_component__["a" /* DialogComponent */], {
            height: '400pt',
            width: '600px',
            data: { name: this.name, description: this.description, reps: this.reps, sets: this.sets }
        });
        this.dialogRef.afterClosed().subscribe(function (res) {
            _this.workoutService.addExercise(_this.workout._id, res.name, res.description, res.reps, res.sets);
            if (_this.workout.exercises == null) {
                _this.workout.exercises = new Array();
            }
            var newExercise = new __WEBPACK_IMPORTED_MODULE_7__exercise__["a" /* Exercise */]();
            newExercise.name = res.name;
            newExercise.description = res.description;
            newExercise.reps = res.reps;
            newExercise.sets = res.sets;
            var number = _this.workout.exercises.push(newExercise);
            console.log(_this.workout);
            _this.workoutService.selectedData.next(_this.workout);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__workout__["a" /* Workout */])
    ], ExerciseComponent.prototype, "workout", void 0);
    ExerciseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'workout-exercise',
            template: __webpack_require__("../../../../../src/app/exercise/exercise.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__workout_service__["a" /* WorkoutService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__sharred_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]])
    ], ExerciseComponent);
    return ExerciseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div>\n    <label>Email</label>\n    <input type=\"text\" #username>\n  </div>\n  <div>\n    <label>Password</label>\n    <input type=\"password\" #password>\n  </div>\n  <div>\n      <input type=\"button\" value=\"Login\" (click)=\"loginUser(username.value,password.value)\"> <a (click)=\"registerUser()\"> Register</a>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, user) {
        this.router = router;
        this.user = user;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        this.user.logIn(username, password).then(function () {
            _this.router.navigate(['workout']);
        });
    };
    LoginComponent.prototype.registerUser = function () {
        this.router.navigate(['register']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div>\n    <label>Email</label>\n    <input type=\"text\" #username>\n  </div>\n  <div>\n      <label>Name</label>\n      <input type=\"text\" #name>\n    </div>\n  <div>\n    <label>Password</label>\n    <input type=\"password\" #password>\n  </div>\n  <div>\n    <input type=\"button\" value=\"Register\" (click)=\"createUser(username.value,name.value,password.value)\">\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function (username, name, password) {
        var _this = this;
        this.user.register(username, name, password).then(function () {
            _this.router.navigate(['workout']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sharred.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedService = (function () {
    function SharedService(user) {
        this.user = user;
        this.reloadDataEvent = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = '/api' + '/account';
        //private url = 'https://arcane-brook-14132.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        this.isUserLoggedIn = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](false);
    }
    UserService.prototype.checkIfUserloggedIn = function () {
        if (window.localStorage['loc8r-token']) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.saveToken = function (token) {
        window.localStorage['loc8r-token'] = token.token;
        this.isUserLoggedIn.next(true);
    };
    UserService.prototype.forgetsToken = function () {
        window.localStorage['loc8r-token'] = null;
        this.isUserLoggedIn.next(false);
    };
    UserService.prototype.getToken = function () {
        if (window.localStorage['loc8r-token']) {
            return window.localStorage['loc8r-token'];
        }
        else {
            return '';
        }
    };
    UserService.prototype.logOff = function () {
        this.forgetsToken();
    };
    UserService.prototype.logIn = function (email, password) {
        var _this = this;
        return this.http
            .post(this.url + "/login", JSON.stringify({ email: email, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.saveToken(res.json()); })
            .catch(this.handleError);
    };
    ;
    UserService.prototype.register = function (email, name, password) {
        var _this = this;
        return this.http
            .post(this.url + "/register", JSON.stringify({ email: email, name: name, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.saveToken(res.json()); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ;
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/workout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout__ = __webpack_require__("../../../../../src/app/workout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkoutService = (function () {
    function WorkoutService(http, user) {
        this.http = http;
        this.user = user;
        //private url = 'https://arcane-brook-14132.herokuapp.com/api';
        this.url = "/api";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        this.data = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"]([]);
        this.selectedData = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](null);
        this.event = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"]();
        this.reload();
        var tmp = 'bearer' + this.user.getToken();
        this.selectedDataValue = new __WEBPACK_IMPORTED_MODULE_3__workout__["a" /* Workout */]();
        this.postheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.user.getToken() });
    }
    WorkoutService.prototype.reload = function () {
        var _this = this;
        this.get().then(function (res) { return _this.data.next(res); });
    };
    WorkoutService.prototype.get = function () {
        return this.http.get(this.url + "/workout")
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ;
    WorkoutService.prototype.create = function (name) {
        return this.http
            .post(this.url + "/workout", JSON.stringify({ name: name }), { headers: this.postheaders })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ;
    WorkoutService.prototype.setWorkout = function (workout) {
        this.selectedData.next(workout);
    };
    WorkoutService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ;
    WorkoutService.prototype.addExercise = function (refId, name, description, reps, sets) {
        return this.http
            .post(this.url + "/exercise", JSON.stringify({ name: name, refId: refId, description: description, reps: reps, sets: sets }), { headers: this.postheaders })
            .toPromise()
            .then(function (res) {
            res.json;
        })
            .catch(this.handleError);
    };
    ;
    WorkoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], WorkoutService);
    return WorkoutService;
}());



/***/ }),

/***/ "../../../../../src/app/workout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workout; });
var Workout = (function () {
    function Workout() {
    }
    return Workout;
}());



/***/ }),

/***/ "../../../../../src/app/workout/workout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n    <div id=\"one\">\r\n            <div *ngIf=\"isLoggedIn()\">\r\n            <input #workoutName placeholder=\"Add new Workout\" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn btn-default\" (click)=\"add(workoutName.value); workoutName.value=''\">\r\n                    Add\r\n                    </button>\r\n            </div>\r\n        <table class=\"table table-striped table-hover\">\r\n            \r\n            <th>\r\n            </th>\r\n            <br>\r\n            <tr *ngFor=\"let workout of workouts\" \r\n            [class.selected]=\"workout === selectedWorkout\"\r\n            (click)=\"onSelect(workout)\">\r\n                <td>{{ workout.name }}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div id=\"two\">\r\n            <workout-exercise [workout]=\"selectedWorkout\"></workout-exercise>\r\n    </div>            \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/workout/workout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workout_service__ = __webpack_require__("../../../../../src/app/workout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharred_service__ = __webpack_require__("../../../../../src/app/sharred.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutComponent = (function () {
    function WorkoutComponent(workoutService, sharedService, userService) {
        var _this = this;
        this.workoutService = workoutService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.title = 'Workout';
        this.workoutService.event.subscribe(function () {
        });
        this.userService.isUserLoggedIn.subscribe(function (value) { return _this.isUserLoggedIn = value; });
        this.workoutService.selectedData.subscribe(function (value) { return _this.selectedWorkout = value; });
    }
    WorkoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workoutService.data.subscribe(function (value) { return _this.workouts = value; });
    };
    WorkoutComponent.prototype.isLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    WorkoutComponent.prototype.onSelect = function (workout) {
        //this.selectedWorkout = workout;
        console.log("workout selected");
        console.log(workout);
        this.workoutService.selectedData.next(workout);
    };
    WorkoutComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.workoutService.create(name)
            .then(function (x) {
            _this.workoutService.reload();
            _this.selectedWorkout = x;
        });
    };
    WorkoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/workout/workout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__workout_service__["a" /* WorkoutService */], __WEBPACK_IMPORTED_MODULE_2__sharred_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], WorkoutComponent);
    return WorkoutComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map