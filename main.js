(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"aboutme\">\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n          when an unknown printer took a galley of type and scrambled it to make a type \n          specimen book. It has survived not only five centuries, but also the leap into \n          electronic typesetting, remaining essentially unchanged. It was popularised in \n          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n           and more recently with desktop publishing software like Aldus PageMaker including \n           versions of Lorem Ipsum.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expertise/expertise.component */ "./src/app/expertise/expertise.component.ts");






var routes = [
    { path: "", component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: "experience", component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"] },
    { path: "expertise", component: _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_5__["ExpertiseComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 col-12\">\n        <div class=\"leftside\">\n          <img\n            src=\"../assets/boy-casual-eyewear-1315741.jpg\"\n            width=\"200px\"\n            height=\"200px\"\n          />\n          <h2>{{ name }}</h2>\n          <h4>Software Developer</h4>\n          <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry's standard dummy text\n            ever since the 1500s, when an unknown printer took a galley of type\n            and scrambled it to make a type specimen book.\n          </p>\n          <div class=\"social\">\n            <i class=\"fab fa-facebook-f\"></i>\n            <i class=\"fab fa-instagram\"></i>\n            <i class=\"fab fa-linkedin-in\"></i>\n            <i class=\"fab fa-github\"></i>\n          </div>\n          <button mat-flat-button color=\"primary\">Resume</button>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12 col-12\">\n        <div class=\"rightside\">\n          <ul>\n            <li><a routerLink=\"/\">About Me</a></li>\n            <li><a routerLink=\"/experience\">Experience</a></li>\n            <li><a routerLink=\"/expertise\">Expertise</a></li>\n            <li><a routerLink=\"/expertise\">Work</a></li>\n          </ul>\n        </div>\n        <div class=\"main_data\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = "VIBHAV RAJ";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _mat_matmodule_matmodule_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat/matmodule/matmodule.module */ "./src/app/mat/matmodule/matmodule.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expertise/expertise.component */ "./src/app/expertise/expertise.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
                _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_9__["ExpertiseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _mat_matmodule_matmodule_module__WEBPACK_IMPORTED_MODULE_6__["MatmoduleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  experience works!\n</p>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/expertise/expertise.component.css":
/*!***************************************************!*\
  !*** ./src/app/expertise/expertise.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVydGlzZS9leHBlcnRpc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/expertise/expertise.component.html":
/*!****************************************************!*\
  !*** ./src/app/expertise/expertise.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/html.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"html\"\n        /><br />\n        <span>Html/Html5</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/css.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"css\"\n        /><br />\n        <span>Css/Css3</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/javascript.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"javascript\"\n        /><br />\n        <span>Javascript Es5/6</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/jquery.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"jquery\"\n        /><br />\n        <span>Jquery</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/bootstrap.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"bootstrap\"\n        /><br />\n        <span>Bootstrap</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/typescript.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"typescript\"\n        /><br />\n        <span>TypeScript</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/corel.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"coreldraw\"\n        /><br />\n        <span>Corel Draw</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/photoshop.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"photoshop\"\n        /><br />\n        <span>Photoshop</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/illustrator.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"illustrator\"\n        /><br />\n        <span>Illustrator</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/github.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"github\"\n        /><br />\n        <span>Github</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/angular.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"angular\"\n        /><br />\n        <span>Angular</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/rxjs.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"rxjs\"\n        /><br />\n        <span>Rxjs</span>\n      </div>\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-6\">\n      <div class=\"expert\">\n        <img\n          src=\"../../assets/img/ngzorro.jpg\"\n          width=\"100px\"\n          height=\"100px\"\n          alt=\"ngzorro\"\n        /><br />\n        <span>NgZorro</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/expertise/expertise.component.ts":
/*!**************************************************!*\
  !*** ./src/app/expertise/expertise.component.ts ***!
  \**************************************************/
/*! exports provided: ExpertiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertiseComponent", function() { return ExpertiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpertiseComponent = /** @class */ (function () {
    function ExpertiseComponent() {
    }
    ExpertiseComponent.prototype.ngOnInit = function () {
    };
    ExpertiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expertise',
            template: __webpack_require__(/*! ./expertise.component.html */ "./src/app/expertise/expertise.component.html"),
            styles: [__webpack_require__(/*! ./expertise.component.css */ "./src/app/expertise/expertise.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExpertiseComponent);
    return ExpertiseComponent;
}());



/***/ }),

/***/ "./src/app/mat/matmodule/matmodule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mat/matmodule/matmodule.module.ts ***!
  \***************************************************/
/*! exports provided: MatmoduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatmoduleModule", function() { return MatmoduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var MatmoduleModule = /** @class */ (function () {
    function MatmoduleModule() {
    }
    MatmoduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]
            ]
        })
    ], MatmoduleModule);
    return MatmoduleModule;
}());



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
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\angular projectss\My Own\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map