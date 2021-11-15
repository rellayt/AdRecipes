(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./features/features.module */ "./src/app/features/features.module.ts")).then((m) => m.FeaturesModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var just_detect_adblock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! just-detect-adblock */ "./node_modules/just-detect-adblock/dist/bundle.umd.js");
/* harmony import */ var just_detect_adblock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(just_detect_adblock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_components_adblock_notification_dialog_adblock_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/adblock-notification-dialog/adblock-notification-dialog.component */ "./src/app/shared/components/adblock-notification-dialog/adblock-notification-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












let AppComponent = class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.title = 'AdRecipes';
        this.isAdBlockerDetected = false;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(just_detect_adblock__WEBPACK_IMPORTED_MODULE_2__["detectAnyAdblocker"])())
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((isAdBlockerDetected) => !!isAdBlockerDetected))
            .subscribe(() => {
            this.isAdBlockerDetected = true;
            this.openAdblockDialog();
        });
    }
    openAdblockDialog() {
        this.dialog.open(_shared_components_adblock_notification_dialog_adblock_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AdblockNotificationDialogComponent"], {
            disableClose: true,
        });
    }
};
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "ngClass"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isAdBlockerDetected ? "blurred-and-blocked" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: [".blurred-and-blocked[_ngcontent-%COMP%] {\n  filter: blur(10px);\n  position: fixed;\n  overflow-y: hidden;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: calc(100vh - 70px);\n  height: auto;\n  padding: 48px;\n  background: linear-gradient(#f6f6f6, #fdfdfd, #efefef);\n}\n\n@media (max-width: 1368px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXF9Qcm9qZWN0c1xcQWRSZWNpcGVzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtBQ0NGOztBREFFO0VBTkY7SUFPSSxhQUFBO0VDR0Y7QUFDRjs7QURGRTtFQVRGO0lBVUksYUFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cnJlZC1hbmQtYmxvY2tlZCB7XHJcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDQ4cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmNmY2ZjYsICNmZGZkZmQsICNlZmVmZWYpO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbn1cclxuIiwiLmJsdXJyZWQtYW5kLWJsb2NrZWQge1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZjZmNmY2LCAjZmRmZGZkLCAjZWZlZmVmKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbn0iXX0= */"] });
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], AppComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _features_features_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _features_features_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _features_features_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/config/snackbar.config.ts":
/*!************************************************!*\
  !*** ./src/app/core/config/snackbar.config.ts ***!
  \************************************************/
/*! exports provided: LOGGED, AUTHENTICATED, NOT_AUTHENTICATED, REGISTERED, LOGIN_ERROR, REGISTER_ERROR, RECIPE_ADDED, RECIPE_ADD_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGED", function() { return LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_AUTHENTICATED", function() { return NOT_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTERED", function() { return REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_ERROR", function() { return REGISTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPE_ADDED", function() { return RECIPE_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPE_ADD_ERROR", function() { return RECIPE_ADD_ERROR; });
const LOGGED = {
    type: 'Success',
    message: 'Successfully logged in',
};
const AUTHENTICATED = {
    type: 'Success',
    message: 'Authenticated',
};
const NOT_AUTHENTICATED = {
    type: 'Error',
    message: 'Failed to authenticate',
};
const REGISTERED = {
    type: 'Success',
    message: 'Successfully registered',
};
const LOGIN_ERROR = {
    type: 'Error',
    message: 'Failed to log in',
};
const REGISTER_ERROR = {
    type: 'Error',
    message: 'Failed to register',
};
const RECIPE_ADDED = {
    type: 'Success',
    message: 'Recipe has been added',
};
const RECIPE_ADD_ERROR = {
    type: 'Error',
    message: 'Recipe add failure',
};


/***/ }),

/***/ "./src/app/core/config/validation.config.ts":
/*!**************************************************!*\
  !*** ./src/app/core/config/validation.config.ts ***!
  \**************************************************/
/*! exports provided: VALIDATION_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_CONFIG", function() { return VALIDATION_CONFIG; });
const VALIDATION_CONFIG = {
    required: 'Field is required',
    email: 'Incorrect e-mail',
    password_match: 'Password must match',
    taken_email: 'E-mail is taken',
    pattern: 'Invalid data',
    minlength: 'Minimal length is 4',
    maxlength: 'The maximum length has been exceeded',
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_recipes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/recipes.service */ "./src/app/core/services/recipes.service.ts");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/auth-interceptor.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/auth-interceptor.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");






class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return req.headers.get('skip') || req.headers.get('AuthToken')
            ? next.handle(req)
            : next.handle(this.getAuthorizedRequest(req)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err, _) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && err.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
    }
    getAuthorizedRequest(req) {
        return req.clone({
            setHeaders: {
                AuthToken: this.authService.token,
            },
        });
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ApiService {
    constructor(http) {
        this.http = http;
    }
    static formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
    }
    get(path, options) {
        const headers = (options === null || options === void 0 ? void 0 : options.skipInterception) && { headers: { skip: 'true' } };
        const params = (options === null || options === void 0 ? void 0 : options.queryParams) && { params: options.queryParams };
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}${path}`, Object.assign(Object.assign({}, params), headers))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(ApiService.formatErrors));
    }
    post(path, options) {
        const headers = (options === null || options === void 0 ? void 0 : options.skipInterception) && { headers: { skip: 'true' } };
        const body = options.body ? Object.assign({}, options.body) : options.formData;
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}${path}`, body, headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(ApiService.formatErrors));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




class AuthService {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
    }
    get token() {
        return this.cookieService.get('token');
    }
    checkStatus() {
        return this.apiService.get(`${AuthService.AUTH_PREFIX_PATH}/me`);
    }
    signIn(email, password) {
        const payload = {
            skipInterception: true,
            body: {
                email,
                password,
            },
        };
        return this.apiService.post(`${AuthService.AUTH_PREFIX_PATH}/sign-in`, payload);
    }
    register(email, password, displayName) {
        const payload = {
            skipInterception: true,
            body: {
                email,
                password,
                displayName,
            },
        };
        return this.apiService.post(`${AuthService.AUTH_PREFIX_PATH}/register`, payload);
    }
}
AuthService.AUTH_PREFIX_PATH = 'auth';
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/recipes.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/recipes.service.ts ***!
  \**************************************************/
/*! exports provided: RecipesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesService", function() { return RecipesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");




class RecipesService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    create(recipe, image) {
        const formData = new FormData();
        formData.append('image', image);
        Object.entries(recipe).forEach(([key, value]) => formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value));
        const payload = {
            formData,
        };
        return this.apiService.post(`recipes`, payload);
    }
    get() {
        return this.apiService.get(`recipes`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((recipes) => recipes.map((recipe) => (Object.assign(Object.assign({}, recipe), { createdAt: new Date(recipe.createdAt) })))));
    }
    findById(id) {
        return this.apiService.get(`recipes/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((recipe) => (Object.assign(Object.assign({}, recipe), { createdAt: new Date(recipe.createdAt) }))));
    }
}
RecipesService.ɵfac = function RecipesService_Factory(t) { return new (t || RecipesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
RecipesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipesService, factory: RecipesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/store/auth/auth.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/core/store/auth/auth.actions.ts ***!
  \*************************************************/
/*! exports provided: SignIn, SignInSuccess, SignInFailure, Register, RegisterSuccess, RegisterFailure, TokenValidation, TokenValidationSuccess, TokenValidationFailure, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInSuccess", function() { return SignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFailure", function() { return SignInFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccess", function() { return RegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFailure", function() { return RegisterFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidation", function() { return TokenValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidationSuccess", function() { return TokenValidationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenValidationFailure", function() { return TokenValidationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const SignIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Sign In', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const SignInSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Sign In Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const SignInFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Sign In Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const Register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Register', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const RegisterSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Register Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const RegisterFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Register Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const TokenValidation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Validate token');
const TokenValidationSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Token Validation Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const TokenValidationFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Token Validation Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const Logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Logout');


/***/ }),

/***/ "./src/app/core/store/auth/auth.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/core/store/auth/auth.effects.ts ***!
  \*************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/snackbar.config */ "./src/app/core/config/snackbar.config.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");











class AuthEffects {
    constructor(authService, actions$, snackbarService, cookieService) {
        this.authService = authService;
        this.actions$ = actions$;
        this.snackbarService = snackbarService;
        this.cookieService = cookieService;
        this.signIn = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignIn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ payload }) => payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ email, password }) => {
            return this.authService.signIn(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ tokenCredentials, id }) => {
                this.cookieService.set('userId', id);
                this.cookieService.set('token', tokenCredentials.accessToken);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userWithCredentials) => Object(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignInSuccess"])({ user: userWithCredentials })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                this.snackbarService.open(_config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__["LOGIN_ERROR"]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignInFailure"])({ error: error }));
            }));
        })));
        this.register = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["Register"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ payload }) => payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ email, password, displayName }) => {
            return this.authService.register(email, password, displayName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ tokenCredentials, id }) => {
                this.cookieService.set('userId', id);
                this.cookieService.set('token', tokenCredentials.accessToken);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userWithCredentials) => Object(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["RegisterSuccess"])({ user: userWithCredentials })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                this.snackbarService.open(_config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__["REGISTER_ERROR"]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["RegisterFailure"])({ error: error }));
            }));
        })));
        this.checkStatus = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["TokenValidation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.authService.checkStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
                this.snackbarService.open(_config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__["AUTHENTICATED"]);
                return Object(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["TokenValidationSuccess"])({ user });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                this.snackbarService.open(_config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__["NOT_AUTHENTICATED"]);
                this.cookieService.delete('token');
                this.cookieService.delete('userId');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["TokenValidationFailure"])({ error: error }));
            }));
        })));
        this.logout = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.cookieService.delete('token'))), { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/store/auth/auth.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/core/store/auth/auth.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/store/auth/auth.actions.ts");


const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    authProcessing: false,
};
const authReducerInternal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignIn"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["Register"], (state) => {
    return Object.assign(Object.assign({}, state), { authProcessing: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignInSuccess"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["RegisterSuccess"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { user, isAuthenticated: true, authProcessing: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["SignInFailure"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["RegisterFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error, isAuthenticated: false, authProcessing: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["TokenValidation"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["Register"], (state) => {
    return Object.assign(Object.assign({}, state), { authProcessing: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["TokenValidationSuccess"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { user, isAuthenticated: true, authProcessing: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["Logout"], () => initialState));
function authReducer(state, action) {
    return authReducerInternal(state, action);
}
// on(authActions.SignIn, null, null, (state) => {
//   return { ...state, authProcessing: true };
// }),


/***/ }),

/***/ "./src/app/core/store/auth/auth.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/core/store/auth/auth.selectors.ts ***!
  \***************************************************/
/*! exports provided: selectUser, selectAuthProcessing, selectIsAuthenticated, selectAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthProcessing", function() { return selectAuthProcessing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticated", function() { return selectIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.auth.user, (user) => user);
const selectAuthProcessing = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.auth.authProcessing, (authProcessing) => authProcessing);
const selectIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.auth.isAuthenticated, (isAuthenticated) => isAuthenticated);
const selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.auth, (authState) => authState);


/***/ }),

/***/ "./src/app/core/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/*! exports provided: appReducer, appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return appEffects; });
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/store/auth/auth.reducer.ts");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/core/store/auth/auth.effects.ts");
/* harmony import */ var _recipes_recipes_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes/recipes.effects */ "./src/app/core/store/recipes/recipes.effects.ts");
/* harmony import */ var _recipes_recipes_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.reducer */ "./src/app/core/store/recipes/recipes.reducer.ts");




const appReducer = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    recipe: _recipes_recipes_reducer__WEBPACK_IMPORTED_MODULE_3__["recipesReducer"],
};
const appEffects = [_auth_auth_effects__WEBPACK_IMPORTED_MODULE_1__["AuthEffects"], _recipes_recipes_effects__WEBPACK_IMPORTED_MODULE_2__["RecipesEffects"]];


/***/ }),

/***/ "./src/app/core/store/recipes/recipes.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/recipes/recipes.actions.ts ***!
  \*******************************************************/
/*! exports provided: CreateRecipe, CreateRecipeSuccess, CreateRecipeFailure, GetAllRecipes, GetAllRecipesSuccess, GetAllRecipesFailure, GetLatestRecipes, GetLatestRecipesSuccess, GetLatestRecipesFailure, GetPersonalRecipes, GetPersonalRecipesSuccess, GetPersonalRecipesFailure, GetDetailedRecipe, GetDetailedRecipeSuccess, GetDetailedRecipeFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipe", function() { return CreateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipeSuccess", function() { return CreateRecipeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipeFailure", function() { return CreateRecipeFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllRecipes", function() { return GetAllRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllRecipesSuccess", function() { return GetAllRecipesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllRecipesFailure", function() { return GetAllRecipesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLatestRecipes", function() { return GetLatestRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLatestRecipesSuccess", function() { return GetLatestRecipesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLatestRecipesFailure", function() { return GetLatestRecipesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPersonalRecipes", function() { return GetPersonalRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPersonalRecipesSuccess", function() { return GetPersonalRecipesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPersonalRecipesFailure", function() { return GetPersonalRecipesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDetailedRecipe", function() { return GetDetailedRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDetailedRecipeSuccess", function() { return GetDetailedRecipeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDetailedRecipeFailure", function() { return GetDetailedRecipeFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const CreateRecipe = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Create', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const CreateRecipeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Create Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const CreateRecipeFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Create Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetAllRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get All Recipes');
const GetAllRecipesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get All Recipes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetAllRecipesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get All Recipes Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetLatestRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Latest Recipes');
const GetLatestRecipesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Latest Recipes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetLatestRecipesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Latest Recipes Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetPersonalRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Personal Recipes');
const GetPersonalRecipesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Personal Recipes Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetPersonalRecipesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Personal Recipes Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetDetailedRecipe = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Detailed Recipe', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetDetailedRecipeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Detailed Recipe Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetDetailedRecipeFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Recipe] Get Detailed Recipe Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/core/store/recipes/recipes.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/recipes/recipes.effects.ts ***!
  \*******************************************************/
/*! exports provided: RecipesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesEffects", function() { return RecipesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/snackbar.config */ "./src/app/core/config/snackbar.config.ts");
/* harmony import */ var _recipes_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _services_recipes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/recipes.service */ "./src/app/core/services/recipes.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













class RecipesEffects {
    constructor(actions$, snackbarService, recipesService, cookieService, router) {
        this.actions$ = actions$;
        this.snackbarService = snackbarService;
        this.recipesService = recipesService;
        this.cookieService = cookieService;
        this.router = router;
        this.create = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["CreateRecipe"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ payload }) => payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((_a) => {
            var { image } = _a, recipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["image"]);
            return this.recipesService.create(recipe, image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ id }) => {
                this.router.navigate(['recipe', id]).then();
                this.snackbarService.open(_config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__["RECIPE_ADDED"]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipe) => Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["CreateRecipeSuccess"])({ recipe })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                this.snackbarService.open(_config_snackbar_config__WEBPACK_IMPORTED_MODULE_5__["RECIPE_ADD_ERROR"]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["CreateRecipeFailure"])({ error: error }));
            }));
        })));
        this.getAll = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetAllRecipes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.recipesService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipes) => Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetAllRecipesSuccess"])({ recipes })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetAllRecipesFailure"])({ error: error }));
            }));
        })));
        this.getLatest = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetLatestRecipes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.recipesService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipes) => Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetLatestRecipesSuccess"])({ recipes })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetLatestRecipesFailure"])({ error: error }));
            }));
        })));
        this.getPersonalRecipes = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetPersonalRecipes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.recipesService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipes) => {
                const userId = this.cookieService.get('userId');
                return Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetPersonalRecipesSuccess"])({ recipes, userId });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetPersonalRecipesFailure"])({ error: error }));
            }));
        })));
        this.getDetailedRecipe = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetDetailedRecipe"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ id }) => id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((id) => {
            return this.recipesService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipe) => Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetDetailedRecipeSuccess"])({ recipe })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(_recipes_actions__WEBPACK_IMPORTED_MODULE_6__["GetDetailedRecipeFailure"])({ error: error }));
            }));
        })));
    }
}
RecipesEffects.ɵfac = function RecipesEffects_Factory(t) { return new (t || RecipesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_recipes_service__WEBPACK_IMPORTED_MODULE_8__["RecipesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
RecipesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RecipesEffects, factory: RecipesEffects.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](RecipesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"] }, { type: _services_recipes_service__WEBPACK_IMPORTED_MODULE_8__["RecipesService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/store/recipes/recipes.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/store/recipes/recipes.reducer.ts ***!
  \*******************************************************/
/*! exports provided: initialState, recipesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipesReducer", function() { return recipesReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _recipes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");


const initialState = {
    myRecipes: [],
    allRecipes: [],
    errorMessage: null,
    latestRecipes: [],
    detailedRecipe: null,
    personalRecipes: [],
    recipesProcessing: false,
};
const recipesReducerInternal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["CreateRecipe"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetAllRecipes"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetLatestRecipes"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetPersonalRecipes"], (state) => {
    return Object.assign(Object.assign({}, state), { recipesProcessing: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["CreateRecipeSuccess"], (state, { recipe }) => {
    return Object.assign(Object.assign({}, state), { recipesProcessing: false, detailedRecipe: recipe });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetAllRecipesSuccess"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetLatestRecipesSuccess"], (state, { recipes }) => {
    const latestRecipes = [...recipes]
        .sort((firstRecipe, secondRecipe) => secondRecipe.createdAt.getTime() - firstRecipe.createdAt.getTime())
        .slice(0, 3);
    return Object.assign(Object.assign({}, state), { recipesProcessing: false, latestRecipes, allRecipes: recipes });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["CreateRecipeFailure"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetAllRecipesFailure"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetLatestRecipesFailure"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetDetailedRecipeFailure"], _recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetPersonalRecipesFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetPersonalRecipesSuccess"], (state, { recipes, userId }) => {
    const personalRecipes = recipes.filter(({ userId: id }) => id === userId);
    return Object.assign(Object.assign({}, state), { recipesProcessing: false, personalRecipes });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["GetDetailedRecipeSuccess"], (state, { recipe }) => {
    return Object.assign(Object.assign({}, state), { detailedRecipe: recipe });
}));
function recipesReducer(state, action) {
    return recipesReducerInternal(state, action);
}


/***/ }),

/***/ "./src/app/core/store/recipes/recipes.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/recipes/recipes.selectors.ts ***!
  \*********************************************************/
/*! exports provided: RecipesFeature, selectLatestRecipes, selectRecipesProcessing, selectAllRecipes, selectPersonalRecipes, selectDetailedRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesFeature", function() { return RecipesFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLatestRecipes", function() { return selectLatestRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRecipesProcessing", function() { return selectRecipesProcessing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllRecipes", function() { return selectAllRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPersonalRecipes", function() { return selectPersonalRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetailedRecipes", function() { return selectDetailedRecipes; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const RecipesFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('recipes');
const selectLatestRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(RecipesFeature, (recipeState) => recipeState, ({ latestRecipes }) => latestRecipes);
const selectRecipesProcessing = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(RecipesFeature, (recipeState) => recipeState, ({ recipesProcessing }) => recipesProcessing);
const selectAllRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(RecipesFeature, (recipeState) => recipeState, ({ allRecipes }) => allRecipes);
const selectPersonalRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(RecipesFeature, (recipeState) => recipeState, ({ personalRecipes }) => personalRecipes);
const selectDetailedRecipes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(RecipesFeature, (recipeState) => recipeState, ({ detailedRecipe }) => detailedRecipe);


/***/ }),

/***/ "./src/app/core/utility/is-not-undefined.ts":
/*!**************************************************!*\
  !*** ./src/app/core/utility/is-not-undefined.ts ***!
  \**************************************************/
/*! exports provided: isNotUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotUndefined", function() { return isNotUndefined; });
/* harmony import */ var _is_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-undefined */ "./src/app/core/utility/is-undefined.ts");

const isNotUndefined = (value) => !Object(_is_undefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value);


/***/ }),

/***/ "./src/app/core/utility/is-null-or-undefined.ts":
/*!******************************************************!*\
  !*** ./src/app/core/utility/is-null-or-undefined.ts ***!
  \******************************************************/
/*! exports provided: isNil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony import */ var _is_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-undefined */ "./src/app/core/utility/is-undefined.ts");

const isNil = (value) => Object(_is_undefined__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value) || value === null;


/***/ }),

/***/ "./src/app/core/utility/is-undefined.ts":
/*!**********************************************!*\
  !*** ./src/app/core/utility/is-undefined.ts ***!
  \**********************************************/
/*! exports provided: isUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
const isUndefined = (value) => !value;


/***/ }),

/***/ "./src/app/core/utility/parse-to-recipe-tiles.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/utility/parse-to-recipe-tiles.ts ***!
  \*******************************************************/
/*! exports provided: parseToRecipeTiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToRecipeTiles", function() { return parseToRecipeTiles; });
const parseToRecipeTiles = ({ id, authorName, time, name, photoUrl, }) => ({ id, authorName, time, name, photoUrl });


/***/ }),

/***/ "./src/app/features/add-recipe/add-recipe.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/add-recipe/add-recipe.component.ts ***!
  \*************************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store/recipes/recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");
/* harmony import */ var _core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/store/recipes/recipes.selectors */ "./src/app/core/store/recipes/recipes.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/base-feature-wrapper/base-feature-wrapper.component */ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts");
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/input/input.component */ "./src/app/shared/components/input/input.component.ts");
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/select/select.component */ "./src/app/shared/components/select/select.component.ts");
/* harmony import */ var _shared_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/text-area/text-area.component */ "./src/app/shared/components/text-area/text-area.component.ts");
/* harmony import */ var _shared_components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/image-upload/image-upload.component */ "./src/app/shared/components/image-upload/image-upload.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/__ivy_ngcc__/fesm2015/ng2-adsense.js");















function AddRecipeComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preparingStep_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r4 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", preparingStep_r3);
} }
function AddRecipeComponent_div_17_app_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AddRecipeComponent_div_17_app_button_6_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeLastPreparingStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove preparing step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFullWidth", true)("secondary", true);
} }
function AddRecipeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Preparing steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddRecipeComponent_div_17_div_3_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AddRecipeComponent_div_17_Template_app_button_onClick_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addPreparingStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add preparing step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddRecipeComponent_div_17_app_button_6_Template, 2, 2, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getControlList(ctx_r0.preparingSteps));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFullWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.preparingSteps.length > 1);
} }
class AddRecipeComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.timeOptions = [
            { value: '15 mins', displayName: '15 minutes' },
            { value: '30 mins', displayName: '30 minutes' },
            { value: '1 hour', displayName: '1 hour' },
            { value: '2 hours', displayName: '2 hours' },
        ];
        this.createRecipeProcessing$ = this.store.select(_core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_3__["selectRecipesProcessing"]);
    }
    ngOnInit() {
        this.initializeForm();
    }
    get preparingSteps() {
        return this.addRecipeForm.controls['preparingSteps'];
    }
    initializeForm() {
        this.addRecipeForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            time: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            preparingSteps: this.fb.array([this.createPreparingStepControl()]),
        });
    }
    onImageChanged(file) {
        this.image = file;
    }
    createPreparingStepControl() {
        return this.fb.control(null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(90),
        ]);
    }
    getControlList(abstractControl) {
        return abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"] ? abstractControl.controls : [];
    }
    addPreparingStep() {
        this.preparingSteps.push(this.createPreparingStepControl());
    }
    removeLastPreparingStep() {
        this.preparingSteps.removeAt(this.preparingSteps.length - 1);
    }
    submit() {
        const payload = {
            payload: Object.assign(Object.assign({}, this.addRecipeForm.value), { image: this.image }),
        };
        this.store.dispatch(Object(_core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_2__["CreateRecipe"])(payload));
    }
}
AddRecipeComponent.ɵfac = function AddRecipeComponent_Factory(t) { return new (t || AddRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AddRecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRecipeComponent, selectors: [["app-add-recipe"]], decls: 24, vars: 15, consts: [[1, "add-recipe"], ["header", ""], [1, "add-recipe__form"], [1, "add-recipe__basic-info"], [3, "control"], [3, "control", "options"], [1, "add-recipe__image-upload"], [3, "fileEmitter"], ["class", "add-recipe__preparing-steps", 4, "ngIf"], [1, "add-recipe__submit"], [3, "isProcessing", "isDisabled", "onClick"], [3, "adtest"], [3, "adClient", "adSlot", "display", "width", "height"], [1, "add-recipe__preparing-steps"], ["class", "add-recipe__preparing-step", 4, "ngFor", "ngForOf"], [3, "isFullWidth", "onClick"], [3, "isFullWidth", "secondary", "onClick", 4, "ngIf"], [1, "add-recipe__preparing-step"], [3, "isFullWidth", "secondary", "onClick"]], template: function AddRecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-feature-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-text-area", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Image upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-image-upload", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileEmitter", function AddRecipeComponent_Template_app_image_upload_fileEmitter_16_listener($event) { return ctx.onImageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddRecipeComponent_div_17_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AddRecipeComponent_Template_app_button_onClick_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ng-adsense", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ng-adsense", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.addRecipeForm.get("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.addRecipeForm.get("time"))("options", ctx.timeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.addRecipeForm.get("description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preparingSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isProcessing", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, ctx.createRecipeProcessing$))("isDisabled", ctx.addRecipeForm.invalid || !ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adtest", "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adClient", "pub-3777768585143098")("adSlot", 3122538287)("display", "block")("width", 320)("height", 108);
    } }, directives: [_shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["BaseFeatureWrapperComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], _shared_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__["TextAreaComponent"], _shared_components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__["ImageUploadComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], ng2_adsense__WEBPACK_IMPORTED_MODULE_12__["AdsenseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".add-recipe__form[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  padding: 24px 5%;\n}\n@media (max-width: 1368px) {\n  .add-recipe__form[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n.add-recipe[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n@media (max-width: 1368px) {\n  .add-recipe[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 24px 0;\n    text-align: center;\n  }\n}\n.add-recipe__basic-info[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n}\n.add-recipe__image-upload[_ngcontent-%COMP%] {\n  margin-left: 48px;\n}\n@media (max-width: 1368px) {\n  .add-recipe__image-upload[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.add-recipe__preparing-steps[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.add-recipe__preparing-steps[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 100%;\n}\n.add-recipe__preparing-step[_ngcontent-%COMP%] {\n  display: flex;\n}\n.add-recipe__preparing-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 21px;\n  margin-top: 16px;\n  margin-right: 20px;\n}\n.add-recipe__preparing-step[_ngcontent-%COMP%]   app-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.add-recipe__submit[_ngcontent-%COMP%] {\n  align-self: end;\n  justify-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWRkLXJlY2lwZS9FOlxcX1Byb2plY3RzXFxBZFJlY2lwZXMvc3JjXFxhcHBcXGZlYXR1cmVzXFxhZGQtcmVjaXBlXFxhZGQtcmVjaXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9hZGQtcmVjaXBlL2FkZC1yZWNpcGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQUo7QURDSTtFQUxGO0lBTUksMkJBQUE7RUNFSjtBQUNGO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKO0FEQUk7RUFGRjtJQUdJLGNBQUE7SUFDQSxrQkFBQTtFQ0dKO0FBQ0Y7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURDRTtFQUNFLGlCQUFBO0FDQ0o7QURBSTtFQUZGO0lBR0ksY0FBQTtFQ0dKO0FBQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNHTjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ047QURFSTtFQUNFLFdBQUE7QUNBTjtBRElFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hZGQtcmVjaXBlL2FkZC1yZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXJlY2lwZSB7XHJcbiAgJl9fZm9ybSB7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgIHBhZGRpbmc6IDI0cHggNSU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XHJcbiAgICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19iYXNpYy1pbmZvIHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgfVxyXG5cclxuICAmX19pbWFnZS11cGxvYWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcHJlcGFyaW5nLXN0ZXBzIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGFwcC1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19wcmVwYXJpbmctc3RlcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3N1Ym1pdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG4iLCIuYWRkLXJlY2lwZV9fZm9ybSB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgcGFkZGluZzogMjRweCA1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgLmFkZC1yZWNpcGVfX2Zvcm0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgfVxufVxuLmFkZC1yZWNpcGUgaDMge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjhweCkge1xuICAuYWRkLXJlY2lwZSBoMyB7XG4gICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uYWRkLXJlY2lwZV9fYmFzaWMtaW5mbyB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG59XG4uYWRkLXJlY2lwZV9faW1hZ2UtdXBsb2FkIHtcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XG4gIC5hZGQtcmVjaXBlX19pbWFnZS11cGxvYWQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG4uYWRkLXJlY2lwZV9fcHJlcGFyaW5nLXN0ZXBzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmFkZC1yZWNpcGVfX3ByZXBhcmluZy1zdGVwcyBhcHAtYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkZC1yZWNpcGVfX3ByZXBhcmluZy1zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hZGQtcmVjaXBlX19wcmVwYXJpbmctc3RlcCBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYWRkLXJlY2lwZV9fcHJlcGFyaW5nLXN0ZXAgYXBwLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWRkLXJlY2lwZV9fc3VibWl0IHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-recipe',
                templateUrl: './add-recipe.component.html',
                styleUrls: ['./add-recipe.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/auth/sign-in/sign-in.component.ts":
/*!************************************************************!*\
  !*** ./src/app/features/auth/sign-in/sign-in.component.ts ***!
  \************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store/auth/auth.actions */ "./src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var _core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/store/auth/auth.selectors */ "./src/app/core/store/auth/auth.selectors.ts");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_config_snackbar_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/config/snackbar.config */ "./src/app/core/config/snackbar.config.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ "./src/app/shared/components/input/input.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
















let SignInComponent = class SignInComponent {
    constructor(fb, store, snackbarService, router) {
        this.fb = fb;
        this.store = store;
        this.snackbarService = snackbarService;
        this.router = router;
        this.authState$ = this.store
            .select(_core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAuthState"])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this));
        this.isProcessing = false;
    }
    ngOnInit() {
        this.initializeForm();
        this.initializeAuthSubscription();
    }
    initializeForm() {
        this.signInForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
        }, { updateOn: 'blur' });
    }
    initializeAuthSubscription() {
        this.authState$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(({ authProcessing }) => (this.isProcessing = authProcessing)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.signInForm.reset()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(({ isAuthenticated }) => Boolean(isAuthenticated)))
            .subscribe(() => {
            this.snackbarService.open(_core_config_snackbar_config__WEBPACK_IMPORTED_MODULE_7__["LOGGED"]);
            this.router.navigateByUrl('').then();
        });
    }
    handleLogin() {
        const payload = { payload: this.signInForm.value };
        this.store.dispatch(Object(_core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SignIn"])(payload));
    }
};
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 11, vars: 5, consts: [[1, "sign-in"], ["header", ""], [1, "sign-in__body", 3, "formGroup"], [3, "control"], ["type", "password", 3, "control"], ["isFullWidth", "true", 3, "isProcessing", "isDisabled", "onClick"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function SignInComponent_Template_app_button_onClick_9_listener() { return ctx.handleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.signInForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.signInForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProcessing", ctx.isProcessing)("isDisabled", ctx.signInForm.invalid);
    } }, directives: [_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"]], styles: [".sign-in[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  margin-top: 15rem;\n}\n@media (max-width: 768px) {\n  .sign-in[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n.sign-in__body[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n.sign-in__body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.sign-in__body[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXV0aC9zaWduLWluL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcZmVhdHVyZXNcXGF1dGhcXHNpZ24taW5cXHNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQUU7RUFSRjtJQVNJLGdCQUFBO0VDR0Y7QUFDRjtBRERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQ0dKO0FEREk7RUFDRSxvQkFBQTtBQ0dOO0FEQUk7RUFDRSxvQkFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgbWFyZ2luLXRvcDogMTVyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zaWduLWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgbWFyZ2luLXRvcDogMTVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNpZ24taW4ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cbi5zaWduLWluX19ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xufVxuLnNpZ24taW5fX2JvZHkgZGl2IHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uc2lnbi1pbl9fYm9keSBhcHAtYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59Il19 */"] });
SignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])()
], SignInComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/auth/sign-up/sign-up.component.ts":
/*!************************************************************!*\
  !*** ./src/app/features/auth/sign-up/sign-up.component.ts ***!
  \************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store/auth/auth.selectors */ "./src/app/core/store/auth/auth.selectors.ts");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_config_snackbar_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/config/snackbar.config */ "./src/app/core/config/snackbar.config.ts");
/* harmony import */ var _core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/store/auth/auth.actions */ "./src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ "./src/app/shared/components/input/input.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
















let SignUpComponent = class SignUpComponent {
    constructor(fb, store, snackbarService, router) {
        this.fb = fb;
        this.store = store;
        this.snackbarService = snackbarService;
        this.router = router;
        this.authState$ = this.store
            .select(_core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthState"])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this));
        this.isProcessing = false;
    }
    ngOnInit() {
        this.initializeForm();
        this.initializeAuthSubscription();
    }
    initializeForm() {
        this.signUpForm = this.fb.group({
            displayName: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                ],
            ],
            email: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)],
            ],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
        }, { updateOn: 'blur' });
    }
    initializeAuthSubscription() {
        this.authState$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(({ authProcessing }) => (this.isProcessing = authProcessing)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(({ isAuthenticated }) => Boolean(isAuthenticated)))
            .subscribe(() => {
            this.snackbarService.open(_core_config_snackbar_config__WEBPACK_IMPORTED_MODULE_6__["REGISTERED"]);
            this.router.navigateByUrl('').then();
        });
    }
    handleRegistration() {
        const payload = { payload: this.signUpForm.value };
        this.store.dispatch(Object(_core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["Register"])(payload));
    }
};
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 13, vars: 5, consts: [[1, "sign-up"], ["header", ""], [1, "sign-up__body"], [3, "control"], ["type", "password", 3, "control"], ["isFullWidth", "true", 3, "isProcessing", "isDisabled", "onClick"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function SignUpComponent_Template_app_button_onClick_11_listener() { return ctx.handleRegistration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.signUpForm.get("displayName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.signUpForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.signUpForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isProcessing", ctx.isProcessing)("isDisabled", ctx.signUpForm.invalid);
    } }, directives: [_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"], _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"]], styles: [".sign-up[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  margin-top: 15rem;\n}\n@media (max-width: 768px) {\n  .sign-up[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n.sign-up__body[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 90px);\n}\n.sign-up__body[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXV0aC9zaWduLXVwL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcZmVhdHVyZXNcXGF1dGhcXHNpZ24tdXBcXHNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQUU7RUFSRjtJQVNJLGdCQUFBO0VDR0Y7QUFDRjtBRERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtBQ0dKO0FEREk7RUFDRSxvQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgbWFyZ2luLXRvcDogMTVyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgOTBweCk7XHJcblxyXG4gICAgYXBwLWJ1dHRvbiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2lnbi11cCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIG1hcmdpbi10b3A6IDE1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWduLXVwIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG4uc2lnbi11cF9fYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgOTBweCk7XG59XG4uc2lnbi11cF9fYm9keSBhcHAtYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59Il19 */"] });
SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], SignUpComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/features-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-recipe/add-recipe.component */ "./src/app/features/add-recipe/add-recipe.component.ts");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "./src/app/features/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "./src/app/features/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _personal_recipes_personal_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-recipes/personal-recipes.component */ "./src/app/features/personal-recipes/personal-recipes.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/features/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-details/recipe-details.component */ "./src/app/features/recipe-details/recipe-details.component.ts");











const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'add-recipe',
        component: _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_3__["AddRecipeComponent"],
    },
    {
        path: 'sign-in',
        component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
    },
    {
        path: 'sign-up',
        component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
    },
    {
        path: 'my-recipes',
        component: _personal_recipes_personal_recipes_component__WEBPACK_IMPORTED_MODULE_6__["PersonalRecipesComponent"],
    },
    {
        path: 'recipes',
        component: _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__["RecipeListComponent"],
    },
    {
        path: 'recipe/:id',
        component: _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailsComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class FeaturesRoutingModule {
}
FeaturesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesRoutingModule });
FeaturesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeaturesRoutingModule_Factory(t) { return new (t || FeaturesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _personal_recipes_personal_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-recipes/personal-recipes.component */ "./src/app/features/personal-recipes/personal-recipes.component.ts");
/* harmony import */ var _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-details/recipe-details.component */ "./src/app/features/recipe-details/recipe-details.component.ts");
/* harmony import */ var _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-recipe/add-recipe.component */ "./src/app/features/add-recipe/add-recipe.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/features/recipe-list/recipe-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features-routing.module */ "./src/app/features/features-routing.module.ts");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "./src/app/features/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "./src/app/features/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/store */ "./src/app/core/store/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/interceptors/auth-interceptor.service */ "./src/app/core/interceptors/auth-interceptor.service.ts");
/* harmony import */ var _core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/store/auth/auth.actions */ "./src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var _recipe_details_recipe_image_recipe_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipe-details/recipe-image/recipe-image.component */ "./src/app/features/recipe-details/recipe-image/recipe-image.component.ts");
/* harmony import */ var _core_utility_is_not_undefined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/utility/is-not-undefined */ "./src/app/core/utility/is-not-undefined.ts");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/__ivy_ngcc__/fesm2015/ng2-adsense.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

























class FeaturesModule {
    constructor(cookieService, store) {
        this.cookieService = cookieService;
        this.store = store;
        const token = cookieService.get('token');
        if (Object(_core_utility_is_not_undefined__WEBPACK_IMPORTED_MODULE_18__["isNotUndefined"])(token)) {
            this.store.dispatch(Object(_core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_16__["TokenValidation"])());
        }
    }
}
FeaturesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"])); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_core_store__WEBPACK_IMPORTED_MODULE_13__["appReducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('recipes', _core_store__WEBPACK_IMPORTED_MODULE_13__["appReducer"].recipe),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot(_core_store__WEBPACK_IMPORTED_MODULE_13__["appEffects"]),
            ng2_adsense__WEBPACK_IMPORTED_MODULE_19__["AdsenseModule"].forRoot({
                adClient: 'ca-pub-7640562161899788',
                adSlot: 2930227358,
                adtest: 'on',
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _features_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"],
        _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_4__["AddRecipeComponent"],
        _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailsComponent"],
        _personal_recipes_personal_recipes_component__WEBPACK_IMPORTED_MODULE_2__["PersonalRecipesComponent"],
        _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
        _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
        _recipe_details_recipe_image_recipe_image_component__WEBPACK_IMPORTED_MODULE_17__["RecipeImageComponent"]], imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsRootModule"], ng2_adsense__WEBPACK_IMPORTED_MODULE_19__["AdsenseModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _features_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"],
                    _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_4__["AddRecipeComponent"],
                    _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailsComponent"],
                    _personal_recipes_personal_recipes_component__WEBPACK_IMPORTED_MODULE_2__["PersonalRecipesComponent"],
                    _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                    _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                    _recipe_details_recipe_image_recipe_image_component__WEBPACK_IMPORTED_MODULE_17__["RecipeImageComponent"],
                ],
                imports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_core_store__WEBPACK_IMPORTED_MODULE_13__["appReducer"]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('recipes', _core_store__WEBPACK_IMPORTED_MODULE_13__["appReducer"].recipe),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot(_core_store__WEBPACK_IMPORTED_MODULE_13__["appEffects"]),
                    ng2_adsense__WEBPACK_IMPORTED_MODULE_19__["AdsenseModule"].forRoot({
                        adClient: 'ca-pub-7640562161899788',
                        adSlot: 2930227358,
                        adtest: 'on',
                    }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _features_routing_module__WEBPACK_IMPORTED_MODULE_7__["FeaturesRoutingModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptorService"],
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/store/recipes/recipes.selectors */ "./src/app/core/store/recipes/recipes.selectors.ts");
/* harmony import */ var _core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store/recipes/recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_utility_parse_to_recipe_tiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utility/parse-to-recipe-tiles */ "./src/app/core/utility/parse-to-recipe-tiles.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/base-feature-wrapper/base-feature-wrapper.component */ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/__ivy_ngcc__/fesm2015/ng2-adsense.js");
/* harmony import */ var _shared_components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/recipe-tile/recipe-tile.component */ "./src/app/shared/components/recipe-tile/recipe-tile.component.ts");











function HomeComponent_div_3_app_recipe_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipe-tile", 8);
} if (rf & 2) {
    const recipe_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipeTile", recipe_r3);
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_3_app_recipe_tile_1_Template, 1, 1, "app-recipe-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const latestRecipes_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", latestRecipes_r1);
} }
class HomeComponent {
    constructor(store) {
        this.store = store;
        this.latestRecipes$ = this.store
            .select(_core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_1__["selectLatestRecipes"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipes) => recipes.map((recipe) => Object(_core_utility_parse_to_recipe_tiles__WEBPACK_IMPORTED_MODULE_4__["parseToRecipeTiles"])(recipe))));
    }
    ngOnInit() {
        this.store.dispatch(Object(_core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_2__["GetLatestRecipes"])());
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 9, consts: [[1, "home"], ["header", ""], ["class", "home__recipes", 4, "ngIf"], ["data-ad-client", "ca-pub-3777768585143098", "data-ad-slot", "4670924554", "data-ad-format", "auto", "data-full-width-responsive", "true", 1, "adsbygoogle", 2, "display", "block"], [3, "adtest"], [3, "adClient", "adSlot", "display", "width", "height"], [1, "home__recipes"], [3, "recipeTile", 4, "ngFor", "ngForOf"], [3, "recipeTile"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-feature-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Latest recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " sasasa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ins", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ng-adsense", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ng-adsense", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.latestRecipes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adtest", "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adClient", "pub-3777768585143098")("adSlot", 3122538287)("display", "block")("width", 320)("height", 108);
    } }, directives: [_shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["BaseFeatureWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng2_adsense__WEBPACK_IMPORTED_MODULE_8__["AdsenseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_9__["RecipeTileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".home__recipes[_ngcontent-%COMP%] {\n  display: flex;\n  grid-column: 1/4;\n  justify-self: center;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n}\n.home__recipes[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.home__recipes[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%]:first-child {\n  width: 460px;\n}\n.home__recipes[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n  width: 380px;\n}\n@media (max-width: 1368px) {\n  .home__recipes[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n  }\n  .home__recipes[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n  .home__recipes[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%]:first-child {\n    width: 600px;\n  }\n}\n@media (max-width: 768px) {\n  .home__recipes[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home__recipes[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9FOlxcX1Byb2plY3RzXFxBZFJlY2lwZXMvc3JjXFxhcHBcXGZlYXR1cmVzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7QUNBTjtBREdJO0VBQ0UsWUFBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0FDRk47QURLSTtFQW5CRjtJQW9CSSxtQkFBQTtJQUNBLHNCQUFBO0VDRko7RURJSTtJQUNFLFlBQUE7RUNGTjtFRElNO0lBQ0UsWUFBQTtFQ0ZSO0FBQ0Y7QURNSTtFQUNFO0lBQ0UsV0FBQTtFQ0pOO0VETU07SUFDRSxXQUFBO0VDSlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAmX19yZWNpcGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1yZWNpcGUtdGlsZTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiA0NjBweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtcmVjaXBlLXRpbGUge1xyXG4gICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjhweCkge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgYXBwLXJlY2lwZS10aWxlIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBhcHAtcmVjaXBlLXRpbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaG9tZV9fcmVjaXBlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuLmhvbWVfX3JlY2lwZXMgPiAqIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uaG9tZV9fcmVjaXBlcyBhcHAtcmVjaXBlLXRpbGU6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNDYwcHg7XG59XG4uaG9tZV9fcmVjaXBlcyBhcHAtcmVjaXBlLXRpbGUge1xuICB3aWR0aDogMzgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XG4gIC5ob21lX19yZWNpcGVzIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmhvbWVfX3JlY2lwZXMgYXBwLXJlY2lwZS10aWxlIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbiAgLmhvbWVfX3JlY2lwZXMgYXBwLXJlY2lwZS10aWxlOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaG9tZV9fcmVjaXBlcyBhcHAtcmVjaXBlLXRpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ob21lX19yZWNpcGVzIGFwcC1yZWNpcGUtdGlsZTpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/personal-recipes/personal-recipes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/personal-recipes/personal-recipes.component.ts ***!
  \*************************************************************************/
/*! exports provided: PersonalRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalRecipesComponent", function() { return PersonalRecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store/recipes/recipes.selectors */ "./src/app/core/store/recipes/recipes.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_utility_parse_to_recipe_tiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utility/parse-to-recipe-tiles */ "./src/app/core/utility/parse-to-recipe-tiles.ts");
/* harmony import */ var _core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/store/recipes/recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/base-feature-wrapper/base-feature-wrapper.component */ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/recipe-tile/recipe-tile.component */ "./src/app/shared/components/recipe-tile/recipe-tile.component.ts");











function PersonalRecipesComponent_div_3_app_recipe_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-recipe-tile", 5);
} if (rf & 2) {
    const recipe_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("recipeTile", recipe_r3);
} }
function PersonalRecipesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PersonalRecipesComponent_div_3_app_recipe_tile_1_Template, 1, 1, "app-recipe-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const latestRecipes_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", latestRecipes_r1);
} }
class PersonalRecipesComponent {
    constructor(store) {
        this.store = store;
        this.recipes$ = this.store
            .select(_core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_2__["selectPersonalRecipes"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((recipes) => recipes.map((recipe) => {
            const _a = Object(_core_utility_parse_to_recipe_tiles__WEBPACK_IMPORTED_MODULE_4__["parseToRecipeTiles"])(recipe), { authorName } = _a, recipeWithoutAuthorName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["authorName"]);
            return recipeWithoutAuthorName;
        })));
    }
    ngOnInit() {
        this.store.dispatch(Object(_core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_5__["GetPersonalRecipes"])());
    }
}
PersonalRecipesComponent.ɵfac = function PersonalRecipesComponent_Factory(t) { return new (t || PersonalRecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
PersonalRecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalRecipesComponent, selectors: [["app-personal-recipes"]], decls: 5, vars: 3, consts: [[1, "personal-recipes"], ["header", ""], ["class", "personal-recipes__list", 4, "ngIf"], [1, "personal-recipes__list"], [3, "recipeTile", 4, "ngFor", "ngForOf"], [3, "recipeTile"]], template: function PersonalRecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-base-feature-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PersonalRecipesComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx.recipes$));
    } }, directives: [_shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["BaseFeatureWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_9__["RecipeTileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".personal-recipes__list[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-self: center;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n}\n.personal-recipes__list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.personal-recipes__list[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n  width: 420px;\n}\n@media (max-width: 1368px) {\n  .personal-recipes__list[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .personal-recipes__list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .personal-recipes__list[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .personal-recipes__list[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGVyc29uYWwtcmVjaXBlcy9FOlxcX1Byb2plY3RzXFxBZFJlY2lwZXMvc3JjXFxhcHBcXGZlYXR1cmVzXFxwZXJzb25hbC1yZWNpcGVzXFxwZXJzb25hbC1yZWNpcGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wZXJzb25hbC1yZWNpcGVzL3BlcnNvbmFsLXJlY2lwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0FDRE47QURJSTtFQWhCRjtJQWlCSSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EscUNBQUE7RUNESjtBQUNGO0FER0k7RUF0QkY7SUF1QkksMEJBQUE7RUNBSjtFREVJO0lBQ0UsV0FBQTtFQ0FOO0VERU07SUFDRSxXQUFBO0VDQVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BlcnNvbmFsLXJlY2lwZXMvcGVyc29uYWwtcmVjaXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJzb25hbC1yZWNpcGVzIHtcclxuICAmX19saXN0IHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcblxyXG4gICAgJiA+ICoge1xyXG4gICAgICBtYXJnaW46IDhweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtcmVjaXBlLXRpbGUge1xyXG4gICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjhweCkge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHJcbiAgICAgIGFwcC1yZWNpcGUtdGlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wZXJzb25hbC1yZWNpcGVzX19saXN0IHtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG59XG4ucGVyc29uYWwtcmVjaXBlc19fbGlzdCA+ICoge1xuICBtYXJnaW46IDhweDtcbn1cbi5wZXJzb25hbC1yZWNpcGVzX19saXN0IGFwcC1yZWNpcGUtdGlsZSB7XG4gIHdpZHRoOiA0MjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgLnBlcnNvbmFsLXJlY2lwZXNfX2xpc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnBlcnNvbmFsLXJlY2lwZXNfX2xpc3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5wZXJzb25hbC1yZWNpcGVzX19saXN0IGFwcC1yZWNpcGUtdGlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBlcnNvbmFsLXJlY2lwZXNfX2xpc3QgYXBwLXJlY2lwZS10aWxlOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonalRecipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-personal-recipes',
                templateUrl: './personal-recipes.component.html',
                styleUrls: ['./personal-recipes.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/recipe-details/recipe-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/recipe-details/recipe-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function() { return RecipeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var _core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/store/recipes/recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");
/* harmony import */ var _core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/store/recipes/recipes.selectors */ "./src/app/core/store/recipes/recipes.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_utility_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utility/is-null-or-undefined */ "./src/app/core/utility/is-null-or-undefined.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/base-feature-wrapper/base-feature-wrapper.component */ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _recipe_image_recipe_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe-image/recipe-image.component */ "./src/app/features/recipe-details/recipe-image/recipe-image.component.ts");
var RecipeDetailsComponent_1;













function RecipeDetailsComponent_div_3_ng_container_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preparingStep_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r7 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](preparingStep_r6);
} }
function RecipeDetailsComponent_div_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Preparing steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecipeDetailsComponent_div_3_ng_container_8_div_3_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", recipe_r1.preparingSteps);
} }
function RecipeDetailsComponent_div_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No preparing steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecipeDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-recipe-image", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RecipeDetailsComponent_div_3_ng_container_8_Template, 4, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RecipeDetailsComponent_div_3_ng_template_9_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("authorName", recipe_r1.authorName)("name", recipe_r1.name)("time", recipe_r1.time)("photoUrl", recipe_r1.photoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Created at ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, recipe_r1.createdAt, "d/M/yy, HH:MM"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", recipe_r1.preparingSteps.length > 0)("ngIfElse", _r3);
} }
let RecipeDetailsComponent = RecipeDetailsComponent_1 = class RecipeDetailsComponent {
    constructor(store, activatedRoute) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.recipe$ = this.store.select(_core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_4__["selectDetailedRecipes"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((recipe) => (Object.assign(Object.assign({}, recipe), { preparingSteps: RecipeDetailsComponent_1.parsePreparingSteps(recipe === null || recipe === void 0 ? void 0 : recipe.preparingSteps) }))));
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
            .subscribe(({ id }) => this.store.dispatch(Object(_core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_3__["GetDetailedRecipe"])({ id })));
    }
    static parsePreparingSteps(value) {
        return Object(_core_utility_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_6__["isNil"])(value) || typeof value === 'string' ? [] : value;
    }
};
RecipeDetailsComponent.ɵfac = function RecipeDetailsComponent_Factory(t) { return new (t || RecipeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
RecipeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeDetailsComponent, selectors: [["app-recipe-details"]], decls: 5, vars: 3, consts: [[1, "recipe-details"], ["header", ""], ["class", "recipe-details__content", 4, "ngIf"], [1, "recipe-details__content"], [3, "authorName", "name", "time", "photoUrl"], [1, "recipe-details__created-at"], [1, "recipe-details__description"], [1, "recipe-details__preparing-steps"], [4, "ngIf", "ngIfElse"], ["noPreparingSteps", ""], ["class", "recipe-details__preparing-step", 4, "ngFor", "ngForOf"], [1, "recipe-details__preparing-step"]], template: function RecipeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-base-feature-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Detailed Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecipeDetailsComponent_div_3_Template, 11, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx.recipe$));
    } }, directives: [_shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["BaseFeatureWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _recipe_image_recipe_image_component__WEBPACK_IMPORTED_MODULE_11__["RecipeImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".recipe-details__content[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  display: grid;\n  grid-template-columns: 60% 40%;\n  grid-template-rows: 420px 50px 150px 1fr;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  padding: 8px 8%;\n}\n.recipe-details__content[_ngcontent-%COMP%]   app-recipe-image[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  width: 100%;\n}\n@media (max-width: 1368px) {\n  .recipe-details__content[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    padding: 4px 4%;\n  }\n}\n@media (max-width: 768px) {\n  .recipe-details__content[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n  }\n}\n.recipe-details__description[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  font-size: 22px;\n  margin: 0 10px;\n}\n.recipe-details__created-at[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  font-size: 22px;\n  justify-self: end;\n  margin: 0 10px;\n}\n.recipe-details__preparing-steps[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  grid-row: 1/5;\n}\n.recipe-details__preparing-steps[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media (max-width: 1368px) {\n  .recipe-details__preparing-steps[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-left: 0;\n    grid-row: auto;\n  }\n}\n.recipe-details__preparing-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 22px;\n  margin: 10px 0;\n}\n.recipe-details__preparing-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWRldGFpbHMvRTpcXF9Qcm9qZWN0c1xcQWRSZWNpcGVzL3NyY1xcYXBwXFxmZWF0dXJlc1xccmVjaXBlLWRldGFpbHNcXHJlY2lwZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGVBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQU47QURHSTtFQWRGO0lBZUksMkJBQUE7SUFDQSxlQUFBO0VDQUo7QUFDRjtBRENJO0VBbEJGO0lBbUJJLGdCQUFBO0VDRUo7QUFDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FESUk7RUFSRjtJQVNJLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUNESjtBQUNGO0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUk7RUFDRSxrQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlLWRldGFpbHMge1xyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQyMHB4IDUwcHggMTUwcHggMWZyO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgICBwYWRkaW5nOiA4cHggOCU7XHJcblxyXG4gICAgYXBwLXJlY2lwZS1pbWFnZSB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHggNCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcblxyXG4gICZfX2NyZWF0ZWQtYXQge1xyXG4gICAgZ3JpZC1yb3c6IDIvMztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19wcmVwYXJpbmctc3RlcHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBncmlkLXJvdzogMS81O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIGdyaWQtcm93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcHJlcGFyaW5nLXN0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi5yZWNpcGUtZGV0YWlsc19fY29udGVudCB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MjBweCA1MHB4IDE1MHB4IDFmcjtcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgcGFkZGluZzogOHB4IDglO1xufVxuLnJlY2lwZS1kZXRhaWxzX19jb250ZW50IGFwcC1yZWNpcGUtaW1hZ2Uge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgLnJlY2lwZS1kZXRhaWxzX19jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgcGFkZGluZzogNHB4IDQlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJlY2lwZS1kZXRhaWxzX19jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICB9XG59XG4ucmVjaXBlLWRldGFpbHNfX2Rlc2NyaXB0aW9uIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5yZWNpcGUtZGV0YWlsc19fY3JlYXRlZC1hdCB7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLnJlY2lwZS1kZXRhaWxzX19wcmVwYXJpbmctc3RlcHMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZ3JpZC1yb3c6IDEvNTtcbn1cbi5yZWNpcGUtZGV0YWlsc19fcHJlcGFyaW5nLXN0ZXBzIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgLnJlY2lwZS1kZXRhaWxzX19wcmVwYXJpbmctc3RlcHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBncmlkLXJvdzogYXV0bztcbiAgfVxufVxuLnJlY2lwZS1kZXRhaWxzX19wcmVwYXJpbmctc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ucmVjaXBlLWRldGFpbHNfX3ByZXBhcmluZy1zdGVwIGg0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"] });
RecipeDetailsComponent = RecipeDetailsComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], RecipeDetailsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recipe-details',
                templateUrl: './recipe-details.component.html',
                styleUrls: ['./recipe-details.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/recipe-details/recipe-image/recipe-image.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/recipe-details/recipe-image/recipe-image.component.ts ***!
  \********************************************************************************/
/*! exports provided: RecipeImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeImageComponent", function() { return RecipeImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RecipeImageComponent {
}
RecipeImageComponent.ɵfac = function RecipeImageComponent_Factory(t) { return new (t || RecipeImageComponent)(); };
RecipeImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeImageComponent, selectors: [["app-recipe-image"]], inputs: { name: "name", photoUrl: "photoUrl", time: "time", authorName: "authorName" }, decls: 9, vars: 4, consts: [[1, "recipe-image"], [1, "recipe-image__info"], [1, "recipe-image__time"], [1, "recipe-image__name"], [1, "recipe-image__author-name"], ["alt", "Recipe image", 3, "src"]], template: function RecipeImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".recipe-image[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 400px;\n}\n.recipe-image__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 30px;\n  transform: translate(8px);\n}\n.recipe-image__author-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  position: absolute;\n  font-size: 28px;\n  right: 0;\n  transform: translate(-25px, -35px);\n}\n.recipe-image__author-name[_ngcontent-%COMP%]::before {\n  font-weight: 500;\n  font-size: 24px;\n  margin-right: 5px;\n  content: \"By  \";\n}\n.recipe-image__time[_ngcontent-%COMP%] {\n  font-size: 22px;\n  transform: translate(8px);\n  color: var(--gray);\n}\n.recipe-image__info[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--white);\n  bottom: 0;\n  padding: 15px;\n  z-index: 2;\n  opacity: 0.94;\n  width: 100%;\n}\n.recipe-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  filter: grayscale(5%);\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 15px 20px 5px rgba(0, 0, 0, 0.04);\n}\n.recipe-image[_ngcontent-%COMP%]:after {\n  z-index: 1;\n  left: 0;\n  top: 0;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  box-shadow: inset 0 0 15px 2px rgba(0, 0, 0, 0.14);\n  height: 100%;\n  border-radius: 12px;\n  background: linear-gradient(to bottom, transparent, transparent, transparent, transparent, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWltYWdlL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcZmVhdHVyZXNcXHJlY2lwZS1kZXRhaWxzXFxyZWNpcGUtaW1hZ2VcXHJlY2lwZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWltYWdlL3JlY2lwZS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FESUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNISjtBRE1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwrQ0FBQTtBQ0pKO0FET0U7RUFDRSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWltYWdlL3JlY2lwZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGUtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgpO1xyXG4gIH1cclxuXHJcbiAgJl9fYXV0aG9yLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1cHgsIC0zNXB4KTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBjb250ZW50OiAnQnkgICc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCk7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG9wYWNpdHk6IDAuOTQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoNSUpO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCA0JSk7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDE0JSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICB0cmFuc3BhcmVudCxcclxuICAgICAgICB0cmFuc3BhcmVudCxcclxuICAgICAgICB0cmFuc3BhcmVudCxcclxuICAgICAgICB0cmFuc3BhcmVudCxcclxuICAgICAgICB0cmFuc3BhcmVudCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDUwJSksXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCA5MCUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLnJlY2lwZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLnJlY2lwZS1pbWFnZV9fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4KTtcbn1cbi5yZWNpcGUtaW1hZ2VfX2F1dGhvci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjVweCwgLTM1cHgpO1xufVxuLnJlY2lwZS1pbWFnZV9fYXV0aG9yLW5hbWU6OmJlZm9yZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6IFwiQnkgIFwiO1xufVxuLnJlY2lwZS1pbWFnZV9fdGltZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4KTtcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xufVxuLnJlY2lwZS1pbWFnZV9faW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwLjk0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWNpcGUtaW1hZ2UgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoNSUpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4ucmVjaXBlLWltYWdlOmFmdGVyIHtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-image',
                templateUrl: './recipe-image.component.html',
                styleUrls: ['./recipe-image.component.scss'],
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], photoUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], authorName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/recipe-list/recipe-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/recipe-list/recipe-list.component.ts ***!
  \***************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/store/recipes/recipes.selectors */ "./src/app/core/store/recipes/recipes.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_utility_parse_to_recipe_tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utility/parse-to-recipe-tiles */ "./src/app/core/utility/parse-to-recipe-tiles.ts");
/* harmony import */ var _core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/store/recipes/recipes.actions */ "./src/app/core/store/recipes/recipes.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/base-feature-wrapper/base-feature-wrapper.component */ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/recipe-tile/recipe-tile.component */ "./src/app/shared/components/recipe-tile/recipe-tile.component.ts");










function RecipeListComponent_div_3_app_recipe_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipe-tile", 5);
} if (rf & 2) {
    const recipe_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipeTile", recipe_r3);
} }
function RecipeListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeListComponent_div_3_app_recipe_tile_1_Template, 1, 1, "app-recipe-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const latestRecipes_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", latestRecipes_r1);
} }
class RecipeListComponent {
    constructor(store) {
        this.store = store;
        this.recipes$ = this.store.select(_core_store_recipes_recipes_selectors__WEBPACK_IMPORTED_MODULE_1__["selectAllRecipes"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((recipes) => recipes.map((recipe) => Object(_core_utility_parse_to_recipe_tiles__WEBPACK_IMPORTED_MODULE_3__["parseToRecipeTiles"])(recipe))));
    }
    ngOnInit() {
        this.store.dispatch(Object(_core_store_recipes_recipes_actions__WEBPACK_IMPORTED_MODULE_4__["GetAllRecipes"])());
    }
}
RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) { return new (t || RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
RecipeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeListComponent, selectors: [["app-recipe-list"]], decls: 5, vars: 3, consts: [[1, "recipes"], ["header", ""], ["class", "recipes__list", 4, "ngIf"], [1, "recipes__list"], [3, "recipeTile", 4, "ngFor", "ngForOf"], [3, "recipeTile"]], template: function RecipeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-feature-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecipeListComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.recipes$));
    } }, directives: [_shared_components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["BaseFeatureWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_8__["RecipeTileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".recipes__list[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-self: center;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n}\n.recipes__list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.recipes__list[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n  width: 420px;\n}\n@media (max-width: 1368px) {\n  .recipes__list[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .recipes__list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .recipes__list[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .recipes__list[_ngcontent-%COMP%]   app-recipe-tile[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWxpc3QvRTpcXF9Qcm9qZWN0c1xcQWRSZWNpcGVzL3NyY1xcYXBwXFxmZWF0dXJlc1xccmVjaXBlLWxpc3RcXHJlY2lwZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7QUNETjtBRElJO0VBaEJGO0lBaUJJLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQ0FBQTtFQ0RKO0FBQ0Y7QURHSTtFQXRCRjtJQXVCSSwwQkFBQTtFQ0FKO0VERUk7SUFDRSxXQUFBO0VDQU47RURFTTtJQUNFLFdBQUE7RUNBUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlcyB7XHJcbiAgJl9fbGlzdCB7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG5cclxuICAgICYgPiAqIHtcclxuICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLXJlY2lwZS10aWxlIHtcclxuICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgICBhcHAtcmVjaXBlLXRpbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucmVjaXBlc19fbGlzdCB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuLnJlY2lwZXNfX2xpc3QgPiAqIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4ucmVjaXBlc19fbGlzdCBhcHAtcmVjaXBlLXRpbGUge1xuICB3aWR0aDogNDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XG4gIC5yZWNpcGVzX19saXN0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5yZWNpcGVzX19saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAucmVjaXBlc19fbGlzdCBhcHAtcmVjaXBlLXRpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5yZWNpcGVzX19saXN0IGFwcC1yZWNpcGUtdGlsZTpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-list',
                templateUrl: './recipe-list.component.html',
                styleUrls: ['./recipe-list.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/adblock-notification-dialog/adblock-notification-dialog.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/adblock-notification-dialog/adblock-notification-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AdblockNotificationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdblockNotificationDialogComponent", function() { return AdblockNotificationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



class AdblockNotificationDialogComponent {
}
AdblockNotificationDialogComponent.ɵfac = function AdblockNotificationDialogComponent_Factory(t) { return new (t || AdblockNotificationDialogComponent)(); };
AdblockNotificationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdblockNotificationDialogComponent, selectors: [["app-adblock-notification-dialog"]], decls: 7, vars: 0, consts: [[1, "adblock-notification"], [1, "adblock-notification__icon"], [1, "adblock-notification__title"], [1, "adblock-notification__content"]], template: function AdblockNotificationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Adblock detected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Please disable adblock to be able to move around the page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".adblock-notification[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  opacity: 0.9;\n  box-shadow: inset 0 0 15px 1px var(--gray);\n}\n.adblock-notification__icon[_ngcontent-%COMP%] {\n  font-size: 155px;\n  width: 155px;\n  height: 155px;\n  border-radius: 50%;\n  color: var(--orange);\n}\n.adblock-notification__title[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.adblock-notification__content[_ngcontent-%COMP%] {\n  font-size: 26px;\n  padding: 0 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRibG9jay1ub3RpZmljYXRpb24tZGlhbG9nL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxhZGJsb2NrLW5vdGlmaWNhdGlvbi1kaWFsb2dcXGFkYmxvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRibG9jay1ub3RpZmljYXRpb24tZGlhbG9nL2FkYmxvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRibG9jay1ub3RpZmljYXRpb24tZGlhbG9nL2FkYmxvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGJsb2NrLW5vdGlmaWNhdGlvbntcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAxcHggdmFyKC0tZ3JheSk7XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNTVweDtcclxuICAgIHdpZHRoOiAxNTVweDtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iLCIuYWRibG9jay1ub3RpZmljYXRpb24ge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDFweCB2YXIoLS1ncmF5KTtcbn1cbi5hZGJsb2NrLW5vdGlmaWNhdGlvbl9faWNvbiB7XG4gIGZvbnQtc2l6ZTogMTU1cHg7XG4gIHdpZHRoOiAxNTVweDtcbiAgaGVpZ2h0OiAxNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbn1cbi5hZGJsb2NrLW5vdGlmaWNhdGlvbl9fdGl0bGUge1xuICBmb250LXNpemU6IDU1cHg7XG59XG4uYWRibG9jay1ub3RpZmljYXRpb25fX2NvbnRlbnQge1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdblockNotificationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adblock-notification-dialog',
                templateUrl: './adblock-notification-dialog.component.html',
                styleUrls: ['./adblock-notification-dialog.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BaseFeatureWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFeatureWrapperComponent", function() { return BaseFeatureWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = [[["", "header", ""]], "*"];
const _c1 = ["[header]", "*"];
class BaseFeatureWrapperComponent {
}
BaseFeatureWrapperComponent.ɵfac = function BaseFeatureWrapperComponent_Factory(t) { return new (t || BaseFeatureWrapperComponent)(); };
BaseFeatureWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseFeatureWrapperComponent, selectors: [["app-base-feature-wrapper"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "base-feature"], [1, "base-feature__header"]], template: function BaseFeatureWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".base-feature[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 120px calc(100% - 120px);\n  grid-template-columns: repeat(3, 33%);\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n}\n.base-feature__header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-left: 48px;\n  font-size: 32px;\n  grid-column: 1/4;\n}\n@media (max-width: 1368px) {\n  .base-feature__header[_ngcontent-%COMP%] {\n    align-self: center;\n    margin-left: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .base-feature__header[_ngcontent-%COMP%] {\n    margin: 0;\n    justify-self: center;\n  }\n}\n@media (max-width: 768px) {\n  .base-feature[_ngcontent-%COMP%] {\n    grid-template-rows: 100px calc(100% - 100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFzZS1mZWF0dXJlLXdyYXBwZXIvRTpcXF9Qcm9qZWN0c1xcQWRSZWNpcGVzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGJhc2UtZmVhdHVyZS13cmFwcGVyXFxiYXNlLWZlYXR1cmUtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFzZS1mZWF0dXJlLXdyYXBwZXIvYmFzZS1mZWF0dXJlLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBTEY7SUFNSSxrQkFBQTtJQUNBLGlCQUFBO0VDR0o7QUFDRjtBRERJO0VBVkY7SUFXSSxTQUFBO0lBQ0Esb0JBQUE7RUNJSjtBQUNGO0FEREU7RUF2QkY7SUF3QkksNENBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFzZS1mZWF0dXJlLXdyYXBwZXIvYmFzZS1mZWF0dXJlLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzZS1mZWF0dXJlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggY2FsYygxMDAlIC0gMTIwcHgpO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzJSk7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgfVxyXG59XHJcbiIsIi5iYXNlLWZlYXR1cmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMlKTtcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbn1cbi5iYXNlLWZlYXR1cmVfX2hlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XG4gIC5iYXNlLWZlYXR1cmVfX2hlYWRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJhc2UtZmVhdHVyZV9faGVhZGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmFzZS1mZWF0dXJlIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseFeatureWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-feature-wrapper',
                templateUrl: './base-feature-wrapper.component.html',
                styleUrls: ['./base-feature-wrapper.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/button/button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





function ButtonComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "!isProcessing; else loading"]);
} }
function ButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
const _c0 = function (a0) { return { "width": a0 }; };
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.isProcessing = false;
        this.isDisabled = false;
        this.secondary = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clicked() {
        this.onClick.emit(true);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { type: "type", isFullWidth: "isFullWidth", isProcessing: "isProcessing", isDisabled: "isDisabled", secondary: "secondary" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c1, decls: 4, vars: 8, consts: [["mat-raised-button", "", 1, "button", 3, "ngClass", "ngStyle", "type", "disabled", "click"], [4, "ngIf", "ngIfElse"], ["loading", ""]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.clicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.secondary ? "secondary" : "primary")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isFullWidth ? "100%" : "120px"))("type", ctx.type)("disabled", ctx.isProcessing || ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isProcessing)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"]], styles: [".primary[_ngcontent-%COMP%] {\n  color: var(--black);\n  background: var(--orange);\n  border-radius: 10px;\n}\n\n.secondary[_ngcontent-%COMP%] {\n  color: var(--black);\n  background: var(--white);\n  border-radius: 15px;\n}\n\n.button[_ngcontent-%COMP%] {\n  font-size: var(--m);\n  padding: 6px 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.07);\n}\n\n.button[_ngcontent-%COMP%]:disabled {\n  background: var(--gray);\n  color: var(--black);\n}\n\n.button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(0.1);\n  padding: 5px;\n}\n\n.button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  zoom: 0.35;\n}\n\n  app-button .mat-ripple-element {\n  background: var(--blackRipple);\n}\n\n  .mat-progress-spinner circle,   .mat-spinner circle {\n  stroke: var(--black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b25cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ0FGOztBREVFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDREo7O0FESUU7RUFDRSxVQUFBO0FDRko7O0FEUUk7RUFDRSw4QkFBQTtBQ0xOOztBRFNFOztFQUVFLG9CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnkge1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnNlY29uZGFyeSB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1tKTtcclxuICBwYWRkaW5nOiA2cHggMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIG1hdC1zcGlubmVyIHtcclxuICAgIHpvb206IDAuMzU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIGFwcC1idXR0b24ge1xyXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrUmlwcGxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsXHJcbiAgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHZhcigtLWJsYWNrKTtcclxuICB9XHJcbn1cclxuIiwiLnByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2Vjb25kYXJ5IHtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1tKTtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cbi5idXR0b24gc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYnV0dG9uIG1hdC1zcGlubmVyIHtcbiAgem9vbTogMC4zNTtcbn1cblxuOjpuZy1kZWVwIGFwcC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrUmlwcGxlKTtcbn1cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxuOjpuZy1kZWVwIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6IHZhcigtLWJsYWNrKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
            }]
    }], null, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFullWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isProcessing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = [[["", "header", ""]], "*"];
const _c1 = ["[header]", "*"];
class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [[1, "card"], [1, "card__header"], [1, "card__body"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  --headerHeight: 80px;\n  width: 500px;\n  height: 100%;\n  border-radius: 20px;\n  padding: 40px 48px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset, rgba(50, 50, 93, 0.08) 0 50px 50px -20px, rgba(0, 0, 0, 0.08) 0px 20px 60px -30px;\n  background: var(--white);\n  border: solid 1px rgba(50, 50, 93, 0.05);\n}\n.card__header[_ngcontent-%COMP%] {\n  font-size: 36px;\n  height: var(--headerHeight);\n}\n.card__body[_ngcontent-%COMP%] {\n  height: calc(var(--height) - var(--headerHeight) - 40px * 2);\n}\n@media (max-width: 750px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    padding: 20px 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9FOlxcX1Byb2plY3RzXFxBZFJlY2lwZXMvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5SUFBQTtFQUNBLHdCQUFBO0VBQ0Esd0NBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FDQUo7QURHRTtFQUNFLDREQUFBO0FDREo7QURJRTtFQXBCRjtJQXFCSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAtLWhlYWRlckhlaWdodDogODBweDtcclxuXHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggNDhweDtcclxuICBib3gtc2hhZG93OiByZ2IoMjU1IDI1NSAyNTUgLyAxMCUpIDAgMXB4IDFweCAwIGluc2V0LCByZ2IoNTAgNTAgOTMgLyA4JSkgMCA1MHB4IDUwcHggLTIwcHgsIHJnYigwIDAgMCAvIDglKSAwcHggMjBweCA2MHB4IC0zMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoNTAgNTAgOTMgLyA1JSk7XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlckhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gdmFyKC0taGVhZGVySGVpZ2h0KSAtIDQwcHggKiAyKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5jYXJkIHtcbiAgLS1oZWFkZXJIZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA0MHB4IDQ4cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwIDFweCAxcHggMCBpbnNldCwgcmdiYSg1MCwgNTAsIDkzLCAwLjA4KSAwIDUwcHggNTBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMjBweCA2MHB4IC0zMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoNTAsIDUwLCA5MywgMC4wNSk7XG59XG4uY2FyZF9faGVhZGVyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlckhlaWdodCk7XG59XG4uY2FyZF9fYm9keSB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gdmFyKC0taGVhZGVySGVpZ2h0KSAtIDQwcHggKiAyKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/store/auth/auth.selectors */ "./src/app/core/store/auth/auth.selectors.ts");
/* harmony import */ var _core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/auth/auth.actions */ "./src/app/core/store/auth/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/button.component */ "./src/app/shared/components/button/button.component.ts");









function HeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_6_Template_app_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.displayName);
} }
function HeaderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_8_Template_app_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_8_Template_app_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "opacity": a0 }; };
class HeaderComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.user$ = this.store.select(_core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"]);
        this.authProcessing$ = this.store.select(_core_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["selectAuthProcessing"]);
    }
    ngOnInit() { }
    goToLogin() {
        this.router.navigateByUrl('sign-in').then();
    }
    goToRegister() {
        this.router.navigateByUrl('sign-up').then();
    }
    logout() {
        this.router.navigateByUrl('').then();
        this.store.dispatch(Object(_core_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"])());
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 14, consts: [[1, "header"], [1, "header__logo"], ["routerLink", ""], [1, "header__body", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["unauthenticated", ""], [1, "mobile-icon", 3, "ngStyle"], [1, "header__inner-body"], [1, "links"], ["routerLink", "add-recipe"], ["routerLink", "my-recipes"], ["routerLink", "recipes"], [1, "actions"], [1, "actions__user-display-name"], ["secondary", "true", 3, "click"], [1, "auth-actions"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_container_6_Template, 14, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_ng_template_8_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.authProcessing$) ? "0" : "1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.user$))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.authProcessing$) ? "0" : "1"));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10% 90%;\n  height: 70px;\n  background: var(--orange);\n  padding: 0 10px;\n  box-shadow: rgba(25, 28, 31, 0.05) 0 8px 16px, rgba(25, 28, 31, 0.05) 0 -1px 0px;\n  position: relative;\n  z-index: 3;\n  -webkit-animation-name: opacity;\n          animation-name: opacity;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n}\n.header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.header__logo[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  padding-left: 50px;\n}\n@media (max-width: 1024px) {\n  .header__logo[_ngcontent-%COMP%] {\n    padding-left: 25px;\n  }\n}\n.header__logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex !important;\n  align-items: center !important;\n  font-size: 35px !important;\n  color: var(--black);\n}\n.header__hide[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.header__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  grid-column: 2/3;\n  padding-right: 50px;\n  opacity: 1;\n  transition: opacity 200ms;\n}\n@media (max-width: 1024px) {\n  .header__body[_ngcontent-%COMP%] {\n    padding-right: 25px;\n  }\n}\n@media (max-width: 768px) {\n  .header__body[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header__body[_ngcontent-%COMP%]   .auth-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header__body[_ngcontent-%COMP%]   .auth-actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.header__inner-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  height: 80%;\n  cursor: pointer;\n  color: var(--black);\n  font-size: 22px;\n  transition: 200ms;\n  align-self: end;\n}\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n@media (max-width: 1024px) {\n  .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 5px;\n  }\n}\n.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .actions__user-display-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 20px;\n  font-weight: 600;\n}\n.header[_ngcontent-%COMP%]   .actions__user-display-name[_ngcontent-%COMP%]::before {\n  font-weight: 500;\n  margin-right: 5px;\n  content: \"Welcome, \";\n}\n.header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n@media (max-width: 1024px) {\n  .header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n  .header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 0 5px;\n  }\n}\n.header[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n  display: none;\n  grid-column: 2/3;\n  opacity: 1;\n  transition: opacity 200ms;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    padding-right: 50px;\n  }\n  .header[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 750px) {\n  nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    transition: 200ms;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: grid;\n    place-items: center;\n    width: 50px;\n    height: 80%;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    border-radius: 10px;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]:hover .mat-icon {\n    color: var(--orange);\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]     .mat-icon {\n    display: grid;\n    align-self: center;\n    place-items: center;\n    width: 100%;\n    color: white;\n    font-size: 32px;\n    cursor: pointer;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 750px) {\n  nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    display: flex !important;\n    align-items: center !important;\n    font-size: 35px !important;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    width: 60%;\n    justify-content: flex-end;\n    align-items: center;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 25px;\n    height: 80%;\n    border-radius: 10px;\n    cursor: pointer;\n    color: var(--black);\n    font-size: 22px;\n    transition: 200ms;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .user-display-name[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-left: 20px;\n    font-weight: 600;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .user-display-name[_ngcontent-%COMP%]::before {\n    font-weight: 500;\n    margin-right: 5px;\n    content: \"Welcome, \";\n  }\n}\nnav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  grid-row: 1;\n  justify-content: center;\n  align-self: center;\n  color: var(--white);\n  padding-left: 70px;\n}\nnav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnRkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBSEY7SUFJSSxrQkFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FERUU7RUFDRSxVQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNESjtBREVJO0VBUEY7SUFRSSxtQkFBQTtFQ0NKO0FBQ0Y7QURBSTtFQVZGO0lBV0ksYUFBQTtFQ0dKO0FBQ0Y7QURESTtFQUNFLGFBQUE7QUNHTjtBRERNO0VBQ0UsYUFBQTtBQ0dSO0FERUU7RUFDRSxhQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNETjtBREdNO0VBQ0UsWUFBQTtBQ0RSO0FESU07RUFiRjtJQWNJLGFBQUE7RUNETjtBQUNGO0FES0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0hOO0FES007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNIUjtBRE9JO0VBQ0UsY0FBQTtBQ0xOO0FEUUk7RUFyQkY7SUFzQkksaUJBQUE7RUNMSjtFRE9JO0lBQ0UsYUFBQTtFQ0xOO0FBQ0Y7QURTRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ1BKO0FEU0k7RUFORjtJQU9JLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0VDTko7RURPSTtJQUNFLGVBQUE7RUNMTjtBQUNGO0FEWUE7RUFDRTtJQUNFLHlDQUFBO0VDVEY7RURnQkk7SUFDRSxpQkFBQTtFQ2ROO0VEaUJJO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNmTjtFRGlCTTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUNmUjtFRGlCUTtJQUNFLG9CQUFBO0VDZlY7RURvQlE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFFQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNuQlY7RUR3Qkk7SUFDRSxhQUFBO0VDdEJOO0FBQ0Y7QUQyQkE7RUFHTTtJQUNFLGVBQUE7SUFDQSx3QkFBQTtJQUNBLDhCQUFBO0lBQ0EsMEJBQUE7RUMzQk47RURnQ0k7SUFDRSxhQUFBO0VDOUJOO0VEaUNJO0lBQ0UsVUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7RUMvQk47RURpQ007SUFDRSxXQUFBO0VDL0JSO0VEa0NNO0lBQ0UsYUFBQTtFQ2hDUjtFRGtDUTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNoQ1Y7RURtQ1U7SUFDRSxZQUFBO0VDakNaO0VEc0NNO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VDcENSO0VEc0NRO0lBQ0UsY0FBQTtFQ3BDVjtFRHdDTTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDdENSO0VEd0NRO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDdENWO0FBQ0Y7QUQ2Q0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUMzQ0Y7QUQ4Q0U7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUM1Q0o7QURnREk7RUFDRSxhQUFBO0FDOUNOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UpO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDI1LCAyOCwgMzEsIDAuMDUpIDAgOHB4IDE2cHgsIHJnYmEoMjUsIDI4LCAzMSwgMC4wNSkgMCAtMXB4IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcblxyXG4gICYgPiAqIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xvZ28ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19oaWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGgtYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faW5uZXItYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmxpbmtzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmX191c2VyLWRpc3BsYXktbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgY29udGVudDogJ1dlbGNvbWUsICc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICBuYXYge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmxvZ28ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICoge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgJjo6bmctZGVlcC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2t0b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xyXG4gIG5hdiB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgLm1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlc2t0b3Age1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xyXG5cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLWRpc3BsYXktbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdXZWxjb21lLCAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuXHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA5MCU7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDI1LCAyOCwgMzEsIDAuMDUpIDAgOHB4IDE2cHgsIHJnYmEoMjUsIDI4LCAzMSwgMC4wNSkgMCAtMXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuLmhlYWRlciA+ICoge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaGVhZGVyX19sb2dvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbi5oZWFkZXJfX2xvZ28gbWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cbi5oZWFkZXJfX2hpZGUge1xuICBvcGFjaXR5OiAwO1xufVxuLmhlYWRlcl9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlcl9fYm9keSB7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJfX2JvZHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5oZWFkZXJfX2JvZHkgLmF1dGgtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyX19ib2R5IC5hdXRoLWFjdGlvbnMgPiAqIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5oZWFkZXJfX2lubmVyLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlciAubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAubGlua3MgYSB7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG4uaGVhZGVyIC5saW5rcyBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaGVhZGVyIC5saW5rcyBhIHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG59XG4uaGVhZGVyIC5hY3Rpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5hY3Rpb25zX191c2VyLWRpc3BsYXktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaGVhZGVyIC5hY3Rpb25zX191c2VyLWRpc3BsYXktbmFtZTo6YmVmb3JlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6IFwiV2VsY29tZSwgXCI7XG59XG4uaGVhZGVyIC5hY3Rpb25zID4gKiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaGVhZGVyIC5hY3Rpb25zIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAuaGVhZGVyIC5hY3Rpb25zID4gKiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgfVxufVxuLmhlYWRlciAubW9iaWxlLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIgLm1vYmlsZS1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gIC5oZWFkZXIgLm1vYmlsZS1pY29uIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIG5hdiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XG4gIH1cbiAgbmF2IC53cmFwcGVyICoge1xuICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICB9XG4gIG5hdiAud3JhcHBlciAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA4MCU7XG4gIH1cbiAgbmF2IC53cmFwcGVyIC5tb2JpbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBuYXYgLndyYXBwZXIgLm1vYmlsZTpob3Zlcjo6bmctZGVlcC5tYXQtaWNvbiB7XG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIH1cbiAgbmF2IC53cmFwcGVyIC5tb2JpbGUgOjpuZy1kZWVwIC5tYXQtaWNvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBuYXYgLndyYXBwZXIgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICBuYXYgLmxvZ28gbWF0LWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICB9XG4gIG5hdiAud3JhcHBlciAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIG5hdiAud3JhcHBlciAuZGVza3RvcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgbmF2IC53cmFwcGVyIC5kZXNrdG9wIGFwcC1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIG5hdiAud3JhcHBlciAuZGVza3RvcCAubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgbmF2IC53cmFwcGVyIC5kZXNrdG9wIC5saW5rcyBhIHtcbiAgICBtYXJnaW46IDAgMjVweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgfVxuICBuYXYgLndyYXBwZXIgLmRlc2t0b3AgLmxpbmtzIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBuYXYgLndyYXBwZXIgLmRlc2t0b3AgLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBuYXYgLndyYXBwZXIgLmRlc2t0b3AgLmFjdGlvbnMgPiAqIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuICBuYXYgLndyYXBwZXIgLmRlc2t0b3AgLnVzZXItZGlzcGxheS1uYW1lIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICBuYXYgLndyYXBwZXIgLmRlc2t0b3AgLnVzZXItZGlzcGxheS1uYW1lOjpiZWZvcmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29udGVudDogXCJXZWxjb21lLCBcIjtcbiAgfVxufVxubmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxubmF2IC5sb2dvIHtcbiAgZ3JpZC1yb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbn1cbm5hdiAud3JhcHBlciBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/image-upload/image-upload.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/image-upload/image-upload.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_utility_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/utility/is-undefined */ "./src/app/core/utility/is-undefined.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ImageUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageUploadComponent {
    constructor() {
        this.fileName = '';
        this.fileEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        if (Object(_core_utility_is_undefined__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(file)) {
            return;
        }
        this.fileEmitter.emit(file);
        this.file = file;
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = () => (this.imageSrc = reader.result);
        this.fileName = this.file.name;
    }
}
ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(); };
ImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageUploadComponent, selectors: [["app-image-upload"]], outputs: { fileEmitter: "fileEmitter" }, decls: 9, vars: 2, consts: [[1, "image-upload"], [3, "onClick"], ["type", "file", 1, "image-upload__input", 3, "change"], ["fileUpload", ""], [1, "image-upload__info"], [1, "image-upload__file-name"], ["class", "image-upload__file", 4, "ngIf"], [1, "image-upload__file"], ["alt", "Uploaded image", 3, "src"]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ImageUploadComponent_Template_app_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_3_listener($event) { return ctx.onImageSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageUploadComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileName || "No image uploaded yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file);
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@media (max-width: 1368px) {\n  .image-upload[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.image-upload__input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-upload__info[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 22px;\n}\n.image-upload__file[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 320px;\n  position: relative;\n  display: block;\n  margin-top: 24px;\n  border-radius: 8px;\n}\n.image-upload__file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n}\n.image-upload__file[_ngcontent-%COMP%]:after {\n  z-index: 1;\n  left: 0;\n  top: 0;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  box-shadow: inset 0 0 15px 2px rgba(0, 0, 0, 0.2);\n  height: 100%;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxpbWFnZS11cGxvYWRcXGltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQURGO0lBRUksYUFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0NGO0FBQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtdXBsb2FkIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTM2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2lucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAmX19maWxlIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDIwJSk7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIkBtZWRpYSAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgLmltYWdlLXVwbG9hZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5pbWFnZS11cGxvYWRfX2lucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5pbWFnZS11cGxvYWRfX2luZm8ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uaW1hZ2UtdXBsb2FkX19maWxlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaW1hZ2UtdXBsb2FkX19maWxlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmltYWdlLXVwbG9hZF9fZmlsZTphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-upload',
                templateUrl: './image-upload.component.html',
                styleUrls: ['./image-upload.component.scss'],
            }]
    }], null, { fileEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/input/input.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/input/input.component.ts ***!
  \************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation-feedback/validation-feedback.component */ "./src/app/shared/components/validation-feedback/validation-feedback.component.ts");










function InputComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.hide = !ctx_r2.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
} }
function InputComponent_app_validation_feedback_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-validation-feedback", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
} }
const _c0 = ["*"];
class InputComponent {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.onEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._type = 'text';
        this.hide = false;
    }
    set type(value) {
        this._type = value;
        this.hide = value === 'password';
    }
    onKeyup() {
        this.onEnter.emit();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { control: "control", type: "type" }, outputs: { onEnter: "onEnter" }, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [["appearance", "fill"], ["matInput", "", 3, "type", "formControl", "keyup.enter"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [3, "control", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "control"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function InputComponent_Template_input_keyup_enter_3_listener() { return ctx.onKeyup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_button_4_Template, 3, 3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_app_validation_feedback_5_Template, 1, 1, "app-validation-feedback", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._type === "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_7__["ValidationFeedbackComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n  border-radius: 7px 7px 0 0 !important;\n  background-color: rgba(0, 0, 0, 0.035);\n  box-shadow: inset 0 0 4px 0 var(--gray-low-opacity);\n  padding: 0.45em 0.45em 0 0.45em !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: var(--error);\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: var(--error);\n}\n\n  .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: var(--orange);\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: var(--orange);\n}\n\n  .mat-form-field-infix input {\n  transform: translateY(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvRTpcXF9Qcm9qZWN0c1xcQWRSZWNpcGVzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGlucHV0XFxpbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREdFO0VBQ0UscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsMENBQUE7QUNBSjs7QURHRTtFQUNFLDhCQUFBO0FDREo7O0FER0U7RUFDRSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsK0JBQUE7QUNGSjs7QURLRTtFQUNFLG9CQUFBO0FDSEo7O0FETUU7RUFDRSwwQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDM1KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggMCB2YXIoLS1ncmF5LWxvdy1vcGFjaXR5KTtcclxuICAgIHBhZGRpbmc6IDAuNDVlbSAwLjQ1ZW0gMCAwLjQ1ZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLWVycm9yKTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xyXG4gIH1cclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMzUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDAgdmFyKC0tZ3JheS1sb3ctb3BhY2l0eSk7XG4gIHBhZGRpbmc6IDAuNDVlbSAwLjQ1ZW0gMCAwLjQ1ZW0gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3IpO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXggaW5wdXQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.scss'],
            }]
    }], function () { return []; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/recipe-tile/recipe-tile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/recipe-tile/recipe-tile.component.ts ***!
  \************************************************************************/
/*! exports provided: RecipeTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeTileComponent", function() { return RecipeTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function RecipeTileComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.recipeTile.authorName);
} }
class RecipeTileComponent {
    constructor(router) {
        this.router = router;
    }
    goToDetails() {
        this.router.navigate(['recipe', this.recipeTile.id]).then();
    }
}
RecipeTileComponent.ɵfac = function RecipeTileComponent_Factory(t) { return new (t || RecipeTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RecipeTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeTileComponent, selectors: [["app-recipe-tile"]], hostBindings: function RecipeTileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeTileComponent_click_HostBindingHandler($event) { return ctx.goToDetails($event); });
    } }, inputs: { recipeTile: "recipeTile" }, decls: 8, vars: 4, consts: [[1, "recipe-tile"], [1, "recipe-tile__information"], [1, "recipe-tile__time"], [1, "recipe-tile__name"], ["class", "recipe-tile__author", 4, "ngIf"], ["alt", "Recipe image", 3, "src"], [1, "recipe-tile__author"]], template: function RecipeTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecipeTileComponent_p_6_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipeTile.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipeTile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipeTile.authorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipeTile.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".recipe-tile[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 250ms ease;\n}\n.recipe-tile__information[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--white);\n  z-index: 2;\n  bottom: 0;\n  padding: 15px;\n}\n.recipe-tile__time[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--gray);\n  text-shadow: 1px 1px black;\n}\n.recipe-tile__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 30px;\n  transform: translateY(4px);\n}\n.recipe-tile__author[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 24px;\n}\n.recipe-tile__author[_ngcontent-%COMP%]::before {\n  font-weight: 500;\n  font-size: 18px;\n  content: \"by  \";\n}\n.recipe-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 340px;\n  border-radius: 12px;\n  filter: grayscale(10%);\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 15px 20px 5px rgba(0, 0, 0, 0.04);\n}\n.recipe-tile[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.recipe-tile[_ngcontent-%COMP%]:after {\n  z-index: 1;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  box-shadow: inset 0 0 25px 2px rgba(0, 0, 0, 0.15);\n  background: linear-gradient(to bottom, transparent, transparent, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVjaXBlLXRpbGUvRTpcXF9Qcm9qZWN0c1xcQWRSZWNpcGVzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHJlY2lwZS10aWxlXFxyZWNpcGUtdGlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVjaXBlLXRpbGUvcmVjaXBlLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNDSjtBREVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7QURJSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNGTjtBRE1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwrQ0FBQTtBQ0pKO0FET0U7RUFDRSxhQUFBO0FDTEo7QURRRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHFIQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yZWNpcGUtdGlsZS9yZWNpcGUtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGUtdGlsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcclxuXHJcbiAgJl9faW5mb3JtYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGltZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG4gIH1cclxuXHJcbiAgJl9fYXV0aG9yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb250ZW50OiAnYnkgICc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAlKTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgNCUpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgMTUlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBib3R0b20sXHJcbiAgICAgICAgdHJhbnNwYXJlbnQsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCA1MCUpLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgNzAlKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLnJlY2lwZS10aWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2U7XG59XG4ucmVjaXBlLXRpbGVfX2luZm9ybWF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB6LWluZGV4OiAyO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ucmVjaXBlLXRpbGVfX3RpbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XG59XG4ucmVjaXBlLXRpbGVfX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuLnJlY2lwZS10aWxlX19hdXRob3Ige1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ucmVjaXBlLXRpbGVfX2F1dGhvcjo6YmVmb3JlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb250ZW50OiBcImJ5ICBcIjtcbn1cbi5yZWNpcGUtdGlsZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwJSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3gtc2hhZG93OiAwIDE1cHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5yZWNpcGUtdGlsZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODU7XG59XG4ucmVjaXBlLXRpbGU6YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjcpKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-tile',
                templateUrl: './recipe-tile.component.html',
                styleUrls: ['./recipe-tile.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { recipeTile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], goToDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/select/select.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/select/select.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation-feedback/validation-feedback.component */ "./src/app/shared/components/validation-feedback/validation-feedback.component.ts");









function SelectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.displayName);
} }
function SelectComponent_app_validation_feedback_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-validation-feedback", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
} }
const _c0 = ["*"];
class SelectComponent {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.options = [];
        this.isDisabled = false;
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { control: "control", options: "options", isDisabled: "isDisabled" }, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [["appearance", "fill", 1, "select"], [3, "formControl", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "control", 4, "ngIf"], [3, "value"], [3, "control"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_mat_option_4_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_app_validation_feedback_5_Template, 1, 1, "app-validation-feedback", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_6__["ValidationFeedbackComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n}\n\n.select[_ngcontent-%COMP%]     .mat-select-value {\n  transform: translateY(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzZWxlY3RcXHNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FESUk7RUFDRSwwQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnNlbGVjdCA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss'],
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/text-area/text-area.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/text-area/text-area.component.ts ***!
  \********************************************************************/
/*! exports provided: TextAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaComponent", function() { return TextAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validation-feedback/validation-feedback.component */ "./src/app/shared/components/validation-feedback/validation-feedback.component.ts");








function TextAreaComponent_app_validation_feedback_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-validation-feedback", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.control);
} }
const _c0 = ["*"];
class TextAreaComponent {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.rows = 5;
    }
}
TextAreaComponent.ɵfac = function TextAreaComponent_Factory(t) { return new (t || TextAreaComponent)(); };
TextAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextAreaComponent, selectors: [["app-text-area"]], inputs: { control: "control", rows: "rows" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "formControl", "rows"], [3, "control", 4, "ngIf"], [3, "control"]], template: function TextAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextAreaComponent_app_validation_feedback_4_Template, 1, 1, "app-validation-feedback", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_5__["ValidationFeedbackComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\nmat-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n  border-radius: 7px 7px 0 0;\n  background-color: rgba(0, 0, 0, 0.025);\n  box-shadow: inset 0 0 5px 0 var(--gray-low-opacity);\n  padding: 0.45em 0.45em 0 0.45em !important;\n}\n  .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: var(--orange);\n}\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: var(--orange);\n}\n  .mat-form-field-infix input {\n  transform: translateY(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1hcmVhL0U6XFxfUHJvamVjdHNcXEFkUmVjaXBlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0ZXh0LWFyZWFcXHRleHQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1hcmVhL3RleHQtYXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURHRTtFQUNFLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0FDQUo7QURHRTtFQUNFLCtCQUFBO0FDREo7QURJRTtFQUNFLG9CQUFBO0FDRko7QURLRTtFQUNFLDBCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90ZXh0LWFyZWEvdGV4dC1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCB2YXIoLS1ncmF5LWxvdy1vcGFjaXR5KTtcclxuICAgIHBhZGRpbmc6IDAuNDVlbSAwLjQ1ZW0gMCAwLjQ1ZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xyXG4gIH1cclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYXQtZm9ybS1maWVsZCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCB2YXIoLS1ncmF5LWxvdy1vcGFjaXR5KTtcbiAgcGFkZGluZzogMC40NWVtIDAuNDVlbSAwIDAuNDVlbSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-area',
                templateUrl: './text-area.component.html',
                styleUrls: ['./text-area.component.scss'],
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/validation-feedback/validation-feedback.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/validation-feedback/validation-feedback.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ValidationFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFeedbackComponent", function() { return ValidationFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_config_validation_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/validation.config */ "./src/app/core/config/validation.config.ts");



class ValidationFeedbackComponent {
    constructor() {
        this.config = _core_config_validation_config__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_CONFIG"];
    }
    get errorMessage() {
        for (const property in this.control.errors) {
            if (this.control.errors.hasOwnProperty(property) &&
                property in this.config) {
                return this.config[property];
            }
        }
        return null;
    }
}
ValidationFeedbackComponent.ɵfac = function ValidationFeedbackComponent_Factory(t) { return new (t || ValidationFeedbackComponent)(); };
ValidationFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationFeedbackComponent, selectors: [["app-validation-feedback"]], inputs: { control: "control" }, decls: 2, vars: 1, consts: [[1, "error"]], template: function ValidationFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
    } }, styles: [".error[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -24px;\n  font-size: 17px;\n  color: var(--error);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1mZWVkYmFjay9FOlxcX1Byb2plY3RzXFxBZFJlY2lwZXMvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdmFsaWRhdGlvbi1mZWVkYmFja1xcdmFsaWRhdGlvbi1mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1mZWVkYmFjay92YWxpZGF0aW9uLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy92YWxpZGF0aW9uLWZlZWRiYWNrL3ZhbGlkYXRpb24tZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0yNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xyXG59XHJcbiIsIi5lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validation-feedback',
                template: ` <div class="error">
    {{ errorMessage }}
  </div>`,
                styleUrls: ['./validation-feedback.component.scss'],
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");












const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/snackbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/snackbar.service.ts ***!
  \*****************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open({ message, action = 'X', type }, duration = 1250) {
        this.snackBar.open(message, action, {
            duration,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: type === 'Error' ? 'snackBar-error' : 'snackBar-success',
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/shared/components/input/input.component.ts");
/* harmony import */ var _components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recipe-tile/recipe-tile.component */ "./src/app/shared/components/recipe-tile/recipe-tile.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/text-area/text-area.component */ "./src/app/shared/components/text-area/text-area.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/shared/components/select/select.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/validation-feedback/validation-feedback.component */ "./src/app/shared/components/validation-feedback/validation-feedback.component.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/base-feature-wrapper/base-feature-wrapper.component */ "./src/app/shared/components/base-feature-wrapper/base-feature-wrapper.component.ts");
/* harmony import */ var _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/image-upload/image-upload.component */ "./src/app/shared/components/image-upload/image-upload.component.ts");
/* harmony import */ var _components_adblock_notification_dialog_adblock_notification_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/adblock-notification-dialog/adblock-notification-dialog.component */ "./src/app/shared/components/adblock-notification-dialog/adblock-notification-dialog.component.ts");



















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__["SnackBarService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"],
        _components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_6__["RecipeTileComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__["TextAreaComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"],
        _components_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_12__["ValidationFeedbackComponent"],
        _components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["BaseFeatureWrapperComponent"],
        _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__["ImageUploadComponent"],
        _components_adblock_notification_dialog_adblock_notification_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AdblockNotificationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__["TextAreaComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"],
        _components_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_12__["ValidationFeedbackComponent"],
        _components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_6__["RecipeTileComponent"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
        _components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["BaseFeatureWrapperComponent"],
        _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__["ImageUploadComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                ],
                declarations: [
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                    _components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"],
                    _components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_6__["RecipeTileComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__["TextAreaComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                    _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"],
                    _components_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_12__["ValidationFeedbackComponent"],
                    _components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["BaseFeatureWrapperComponent"],
                    _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__["ImageUploadComponent"],
                    _components_adblock_notification_dialog_adblock_notification_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AdblockNotificationDialogComponent"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                    _components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__["TextAreaComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                    _components_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"],
                    _components_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_12__["ValidationFeedbackComponent"],
                    _components_recipe_tile_recipe_tile_component__WEBPACK_IMPORTED_MODULE_6__["RecipeTileComponent"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                    _components_base_feature_wrapper_base_feature_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["BaseFeatureWrapperComponent"],
                    _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_16__["ImageUploadComponent"],
                ],
                providers: [_services_snackbar_service__WEBPACK_IMPORTED_MODULE_13__["SnackBarService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    API_URL: 'http://localhost:3000/api/',
    ad_client: 'ca-pub-3777768585143098',
    ad_slot: 3122538287,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\_Projects\AdRecipes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map