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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_register_guard__ = __webpack_require__("../../../../../src/app/guards/register.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_clients_clients_component__ = __webpack_require__("../../../../../src/app/components/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_client_details_client_details_component__ = __webpack_require__("../../../../../src/app/components/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_edit_client_edit_client_component__ = __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Import Services





// Import Components












// Create Routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_23__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_register_guard__["a" /* RegisterGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'add-client', component: __WEBPACK_IMPORTED_MODULE_18__components_add_client_add_client_component__["a" /* AddClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_client_details_client_details_component__["a" /* ClientDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-client/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_edit_client_edit_client_component__["a" /* EditClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_24__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_25__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_client_details_client_details_component__["a" /* ClientDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_add_client_add_client_component__["a" /* AddClientComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_edit_client_edit_client_component__["a" /* EditClientComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase, 'clientpanelapp'),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_11__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_register_guard__["a" /* RegisterGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n  </div>\n  <div class=\"col-md-6\"></div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Add Client\n  </div>\n  <div class=\"card-body\">\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientFirstName.errors?.required && clientFirstName.touched || clientFirstName.errors?.minlength}\"\n          [(ngModel)]=\"client.firstName\" name=\"firstName\" #clientFirstName=\"ngModel\" minlength=\"2\" required>\n        <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\" class=\"invalid-feedback\">\n          First name is required\n        </div>\n        <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientLastName.errors?.required && clientLastName.touched || clientLastName.errors?.minlength}\"\n          [(ngModel)]=\"client.lastName\" name=\"lastName\" #clientLastName=\"ngModel\" minlength=\"2\" required>\n        <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\" class=\"invalid-feedback\">\n          Last name is required\n        </div>\n        <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientEmail.errors?.required && clientEmail.touched || clientEmail.errors?.pattern}\"\n          [(ngModel)]=\"client.email\" name=\"email\" #clientEmail=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n        <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\" class=\"invalid-feedback\">\n          Email is required\n        </div>\n        <div *ngIf=\"clientEmail.errors?.pattern && clientEmail.touched\" class=\"invalid-feedback\">\n          Email is invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientPhone.errors?.required && clientPhone.touched || clientPhone.errors?.minlength}\"\n          [(ngModel)]=\"client.phone\" name=\"phone\" #clientPhone=\"ngModel\" minlength=\"10\" required>\n        <div *ngIf=\"clientPhone.errors?.required && clientPhone.touched\" class=\"invalid-feedback\">\n          Phone number is required\n        </div>\n        <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"invalid-feedback\">\n          Phone is not a valid number\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"balance\">Balance</label>\n          <input type=\"text\" class=\"form-control\" \n            [(ngModel)]=\"client.balance\" \n            name=\"balance\" \n            #clientBalance=\"ngModel\" \n            [disabled]=\"disableBalanceOnAdd\">\n        </div>\n\n        <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = (function () {
    function AddClientComponent(
        // Inject Dependancies
        flashMessagesService, router, clientService, settingsService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.clientService = clientService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            this.flashMessagesService.show('Please fill in all fields', {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            this.router.navigate(['add-client']);
        }
        else {
            // Add New Client
            this.clientService.newClient(value);
            this.flashMessagesService.show('New client added', {
                cssClass: 'alert-success',
                timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    return AddClientComponent;
}());
AddClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-client',
        template: __webpack_require__("../../../../../src/app/components/add-client/add-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-client/add-client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]) === "function" && _d || Object])
], AddClientComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"btn-group pull-right\">\n      <a [routerLink]=\"['/edit-client/' + id]\" class=\"btn btn-dark\">Edit\n      </a>\n      <button class=\"btn btn-danger\" (click)=\"onDeleteClick()\">Delete</button>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div *ngIf=\"client\" class=\"card\">\n  <h3 class=\"card-header\">{{client.firstName}} {{client.lastName}}</h3>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h4>Client ID: {{id}}</h4>\n      </div>\n      <div class=\"col-md-4\">\n        <h3 class=\"pull-right\">Balance\n          <span [class.text-danger]=\"hasBalance\" [class.text-success]=\"!hasBalance\"> {{client.balance | currency:\"USD\":true}}</span>\n          <small>\n            <a (click)=\"showBalanceUpdateInput = !showBalanceUpdateInput\">\n              <i class=\"fa fa-pencil\"></i>\n            </a>\n          </small>\n        </h3>\n        <div class=\"clearfix\">\n          <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance(id)\">\n            <div class=\"input-group\">\n              <input type=\"text\" [(ngModel)]=\"client.balance\" name=\"balance\" class=\"form-control\">\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Contact Email: {{client.email}}</li>\n      <li class=\"list-group-item\">Contact Phone: {{client.phone}}</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessagesService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get client
        this.clientService.getClient(this.id).subscribe(function (client) {
            if (client.balance > 0) {
                _this.hasBalance = true;
            }
            _this.client = client;
            console.log(_this.client);
        });
    };
    ClientDetailsComponent.prototype.updateBalance = function (id) {
        this.clientService.updateClient(this.id, this.client);
        this.flashMessagesService.show('Balance updated', {
            cssClass: 'alert-success',
            timeout: 4000
        });
        this.router.navigate(['/client/' + this.id]);
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm("Are you sure to delete?")) {
            this.clientService.deleteClient(this.id);
            this.flashMessagesService.show('Client removed', {
                cssClass: 'alert-success',
                timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    return ClientDetailsComponent;
}());
ClientDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-details',
        template: __webpack_require__("../../../../../src/app/components/client-details/client-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-details/client-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ClientDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"cal-md-6\">\n    <h2> <i class=\"fa fa-users\"></i> Clients</h2>\n  </div>\n  <div class=\"col-md-6\">\n    <h5 class=\"text-right text-secondary\">Total Owed: {{totalOwed |\n      currency: \"USD\": true}}\n    </h5>\n  </div>\n</div>\n\n<table *ngIf=\"clients?.length > 0; else noClients\" class=\"table table-striped\">\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Balance</th>\n      <th></th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let client of clients\">\n      <td>{{client.firstName}} {{client.lastName}}</td>\n      <td>{{client.email}}</td>\n      <td>{{client.balance | currency: \"USD\": true}}</td>\n      <td><a [routerLink]=\"['/client/' + client.key]\" href=\"\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Details </a></td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n<!-- ng Template -->\n<ng-template #noClients>\n  <hr>\n  <h5>There are no clients in the system</h5>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = (function () {
    function ClientsComponent(clietnService) {
        this.clietnService = clietnService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clietnService.getClients().subscribe(function (clients) {
            // console.log(clients);
            _this.clients = clients;
            _this.getTotalOwed();
        });
    };
    ClientsComponent.prototype.getTotalOwed = function () {
        var total = 0;
        for (var i = 0; i < this.clients.length; i++) {
            total += parseFloat(this.clients[i].balance);
        }
        this.totalOwed = total;
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__("../../../../../src/app/components/clients/clients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/clients/clients.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === "function" && _a || Object])
], ClientsComponent);

var _a;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n    <app-clients></app-clients>\n  </div>\n  <div class=\"col-md-2\">\n    <app-sidebar></app-sidebar>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n    </div>\n    <div class=\"col-md-6\"></div>\n  </div>\n  \n  <div class=\"card\">\n    <div class=\"card-header\">Edit Client</div>\n    <div class=\"card-body\">\n      <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientFirstName.errors?.required && clientFirstName.touched || clientFirstName.errors?.minlength}\"\n            [(ngModel)]=\"client.firstName\" name=\"firstName\" #clientFirstName=\"ngModel\" minlength=\"2\" required>\n          <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\" class=\"invalid-feedback\">\n            First name is required\n          </div>\n          <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\" class=\"invalid-feedback\">\n            Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientLastName.errors?.required && clientLastName.touched || clientLastName.errors?.minlength}\"\n            [(ngModel)]=\"client.lastName\" name=\"lastName\" #clientLastName=\"ngModel\" minlength=\"2\" required>\n          <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\" class=\"invalid-feedback\">\n            Last name is required\n          </div>\n          <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\" class=\"invalid-feedback\">\n            Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientEmail.errors?.required && clientEmail.touched || clientEmail.errors?.pattern}\"\n            [(ngModel)]=\"client.email\" name=\"email\" #clientEmail=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n          <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\" class=\"invalid-feedback\">\n            Email is required\n          </div>\n          <div *ngIf=\"clientEmail.errors?.pattern && clientEmail.touched\" class=\"invalid-feedback\">\n            Email is invalid\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone</label>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid':clientPhone.errors?.required && clientPhone.touched || clientPhone.errors?.minlength}\"\n            [(ngModel)]=\"client.phone\" name=\"phone\" #clientPhone=\"ngModel\" minlength=\"10\" required>\n          <div *ngIf=\"clientPhone.errors?.required && clientPhone.touched\" class=\"invalid-feedback\">\n            Phone number is required\n          </div>\n          <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"invalid-feedback\">\n            Phone is not a valid number\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"balance\">Balance</label>\n            <input type=\"text\" class=\"form-control\" \n              [(ngModel)]=\"client.balance\" \n              name=\"balance\" \n              #clientBalance=\"ngModel\" \n              [disabled]=\"disableBalanceOnEdit\">\n          </div>\n  \n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n  \n  \n      </form>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditClientComponent = (function () {
    function EditClientComponent(clientService, router, route, flashMessagesService, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
        // Get client
        this.clientService.getClient(this.id).subscribe(function (client) {
            _this.client = client;
        });
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessagesService.show('Please fill in all fields', {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            this.router.navigate(['edit-client/' + this.id]);
        }
        else {
            // Update Client
            this.clientService.updateClient(this.id, value);
            this.flashMessagesService.show('Client updated', {
                cssClass: 'alert-success',
                timeout: 4000
            });
            this.router.navigate(['/client/' + this.id]);
        }
    };
    return EditClientComponent;
}());
EditClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-client',
        template: __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]) === "function" && _e || Object])
], EditClientComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <img src=\"/assets/img/logo.png\" class=\"d-block mx-auto\" alt=\"\">\n        <h1 class=\"text-center\">Login</h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\" required>\n          </div>\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessagesService.show('You are logged in', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
            _this.router.navigate(['/login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary mb-4\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">ClientPanel</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/\">Dashboard</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!isLoggedIn && showRegister\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isLoggedIn && showRegister\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" href=\"#\">{{loggedInUser}}</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/settings\">Settings</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService, settingsService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.showRegister = this.settingsService.getSettings().allowRegisteration;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Page Not Found</h1>\n<p>There is nothing here :(</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <img src=\"/assets/img/logo.png\" class=\"d-block mx-auto\" alt=\"\">\n          <h1 class=\"text-center\">Register</h1>\n          <form (submit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\" required>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\" required>\n            </div>\n            <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function RegisterComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            _this.flashMessagesService.show('New user registered', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
            _this.router.navigate(['/register']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a href=\"#\" routerLink=\"/\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Dashboard\n    </a>\n  </div>\n  <div class=\"col-md-6\"></div>\n</div>\n\n<div class=\"card\">\n  <h3 class=\"card-header\">Edit Settings</h3>\n  <div class=\"card-body\">\n    <form (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label>Allow Registeration</label>\n        <input type=\"checkbox\" name=\"allowRegisteration\" [checked]=\"settings.allowRegisteration\" (change)=\"settings.allowRegisteration = !settings.allowRegisteration\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Disable Balance On Add</label>\n        <input type=\"checkbox\" name=\"disableBalanceOnAdd\" [checked]=\"settings.disableBalanceOnAdd\" (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Disable Balance On Edit</label>\n        <input type=\"checkbox\" name=\"disableBalanceOnEdit\" [checked]=\"settings.disableBalanceOnEdit\" (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\">\n      </div>\n\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(settingsService, flashMessagesService, router) {
        this.settingsService = settingsService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getSettings();
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this.flashMessagesService.show('Settings saved', {
            cssClass: 'alert-success',
            timeout: 4000
        });
        this.router.navigate(['/settings']);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/add-client\" href=\"#\" class=\"btn btn-success btn-block\"> <i class=\"fa fa-plus\"></i> New</a>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuard = (function () {
    function RegisterGuard(router, settingsService) {
        this.router = router;
        this.settingsService = settingsService;
    }
    RegisterGuard.prototype.canActivate = function () {
        if (this.settingsService.getSettings().allowRegisteration) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return RegisterGuard;
}());
RegisterGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], RegisterGuard);

var _a, _b;
//# sourceMappingURL=register.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = (function () {
    function ClientService(db) {
        this.db = db;
        this.clientsRef = this.db.list('clients');
        this.clients = this.clientsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ClientService.prototype.getClients = function () {
        return this.clients;
    };
    ClientService.prototype.newClient = function (client) {
        this.clientsRef.push(client);
    };
    ClientService.prototype.getClient = function (id) {
        this.client = this.db.object('/clients/' + id).valueChanges();
        return this.client;
    };
    ClientService.prototype.updateClient = function (id, client) {
        return this.clientsRef.update(id, client);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.clientsRef.remove(id);
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        this.settings = {
            allowRegisteration: true,
            disableBalanceOnAdd: true,
            disableBalanceOnEdit: true
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD3cApuN4F0qcWoyy2gH-Jpi9Rke6xzS28",
        authDomain: "clientpanelapp-94225.firebaseapp.com",
        databaseURL: "https://clientpanelapp-94225.firebaseio.com",
        projectId: "clientpanelapp-94225",
        storageBucket: "clientpanelapp-94225.appspot.com",
        messagingSenderId: "811012369939"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map