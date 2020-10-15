(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../components/components.module.ts":
/*!*****************************************************************!*\
  !*** C:/dev/cssberries-mockups/components/components.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../@angular/common/__ivy_ngcc__/fesm2015/common.js");



// import { RouterModule } from '@angular/router';
let ComponentsModule = /*@__PURE__*/ (() => {
    class ComponentsModule {
    }
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return ComponentsModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();


/***/ }),

/***/ "../../mockups/JUYPQETZOJ/component.ts":
/*!*****************************************************************!*\
  !*** C:/dev/cssberries-mockups/mockups/JUYPQETZOJ/component.ts ***!
  \*****************************************************************/
/*! exports provided: JUYPQETZOJ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUYPQETZOJ", function() { return JUYPQETZOJ; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../@angular/common/__ivy_ngcc__/fesm2015/http.js");



let JUYPQETZOJ = /*@__PURE__*/ (() => {
    class JUYPQETZOJ {
        constructor(http) {
            this.http = http;
        }
        // myData: any;
        ngOnInit() {
            // this.http.get('assets/myData.json').subscribe((data) => {
            //     this.myData = data;
            // });
        }
    }
    JUYPQETZOJ.ɵfac = function JUYPQETZOJ_Factory(t) { return new (t || JUYPQETZOJ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    JUYPQETZOJ.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JUYPQETZOJ, selectors: [["ng-component"]], decls: 4, vars: 0, consts: [[1, "rows", "absolute-stretch", "bg--primary"], [1, "rows", "centerize"], [1, "text--5xl"]], template: function JUYPQETZOJ_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I'm a new slide!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return JUYPQETZOJ;
})();


/***/ }),

/***/ "../../tree.json":
/*!*******************************************!*\
  !*** C:/dev/cssberries-mockups/tree.json ***!
  \*******************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"slidePath\":\"../../../../mockups\",\"name\":\"mockups\",\"children\":[{\"slidePath\":\"mockups\",\"name\":\"New folder\",\"id\":\"FMQISUKPTR\",\"state\":\"mockups/New folder\",\"index\":\"\\u0000\",\"children\":[{\"slidePath\":\"../../../../mockups/JUYPQETZOJ\",\"name\":\"JUYPQETZOJ\",\"id\":\"JUYPQETZOJ\",\"state\":\"mockups/New folder/JUYPQETZOJ\",\"index\":\"\\u0004\",\"component\":\"JUYPQETZOJ\"}]}],\"id\":\"IFSFEGVRLT\",\"state\":\"mockups\"}]");

/***/ }),

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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\cssberries-mockups\node_modules\slides-render-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);