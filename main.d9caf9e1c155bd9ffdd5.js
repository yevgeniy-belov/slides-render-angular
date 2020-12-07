(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../persistency/tree.json":
/*!********************************************************!*\
  !*** C:/dev/slides-bare-angular/persistency/tree.json ***!
  \********************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"slidePath\":\"../render/mockups\",\"name\":\"mockups\",\"id\":\"XUMZMKMMAY\",\"state\":\"mockups\",\"children\":[{\"slidePath\":\"../render/mockups/CMEBOCIEEO\",\"name\":\"CMEBOCIEEO\",\"id\":\"CMEBOCIEEO\",\"state\":\"mockups/CMEBOCIEEO\",\"index\":\"\\u0004\",\"component\":\"CMEBOCIEEO\"},{\"slidePath\":\"../render/mockups/AAQPKTJLMZ\",\"name\":\"AAQPKTJLMZ\",\"id\":\"AAQPKTJLMZ\",\"state\":\"mockups/AAQPKTJLMZ\",\"index\":\"\\u0004\",\"component\":\"AAQPKTJLMZ\"},{\"slidePath\":\"../render/mockups/WTRTXCEBTD\",\"name\":\"WTRTXCEBTD\",\"id\":\"WTRTXCEBTD\",\"state\":\"mockups/WTRTXCEBTD\",\"index\":\"\\u0004\",\"component\":\"WTRTXCEBTD\"},{\"slidePath\":\"../render/mockups/CSPVSRVFFA\",\"name\":\"CSPVSRVFFA\",\"id\":\"CSPVSRVFFA\",\"state\":\"mockups/CSPVSRVFFA\",\"index\":\"\\u0004\",\"component\":\"CSPVSRVFFA\"},{\"slidePath\":\"../render/mockups/JKHGNQQNFB\",\"name\":\"JKHGNQQNFB\",\"id\":\"JKHGNQQNFB\",\"state\":\"mockups/JKHGNQQNFB\",\"index\":\"\\u0004\",\"component\":\"JKHGNQQNFB\",\"children\":[]},{\"slidePath\":\"../render/mockups/ZEKIXAMPRV\",\"name\":\"ZEKIXAMPRV\",\"id\":\"ZEKIXAMPRV\",\"state\":\"mockups/ZEKIXAMPRV\",\"index\":\"\\u0004\",\"component\":\"ZEKIXAMPRV\"},{\"slidePath\":\"../render/mockups/IUFGIYBLOO\",\"name\":\"IUFGIYBLOO\",\"id\":\"IUFGIYBLOO\",\"state\":\"mockups/IUFGIYBLOO\",\"index\":\"\\u0004\",\"component\":\"IUFGIYBLOO\"},{\"slidePath\":\"../render/mockups/KCDCPBREEZ\",\"name\":\"KCDCPBREEZ\",\"id\":\"KCDCPBREEZ\",\"state\":\"mockups/KCDCPBREEZ\",\"index\":\"\\u0004\",\"component\":\"KCDCPBREEZ\"},{\"slidePath\":\"../render/mockups/CATDKXSVBD\",\"name\":\"CATDKXSVBD\",\"id\":\"CATDKXSVBD\",\"state\":\"mockups/CATDKXSVBD\",\"index\":\"\\u0004\",\"component\":\"CATDKXSVBD\"}]}]");

/***/ }),

/***/ "../../components/components.module.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/components/components.module.ts ***!
  \*************************************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ComponentsModule = /*@__PURE__*/ (() => {
    class ComponentsModule {
    }
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]] });
    return ComponentsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
})();


/***/ }),

/***/ "../../mockups/AAQPKTJLMZ/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/AAQPKTJLMZ/component.ts ***!
  \*************************************************************************/
/*! exports provided: AAQPKTJLMZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AAQPKTJLMZ", function() { return AAQPKTJLMZ; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let AAQPKTJLMZ = /*@__PURE__*/ (() => {
    class AAQPKTJLMZ {
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
    AAQPKTJLMZ.ɵfac = function AAQPKTJLMZ_Factory(t) { return new (t || AAQPKTJLMZ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AAQPKTJLMZ.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AAQPKTJLMZ, selectors: [["AAQPKTJLMZ"]], decls: 4, vars: 0, consts: [[1, "rows", "absolute-stretch"], [1, "rows", "centerize"], [1, "text-5xl", "font-bold"]], template: function AAQPKTJLMZ_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero sed, numquam magni totam culpa sint dignissimos incidunt quidem accusamus ratione, facere iusto dolorem obcaecati at? Impedit ipsa reiciendis illo harum consequatur? Ea accusantium odio ad. Exercitationem est consectetur delectus quod explicabo, accusantium corrupti. Soluta corporis, est totam accusantium similique officia, culpa voluptatem quibusdam reiciendis saepe laborum eum sequi quia adipisci impedit quod quasi, obcaecati optio sint excepturi? Veritatis eaque debitis quam nobis nulla earum, nihil quo explicabo autem molestiae dolores delectus? Laborum quod officiis incidunt vitae excepturi consequuntur accusantium alias dolorum deserunt totam, ratione eius iste nam sit sint ut numquam exercitationem, voluptate quae quo molestiae laboriosam. Eaque commodi, itaque, voluptatum magnam minus aliquam vero, temporibus iste sapiente laboriosam veniam possimus ipsam illo voluptate voluptatibus consequatur! Placeat perferendis nesciunt dolores porro quo adipisci harum explicabo ipsam eum, cum debitis iusto enim, ratione at tenetur exercitationem, dignissimos laudantium assumenda repellendus fugiat! Quia labore quidem obcaecati veritatis error consequuntur rem, molestias, impedit debitis ipsam corrupti, ad animi atque ipsum quo est fuga illo laborum recusandae esse? Officiis harum obcaecati laboriosam voluptatibus sed, praesentium sapiente ullam rem aut explicabo illum autem voluptate quasi cum veniam maxime ex odio nesciunt quos dolor alias, eius accusantium corrupti eaque! Deserunt molestiae quaerat voluptatibus optio rem dolorum accusantium excepturi, facilis placeat modi, quod inventore culpa ad veniam quisquam nisi. Ea dicta velit est, officiis, eius officia accusantium deleniti odit id ad molestiae fuga similique autem, eligendi ab perferendis ex? Temporibus quos magnam vitae odit veniam provident libero animi reiciendis, voluptas voluptates sunt minus fugiat est consectetur, aut corporis accusantium beatae. Sint dignissimos enim et nihil optio voluptatibus reprehenderit cum quo eius error totam, eos rem fugit nisi eveniet accusamus nobis doloribus. Recusandae nihil esse quibusdam deserunt harum eum exercitationem repellendus laudantium! At dicta ea cum non laborum, nisi sequi praesentium, asperiores nihil assumenda aut deleniti temporibus odit distinctio accusantium magnam vero commodi quisquam? Animi quaerat maxime alias voluptates accusamus. Commodi laboriosam id iusto aperiam nisi autem nemo voluptatibus aliquam eius saepe optio repellendus alias recusandae laudantium architecto, sint, ut veniam quibusdam similique hic quae sed vero! Reprehenderit architecto omnis officia ab totam non, dolores dolore quae maiores? Nisi non quisquam molestias rem illum corporis quod quibusdam totam temporibus ipsam dolorem fuga voluptatem adipisci ducimus libero magni sint culpa officia, accusamus tenetur vel! Quidem beatae dolore ad molestias libero et dolor, assumenda ut atque aliquam commodi ex unde voluptatibus dignissimos incidunt officia nihil? Cum, eaque odit excepturi adipisci impedit delectus sapiente sit dolore tempore optio accusantium doloremque alias vero, corrupti architecto velit ratione magnam dolorem eos maiores, nam deserunt eligendi consequatur. Atque repellendus quae magnam porro? Inventore nesciunt dicta modi delectus atque porro fuga dolores qui, maxime, commodi quae praesentium nulla! Debitis fugiat consequatur facilis, vero eius sapiente voluptatum officiis? Animi exercitationem deserunt alias temporibus incidunt cumque et at distinctio neque labore adipisci illum vitae, maxime eius, in nemo voluptatum illo placeat veritatis aspernatur quas. Eius velit impedit suscipit ut esse architecto soluta tempore voluptatibus. Possimus, quia?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return AAQPKTJLMZ;
})();


/***/ }),

/***/ "../../mockups/CATDKXSVBD/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/CATDKXSVBD/component.ts ***!
  \*************************************************************************/
/*! exports provided: CATDKXSVBD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATDKXSVBD", function() { return CATDKXSVBD; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let CATDKXSVBD = /*@__PURE__*/ (() => {
    class CATDKXSVBD {
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
    CATDKXSVBD.ɵfac = function CATDKXSVBD_Factory(t) { return new (t || CATDKXSVBD)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    CATDKXSVBD.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CATDKXSVBD, selectors: [["CATDKXSVBD"]], decls: 4, vars: 0, consts: [[1, "rows", "absolute-stretch"], [1, "rows", "centerize"], [1, "text--5xl"]], template: function CATDKXSVBD_Template(rf, ctx) {
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
    return CATDKXSVBD;
})();


/***/ }),

/***/ "../../mockups/CMEBOCIEEO/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/CMEBOCIEEO/component.ts ***!
  \*************************************************************************/
/*! exports provided: CMEBOCIEEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMEBOCIEEO", function() { return CMEBOCIEEO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CMEBOCIEEO = /*@__PURE__*/ (() => {
    class CMEBOCIEEO {
    }
    CMEBOCIEEO.ɵfac = function CMEBOCIEEO_Factory(t) { return new (t || CMEBOCIEEO)(); };
    CMEBOCIEEO.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CMEBOCIEEO, selectors: [["CMEBOCIEEO"]], decls: 8, vars: 0, consts: [[1, "absolute", "top-0", "right-0", "bottom-0", "left-0", "flex", "content-center", "justify-center", "items-center", "flex-col"], [1, "text-center", "text-5xl", "font-bold", "mb-12"], ["width", "256px", "height", "272px", "viewBox", "0 0 256 272", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "preserveAspectRatio", "xMidYMid", 2, "align-self", "center"], ["d", "M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z", "fill", "#E23237"], ["d", "M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z", "fill", "#B52E31"], ["d", "M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z", "fill", "#FFFFFF"]], template: function CMEBOCIEEO_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "slides-bare-angular");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return CMEBOCIEEO;
})();


/***/ }),

/***/ "../../mockups/CSPVSRVFFA/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/CSPVSRVFFA/component.ts ***!
  \*************************************************************************/
/*! exports provided: CSPVSRVFFA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSPVSRVFFA", function() { return CSPVSRVFFA; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let CSPVSRVFFA = /*@__PURE__*/ (() => {
    class CSPVSRVFFA {
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
    CSPVSRVFFA.ɵfac = function CSPVSRVFFA_Factory(t) { return new (t || CSPVSRVFFA)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    CSPVSRVFFA.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CSPVSRVFFA, selectors: [["CSPVSRVFFA"]], decls: 75, vars: 0, consts: [[1, "text-indigo-100", "bg-indigo-700", "dark:bg-gray-800", "dark:text-gray-200"], [1, "flex", "items-center", "justify-between", "h-16", "max-w-6xl", "px-6", "mx-auto"], ["href", "https://github.com/estevanmaito/tailwindcss-multi-theme", "target", "_blank", 1, "font-bold", "tracking-tight", "uppercase"], ["role", "navigation", 1, "flex", "items-center", "space-x-8", "font-semibold"], ["href", "https://github.com/estevanmaito/tailwindcss-multi-theme", "target", "_blank"], ["href", "https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples", "target", "_blank"], ["href", "https://github.com/estevanmaito/tailwindcss-multi-theme/blob/master/README.md#-install", "target", "_blank"], ["aria-label", "Toggle theme", "id", "btn-theme", 1, "p-2", "rounded", "focus:outline-none"], ["aria-label", "Apply dark theme", "role", "image", "fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5"], ["d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"], ["href", "#", 1, "px-6", "py-2", "text-orange-100", "bg-orange-600", "rounded-full"], [1, ""], [1, "flex", "flex-col", "max-w-6xl", "px-6", "py-16", "mx-auto", "md:flex-row"], [1, "flex", "flex-col", "justify-center", "pr-4", "md:w-1/2"], ["href", "#", 1, "inline-flex", "items-center", "pl-1", "pr-2", "mb-3", "bg-indigo-100", "rounded-full", "dark:bg-gray-800"], [1, "px-2", "py-px", "mr-2", "text-xs", "font-bold", "text-indigo-100", "uppercase", "bg-indigo-700", "rounded-full"], [1, "text-sm", "leading-loose", "text-indigo-800", "dark:text-gray-300"], [1, "text-5xl", "font-extrabold", "leading-none", "tracking-tight", "text-gray-800", "lg:text-6xl", "dark:text-gray-400"], [1, "mt-6", "mb-12", "text-lg", "text-gray-700", "dark:text-gray-400"], [1, "px-1", "text-purple-500", "bg-gray-100", "rounded", "dark:text-purple-200", "dark:bg-gray-800"], ["href", "#", 1, "px-6", "py-2", "font-semibold", "text-orange-100", "bg-orange-600", "rounded-full"], [1, "md:w-1/2"], ["src", "https://tailwindcss-multi-theme.now.sh/wfh_1.svg", "alt", "Woman working from home", 1, "w-full"], [1, "flex", "flex-col", "max-w-6xl", "px-6", "mx-auto", "mb-16", "md:flex-row"], [1, "grid", "gap-8", "md:grid-cols-3"], [1, "flex", "items-center", "p-4", "space-x-4", "text-gray-700", "rounded-lg", "shadow-xl", "dark:bg-gray-800", "dark:text-gray-300"], [1, "p-2", "text-indigo-700", "bg-indigo-100", "rounded-full", "dark:text-indigo-100", "dark:bg-indigo-700"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-8", "h-8"], ["fill-rule", "evenodd", "d", "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", "clip-rule", "evenodd"], [1, "text-2xl", "font-semibold"], [1, "flex", "theme-dark"], [1, "flex", "items-center", "w-full", "p-4", "space-x-4", "text-gray-700", "rounded-lg", "shadow-xl", "dark:bg-gray-800", "dark:text-gray-300"], ["fill-rule", "evenodd", "d", "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["href", "https://github.com/estevanmaito/tailwindcss-multi-theme/tree/master/examples/simple", 1, "text-blue-600", "dark:text-blue-300"]], template: function CSPVSRVFFA_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "tailwindcss multi theme");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Github");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Example");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Docs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Log in");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "header", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Visit our new products page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "It was never so easy to create themes.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "You can change this theme even by inspecting the code and applying the class ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "theme-dark");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " around");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Read more");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "main");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Start where you are");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "No new syntax or configuration. Start with one property.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "This is dark!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "You can apply themes to every element, inside themes!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "See the code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "The code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " for this example is available for you to copy.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return CSPVSRVFFA;
})();


/***/ }),

/***/ "../../mockups/IUFGIYBLOO/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/IUFGIYBLOO/component.ts ***!
  \*************************************************************************/
/*! exports provided: IUFGIYBLOO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUFGIYBLOO", function() { return IUFGIYBLOO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let IUFGIYBLOO = /*@__PURE__*/ (() => {
    class IUFGIYBLOO {
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
    IUFGIYBLOO.ɵfac = function IUFGIYBLOO_Factory(t) { return new (t || IUFGIYBLOO)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    IUFGIYBLOO.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IUFGIYBLOO, selectors: [["IUFGIYBLOO"]], decls: 174, vars: 0, consts: [[1, "-my-2", "py-2", "overflow-x-auto", "sm:-mx-6", "sm:px-6", "lg:-mx-8", "pr-10", "lg:px-8"], [1, "align-middle", "rounded-tl-lg", "rounded-tr-lg", "inline-block", "w-full", "py-4", "overflow-hidden", "bg-white", "shadow-lg", "px-12"], [1, "flex", "justify-between"], [1, "inline-flex", "border", "rounded", "w-7/12", "px-2", "lg:px-6", "h-12", "bg-transparent"], [1, "flex", "flex-wrap", "items-stretch", "w-full", "h-full", "mb-6", "relative"], [1, "flex"], [1, "flex", "items-center", "leading-normal", "bg-transparent", "rounded", "rounded-r-none", "border", "border-r-0", "border-none", "lg:px-3", "py-2", "whitespace-no-wrap", "text-grey-dark", "text-sm"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "lg:w-auto"], ["d", "M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z", "stroke", "#455A64", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.9993 16.9993L13.1328 13.1328", "stroke", "#455A64", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", "placeholder", "Search", 1, "flex-shrink", "flex-grow", "flex-auto", "leading-normal", "tracking-wide", "w-px", "flex-1", "border", "border-none", "border-l-0", "rounded", "rounded-l-none", "px-3", "relative", "focus:outline-none", "text-xxs", "lg:text-xs", "lg:text-base", "text-gray-500", "font-thin"], [1, "align-middle", "inline-block", "min-w-full", "shadow", "overflow-hidden", "bg-white", "shadow-dashboard", "px-8", "pt-3", "rounded-bl-lg", "rounded-br-lg"], [1, "min-w-full"], [1, "px-6", "py-3", "border-b-2", "border-gray-300", "text-left", "leading-4", "text-blue-500", "tracking-wider"], [1, "px-6", "py-3", "border-b-2", "border-gray-300", "text-left", "text-sm", "leading-4", "text-blue-500", "tracking-wider"], [1, "px-6", "py-3", "border-b-2", "border-gray-300"], [1, "bg-white"], [1, "px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-500"], [1, "flex", "items-center"], [1, "text-sm", "leading-5", "text-gray-800"], [1, "text-sm", "leading-5", "text-blue-900"], [1, "px-6", "py-4", "whitespace-no-wrap", "border-b", "text-blue-900", "border-gray-500", "text-sm", "leading-5"], [1, "relative", "inline-block", "px-3", "py-1", "font-semibold", "text-green-900", "leading-tight"], ["aria-hidden", "", 1, "absolute", "inset-0", "bg-green-200", "opacity-50", "rounded-full"], [1, "relative", "text-xs"], [1, "px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-500", "text-blue-900", "text-sm", "leading-5"], [1, "px-6", "py-4", "whitespace-no-wrap", "text-right", "border-b", "border-gray-500", "text-sm", "leading-5"], [1, "px-5", "py-2", "border-blue-500", "border", "text-blue-500", "rounded", "transition", "duration-300", "hover:bg-blue-700", "hover:text-white", "focus:outline-none"], [1, "relative", "inline-block", "px-3", "py-1", "font-semibold", "text-red-900", "leading-tight"], ["aria-hidden", "", 1, "absolute", "inset-0", "bg-red-200", "opacity-50", "rounded-full"], [1, "relative", "inline-block", "px-3", "py-1", "font-semibold", "text-orange-900", "leading-tight"], ["aria-hidden", "", 1, "absolute", "inset-0", "bg-orange-200", "opacity-50", "rounded-full"], [1, "sm:flex-1", "sm:flex", "sm:items-center", "sm:justify-between", "mt-4", "work-sans"], [1, "text-sm", "leading-5", "text-blue-700"], [1, "font-medium"], [1, "relative", "z-0", "inline-flex", "shadow-sm"], ["href", "#", "aria-label", "Previous", "v-on:click.prevent", "changePage(pagination.current_page - 1)", 1, "relative", "inline-flex", "items-center", "px-2", "py-2", "rounded-l-md", "border", "border-gray-300", "bg-white", "text-sm", "leading-5", "font-medium", "text-gray-500", "hover:text-gray-400", "focus:z-10", "focus:outline-none", "focus:border-blue-300", "focus:shadow-outline-blue", "active:bg-gray-100", "active:text-gray-500", "transition", "ease-in-out", "duration-150"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["href", "#", 1, "-ml-px", "relative", "inline-flex", "items-center", "px-4", "py-2", "border", "border-gray-300", "bg-white", "text-sm", "leading-5", "font-medium", "text-blue-700", "focus:z-10", "focus:outline-none", "focus:border-blue-300", "focus:shadow-outline-blue", "active:bg-tertiary", "active:text-gray-700", "transition", "ease-in-out", "duration-150", "hover:bg-tertiary"], ["href", "#", 1, "-ml-px", "relative", "inline-flex", "items-center", "px-4", "py-2", "border", "border-gray-300", "bg-white", "text-sm", "leading-5", "font-medium", "text-blue-600", "focus:z-10", "focus:outline-none", "focus:border-blue-300", "focus:shadow-outline-blue", "active:bg-tertiary", "active:text-gray-700", "transition", "ease-in-out", "duration-150", "hover:bg-tertiary"], ["v-if", "pagination.current_page < pagination.last_page"], ["href", "#", "aria-label", "Next", 1, "-ml-px", "relative", "inline-flex", "items-center", "px-2", "py-2", "rounded-r-md", "border", "border-gray-300", "bg-white", "text-sm", "leading-5", "font-medium", "text-gray-500", "hover:text-gray-400", "focus:z-10", "focus:outline-none", "focus:border-blue-300", "focus:shadow-outline-blue", "active:bg-gray-100", "active:text-gray-500", "transition", "ease-in-out", "duration-150"], ["fill-rule", "evenodd", "d", "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule", "evenodd"]], template: function IUFGIYBLOO_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ID");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fullname");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Created At");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "#1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Damilare Anjorin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "damilareanjorin1@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+2348106420637");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "September 12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "View Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "#1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Damilare Anjorin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "damilareanjorin1@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "+2348106420637");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "September 12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "View Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "#1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Damilare Anjorin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "damilareanjorin1@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "+2348106420637");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "not active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "September 12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "View Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "#1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Damilare Anjorin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "damilareanjorin1@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "+2348106420637");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "span", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "September 12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "View Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "#1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Damilare Anjorin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "damilareanjorin1@gmail.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "+2348106420637");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "span", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "disabled");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "September 12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "View Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Showing ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " to ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "200");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " of ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "2000");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " results ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nav", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "svg", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " 1 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " 2 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " 3 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "svg", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return IUFGIYBLOO;
})();


/***/ }),

/***/ "../../mockups/JKHGNQQNFB/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/JKHGNQQNFB/component.ts ***!
  \*************************************************************************/
/*! exports provided: JKHGNQQNFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JKHGNQQNFB", function() { return JKHGNQQNFB; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let JKHGNQQNFB = /*@__PURE__*/ (() => {
    class JKHGNQQNFB {
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
    JKHGNQQNFB.ɵfac = function JKHGNQQNFB_Factory(t) { return new (t || JKHGNQQNFB)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    JKHGNQQNFB.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JKHGNQQNFB, selectors: [["JKHGNQQNFB"]], decls: 337, vars: 0, consts: [["x-data", "{ sidebarOpen: false }", 1, "flex", "h-screen", "bg-gray-200"], [1, "fixed", "z-20", "inset-0", "bg-black", "opacity-50", "transition-opacity", "lg:hidden"], [1, "fixed", "z-30", "inset-y-0", "left-0", "w-64", "transition", "duration-300", "transform", "bg-gray-900", "overflow-y-auto", "lg:translate-x-0", "lg:static", "lg:inset-0"], [1, "flex", "items-center", "justify-center", "mt-8"], [1, "flex", "items-center"], ["viewBox", "0 0 512 512", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-12", "w-12"], ["d", "M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z", "fill", "#4C51BF", "stroke", "#4C51BF", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z", "fill", "white"], [1, "text-white", "text-2xl", "mx-2", "font-semibold"], [1, "mt-10"], ["href", "/", 1, "flex", "items-center", "mt-4", "py-2", "px-6", "bg-gray-700", "bg-opacity-25", "text-gray-100"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"], [1, "mx-3"], ["href", "/ui-elements", 1, "flex", "items-center", "mt-4", "py-2", "px-6", "text-gray-500", "hover:bg-gray-700", "hover:bg-opacity-25", "hover:text-gray-100"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"], ["href", "/tables", 1, "flex", "items-center", "mt-4", "py-2", "px-6", "text-gray-500", "hover:bg-gray-700", "hover:bg-opacity-25", "hover:text-gray-100"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], ["href", "/forms", 1, "flex", "items-center", "mt-4", "py-2", "px-6", "text-gray-500", "hover:bg-gray-700", "hover:bg-opacity-25", "hover:text-gray-100"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "flex-1", "flex", "flex-col", "overflow-hidden"], [1, "flex", "justify-between", "items-center", "py-4", "px-6", "bg-white", "border-b-4", "border-indigo-600"], [1, "text-gray-500", "focus:outline-none", "lg:hidden"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-6", "w-6"], ["d", "M4 6H20M4 12H20M4 18H11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "relative", "mx-4", "lg:mx-0"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center"], ["viewBox", "0 0 24 24", "fill", "none", 1, "h-5", "w-5", "text-gray-500"], ["d", "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", "placeholder", "Search", 1, "form-input", "w-32", "sm:w-64", "rounded-md", "pl-10", "pr-4", "focus:border-indigo-600"], ["x-data", "{ notificationOpen: false }", 1, "relative"], [1, "flex", "mx-4", "text-gray-600", "focus:outline-none"], ["d", "M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x-show", "notificationOpen", 1, "fixed", "inset-0", "h-full", "w-full", "z-10", 2, "display", "none"], ["x-show", "notificationOpen", 1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "rounded-lg", "shadow-xl", "overflow-hidden", "z-10", 2, "width", "20rem", "display", "none"], ["href", "#", 1, "flex", "items-center", "px-4", "py-3", "text-gray-600", "hover:text-white", "hover:bg-indigo-600", "-mx-2"], ["src", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "alt", "avatar", 1, "h-8", "w-8", "rounded-full", "object-cover", "mx-1"], [1, "text-sm", "mx-2"], ["href", "#", 1, "font-bold"], ["href", "#", 1, "font-bold", "text-indigo-400"], ["src", "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", "alt", "avatar", 1, "h-8", "w-8", "rounded-full", "object-cover", "mx-1"], ["src", "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "alt", "avatar", 1, "h-8", "w-8", "rounded-full", "object-cover", "mx-1"], ["src", "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80", "alt", "avatar", 1, "h-8", "w-8", "rounded-full", "object-cover", "mx-1"], ["x-data", "{ dropdownOpen: false }", 1, "relative"], [1, "relative", "block", "h-8", "w-8", "rounded-full", "overflow-hidden", "shadow", "focus:outline-none"], ["src", "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80", "alt", "Your avatar", 1, "h-full", "w-full", "object-cover"], ["x-show", "dropdownOpen", 1, "fixed", "inset-0", "h-full", "w-full", "z-10", 2, "display", "none"], ["x-show", "dropdownOpen", 1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "rounded-md", "overflow-hidden", "shadow-xl", "z-10", 2, "display", "none"], ["href", "#", 1, "block", "px-4", "py-2", "text-sm", "text-gray-700", "hover:bg-indigo-600", "hover:text-white"], ["href", "/login", 1, "block", "px-4", "py-2", "text-sm", "text-gray-700", "hover:bg-indigo-600", "hover:text-white"], [1, "flex-1", "overflow-x-hidden", "overflow-y-auto", "bg-gray-200"], [1, "container", "mx-auto", "px-6", "py-8"], [1, "text-gray-700", "text-3xl", "font-medium"], [1, "mt-4"], [1, "flex", "flex-wrap", "-mx-6"], [1, "w-full", "px-6", "sm:w-1/2", "xl:w-1/3"], [1, "flex", "items-center", "px-5", "py-6", "shadow-sm", "rounded-md", "bg-white"], [1, "p-3", "rounded-full", "bg-indigo-600", "bg-opacity-75"], ["viewBox", "0 0 28 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-8", "w-8", "text-white"], ["d", "M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z", "fill", "currentColor"], ["d", "M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z", "fill", "currentColor"], ["d", "M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z", "fill", "currentColor"], ["d", "M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z", "fill", "currentColor"], ["d", "M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z", "fill", "currentColor"], ["d", "M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z", "fill", "currentColor"], [1, "mx-5"], [1, "text-2xl", "font-semibold", "text-gray-700"], [1, "text-gray-500"], [1, "w-full", "mt-6", "px-6", "sm:w-1/2", "xl:w-1/3", "sm:mt-0"], [1, "p-3", "rounded-full", "bg-orange-600", "bg-opacity-75"], ["viewBox", "0 0 28 28", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-8", "w-8", "text-white"], ["d", "M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z", "fill", "currentColor"], ["d", "M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z", "fill", "currentColor"], ["d", "M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z", "fill", "currentColor"], [1, "w-full", "mt-6", "px-6", "sm:w-1/2", "xl:w-1/3", "xl:mt-0"], [1, "p-3", "rounded-full", "bg-pink-600", "bg-opacity-75"], ["d", "M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z", "stroke", "currentColor", "stroke-width", "2"], [1, "mt-8"], [1, "flex", "flex-col", "mt-8"], [1, "-my-2", "py-2", "overflow-x-auto", "sm:-mx-6", "sm:px-6", "lg:-mx-8", "lg:px-8"], [1, "align-middle", "inline-block", "min-w-full", "shadow", "overflow-hidden", "sm:rounded-lg", "border-b", "border-gray-200"], [1, "min-w-full"], [1, "px-6", "py-3", "border-b", "border-gray-200", "bg-gray-50", "text-left", "text-xs", "leading-4", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "px-6", "py-3", "border-b", "border-gray-200", "bg-gray-50"], [1, "bg-white"], [1, "px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-200"], [1, "flex-shrink-0", "h-10", "w-10"], ["src", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "alt", "", 1, "h-10", "w-10", "rounded-full"], [1, "ml-4"], [1, "text-sm", "leading-5", "font-medium", "text-gray-900"], [1, "text-sm", "leading-5", "text-gray-500"], [1, "text-sm", "leading-5", "text-gray-900"], [1, "px-2", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", "bg-green-100", "text-green-800"], [1, "px-6", "py-4", "whitespace-no-wrap", "border-b", "border-gray-200", "text-sm", "leading-5", "text-gray-500"], [1, "px-6", "py-4", "whitespace-no-wrap", "text-right", "border-b", "border-gray-200", "text-sm", "leading-5", "font-medium"], ["href", "#", 1, "text-indigo-600", "hover:text-indigo-900"]], template: function JKHGNQQNFB_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "UI Elements");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tables");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Forms");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "header", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sara Salah");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " replied on the ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Upload Image");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " artical . 2m ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Slick Net");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " start following you . 45m ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Jane Doe");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Like Your reply on ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Test with TDD");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " artical . 1h ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Abigail Bennett");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " start following you . 3h ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Profile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Products");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Logout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "main", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "svg", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "8,282");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "New Users");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "svg", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "200,521");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Total Orders");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "215,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Available Products");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "table", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Role");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "th", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tbody", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "John Doe ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "john@example.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Software Engineer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Web dev");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " Owner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return JKHGNQQNFB;
})();


/***/ }),

/***/ "../../mockups/KCDCPBREEZ/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/KCDCPBREEZ/component.ts ***!
  \*************************************************************************/
/*! exports provided: KCDCPBREEZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KCDCPBREEZ", function() { return KCDCPBREEZ; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let KCDCPBREEZ = /*@__PURE__*/ (() => {
    class KCDCPBREEZ {
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
    KCDCPBREEZ.ɵfac = function KCDCPBREEZ_Factory(t) { return new (t || KCDCPBREEZ)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    KCDCPBREEZ.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KCDCPBREEZ, selectors: [["KCDCPBREEZ"]], decls: 206, vars: 0, consts: [[1, "container", "px-4", "mx-auto"], [1, "flex", "flex-wrap", "items-center", "justify-between", "p-4"], [1, "w-auto", "lg:order-2", "lg:w-1/5", "lg:text-center"], ["href", "#", 1, "text-xl", "font-semibold", "text-indigo-600", "font-heading"], [1, "block", "lg:hidden"], [1, "flex", "items-center", "px-3", "py-2", "text-indigo-500", "border", "border-indigo-500", "rounded", "navbar-burger"], ["viewbox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "w-3", "h-3", "fill-current"], ["d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"], [1, "hidden", "w-full", "navbar-menu", "lg:order-1", "lg:block", "lg:w-2/5"], ["href", "#", 1, "block", "mt-4", "mr-10", "text-blue-900", "lg:inline-block", "lg:mt-0", "hover:text-indigo-600"], ["href", "#", 1, "block", "mt-4", "text-blue-900", "lg:inline-block", "lg:mt-0", "hover:text-indigo-600"], [1, "hidden", "w-full", "navbar-menu", "lg:order-3", "lg:block", "lg:w-2/5", "lg:text-right"], [1, "flex", "flex-wrap", "-mx-4", "-mb-4", "md:mb-0"], [1, "w-full", "px-4", "mb-4", "md:w-1/2", "md:mb-0"], [1, "px-4", "py-8"], [1, "flex", "flex-wrap", "-mx-2"], [1, "px-2", "mb-6", "lg:w-2/5", "lg:pr-16", "lg:mb-0"], [1, "text-3xl", "font-semibold"], [1, "px-2", "lg:w-3/5"], [1, "max-w-3xl", "mx-auto"], [1, "flex", "flex-wrap", "-mx-4", "-mb-6"], [1, "px-4", "mb-6", "lg:w-1/3"], ["fill", "none", "stroke", "currentColor", "viewbox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-10", "h-10", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "my-3", "text-xl", "font-semibold", "font-heading"], [1, "leading-relaxed", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"], [1, "px-4", "pt-8", "text-center"], [1, "max-w-2xl", "mx-auto", "mb-8"], [1, "mb-6", "text-4xl", "font-semibold", "leading-tight", "font-heading"], [1, "flex", "flex-wrap", "-mx-8"], [1, "w-1/2", "px-8", "mb-8", "md:w-1/6"], ["src", "placeholders-2-0/logos/realweb.svg", "alt", ""], ["src", "placeholders-2-0/logos/gitscape.svg", "alt", ""], ["src", "placeholders-2-0/logos/k-hole.svg", "alt", ""], ["src", "placeholders-2-0/logos/plucky.svg", "alt", ""], ["src", "placeholders-2-0/logos/1stsight.svg", "alt", ""], ["src", "placeholders-2-0/logos/tholio.svg", "alt", ""], [1, "px-4", "pt-8", "pb-4"], [1, "mb-2", "text-4xl", "font-semibold", "leading-tight", "font-heading"], [1, "max-w-xl", "mb-8", "text-gray-400"], [1, "flex", "flex-wrap", "-mx-4", "text-center"], [1, "w-full", "px-4", "mb-8", "lg:w-1/3"], [1, "h-full", "pb-6", "rounded", "shadow"], ["src", "placeholders-2-0/pictures/female_avatar.svg", "alt", "", 1, "mx-auto", "mb-4"], [1, "px-8"], [1, "mb-1", "text-xl", "font-semibold", "font-heading"], [1, "flex", "justify-center", "py-3", "mx-12", "my-4", "space-x-6", "border-t", "border-b"], ["href", "#"], ["fill", "none", "stroke", "currentColor", "viewbox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"], ["src", "placeholders-2-0/pictures/male_avatar.svg", "alt", "", 1, "mx-auto", "mb-4"], [1, "px-4", "py-12", "text-center"], [1, "w-full", "max-w-2xl", "mx-auto"], [1, "text-sm", "font-semibold"], [1, "mt-2", "mb-6", "text-5xl", "font-semibold", "leading-tight", "font-heading"], [1, "mb-8", "leading-relaxed", "text-gray-400"], ["href", "#", 1, "inline-block", "px-8", "py-4", "mr-6", "font-semibold", "leading-none", "text-white", "bg-indigo-600", "rounded", "shadow", "hover:bg-indigo-700"], ["href", "#", 1, "text-indigo-600", "hover:underline"], [1, "px-4", "py-12"], [1, "flex", "flex-wrap", "-mx-4"], [1, "w-full", "px-4", "mb-8", "lg:w-1/2", "lg:mb-0"], [1, "flex", "flex-col", "h-full", "p-8", "bg-gray-100", "rounded"], [1, "text-3xl", "font-semibold", "font-heading"], [1, "max-w-sm", "mt-auto", "mb-8", "leading-relaxed", "text-gray-400"], ["href", "#", 1, "text-right", "text-indigo-600", "hover:underline"], [1, "px-4", "lg:w-1/2"], [1, "flex", "flex-wrap", "-m-2"], [1, "w-1/2", "p-2"], ["src", "placeholders-2-0/pictures/office.jpg", "alt", "", 1, "rounded", "shadow"], ["src", "placeholders-2-0/pictures/work.jpg", "alt", "", 1, "rounded", "shadow"]], template: function KCDCPBREEZ_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dunder Mifflin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Menu");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Products");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Team");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customers");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "FAQ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "The real business is done on paper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dunder Mifflin is the way to provide your company an extraordinary paper, sold by extraordinary people. Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper. That\u2019s us - people who sell sell limitless paper in the paperless world.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dunder Mifflin is the way to provide your company an extraordinary paper, sold by extraordinary people.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "High durability");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Forget about paper jams with our increased stability product. Ideal for high-quality printing, colour printing and photocopying.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Versatility");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Value-based price");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The best combination of quality and economy comes with Dunder Mifflin paper. The offer includes paper in wide range of density and sizes.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "High durability");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Forget about paper jams with our increased stability product. Ideal for high-quality printing, colour printing and photocopying.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Versatility");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Value-based price");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The best combination of quality and economy comes with Dunder Mifflin paper. The offer includes paper in wide range of density and sizes.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "What do our customers have to say about our services?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "See how paper can change the way you think about business.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "section", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Dunder Mifflin Family");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Because no great company could exist without accountants, sellers, stock workers, and of course - paper.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h3", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Karen Filippelli");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Regional Manager at Utica branch");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Started as a Sales representative at Stamford branch, moved to Scranton.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Darryl Philbin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Marketing Director");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "I started there as an Assistant and finally got a promotion to the Marketing Director.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h3", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Kelly Kapoor");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Customer Service");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "svg", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "I work for Dunder Mifflin for a few years now. I learned a lot.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "section", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "TAGLINE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "No paper plane can be made without paper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper. That\u2019s us - people who sell limitless paper in the paperless world.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Sign up");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Learn more");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "section", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h2", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Dunder Friends, a.k.a Companies Who Work With Us");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "We don\u2019t believe in paperless future - so do our Customers.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "View all Dunder Mifflin customers");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return KCDCPBREEZ;
})();


/***/ }),

/***/ "../../mockups/WTRTXCEBTD/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/WTRTXCEBTD/component.ts ***!
  \*************************************************************************/
/*! exports provided: WTRTXCEBTD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WTRTXCEBTD", function() { return WTRTXCEBTD; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let WTRTXCEBTD = /*@__PURE__*/ (() => {
    class WTRTXCEBTD {
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
    WTRTXCEBTD.ɵfac = function WTRTXCEBTD_Factory(t) { return new (t || WTRTXCEBTD)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    WTRTXCEBTD.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WTRTXCEBTD, selectors: [["WTRTXCEBTD"]], decls: 358, vars: 0, consts: [["id", "header", 1, "fixed", "w-full", "z-30", "top-0", "text-white"], [1, "w-full", "container", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between", "mt-0", "py-2"], [1, "pl-4", "flex", "items-center"], ["href", "#", 1, "toggleColour", "text-white", "no-underline", "hover:no-underline", "font-bold", "text-2xl", "lg:text-4xl"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.005 512.005", 1, "h-8", "fill-current", "inline"], ["fill", "#2a2a31", "x", "16.539", "y", "425.626", "width", "479.767", "height", "50.502", "transform", "matrix(1,0,0,1,0,0)"], ["d", " M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z ", 1, "plane-take-off"], [1, "block", "lg:hidden", "pr-4"], ["id", "nav-toggle", 1, "flex", "items-center", "p-1", "text-orange-800", "hover:text-gray-900"], ["viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "fill-current", "h-6", "w-6"], ["d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"], ["id", "nav-content", 1, "w-full", "flex-grow", "lg:flex", "lg:items-center", "lg:w-auto", "hidden", "lg:block", "mt-2", "lg:mt-0", "bg-white", "lg:bg-transparent", "text-black", "p-4", "lg:p-0", "z-20"], [1, "list-reset", "lg:flex", "justify-end", "flex-1", "items-center"], [1, "mr-3"], ["href", "#", 1, "inline-block", "py-2", "px-4", "text-black", "font-bold", "no-underline"], ["href", "#", 1, "inline-block", "text-black", "no-underline", "hover:text-gray-800", "hover:text-underline", "py-2", "px-4"], ["id", "navAction", 1, "mx-auto", "lg:mx-0", "hover:underline", "bg-white", "text-gray-800", "font-bold", "rounded-full", "mt-4", "lg:mt-0", "py-4", "px-8", "shadow", "opacity-75"], [1, "border-b", "border-gray-100", "opacity-25", "my-0", "py-0"], [1, "pt-24"], [1, "container", "px-3", "mx-auto", "flex", "flex-wrap", "flex-col", "md:flex-row", "items-center"], [1, "flex", "flex-col", "w-full", "md:w-2/5", "justify-center", "items-start", "text-center", "md:text-left"], [1, "uppercase", "tracking-loose", "w-full"], [1, "my-4", "text-5xl", "font-bold", "leading-tight"], [1, "leading-normal", "text-2xl", "mb-8"], ["id", "subscribe-button", 1, "mx-auto", "lg:mx-0", "hover:underline", "bg-white", "text-gray-800", "font-bold", "rounded-full", "my-6", "py-4", "px-8", "shadow-lg"], [1, "w-full", "md:w-3/5", "py-6", "text-center"], ["src", "https://i.ibb.co/LYZ0Hsy/hero.png", "alt", "hero", 1, "w-full", "md:w-4/5", "z-50"], [1, "relative", "-mt-12", "lg:-mt-24"], ["viewBox", "0 0 1428 174", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-2.000000, 44.000000)", "fill", "#FFFFFF", "fill-rule", "nonzero"], ["d", "M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496", "opacity", "0.100000001"], ["d", "M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z", "opacity", "0.100000001"], ["d", "M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z", "id", "Path-4", "opacity", "0.200000003"], ["transform", "translate(-4.000000, 76.000000)", "fill", "#FFFFFF", "fill-rule", "nonzero"], ["d", "M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"], [1, "bg-white", "border-b", "py-8"], [1, "container", "max-w-5xl", "mx-auto", "m-8"], [1, "w-full", "my-2", "text-5xl", "font-bold", "leading-tight", "text-center", "text-gray-800"], [1, "w-full", "mb-4"], [1, "h-1", "mx-auto", "gradient", "w-64", "opacity-25", "my-0", "py-0", "rounded-t"], [1, "flex", "flex-wrap"], [1, "w-5/6", "sm:w-1/2", "p-6"], [1, "text-3xl", "text-gray-800", "font-bold", "leading-none", "mb-3"], [1, "text-gray-600", "mb-8"], ["href", "https://undraw.co/", 1, "text-orange-500", "underline"], [1, "w-full", "sm:w-1/2", "p-6"], ["viewBox", "0 0 1177 598.5", "xmlns", "http://www.w3.org/2000/svg", 1, "w-full", "sm:h-64", "mx-auto"], ["transform", "translate(-11.5 -150.75)", "d", "M274.63,501l-6.29-3.91c-.6-.37-1.19-.77-1.79-1.15a59.86,59.86,0,0,0,6.05-116.62l.31,24.66-13.55-26.83h-.17a59.87,59.87,0,0,0-62.58,57c-.06,1.15,0,2.27,0,3.4-4.71-5.38-9-11.15-11.83-17.47-5.73-12.79-5.84-27.28-5.39-44.9.9-34.9,2.41-70.08,4.37-105.14a59.85,59.85,0,0,0,53.16-56.64c.08-1.83,0-3.63,0-5.43,0-.45,0-.89-.07-1.34-.12-1.74-.28-3.46-.55-5.16,0-.28-.1-.55-.15-.82-.24-1.44-.54-2.86-.88-4.26-.13-.53-.26-1-.4-1.57-.42-1.53-.88-3-1.42-4.52-.18-.49-.39-1-.58-1.46-.42-1.09-.88-2.17-1.37-3.23-.26-.56-.51-1.12-.78-1.67-.08-.14-.13-.29-.21-.43l0,0a59.84,59.84,0,0,0-70.28-30.36l.4,32.1-13.4-26.52a59.57,59.57,0,0,0-28.55,64.51h-.06c.09.43.22.84.32,1.26.19.79.39,1.57.61,2.35.28,1,.6,2,.93,3,.25.74.49,1.47.77,2.2.41,1.06.87,2.09,1.33,3.12.27.6.51,1.22.8,1.81q1.14,2.33,2.48,4.53c.31.52.66,1,1,1.51.64,1,1.28,2,2,2.93.43.59.89,1.16,1.34,1.73.66.83,1.33,1.65,2,2.44.49.57,1,1.12,1.51,1.66.74.78,1.49,1.53,2.27,2.26.52.49,1,1,1.57,1.46.88.79,1.8,1.53,2.73,2.26.47.37.93.75,1.41,1.11,1.42,1,2.88,2,4.39,3,.28.17.59.31.87.48,1.27.74,2.55,1.45,3.87,2.09.57.28,1.15.53,1.73.79,1.08.48,2.17.95,3.29,1.38l2,.7c1.1.37,2.22.72,3.35,1,.66.18,1.33.37,2,.53,1.22.29,2.47.53,3.73.75l.24.05q-1.23,22.19-2.2,44.39a59.83,59.83,0,0,0-83.07-26l10.58,29-21.77-20.9a59.66,59.66,0,0,0-19.34,41.34A58.5,58.5,0,0,0,52.8,354a59.84,59.84,0,0,0,110.06,16.3c0,1.5-.1,3-.14,4.51-.4,15.54-.9,34.88,6.85,52.15,5.25,11.7,13.69,21.21,22,29.73,5.43,5.54,11.06,10.91,16.83,16.1a60.09,60.09,0,0,0,21.62,18c9.48,7.3,19.3,14.17,29.45,20.51l6.34,3.94c5.7,3.53,11.54,7.16,17.26,10.93-1-.1-2-.21-3-.26a59.89,59.89,0,0,0-58.94,39l37.4,30.43-41.14-9.54a59.89,59.89,0,0,0,85.82,53.92l-2.78,3.45q-2.76,3.43-5.45,6.82c-24.34,30.83-31.11,60.09-19.06,82.4l14.66-7.91c-11.73-21.72,5.91-49.52,17.47-64.16q2.64-3.33,5.36-6.7c15.55-19.32,33.17-41.22,32.74-68.08C345.52,545,306.21,520.6,274.63,501Z", "fill", "#f2f2f2"], ["cx", "588.5", "cy", "577.5", "rx", "588.5", "ry", "21", "fill", "#3f3d56"], ["transform", "translate(-11.5 -150.75)", "d", "M119.9,721.42c-3-5.51.4-12.27,4.29-17.18s8.61-10,8.51-16.29c-.15-9-9.7-14.31-17.33-19.09a84,84,0,0,1-15.56-12.51A22.8,22.8,0,0,1,95,650c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26,1.91-38.49", "fill", "none", "stroke", "#3f3d56", "stroke-miterlimit", "10", "stroke-width", "4"], ["transform", "translate(-11.5 -150.75)", "d", "M81,599.39a14,14,0,0,1,7-11.5l3.14,6.22-.1-7.53a14.22,14.22,0,0,1,4.63-.56A14,14,0,1,1,81,599.39Z", "fill", "#57b894"], ["transform", "translate(-11.5 -150.75)", "d", "M106,694.38a14,14,0,1,0-.68-11.3l8.77,7.13L104.46,688A14,14,0,0,0,106,694.38Z", "fill", "#57b894"], ["transform", "translate(-11.5 -150.75)", "d", "M113,667.13a14,14,0,0,0,4.45-27.53l.08,5.78-3.18-6.29h0a14,14,0,0,0-14.67,13.36,13.84,13.84,0,0,0,.6,4.79A14,14,0,0,0,113,667.13Z", "fill", "#57b894"], ["transform", "translate(-11.5 -150.75)", "d", "M78.88,644.46a14,14,0,1,0-6.21-26.27l2.48,6.8-5.1-4.9a14,14,0,0,0-4.53,9.69,13.79,13.79,0,0,0,.35,3.87A14,14,0,0,0,78.88,644.46Z", "fill", "#57b894"], ["transform", "translate(-11.5 -150.75)", "d", "m82.88 603.13c3.24 0.35 6.39 1.36 9.64 1.56s6.82-0.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 0 1 3.54 -3.33 14 14 0 1 1 -26.24 9.31q0.79 0 1.59 0.13z", "opacity", ".1"], ["transform", "translate(-11.5 -150.75)", "d", "M78.88,644.46a14,14,0,0,0,13.35-20,10.37,10.37,0,0,0-2.82,2.82c-1,1.51-1.61,3.26-2.78,4.64-2.19,2.57-5.92,3.41-9.31,3.26s-6.66-1.12-10-1.43c-.47,0-.94-.07-1.42-.08A14,14,0,0,0,78.88,644.46Z", "opacity", ".1"], ["transform", "translate(-11.5 -150.75)", "d", "M113,667.13a14,14,0,0,0,13.46-19.76,11.48,11.48,0,0,0-3,2.85c-1.09,1.54-1.77,3.32-3,4.74-2.37,2.63-6.35,3.56-9.93,3.48s-6.83-.93-10.28-1.2A14,14,0,0,0,113,667.13Z", "opacity", ".1"], ["transform", "translate(-11.5 -150.75)", "d", "M106,694.38a14,14,0,0,0,25.59-11.45,13.84,13.84,0,0,0-3.08,2.75c-1.34,1.62-2.22,3.47-3.76,5-2.87,2.82-7.5,4-11.63,4.09A60,60,0,0,1,106,694.38Z", "opacity", ".1"], ["transform", "translate(-11.5 -150.75)", "d", "m141.07 715.07s-11.08-0.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-1.94 32.4-4 4.03-10.94 4.03-10.94z", "fill", "#656380"], ["transform", "translate(-11.5 -150.75)", "d", "m104.42 728.69c12.51 0.1 29.06-2 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h0.37s-0.7 8.94-4 11-19.89 4.07-32.4 4c-3.61 0-4.85-1.31-4.78-3.21 0.47 1.17 1.84 1.83 4.53 1.86z", "opacity", ".2"], ["x", "171.5", "y", "111.25", "width", "834", "height", "456", "rx", "20.42", "fill", "#f2f2f2"], ["d", "m172 133.75h268v434h-247.58a20.42 20.42 0 0 1 -20.42 -20.42v-413.58z", "fill", "#ff6347"], ["transform", "translate(-11.5 -150.75)", "d", "M1017,282.42V294H183V282.42A20.42,20.42,0,0,1,203.42,262H996.58A20.42,20.42,0,0,1,1017,282.42Z", "fill", "#3f3d56"], ["cx", "193", "cy", "127.75", "r", "6", "fill", "#ff6347"], ["cx", "208", "cy", "127.75", "r", "6", "fill", "#ff6347"], ["cx", "223", "cy", "127.75", "r", "6", "fill", "#ff6347"], ["transform", "translate(-11.5 -150.75)", "d", "M387.5,490A66.5,66.5,0,1,1,321,423.5,66.47,66.47,0,0,1,387.5,490Z", "fill", "none", "stroke", "#f2f2f2", "stroke-miterlimit", "10", "stroke-width", "2"], ["transform", "translate(-11.5 -150.75)", "d", "M325.38,467.23l8.3,13,35.53,55.59a66.5,66.5,0,0,1-103.32-8.57l43.54-84.94.91,1.43", "fill", "none", "stroke", "#f2f2f2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["transform", "translate(-11.5 -150.75)", "d", "M385.31,507a66.46,66.46,0,0,1-16.1,28.82l-35.53-55.59,15.69-24.78a.66.66,0,0,1,1.1,0C353.76,460.32,371,486,385.31,507Z", "fill", "none", "stroke", "#f2f2f2", "stroke-miterlimit", "10", "stroke-width", "2"], ["transform", "translate(-11.5 -150.75)", "d", "M337.5,452.5a15,15,0,0,1-12.12,14.73l-15-23.51a15,15,0,0,1,27.16,8.78Z", "fill", "none", "stroke", "#f2f2f2", "stroke-miterlimit", "10", "stroke-width", "2"], ["transform", "translate(-11.5 -150.75)", "d", "m347.5 481.5", "fill", "none", "stroke", "#f2f2f2", "stroke-miterlimit", "10", "stroke-width", "2"], ["transform", "translate(-11.5 -150.75)", "d", "m333.5 480.5", "fill", "none", "stroke", "#f2f2f2", "stroke-miterlimit", "10", "stroke-width", "2"], ["transform", "translate(-11.5 -150.75)", "d", "M563.51,413.13c-.35,0-1.51,0-1.83,0l-6.61.17a.19.19,0,0,1-.17-.09L545,398.42a1.61,1.61,0,0,0-1.37-.75h-2.41c-.57,0-.77.57-.56,1.1l5.09,14.52a.2.2,0,0,1-.18.28l-12.45.18a.81.81,0,0,1-.67-.31l-3.77-4.58a1.59,1.59,0,0,0-1.28-.62h-1.71a.4.4,0,0,0-.38.54l2,7a1.68,1.68,0,0,1,0,1.21l-2,7a.39.39,0,0,0,.38.53h1.7a1.62,1.62,0,0,0,1.28-.62l3.84-4.64a.82.82,0,0,1,.67-.32l12.38.27a.21.21,0,0,1,.18.28L540.65,434c-.21.53,0,1.1.56,1.1h2.41a1.61,1.61,0,0,0,1.37-.76l9.91-14.81a.2.2,0,0,1,.17-.09l6.61.17c.33,0,1.48,0,1.83,0,4.5,0,7.35-1.45,7.35-3.25S568,413.13,563.51,413.13Z", "fill", "#3f3d56"], ["transform", "translate(-11.5 -150.75)", "d", "M548.32,532.86a.41.41,0,0,0-.51,0l-15.87,12.7a.42.42,0,0,0-.15.31v23.4a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21V555a.21.21,0,0,1,.21-.2h9.36a.2.2,0,0,1,.2.2v14.24a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21v-23.4a.4.4,0,0,0-.15-.31Z", "fill", "#3f3d56"], ["transform", "translate(-11.5 -150.75)", "d", "M568.69,543.05l-19.23-15.41a2.23,2.23,0,0,0-1.39-.48,2.26,2.26,0,0,0-1.4.48l-8.37,6.81v-4.29a.2.2,0,0,0-.2-.21H532a.2.2,0,0,0-.2.21v9.38l-4.34,3.57a1.41,1.41,0,0,0-.54,1,1.45,1.45,0,0,0,.41,1.09,1.41,1.41,0,0,0,1,.42,1.47,1.47,0,0,0,.9-.31l18.7-15.06a.22.22,0,0,1,.14,0,.24.24,0,0,1,.13,0l18.71,15a1.44,1.44,0,0,0,2.33-1.19,1.45,1.45,0,0,0-.55-1Z", "fill", "#3f3d56"], ["x", "604", "y", "260.14", "width", "347", "height", "11", "rx", "1.24", "fill", "#ff6347", "opacity", ".3"], ["x", "604", "y", "392.07", "width", "347", "height", "11", "rx", "1.24", "fill", "#ff6347", "opacity", ".3"], ["x", "878", "y", "279.75", "width", "73", "height", "25", "rx", "1.24", "fill", "#ff6347"], ["x", "878", "y", "411.75", "width", "73", "height", "25", "rx", "1.24", "fill", "#ff6347"], ["transform", "translate(-11.5 -150.75)", "d", "m978.18 606.93l-1.73 2s-21.05 2-20.2 5.39 25.35-4.55 25.35-4.55z", "fill", "#ffc1c7"], ["transform", "translate(-11.5 -150.75)", "d", "m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z", "fill", "#ff6584"], ["transform", "translate(-11.5 -150.75)", "d", "m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z", "opacity", ".1"], ["cx", "989.6", "cy", "378.29", "r", "15.09", "fill", "#ffc1c7"], ["transform", "translate(-11.5 -150.75)", "d", "m1014 543.21a11.85 11.85 0 0 0 2 2.71 24.62 24.62 0 0 0 7.28 5.44 246.74 246.74 0 0 1 -25.93 3.86c0.92-3.24-0.29-6.7-1.91-9.64s-3.7-5.69-4.72-8.9l10.2 0.28c1.85 0 3.71 0.1 5.56 0 1.39-0.07 3.69-0.9 5-0.59 2.64 0.63 1.3 4.42 2.52 6.84z", "fill", "#ffc1c7"], ["transform", "translate(-11.5 -150.75)", "d", "M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z", "fill", "#575a89"], ["transform", "translate(-11.5 -150.75)", "d", "M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z", "opacity", ".1"], ["transform", "translate(-11.5 -150.75)", "d", "m1086.8 648.79v8.55a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-7.12a1 1 0 0 0 -1 -1h-18.82a1 1 0 0 0 -1 1v7.12a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-8.55a1 1 0 0 1 1 -1h22.78a1 1 0 0 1 1.04 1z", "fill", "#3c354c"], ["transform", "translate(-11.5 -150.75)", "d", "M999.16,721.79a5.79,5.79,0,0,0,5.14,6l134.88,3.33a.41.41,0,0,0,.32-.11h0a.31.31,0,0,0,.11-.2l1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36a1.12,1.12,0,0,0-.25-.28,1,1,0,0,0-.61-.2l-127,1.89a5.8,5.8,0,0,0-5.71,5.53Z", "fill", "#3f3d56"], ["transform", "translate(-11.5 -150.75)", "d", "M1135.53,654.27l4,76.78h0l.11-.2,1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36A1.12,1.12,0,0,0,1135.53,654.27Z", "opacity", ".1"], ["transform", "translate(-11.5 -150.75)", "d", "m1016.2 613.3s26.06-9.79 40.58 11c0 0 3.7 32.18-11.11 33.6s-34.17 1.14-38.73-3.7-33.32-18.51-33.32-18.51-14.32-7.3-17.12 2.19-3.1 11.77-3.1 11.77-14.81 10.82-20.79 12.81c0 0-4 5.7-6.26 5.7s-16.23 3.13-14.81-7.41l23.07-21.07 23.06-22.5s6.55-9.68 23.36-4.56a346.13 346.13 0 0 0 33.89 8.26z", "fill", "#575a89"], ["transform", "translate(-11.5 -150.75)", "d", "M955.68,707.46s5.41,13.67.86,15.38-14.24.57-14.24.57-11.4-1.43-14.24-1.14-14.53-2-12.82-6.55,10.54-3.42,10.54-3.42l8-3.7s.86-2.85,2.85-1.71S944.29,712.3,955.68,707.46Z", "fill", "#cbceda"], ["transform", "translate(-11.5 -150.75)", "d", "m926.06 667s6 13.38-3.7 12.24-17.09-3.13-19.93-3.41-10.49-2.92-9.3-8.19a4.52 4.52 0 0 0 0.08 -1c0-0.71 1-2.09 8.65-1.88 0 0 5.69 0 8-4-0.03-0.01 8.51 10.81 16.2 6.24z", "fill", "#cbceda"], ["transform", "translate(-11.5 -150.75)", "d", "m990.71 553.1s20.5-12.81 37.59 0 28.48 71.2 28.48 71.2l-39.59-8.83s-1.7-6.83-4-8-2.57-6-2.57-6-12.24-3.7-11.39-17.94-8.52-30.43-8.52-30.43z", "fill", "#ff6584"], ["transform", "translate(-11.5 -150.75)", "d", "m1001.2 553.67h-10.54s-6.27 7.12-7.12 25.06l-3.42 14.27s-7.12 17.09-2.85 19.94 12.54 2.56 14.24-3.13 13.44-38.76 13.44-38.76z", "fill", "#ff6584"], ["transform", "translate(-11.5 -150.75)", "d", "M998.23,509.4A15.27,15.27,0,0,1,1014,512c5.47,4.88,6.57,12.85,8,20s4.17,15.21,11,18a28.35,28.35,0,0,1-9.19-.27l10.25,9.19-17.27-5.63c-5.42-1.77-11.11-3.56-16.72-2.56-9.3,1.65-15.78,10.4-24.71,13.47l1-4.85-6,0a11.75,11.75,0,0,0,3.43-4,3.27,3.27,0,0,0-2.29-1.2c-2.5-15.59,6.76-31,18.81-41.17,2.38-2,5-3.92,8.06-4.42s6.64.87,7.71,3.78", "fill", "#3c354c"], [1, "flex", "flex-wrap", "flex-col-reverse", "sm:flex-row"], [1, "w-full", "sm:w-1/2", "p-6", "mt-6"], ["viewBox", "0 0 1176.60617 873.97852", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5/6", "sm:h-64", "mx-auto"], ["transform", "translate(-11.697 -13.011)", "d", "m1095.7 225.46c-133.54-185.83-415.64-261.21-693.08-180.02-146.67 42.921-288.09 128.92-358.18 295.44-125.28 297.67 137.76 392.74 309.77 423.04 83.172 14.651 161.51 39.263 233.09 72.771 128.78 60.284 356.74 113.7 528.63-137.41 124.59-182.01 68.722-350.04-20.23-473.82z", "fill", "#f2f2f2"], ["transform", "translate(-11.697 -13.011)", "d", "m321.43 262.23a34.385 34.385 0 0 0 -2.2476 -8.6046 3.8949 3.8949 0 0 0 -1.9801 -2.4388 4.0801 4.0801 0 0 0 -1.9647 -0.022l-10.087 1.5435a3.8669 3.8669 0 0 0 -2.3015 0.89427c-1.3138 1.3817-0.0201 3.6066-0.06032 5.5128-0.04523 2.1435-1.9497 3.8834-4.015 4.459a15.177 15.177 0 0 1 -6.3797 -0.0791l-14.105-2.1919a23.256 23.256 0 0 0 10.671 -7.1207c1.8562-2.1989 2.8437-6.3042 0.1611-7.3455a6.5854 6.5854 0 0 0 -2.4499 -0.19671c-6.3906 0.04969-11.419-5.286-17.402-7.5332a19.241 19.241 0 0 0 -21.655 6.4554l7.5139 0.36227a3.3352 3.3352 0 0 1 2.0015 0.53379c1.6467 1.353-0.40057 3.9517-0.16859 6.0702 0.3014 2.7525 3.9561 3.3402 6.711 3.6185s6.2499 2.5167 4.9247 4.9479c-13.847 4.7694-27.937-9.3231-42.479-7.5884-3.6805 0.43906-7.1558 1.8849-10.749 2.7941-21.951 5.5538-44.644-9.2644-67.068-6.1262a85.163 85.163 0 0 0 -14.64 3.8612c-3.0519 1.0021-6.2353 2.085-8.4528 4.409s-3.0615 6.2985-0.96073 8.7285a49.126 49.126 0 0 1 -17.216 -1.6365 9.645 9.645 0 0 1 4.9587 8.5003 102.15 102.15 0 0 0 -26.167 7.9788 44.073 44.073 0 0 0 5.416 7.2148l-11.445 7.353c3.8668 0.97425 5.866 6.2469 3.6173 9.54 4.0094-1.7837 6.4942-6.3979 10.782-7.3334 2.8088-0.61288 5.6669 0.53616 8.3314 1.6156s5.5932 2.1261 8.3517 1.316 4.793-4.3868 3.0402-6.6656a142.72 142.72 0 0 1 36.253 -5.6639 4.5466 4.5466 0 0 1 2.7456 0.52105c1.5982 1.1088 1.1777 3.5038 1.0916 5.4471s1.4285 4.4973 3.1654 3.6214c-2.0434 1.7719-0.29656 5.1076 1.6639 6.9709s4.3233 4.4343 3.1231 6.8581c-0.31325 0.63259-0.84455 1.1387-1.146 1.777-0.88965 1.8842 0.52289 4.0808 2.189 5.332s3.7069 2.1257 4.8643 3.8584 0.63178 4.7655-1.4378 5.0074l-5.8824-7.4687a15.314 15.314 0 0 0 -3.9736 7.5302c6.2378 5.0992 7.176 15.478 1.9538 21.613-2.6687 3.1352-6.4637 5.0403-9.776 7.4858s-6.3772 5.9278-6.3688 10.045c0.01439 7.1131-0.56681 13.721 2.0986 20.316a312.97 312.97 0 0 0 16.99 35.447c1.6808 3.0062 3.8532 6.3011 7.2582 6.8187q-6.455-15.714-11.621-31.917c2.2434 0.00878 4.8359 0.1869 6.151 2.0044 1.089 1.505 0.85507 3.5512 1.1934 5.3778a16.659 16.659 0 0 0 2.1245 4.9943l20.55 36.605c1.7035 3.0345 3.6576 6.2917 6.9133 7.5206 2.0816 0.78568 4.4899 0.63767 6.4058 1.7688 1.5018 0.88663 2.5132 2.4605 4.0442 3.2957 4.3288 2.3615 10.349-2.1675 14.394 0.652 1.1567 0.80618 1.8926 2.0869 2.9584 3.0099 3.7363 3.2356 9.8654 1.0711 14.179 3.4848 2.7798 1.5556 4.2204 4.6667 5.7031 7.486 3.7139 7.0621 9.7233 13.981 17.683 14.543 2.5002 0.17664 5.054-0.2974 7.4979 0.25869s4.8497 2.6889 4.4574 5.1645c-0.67255 4.244 1.4243 8.8911 0.86116 13.151-1.0258 7.7595-12.032 11.169-12.978 18.939-0.207 1.7012 0.117 3.4571-0.28806 5.1223-0.49646 2.0408-2.0292 3.7025-2.5738 5.731-1.0321 3.8442 1.7221 7.67 4.7477 10.256s6.6346 4.8164 8.2888 8.4368c1.7484 3.8266 0.88959 8.2885 1.4582 12.457 1.2413 9.1004 9.1016 15.847 17.191 20.197 2.4646 1.3253 5.1109 2.6084 6.7062 4.9076 2.0821 3.0009 1.8747 6.957 2.5699 10.543 1.7027 8.7816 9.0953 16.017 9.3052 24.96 0.14919 6.3561-3.384 12.122-5.4946 18.12a42.257 42.257 0 0 0 3.4506 35.046c1.5789 2.666 3.4672 5.1796 4.5841 8.0698 1.9931 5.1575 1.3464 11.02 3.1841 16.235 2.4296 6.8946 9.1056 12.589 8.4667 19.872 3.0309 6.2941 9.7237 9.3866 16.454 11.26l12.062 3.3575c2.3095 0.64288 4.7228 1.2909 7.0745 0.82537s4.596-2.4182 4.5353-4.8148c-5.9148-1.3339-12.019-2.7524-16.895-6.3567s-8.2158-10.023-6.3658-15.797c0.85781-2.6775 2.6828-5.7694 0.94774-7.9818-0.99343-1.2667-2.81-1.5977-3.9305-2.7534-1.7478-1.8026-1.1473-4.831 0.10918-7.0048s3.0726-4.1164 3.5794-6.5755a6.8609 6.8609 0 0 0 -3.2158 -7.1379 17.054 17.054 0 0 0 5.97 -3.8306c1.57-1.7929 2.2952-4.557 1.0602-6.5952 3.6675 0.46513 7.9974 0.69293 10.405-2.1126 1.9225-2.2403 1.7905-5.5897 1.0308-8.4424s-2.0436-5.6236-2.0836-8.5754a156.27 156.27 0 0 0 25.353 -0.85968 16.439 16.439 0 0 0 -7.7081 -9.6535c3.8106-0.64475 7.2821-5.2068 8.486-8.8792s0.89686-7.6727 0.15275-11.465a6.1519 6.1519 0 0 1 -0.114 -3.0037c0.42911-1.3675 1.7725-2.202 3.0153-2.9157l18.914-10.863a11.017 11.017 0 0 0 3.0246 -2.2329c1.9817-2.3277 1.6881-5.8415 0.67344-8.7252s-2.64-5.5953-3.0308-8.6272c-1.169-9.0676 8.5376-15.574 11.813-24.109 1.2856-3.3497 1.5476-6.9907 1.7963-10.57 0.2672-3.8443 0.28706-8.3096-2.6647-10.787-2.8295-2.3747-7.2505-1.845-10.211-4.0539-2.7145-2.0252-3.651-5.9583-6.6164-7.5941-2.693-1.4855-6.0696-0.54073-9.0648-1.2394-5.2736-1.2301-8.5924-7.3082-13.978-7.8709-3.0388-0.31753-6.4781 1.1681-8.9687-0.60169-2.1946-1.5594-2.2826-4.6938-2.7003-7.3534a20.536 20.536 0 0 0 -16.575 -16.628c-3.1332-0.50246-6.5436-0.31164-9.2091-2.0335-2.699-1.7435-3.9365-5.0078-6.0566-7.4223-3.4169-3.8914-8.7984-5.274-13.84-6.4591l-20.506-4.8206c-3.6401-0.85575-8.3322-1.3095-10.286 1.8791a14.738 14.738 0 0 0 -1.2167 3.8267 11.85 11.85 0 0 1 -11.144 8.3882 13.179 13.179 0 0 0 -7.7715 -6.0133c-2.0793-0.57947-4.3049-0.64392-6.288-1.4964a8.8327 8.8327 0 0 1 -3.8326 -12.253 10.995 10.995 0 0 0 -1.8788 -13.225c-3.4872-3.1307-8.5315-3.8871-13.207-3.5739-1.2246-2.6721 0.823-5.687 3.0296-7.6289s4.886-3.851 5.3665-6.7508c0.75588-4.5615-5.0643-8.026-9.4834-6.6659s-7.2396 5.6524-9.1041 9.8835c-1.0698 2.4276-1.9792 4.984-3.6666 7.031s-4.4048 3.5127-6.9751 2.8557c-3.6388-0.93-5.0441-5.2531-5.8494-8.9215-1.0805-4.9218-2.1673-9.9118-1.9409-14.946s1.9234-10.203 5.6354-13.61c6.0488-5.5531 15.328-5.0087 23.491-4.1229-1.9286-2.173-1.452-5.8352 0.61156-7.8805a8.9597 8.9597 0 0 1 8.1208 -1.9951 11.191 11.191 0 0 1 6.2912 3.7615c2.3198 2.8283 2.9795 6.647 4.7329 9.8573s5.6962 5.9485 8.9233 4.2262c2.7874-1.4876 3.2298-5.3528 2.5361-8.4352s-2.1671-6.0798-1.9158-9.2293c0.4795-6.0096 6.7091-9.627 12.206-12.102s11.792-5.8036 12.663-11.769a10.73 10.73 0 0 1 0.65234 -3.4203 6.7093 6.7093 0 0 1 2.4614 -2.3147c16.044-10.603 32.355-21.335 50.692-27.129 0.954-0.30143 1.066 0.03357 2.0383-0.20258 1.3607-0.78645 0.45911-2.962-0.84552-3.8385s-3.0484-1.5485-3.3794-3.085c-0.24331-1.1294 0.42213-2.2384 0.595-3.3807 0.42476-2.807-2.9332-5.3987-5.541-4.2764-1.473-1.9508 1.4416-4.2175 3.7984-4.8663a103.15 103.15 0 0 1 21.67 -3.54 3.9033 3.9033 0 0 1 2.4659 0.41943c1.2309 0.85266 1.0737 2.8084 0.20129 4.0254s-2.2294 1.9812-3.3165 3.011a9.0526 9.0526 0 0 0 -2.3481 9.105c3.826 1.9462 7.9855 3.9496 12.223 3.264s7.9986-5.4468 6.0068-9.2492c-1.8548-3.541-7.4263-4.3397-8.3844-8.2205-1.1218-4.5438 5.3104-8.585 3.8615-13.035-0.63466-1.9494-2.5774-3.0966-4.0681-4.504a12.221 12.221 0 0 1 -2.6744 -13.552 15.419 15.419 0 0 1 -13.523 -4.2317c-3.2345-3.2642-5.8149-8.4135-10.408-8.2675-4.2148 0.134-7.8452 5.0513-11.786 3.5511-0.96958-0.36907-1.9919-1.1202-2.9313-0.68012a2.4222 2.4222 0 0 0 -1.0934 1.815c-1.0015 4.7884 0.72138 10.244-1.8884 14.382-2.8399 4.5027-9.4088 5.1269-12.852 9.1872-1.8689 2.2041-2.593 5.174-4.3108 7.4978s-5.3639 3.8011-7.4255 1.7761a10.235 10.235 0 0 0 -2.7804 -12.445 27.309 27.309 0 0 0 -6.1412 -2.9871 36.422 36.422 0 0 1 -6.8608 -3.8237 6.7578 6.7578 0 0 1 -2.5186 -2.6949 6.1414 6.1414 0 0 1 0.17224 -4.2617 17.426 17.426 0 0 1 13.867 -11.494c2.7449-0.37343 5.9396-0.24185 7.7561-2.3333 0.96116-1.1066 1.4655-2.7797 2.8606-3.2291a4.2194 4.2194 0 0 1 2.6411 0.32524l10.245 3.6062a7.1908 7.1908 0 0 0 3.6498 0.60364 2.4745 2.4745 0 0 0 2.1396 -2.6005c-0.32735-1.7014-2.9454-2.5179-2.7071-4.234a2.8267 2.8267 0 0 1 0.85747 -1.4414 36.629 36.629 0 0 1 29.051 -11.472c1.2931 2.1238-0.752 4.6388-2.4537 6.4518s-3.0692 5.0525-1.0112 6.448a5.6425 5.6425 0 0 0 2.7279 0.61435 23.819 23.819 0 0 1 7.2608 2.2023q5.3105 2.3111 10.417 5.0572c-0.30072-2.2447-0.58773-4.6095 0.26309-6.7084s3.2689-3.7452 5.381-2.9278c2.0355 0.78775 3.0794 3.483 5.2481 3.7299 2.8928 0.32939 4.0341-3.9442 2.8257-6.5932s-3.6004-4.8669-3.8001-7.7716c-0.13471-1.9596 0.611-4.3899-0.95429-5.5765a4.2605 4.2605 0 0 0 -1.8468 -0.64758l-39.084-7.1922c-2.3209-0.42709-5.6742-0.09975-5.7771 2.2579-0.05746 1.316 1.1181 2.6179 0.59742 3.8279-0.55569 1.2914-2.3812 1.1733-3.7108 1.6301-2.0631 0.70871-3.0983 3.1584-2.9002 5.3308a14.834 14.834 0 0 0 2.448 6.0075c-2.5422-1.0632-6.3915-1.2586-8.9336-2.3218z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m290.24 229.05a12.656 12.656 0 0 0 -13.902 4.1635c-0.64354 0.84733-1.184 2.0154-0.64526 2.9329 0.77242 1.3154 2.7405 0.79583 4.1916 0.3253a10.549 10.549 0 0 1 6.6207 -0.15794c1.3625 0.4678 2.5815 1.2946 3.9499 1.7447a3.9778 3.9778 0 0 0 4.0557 -0.59267c0.93918-0.95786 0.99811-2.447 0.99977-3.7885a3.0468 3.0468 0 0 0 -0.7764 -2.5042 3.9808 3.9808 0 0 0 -1.7955 -0.53108 6.1845 6.1845 0 0 1 -3.6195 -2.1148", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m304.34 225.13a3.2196 3.2196 0 0 0 -3.1118 4.5344 13.05 13.05 0 0 0 5.203 0.33925 4.4472 4.4472 0 0 0 3.6367 -3.3342 8.3721 8.3721 0 0 1 -5.9279 -1.1321", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m351.62 218.57a59.853 59.853 0 0 0 -13.342 4.5323 10.024 10.024 0 0 1 6.4025 10.068 5.2431 5.2431 0 0 0 0.06075 2.4894c0.49 1.1879 1.9099 1.6337 3.1582 1.9386a20.823 20.823 0 0 0 6.927 0.88415 7.0564 7.0564 0 0 0 5.7338 -3.5038 24.972 24.972 0 0 1 1.1924 -2.8186c2.9922-4.557 11.881 0.9531 15.094-3.4513 1.1317-1.5515 1.0282-3.887 2.5034-5.1164a5.6241 5.6241 0 0 1 2.5735 -0.98213 180.73 180.73 0 0 1 19.548 -2.7841c3.1092-0.27057 7.1619-1.387 7.1878-4.5078a54.149 54.149 0 0 0 -34.541 4.6467c-3.8504 1.9286-8.943 5.9853-12.652 3.4285-1.3887-0.95731-1.3199-3.5351-3.2313-4.6116-1.9541-1.1006-4.5408-0.65294-6.6151-0.21223z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m389.92 225.74l5.4974 1.0563a7.1238 7.1238 0 0 0 -7.4134 7.7201c5.1481 1.7198 10.761 0.04624 16.184 0.27485s11.733 4.1023 10.807 9.4506c-0.27991 1.6171-1.2141 3.2332-0.72831 4.8008 0.34049 1.0988 1.3095 1.8784 1.8564 2.8903 1.1398 2.1087 0.22882 4.7759-1.2103 6.6927s-3.3736 3.4463-4.6368 5.4834c-3.1419 5.0666-1.3568 11.617 0.51479 17.277a15.231 15.231 0 0 0 2.9288 5.8488c2.7728 2.9482 7.2916 3.2046 11.338 3.2637 2.9455 0.043 6.3196-0.10253 8.1823-2.3846 2.4318-2.9794 0.73135-7.6279 2.3324-11.125 1.4541-3.1758 5.1587-4.5382 8.5152-5.5045 6.1491-1.7702 12.416-3.2752 18.229-5.9492 7.2187-3.3203 13.965-8.4947 21.899-8.9221 2.2259-0.1199 4.507 0.1428 6.6511-0.46707s4.1809-2.4636 4.0186-4.6868c-0.1387-1.8996-1.7458-3.2945-3.0016-4.7265s-2.242-3.634-1.0878-5.1491l20.797-3.8844c-1.4742-4.0174-2.6226-9.3085 0.76489-11.924 1.2222-0.94351 2.8586-1.3206 3.8993-2.4613 1.7736-1.9441 0.88175-5.293-1.1656-6.9464s-4.8157-2.0372-7.4382-2.255c-9.1188-0.75732-18.29-0.25689-27.426 0.24392q-26.79 1.4685-53.58 2.9369c-3.5953 0.19707-7.7464-0.104-11.044 1.1226-2.7916 1.0384-4.7764 2.9446-7.9692 3.6143-5.894 1.2364-12.38 0.39973-17.714 3.7088z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m488.4 269.19a2.2121 2.2121 0 0 0 -1.6002 0.36291 2.0202 2.0202 0 0 0 -0.5209 1.2339 8.1485 8.1485 0 0 0 1.1836 5.8323 5.7112 5.7112 0 0 0 5.228 2.5065c2.4754-0.31565 4.2996-2.4275 6.5753-3.458 3.5074-1.5868 18.403-4.0605 8.099-9.6273-3.5509-1.9184-5.8454-0.22491-8.6442 1.0385a19.669 19.669 0 0 1 -10.321 2.1111z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m578.65 222.59a5.8831 5.8831 0 0 0 -2.8624 2.4916 2.514 2.514 0 0 0 0.94284 3.335 3.7522 3.7522 0 0 0 1.4036 0.22264l4.8922 0.14615c2.0783 0.06209 4.6743 0.50471 5.2328 2.5075 0.41469 1.4871-0.51346 3.3981 0.60642 4.4609a3.1547 3.1547 0 0 0 1.6642 0.64909 11.341 11.341 0 0 0 4.9293 0.15908c3.5595-0.95476 1.6892-3.1273 2.8103-5.0617 1.7153-2.9598 1.4184-1.1681 4.4408-2.8645 2.2321-1.2528 5.1165-3.5253 3.2534-6.7183-3.2398-5.5525-22.533-1.7128-27.313 0.6725z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m675.21 219.8l-2.8407 0.37908c-6.4059 0.85484-12.848 1.7176-19.018 3.6412a31.652 31.652 0 0 0 8.3288 2.0437 25.585 25.585 0 0 1 4.6654 0.66319c2.7251 0.81124 5.471 2.9061 8.1038 1.833 1.6324-0.66538 2.1651-2.3651 3.5173-3.2658 0.93372-0.622 4.4752-1.6287 4.8711-2.2565 3.2006-5.0754-5.1676-3.3661-7.6278-3.0378z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m687.69 232.71a53.277 53.277 0 0 0 -10.483 7.6772c-1.3347 1.2547-2.698 2.8152-2.5769 4.643 0.16086 2.4294 2.7487 3.8385 4.9907 4.7878l9.0812 3.8448c1.1017-1.5528 0.09336-3.6962-1.0452-5.2221s-2.4916-3.2914-1.9886-5.1276c0.57406-2.0954 3.129-2.8095 5.2715-3.1705 3.4908-0.58817 12.907-0.541 11.776-6.1667-1.3332-6.6288-11.521-3.2246-15.025-1.266z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m685.86 607.84c-0.86453 2.5029-0.94655 5.4513 0.54891 7.6365 1.6781 2.4521 5.0364 3.3661 7.9419 2.7443a14.307 14.307 0 0 0 7.3736 -4.7408 25.392 25.392 0 0 0 4.2412 -6.5039 50.767 50.767 0 0 0 3.1436 -11.502l2.8196-14.804c0.63007-3.3086 0.60568-13.452-5.4754-10.147-1.6613 0.90284-5.5076 8.0312-7.2486 10.053-3.1378 3.6432-3.5529 7.1782-5.2048 11.592-2.069 5.5284-6.2273 10.136-8.14 15.673z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m1007 683.6a44.332 44.332 0 0 1 -5.7785 -2.7508 48.707 48.707 0 0 0 -2.9293 15.965l13.616-7.7048c2.0483-1.159 4.3698-2.7695 4.3257-5.1225a1.6206 1.6206 0 0 0 -0.75277 -1.4735 1.8356 1.8356 0 0 0 -0.95451 -0.112c-2.019 0.16826-3.8599 1.1617-5.7645 1.8526s-4.1317 1.056-5.8792 0.03077", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m1078.9 688.17a29.472 29.472 0 0 0 -4.3664 1.567c-3.1246 1.5898-5.2502 4.6095-8.062 6.7034-2.6907 2.0038-5.9298 3.1039-9.1095 4.1736-0.93537 0.82681-0.50556 2.492 0.50978 3.2183a6.3154 6.3154 0 0 0 3.5961 0.80831c3.3034 0.07292 6.7837 0.10473 9.6772-1.4908a30.518 30.518 0 0 0 4.5561 -3.6161c3.3831-2.8227 7.4458-4.6852 11.467-6.485a13.162 13.162 0 0 0 3.9969 -2.3897c2.5271-2.4897 2.7048-6.3307-0.93912-7.1781-2.9443-0.68475-8.523 3.7821-11.326 4.6891z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m1110.6 667.44a11.359 11.359 0 0 0 -3.4752 -9.3066c-0.03724 3.4276-0.14133 7.0792-2.0691 9.9136-1.3736 2.0195-3.5272 3.3838-5.0321 5.3074s-2.1729 4.9729-0.40769 6.6609a6.6149 6.6149 0 0 0 3.9202 1.3502c3.5138 0.41362 7.5809 0.64415 10.045-1.8944 1.3451-1.3856 1.9994-3.4377 3.64-4.4564a4.4285 4.4285 0 0 0 1.597 -1.1428c0.6774-1.0768-0.39893-2.496-1.6105-2.884s-2.5467-0.2056-3.7643-0.5741-2.3348-1.7377-1.71-2.8459", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m1054.2 541.77a15.795 15.795 0 0 1 -5.6359 0.3323c-3.1281-0.5751-5.5628-2.9326-8.0883-4.866a35.677 35.677 0 0 0 -20.846 -7.2833c-6.8625-0.12959-13.789 1.73-20.529 0.43257 0.44035 2.4493 2.5362 4.2863 4.7724 5.3782s4.7042 1.6414 6.9512 2.711a16.597 16.597 0 0 1 8.0392 8.3635c0.72369 1.6892 1.179 3.5275 2.2752 5.0025 2.2406 3.0148 6.4876 3.6768 10.236 3.4303 4.8867-0.32145 9.9906-1.7269 14.537 0.09374 3.4779 1.3928 5.9671 4.4368 8.871 6.8038s6.9941 4.1236 10.329 2.4158a17.075 17.075 0 0 1 -11.814 -16.43c3.2704 0.30074 12.69 0.18435 12.183-5.3726-0.42992-4.7095-8.4715-1.52-11.28-1.0117z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m1011.4 580.09c0.58068-3.1849 3.7568-5.9973 2.7674-9.0798-0.6842-2.1317-3.1558-3.1842-5.3941-3.2367s-4.437 0.61415-6.6749 0.67693a32.53 32.53 0 0 0 -4.3708 0.06208c-4.4425 0.73025-7.1807 5.3866-11.367 7.0422-2.5457 1.0067-5.4055 0.81426-8.0531 1.5102-6.0099 1.5798-9.8126 7.2588-14.014 11.838a50.011 50.011 0 0 1 -25.384 14.804c-3.4171 0.79123-7.0904 1.2974-9.8066 3.5167-3.5968 2.9389-4.4822 7.9771-5.2824 12.552a207.33 207.33 0 0 1 -10.093 37.051l14.27 1.822c2.7131 0.34641 5.5245 0.68539 8.1389-0.11824a23.628 23.628 0 0 0 5.3532 -2.8515 53.442 53.442 0 0 1 20.879 -7.5367c3.737-0.51305 7.655-0.60706 11.162 0.782s6.5155 4.5391 6.8094 8.2997a8.7668 8.7668 0 0 1 8.7621 2.131 15.231 15.231 0 0 1 4.1833 8.3511c0.3759 1.9523 0.752 4.2916 2.5636 5.1107 1.478 0.6682 3.1735-0.05148 4.7903-0.18086 5.4865-0.439 10.039 5.9584 15.432 4.8567 5.7835-1.1815 7.2034-9.8431 12.846-11.578 3.2406-0.99649 7.786 0.21524 9.3377-2.7991 1.3677-2.6568-1.3611-5.7228-1.0797-8.6978 0.3465-3.6632 4.6674-5.218 7.9985-6.781 11.484-5.3886 16.934-20.845 11.369-32.245-3.2972-6.7542-9.7847-12.071-10.983-19.491-0.92182-5.7088 1.3286-12.366-2.3112-16.859-1.8516-2.2859-4.9865-3.5476-6.0883-6.2752-0.69353-1.7169-0.41478-3.6649-0.788-5.4786s-1.9555-3.7108-3.7465-3.2407c-5.1989 1.3646-6.8578 17.425-9.6413 21.327-4.2311 5.9316-12.917 2.0244-11.585-5.2836z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m915.32 547.84c-1.7766-0.49816-3.7166-0.9889-5.4189-0.277s-2.6964 3.2112-1.3302 4.4514c10.688-0.41637 21.442-0.82984 32.04 0.62169 12.21 1.6724 24.294 5.815 36.558 4.5963a186.05 186.05 0 0 0 -21.326 -4.9487l-12.006-2.2935a92.83 92.83 0 0 0 -9.7492 -1.5064c-6.8493-0.56567-12.033 1.2445-18.768-0.64377z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m926.02 510.61c-0.88733-0.07409-1.9863-0.13792-2.4454 0.625-0.43858 0.72893 0.06343 1.692-0.17241 2.5094-0.3222 1.1167-1.7846 1.4019-2.9369 1.2499s-2.3984-0.51613-3.4192 0.03944a2.8981 2.8981 0 0 0 -1.1205 3.2919 8.4746 8.4746 0 0 0 1.9763 3.1504 32.185 32.185 0 0 0 5.1278 5.1433c3.6735 2.7116 8.6504 4.0184 10.964 7.9547a5.278 5.278 0 0 0 1.4643 1.9708c1.1107 0.70357 2.5593 0.16832 3.7552-0.37811l4.192-1.9154a4.7616 4.7616 0 0 0 1.9597 -1.3328c0.95772-1.2995 0.36947-3.1471-0.43438-4.547s-1.8328-2.8487-1.6603-4.4537c0.30757-2.8617 3.987-3.9563 5.5-6.4048 1.525-2.468 0.53222-5.6479 0.708-8.544 0.20569-3.3867 2.3338-7.7921-1.0901-10.323-2.9099-2.1505-5.6912-0.16345-7.7804 2.2108-4.4057 5.0068-6.4889 10.429-14.588 9.7527z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m951.47 460.01c1.4312 2.7402 4.4147 4.3755 5.9754 7.0442 1.6916 2.8926 1.4989 6.6299 3.334 9.4336 1.8828 2.8765 5.6718 4.4037 6.7277 7.6754 1.1528 3.5719-1.4628 7.9134 0.62215 11.034a4.6319 4.6319 0 0 0 6.7945 0.62426 4.9839 4.9839 0 0 0 -0.20571 -6.9536c-1.2344-1.1255-3.007-1.6119-4.0377-2.9265a6.141 6.141 0 0 1 -1.0458 -2.5462 16.669 16.669 0 0 1 0.26223 -7.9892 3.5552 3.5552 0 0 0 0.20093 -2.0897c-0.464-1.3487-2.2903-1.4444-3.572-2.0701-2.9112-1.4211-2.8405-5.5295-2.3319-8.7289-0.33863 2.13-7.9259-1.4927-8.7204-2.6993-1.5783-2.3968-0.71931-7.0203-1.0318-9.6689-3.4074 1.6419-4.7215 6.5102-2.9716 9.8606z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m875.03 502.17c-1.4004-1.5677-3.5097-3.2077-5.3872-2.2622-1.4324 0.72131-1.8264 2.7032-1.265 4.2054a9.2568 9.2568 0 0 0 3.0549 3.642c3.9126 3.2268 8.1257 6.1391 11.539 9.8901 6.1083 6.7127 9.3442 15.77 15.987 21.954a8.9669 8.9669 0 0 0 5.034 2.7244c1.9354 0.18005 4.1088-1.0588 4.3312-2.9898 0.18325-1.5906-0.92563-3.0144-2.0093-4.1931-2.5805-2.8069-5.4056-5.3906-7.8419-8.3235a6.994 6.994 0 0 1 -2.0045 -4.1863c-0.01236-1.5792 1.4277-3.2321 2.9578-2.841-1.8608-0.47563-3.2409-3.5758-5.972-4.1585-2.2824-0.487-2.8346 0.926-5.5509-0.239-5.1807-2.222-9.2454-9.1613-12.873-13.223z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m996.76 349.52a42.899 42.899 0 0 1 -4.3768 -1.5635c-3.8466-1.1546-8.9361 1.6727-8.4234 5.656 0.34067 2.6466 2.8038 4.4309 4.164 6.7266 2.0172 3.4044 1.4795 7.7224 0.41941 11.535a9.0174 9.0174 0 0 1 -1.4554 3.282 11.116 11.116 0 0 1 -3.4469 2.4795 46.103 46.103 0 0 0 -13.49 11.46 3.3029 3.3029 0 0 0 -0.81466 1.5357c-0.18345 1.3449 1.1684 2.3246 1.9327 3.4463 1.6978 2.4917 0.47065 5.8446 0.63849 8.8551a2.5036 2.5036 0 0 0 1.0549 2.1966c1.0233 0.5198 2.2359-0.36314 2.7905-1.368 1.8406-3.3347 0.45407-8.6874 3.907-10.295 0.65316-0.30414 1.445-0.43236 1.8807-1.0061 0.69131-0.91021 0.02434-2.2579 0.37468-3.3459 0.526-1.6335 2.7601-1.7068 4.4747-1.6344a25.398 25.398 0 0 0 8.7242 -1.1615 5.8072 5.8072 0 0 0 2.888 -1.6724c1.0322-1.2882 0.94072-3.1199 0.73447-4.7576a64.492 64.492 0 0 0 -7.6195 -23.25c3.0331 0.38746 6.3331 0.723 8.9504-0.85772 1.4656-0.88515 3.2232-3.5322 2.4962-5.3338-1.1495-2.8491-3.2261-0.45095-5.8039-0.92723z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m607.91 394.43c0.363 1.9468 0.71982 3.9967 0.08181 5.8715s-2.645 3.4412-4.5403 2.8668c-1.4708-0.44581-2.3205-1.9247-3.3649-3.0522-5.8081-6.2703-18.912-2.64-22.5-10.397-1.4644-3.166-0.46919-6.959-1.468-10.301a9.1689 9.1689 0 0 0 -9.2853 -6.3078 19.08 19.08 0 0 0 -5.3432 1.595 134.73 134.73 0 0 1 -35.401 8.8543 29.087 29.087 0 0 0 -6.8022 1.2377c-4.9878 1.8083-8.3958 6.4324-10.821 11.151s-4.2158 9.8271-7.4675 14.019c-3.4174 4.4059-8.2061 7.4912-12.673 10.828a12.93 12.93 0 0 0 -4.1807 4.3817c-0.96841 1.9881-0.91378 4.3006-0.83861 6.5108l0.91295 26.844c0.11743 3.4528 0.26488 7.0289 1.8102 10.119 1.9297 3.8584 5.7418 6.3855 8.3864 9.794a19.183 19.183 0 0 1 3.9797 12.251c-0.05629 1.7771-0.23287 3.8789 1.1511 4.995a5.0618 5.0618 0 0 0 2.8304 0.814l36.312 2.9719c6.3875 0.52278 13.466 1.3823 17.637 6.2488 1.9682 2.2967 3.5492 5.5996 6.5639 5.846 1.2931 0.10569 2.5513-0.42512 3.8446-0.52755 3.263-0.25843 6.1296 2.2182 7.9387 4.9461a21.943 21.943 0 0 1 3.5245 14.08c-0.29663 3.1118-1.2614 6.137-1.4694 9.256-0.79146 11.868 9.2692 22.179 9.4642 34.071 0.11471 6.9953-3.2061 13.531-6.4437 19.733 5.2253 7.9159 0.94656 18.457 3.0269 27.711 1.9736 8.7796 9.294 15.653 11.118 24.465 0.83506 4.0341 0.88337 8.9984 4.4406 11.076a10.122 10.122 0 0 0 5.0248 1.0061 66.242 66.242 0 0 0 30.165 -6.8674c4.3986-2.1828 8.9572-5.4413 9.7254-10.291 0.6195-3.9112-1.3639-8.286 0.6546-11.693 2.379-4.0153 8.4735-3.697 11.974-6.7841 5.6786-5.0082 1.2505-14.56 3.5513-21.773 2.0681-6.4841 9.1874-9.9289 12.716-15.748a27.986 27.986 0 0 0 2.955 -8.0088 114.24 114.24 0 0 0 3.0066 -20.426 122.44 122.44 0 0 1 0.92415 -12.511c3.8048-23.638 27.173-39.466 34.76-62.174 0.72457-2.1686 1.0648-5.0572-0.86443-6.2843a5.5252 5.5252 0 0 0 -3.6742 -0.38455l-16.739 2.1103c-2.0791 0.26212-4.2829 0.50711-6.1923-0.35645s-3.2778-3.279-2.265-5.1135c2.843-5.1497-3.0051-11.657-5.6032-16.935a249.89 249.89 0 0 0 -24.885 -40.357 4.1021 4.1021 0 0 1 -1.091 -2.3688l4.7507 0.15818c-1.6036-5.7544-4.2501-12.051-9.8406-14.156-3.1502-1.1862-6.6389-0.776-10-0.59234-9.6272 0.52593-19.948-0.92759-29.477-2.4009z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m637.4 264.76c2.5192 2.6753 5.3422 5.5117 8.9872 5.978 6.438 0.82367 11.067-5.8338 14.014-11.617a5.6762 5.6762 0 0 0 5.9231 5.2512 11.693 11.693 0 0 0 4.455 -1.7417 87.765 87.765 0 0 1 41.579 -10.748 4.4903 4.4903 0 0 1 3.429 -4.9364c2.9554-0.58592 5.6176 1.9693 7.0433 4.6235s2.3146 5.7308 4.5797 7.7176 6.6505 1.9002 7.5452-0.97683c0.85894-2.7621-2.0186-5.1176-4.4092-6.746s-4.9104-4.6424-3.3005-7.0456c12.213-2.7035 24.502-5.4173 37-5.9546a15.494 15.494 0 0 0 6.2282 -1.0729c1.9059-0.93527 3.4207-3.0583 2.9082-5.1185a14.104 14.104 0 0 1 -14.718 -5.5516c17.341-1.431 35.785-2.6507 51.153 5.5089 1.8442 3.959-7.555 7.2529-5.0402 10.824 0.80205 1.1389 2.4092 1.2724 3.8019 1.2983 10.679 0.19828 21.421 0.39271 31.98-1.2196 3.8587-0.58921 7.7562-1.421 11.63-0.94319 6.4527 0.79581 11.972 5.1013 18.32 6.505 2.5838 0.57135 5.4809 0.5907 7.659-0.91213s3.1143-4.9248 1.3294-6.8784c5.9771-5.8581 15.897-4.4062 23.783-1.6016s15.355 7.3274 23.701 7.9526c5.9847 0.44829 12.053-1.1615 17.966-0.1383 3.7161 0.643 7.1747 2.2962 10.807 3.3119 6.8693 1.921 14.136 1.5155 21.268 1.6079a149.02 149.02 0 0 1 53.106 10.553 15.789 15.789 0 0 1 5.9037 3.488c1.5733 1.6848 2.3757 4.303 1.3183 6.3514l-17.473-2.553c1.6463 3.2408 5.9053 3.7931 9.364 4.9111s7.0449 4.9376 4.9663 7.9196c-3.7476-1.1932-7.1436 2.5536-9.0367 6.0009s-4.2 7.576-8.1273 7.786c-3.5168 0.18806-7.7701-2.8065-10.062-0.13277a68.629 68.629 0 0 1 8.0855 12.927c2.2647 4.7181 3.8778 10.663 0.81676 14.908a3.864 3.864 0 0 1 -2.0658 1.602c-2.4999 0.63286-4.1242-2.4254-5.917-4.279-2.2591-2.3358-5.6756-2.9974-8.735-4.0929s-6.2821-3.2504-6.5215-6.4912c-0.14893-2.0163 0.91563-3.8906 1.6998-5.7542a22.17 22.17 0 0 0 1.6844 -9.9436c-0.17165-2.7352-0.93862-5.5805-2.903-7.4916s-5.3559-2.5174-7.4647-0.767c-0.984 0.81673-1.7726 2.1232-3.0504 2.172-2.2578 0.08638-3.9914-3.85-5.8079-2.5063a6.1721 6.1721 0 0 1 -0.8387 4.1279c-5.4206 4.7144-13.748 2.7199-20.736 4.3853a38.921 38.921 0 0 0 -9.4606 4.1316 6.0872 6.0872 0 0 0 -2.7042 2.2698c-0.87231 1.6952 0.08944 3.8662 1.627 4.9933a12.917 12.917 0 0 0 5.3646 1.8311c8.5195 1.6135 17.163 4.1113 23.889 9.5834s11.137 14.518 9.0085 22.924l-16.801-16.054q0.95718 10.111 1.0864 20.277a9.1164 9.1164 0 0 1 -0.53256 3.9003c-1.1977 2.6454-4.4439 3.5357-7.2886 4.1197a5.7092 5.7092 0 0 0 -4.3828 7.3148c1.0107 3.2943 3.5307 5.8627 5.8381 8.4219s4.5782 5.4679 4.8802 8.9005-2.2877 7.3017-5.7252 7.063c-2.6059-0.18094-4.5393-2.5138-5.6508-4.8777s-1.7729-4.9973-3.443-7.0059c-5.0549-6.0796-16.409-3.4748-20.937-9.9561a10.241 10.241 0 0 0 -2.1178 9.746c2.1067-1.3188 4.9908-0.09347 6.5736 1.8228s2.3295 4.3731 3.5726 6.5254c1.6773 2.9043 4.3468 5.479 4.5809 8.8247a28.845 28.845 0 0 0 0.06384 3.7953c0.41589 2.0272 2.1293 3.4828 3.3173 5.1772 2.7643 3.9427 2.6277 9.3591 0.846 13.833s-4.9827 8.2115-8.1532 11.836c-5.5377 6.33-11.189 12.623-17.754 17.88-1.8733 1.5-3.8726 2.9749-5.0393 5.072s-1.2266 5.0406 0.56634 6.6359c-1.2829 0.06425-3.5836 0.69522-4.8664 0.75947a113.14 113.14 0 0 1 -0.29339 -15.477c-5.0626-2.4309-10.514 4.0791-9.8603 9.657s4.6877 10.054 7.56 14.88c2.1005 3.529 3.6615 7.6439 2.9603 11.69s-4.3134 7.7794-8.4046 7.4226c-6.5077-0.56766-9.2297-9.9101-15.674-10.979a2.6332 2.6332 0 0 0 -1.696 0.16838c-0.95661 0.525-1.1229 1.805-1.1766 2.8949-0.26365 5.3492-0.49192 10.911 1.5962 15.843 3.0548 7.2149 10.946 13.275 9.291 20.933-8.9178-4.1454-13.554-14.146-15.66-23.752s-2.456-19.691-6.2298-28.772c-2.8655 3.6728-8.8885 0.6366-11.507-3.2164-2.4821-3.6529-4.0104-7.8784-6.4185-11.58s-6.0973-7.017-10.509-7.2206c-4.6255-0.21346-8.637 2.9607-12.165 5.9599-2.9009 2.4662-5.8793 5.0294-7.575 8.4386-2.4676 4.9609-1.8221 10.809-1.941 16.349-0.12858 5.9886-1.3977 12.307-5.4793 16.691s-11.615 5.9112-16.117 1.96c-2.3504-2.0628-3.4884-5.1448-4.502-8.1031a396.68 396.68 0 0 1 -12.188 -43.511c-0.75647 3.3605-3.7073 7.6918-6.5263 5.7123a5.8442 5.8442 0 0 1 -1.5035 -1.9372c-5.2583-8.9122-14.996-14.258-24.835-17.463s-20.191-4.7003-29.92-8.2229a75.787 75.787 0 0 1 -15.521 -7.7314 12.207 12.207 0 0 0 -0.746 12.487c2.1583 3.8216 7.0423 6.0327 11.223 4.6969 2.1604-0.69029 3.9849-2.1901 6.1286-2.9308s5.0209-0.377 5.9583 1.6883c0.89725 1.9768-0.45894 4.3683 0.21381 6.4324 1.0246 3.1437 5.766 3.3859 7.424 6.2466 1.2336 2.1285 0.21858 4.9549-1.5427 6.6724s-4.1113 2.6595-6.2613 3.8551c-6.9762 3.8793-11.937 10.502-18.034 15.654s-14.699 8.9139-21.965 5.609c1.732-8.7702-8.715-15.209-10.637-23.939-0.63259-2.8736-0.30466-5.9261-1.2078-8.7264-1.3076-4.0544-4.9047-6.8421-7.8556-9.9147a38.912 38.912 0 0 1 -10.673 -28.31c0.15946-3.6082 0.82236-7.2752 3.5e-4 -10.792s-3.7338-6.9209-7.342-6.7615c-8.2411 0.364-18.623 0.977-22.947-6.0482-1.5432-2.5073-2.2147-6.1796 0.01642-8.1005 1.5739-1.3551 3.8972-1.2275 5.9641-1.0241l18.568 1.8266c4.3429 0.42722 9.0374 0.77979 12.764-1.4906s5.3415-8.297 1.8907-10.968c-2.5214-1.9517-7.0387-1.8459-7.7716-4.949-0.61041-2.5844 2.2502-5.5167 0.70519-7.6766-1.1078-1.5486-3.5983-1.119-5.1075 0.04194s-2.6042 2.8587-4.2932 3.7377c-2.9629 1.542-6.5032 0.07446-9.6909-0.92292s-7.4612-1.0821-9.0074 1.8786c-1.7292 3.3112 1.5338 7.65-0.18233 10.968-2.2689 4.3868-9.9526 1.8895-13.139 5.6628-3.6564 4.3298 2.4881 10.786 1.255 16.318a10.158 10.158 0 0 1 -10.007 -0.56224 9.7203 9.7203 0 0 1 -4.2006 -9.0505c0.30523-2.4883 1.6025-5.0283 0.73329-7.3798-0.70278-1.9012-2.6116-3.033-4.3857-4.0134l-18.044-9.9711c-1.6753 3.1077 0.44265 6.9605 3.0914 9.2947s5.9665 4.0922 7.7066 7.1642a9.4038 9.4038 0 0 1 -3.5385 12.398 2.1708 2.1708 0 0 1 -1.7886 0.312 2.4953 2.4953 0 0 1 -1.16 -1.5599c-3.1837-8.1474-7.9638-16.18-15.606-20.436s-18.623-3.381-23.634 3.7886c-1.1903 1.7029-1.9892 3.644-3.0261 5.4444-5.509 9.5653-17.319 14.095-28.354 13.799a5.6304 5.6304 0 0 1 -3.0931 -0.72684c-1.7833-1.2316-1.703-3.8452-1.43-5.9952l1.1583-9.1243c0.23259-1.8322 0.56962-3.8574 2.0198-5.0012 2.0442-1.6122 4.993-0.5948 7.5962-0.63229a9.6268 9.6268 0 0 0 8.738 -6.7436 10.849 10.849 0 0 0 -3.0205 -10.789c-1.1932-1.1207-2.7946-2.5284-2.1644-4.0391a3.3391 3.3391 0 0 1 2.3416 -1.5768c4.6761-1.3579 9.617-1.7138 14.215-3.3161s9.0573-4.8804 10.146-9.6263c0.33371-1.4544 0.48564-3.2162 1.792-3.9373a5.3737 5.3737 0 0 1 2.071 -0.42313 10.078 10.078 0 0 0 8.6442 -10.506c2.2036-1.5398 5.291-0.40712 7.4229 1.2306s4.014 3.8015 6.608 4.5075c4.8341 1.3157 9.5058-2.9644 14.516-2.9843 2.1068-0.00834 4.2878 0.73659 6.2699 0.02231 2.0093-0.72411 3.2093-2.7243 4.7514-4.202s4.2481-2.379 5.6721-0.78714l-1.2126-8.982a17.658 17.658 0 0 0 14.371 -2.5981l-15.672-5.2953a3.4074 3.4074 0 0 1 -1.4655 -0.78358c-1.1394-1.2269-0.00768-3.1388 0.91883-4.5335 2.2164-3.3364 2.5885-8.8323-1.0564-10.493-2.4879-1.1338-5.3436 0.22716-7.7315 1.5586l-11.439 6.378c-0.3635 2.1743 2.2954 3.4065 3.943 4.8711a6.6111 6.6111 0 0 1 -4.3112 11.552 8.2377 8.2377 0 0 1 1.4712 6.984l-7.6962 0.55351a3.3343 3.3343 0 0 1 -2.4962 -0.4872c-0.82313-0.73105-0.7115-2.0121-0.90228-3.0964-0.46046-2.6169-3.0229-4.4511-5.6381-4.9214s-5.2905 0.13252-7.8801 0.72774a4.703 4.703 0 0 1 -3.3873 -0.07817 3.3824 3.3824 0 0 1 -1.3401 -1.6914c-1.1353-2.7528-0.07412-5.9884 1.7493-8.3425s4.3195-4.075 6.5613-6.0348a38.243 38.243 0 0 0 11.371 -17.638c4.2368-1.7751 8.623-4.187 12.86-5.9622a39.35 39.35 0 0 1 21.151 -4.0981l14.348 0.27406c4.248 0.08114 8.6109 0.18511 12.539 1.8046s7.3795 5.1222 7.6507 9.3623a2.874 2.874 0 0 1 -0.92 2.6274 3.3895 3.3895 0 0 1 -1.814 0.40888c-3.9618 0.13923-5.6509 1.1264-9.6126 1.2656z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m523.04 309.72a4.1985 4.1985 0 0 0 1.1449 -4.2226 7.8535 7.8535 0 0 0 -8.1319 1.5355 13.71 13.71 0 0 0 -2.1786 2.8801c-1.8854 3.076-3.553 6.7502-2.4604 10.189a2.8944 2.8944 0 0 0 1.3246 1.8118 3.4824 3.4824 0 0 0 1.544 0.24185 51.761 51.761 0 0 0 6.2136 -0.38244c1.2661-0.1548 2.7366-0.51234 3.2259-1.6903 0.64319-1.5484-0.91358-3.3007-0.45975-4.9148a5.3694 5.3694 0 0 1 1.3258 -1.8987 2.5101 2.5101 0 0 0 0.7819 -2.1073c-0.18315-0.75735-1.3428-1.187-1.7603-0.529", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m533.81 295.76a17.385 17.385 0 0 0 -5.6307 -0.35359 2.4555 2.4555 0 0 0 -1.1998 0.27266 2.0018 2.0018 0 0 0 -0.73936 1.0707 5.3193 5.3193 0 0 0 3.0969 6.5186 6.6553 6.6553 0 0 1 1.9204 0.77174c1.5925 1.2356 0.5773 3.7611 0.87877 5.7541 0.33852 2.2379 2.5048 4.1164 2.1076 6.3447-0.31289 1.7555-2.1878 3.1455-1.886 4.903 0.31617 1.8407 2.6519 2.3938 4.5137 2.5412a5.6766 5.6766 0 0 0 3.1979 -0.36651 4.9517 4.9517 0 0 0 2.0176 -2.9219 18.729 18.729 0 0 0 0.94353 -7.052 6.687 6.687 0 0 0 -0.7952 -3.1126 17.378 17.378 0 0 0 -1.8583 -2.1279c-3.567-4.1492 0.18883-10.338-6.5671-12.242z", "fill", "#3f3d56"], ["transform", "translate(-11.697 -13.011)", "d", "m1002.9 620.79s-273.2-156.82-390.82-127.11c0 0-249.27 26.825-278.15 85.84 0 0-79.237-247.61-108.12-255.87", "fill", "none", "opacity", ".8", "stroke", "#ff6347", "stroke-miterlimit", "10", "stroke-width", "2"], ["transform", "translate(-11.697 -13.011)", "d", "m333.9 579.53c45.809-122.16 458.5-257.52 458.5-257.52-58.602 14.857-180.35 171.68-180.35 171.68s-257.52-187.36-386.28-170.03c0 0 567.04 18.571 777.1 297.14", "fill", "none", "opacity", ".8", "stroke", "#ff6347", "stroke-miterlimit", "10", "stroke-width", "2"], ["cx", "214.07", "cy", "310.65", "r", "11.968", "fill", "#ff6347"], ["cx", "322.2", "cy", "566.52", "r", "11.968", "fill", "#ff6347"], ["cx", "780.7", "cy", "309", "r", "11.968", "fill", "#ff6347"], ["cx", "991.17", "cy", "607.78", "r", "11.968", "fill", "#ff6347"], ["cx", "600.35", "cy", "480.68", "r", "11.968", "fill", "#ff6347"], [1, "align-middle"], [1, "container", "mx-auto", "flex", "flex-wrap", "pt-4", "pb-12"], [1, "w-full", "md:w-1/3", "p-6", "flex", "flex-col", "flex-grow", "flex-shrink"], [1, "flex-1", "bg-white", "rounded-t", "rounded-b-none", "overflow-hidden", "shadow"], ["href", "#", 1, "flex", "flex-wrap", "no-underline", "hover:no-underline"], [1, "w-full", "text-gray-600", "text-xs", "md:text-sm", "px-6"], [1, "w-full", "font-bold", "text-xl", "text-gray-800", "px-6"], [1, "text-gray-800", "text-base", "px-6", "mb-5"], [1, "flex-none", "mt-auto", "bg-white", "rounded-b", "rounded-t-none", "overflow-hidden", "shadow", "p-6"], [1, "flex", "items-center", "justify-start"], [1, "mx-auto", "lg:mx-0", "hover:underline", "gradient", "text-white", "font-bold", "rounded-full", "my-6", "py-4", "px-8", "shadow-lg"], [1, "flex", "items-center", "justify-center"], [1, "flex", "items-center", "justify-end"], [1, "bg-gray-100", "py-8"], [1, "container", "mx-auto", "px-2", "pt-4", "pb-12", "text-gray-800"], [1, "flex", "flex-col", "sm:flex-row", "justify-center", "pt-12", "my-12", "sm:my-4"], [1, "flex", "flex-col", "w-5/6", "lg:w-1/4", "mx-auto", "lg:mx-0", "rounded-none", "lg:rounded-l-lg", "bg-white", "mt-4"], [1, "flex-1", "bg-white", "text-gray-600", "rounded-t", "rounded-b-none", "overflow-hidden", "shadow"], [1, "p-8", "text-3xl", "font-bold", "text-center", "border-b-4"], [1, "w-full", "text-center", "text-sm"], [1, "border-b", "py-4"], [1, "w-full", "pt-6", "text-3xl", "text-gray-600", "font-bold", "text-center"], [1, "text-base"], [1, "flex", "flex-col", "w-5/6", "lg:w-1/3", "mx-auto", "lg:mx-0", "rounded-lg", "bg-white", "mt-4", "sm:-mt-6", "shadow-lg", "z-10"], [1, "w-full", "p-8", "text-3xl", "font-bold", "text-center"], [1, "h-1", "w-full", "gradient", "my-0", "py-0", "rounded-t"], [1, "w-full", "text-center", "text-base", "font-bold"], [1, "w-full", "pt-6", "text-4xl", "font-bold", "text-center"], ["viewBox", "0 0 1439 147", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "wave-top"], ["transform", "translate(-1.000000, -14.000000)", "fill-rule", "nonzero"], ["fill", "#f8fafc", 1, "wave"], ["d", "M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"], ["transform", "translate(1.000000, 15.000000)", "fill", "#FFFFFF"], ["transform", "translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "], ["d", "M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z", "opacity", "0.200000003"], [1, "container", "mx-auto", "text-center", "py-6", "mb-12"], [1, "w-full", "my-2", "text-5xl", "font-bold", "leading-tight", "text-center", "text-white"], [1, "h-1", "mx-auto", "bg-white", "w-1/6", "opacity-25", "my-0", "py-0", "rounded-t"], [1, "my-4", "text-3xl", "leading-tight"], [1, "mx-auto", "lg:mx-0", "hover:underline", "bg-white", "text-gray-800", "font-bold", "rounded-full", "my-6", "py-4", "px-8", "shadow-lg"], [1, "bg-white"], [1, "container", "mx-auto", "px-8"], [1, "w-full", "flex", "flex-col", "md:flex-row", "py-6"], [1, "flex-1", "mb-6"], ["href", "#", 1, "text-orange-600", "no-underline", "hover:no-underline", "font-bold", "text-2xl", "lg:text-4xl"], ["fill", "#2a2a31", "x", "16.539", "y", "425.626", "width", "479.767", "height", "50.502", "transform", "matrix(1,0,0,1,0,0)", "fill", "rgb(0,0,0)"], [1, "flex-1"], [1, "uppercase", "text-gray-500", "md:mb-6"], [1, "list-reset", "mb-6"], [1, "mt-2", "inline-block", "mr-2", "md:block", "md:mr-0"], ["href", "#", 1, "no-underline", "hover:underline", "text-gray-800", "hover:text-orange-500"], ["href", "https://www.freepik.com/free-photos-vectors/background", 1, "text-gray-500"]], template: function WTRTXCEBTD_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " LANDING ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Menu");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "link");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "link");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "What business are you?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Main Hero Message to sell yourself!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sub-hero message, not too long and not too short. Make it just right!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Subscribe 0");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Images from: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "undraw.co");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "travel booking");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "ellipse", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "rect", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "circle", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "circle", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "circle", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "rect", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "rect", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "rect", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "circle", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 98);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "connected world");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 100);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 101);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 102);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 103);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 104);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 105);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 106);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 107);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 108);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 109);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 110);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 111);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 112);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 113);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 114);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 115);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 116);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 117);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 118);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 119);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 120);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 121);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 122);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 123);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 124);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 125);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "circle", 126);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "circle", 127);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "circle", 128);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "circle", 129);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "circle", 130);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 131);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h3", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Lorem ipsum dolor sit amet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Images from: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "undraw.co");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "section", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 132);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h1", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 133);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 134);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 135);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 136);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "xGETTING STARTED");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 137);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Lorem ipsum dolor sit amet.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 138);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 139);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 140);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "button", 141);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 133);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 134);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 135);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 136);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "xGETTING STARTED");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 137);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Lorem ipsum dolor sit amet.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 138);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 139);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 142);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 141);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 133);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 134);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 135);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 136);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "xGETTING STARTED");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 137);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Lorem ipsum dolor sit amet.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 138);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 139);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 143);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "button", 141);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "section", 144);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 145);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h1", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Pricing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 146);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 147);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 148);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 149);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Free");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ul", 150);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 139);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 152);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " \u00A30 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 153);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "for one user");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 142);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "button", 141);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Sign Up");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 154);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 134);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 155);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "div", 156);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "ul", 157);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 139);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 158);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " \u00A3x.99 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 153);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "/ per user");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 142);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 141);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Sign Up");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 147);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 148);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 149);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Pro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "ul", 150);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li", 151);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Thing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 139);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 152);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " \u00A3x.99 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 153);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "/ per user");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 142);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "button", 141);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Sign Up");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "svg", 159);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "g", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "g", 160);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "g", 161);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 162);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "g", 163);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "g", 164);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 165);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "section", 166);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h1", 167);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Call to Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "div", 168);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h3", 169);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Main Hero Message to sell yourself!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 170);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Action!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "footer", 171);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 172);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 173);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 174);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 175);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "svg", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "rect", 176);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "path", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " LANDING ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 177);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p", 178);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Links");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "ul", 179);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "FAQ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Help");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Support");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 177);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p", 178);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Legal");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "ul", 179);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Terms");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Privacy");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 177);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "p", 178);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Social");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "ul", 179);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Facebook");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Linkedin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Twitter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 177);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p", 178);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Company");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "ul", 179);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Official Blog");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "About Us");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li", 180);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 181);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Contact");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "a", 182);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Background vector created by freepik - www.freepik.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return WTRTXCEBTD;
})();


/***/ }),

/***/ "../../mockups/ZEKIXAMPRV/component.ts":
/*!*************************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/mockups/ZEKIXAMPRV/component.ts ***!
  \*************************************************************************/
/*! exports provided: ZEKIXAMPRV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZEKIXAMPRV", function() { return ZEKIXAMPRV; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ZEKIXAMPRV = /*@__PURE__*/ (() => {
    class ZEKIXAMPRV {
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
    ZEKIXAMPRV.ɵfac = function ZEKIXAMPRV_Factory(t) { return new (t || ZEKIXAMPRV)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ZEKIXAMPRV.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZEKIXAMPRV, selectors: [["ZEKIXAMPRV"]], decls: 24, vars: 0, consts: [[1, "w-screen", "h-screen", "flex", "items-center", "justify-center", "bg-gray-100"], [1, "w-full", "mx-auto"], [1, "text-3xl", "text-center", "font-bold", "mb-6"], [1, "bg-green-200", "px-6", "py-4", "mx-2", "my-4", "rounded-md", "text-lg", "flex", "items-center", "mx-auto", "w-3/4", "xl:w-2/4"], ["viewBox", "0 0 24 24", 1, "text-green-600", "w-5", "h-5", "sm:w-5", "sm:h-5", "mr-3"], ["fill", "currentColor", "d", "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"], [1, "text-green-800"], [1, "bg-red-200", "px-6", "py-4", "mx-2", "my-4", "rounded-md", "text-lg", "flex", "items-center", "mx-auto", "w-3/4", "xl:w-2/4"], ["viewBox", "0 0 24 24", 1, "text-red-600", "w-5", "h-5", "sm:w-5", "sm:h-5", "mr-3"], ["fill", "currentColor", "d", "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"], [1, "text-red-800"], [1, "bg-orange-200", "px-6", "py-4", "my-4", "rounded-md", "text-lg", "flex", "items-center", "mx-auto", "w-3/4", "xl:w-2/4"], ["viewBox", "0 0 24 24", 1, "text-yellow-600", "w-5", "h-5", "sm:w-5", "sm:h-5", "mr-3"], ["fill", "currentColor", "d", "M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"], [1, "text-yellow-800"], [1, "bg-blue-200", "px-6", "py-4", "mx-2", "my-4", "rounded-md", "text-lg", "flex", "items-center", "mx-auto", "w-3/4", "xl:w-2/4"], ["viewBox", "0 0 24 24", 1, "text-blue-600", "w-5", "h-5", "sm:w-5", "sm:h-5", "mr-3"], ["fill", "currentColor", "d", "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"], [1, "text-blue-800"]], template: function ZEKIXAMPRV_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Alert Component");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Your account has been saved. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Your email address is invalid. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " You are currently on the Free plan. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " We've updated a few things. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return ZEKIXAMPRV;
})();


/***/ }),

/***/ "../../slides-list.module.ts":
/*!***************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/slides-list.module.ts ***!
  \***************************************************************/
/*! exports provided: SlidesList, SlidesListMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesList", function() { return SlidesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesListMap", function() { return SlidesListMap; });
/* harmony import */ var _node_modules_slides_render_angular_src_app_slides_slides_listing_slides_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/slides-render-angular/src/app/slides/slides-listing/slides-listing.component */ "./src/app/slides/slides-listing/slides-listing.component.ts");
/* harmony import */ var _render_mockups_CMEBOCIEEO_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/mockups/CMEBOCIEEO/component */ "../../mockups/CMEBOCIEEO/component.ts");
/* harmony import */ var _render_mockups_AAQPKTJLMZ_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/mockups/AAQPKTJLMZ/component */ "../../mockups/AAQPKTJLMZ/component.ts");
/* harmony import */ var _render_mockups_WTRTXCEBTD_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/mockups/WTRTXCEBTD/component */ "../../mockups/WTRTXCEBTD/component.ts");
/* harmony import */ var _render_mockups_CSPVSRVFFA_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render/mockups/CSPVSRVFFA/component */ "../../mockups/CSPVSRVFFA/component.ts");
/* harmony import */ var _render_mockups_JKHGNQQNFB_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/mockups/JKHGNQQNFB/component */ "../../mockups/JKHGNQQNFB/component.ts");
/* harmony import */ var _render_mockups_ZEKIXAMPRV_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/mockups/ZEKIXAMPRV/component */ "../../mockups/ZEKIXAMPRV/component.ts");
/* harmony import */ var _render_mockups_IUFGIYBLOO_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../render/mockups/IUFGIYBLOO/component */ "../../mockups/IUFGIYBLOO/component.ts");
/* harmony import */ var _render_mockups_KCDCPBREEZ_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../render/mockups/KCDCPBREEZ/component */ "../../mockups/KCDCPBREEZ/component.ts");
/* harmony import */ var _render_mockups_CATDKXSVBD_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../render/mockups/CATDKXSVBD/component */ "../../mockups/CATDKXSVBD/component.ts");
///////////////////////////////////////////////////////////////////////
//
//                               ATTENTION!!!
//
//   Generated by slides-generator for Angular.
//   Don't edit this file - all changes will be overwritten.
//
///////////////////////////////////////////////////////////////////////










const SlidesList = [
    _node_modules_slides_render_angular_src_app_slides_slides_listing_slides_listing_component__WEBPACK_IMPORTED_MODULE_0__["SlidesListingComponent"],
    _render_mockups_CMEBOCIEEO_component__WEBPACK_IMPORTED_MODULE_1__["CMEBOCIEEO"],
    _render_mockups_AAQPKTJLMZ_component__WEBPACK_IMPORTED_MODULE_2__["AAQPKTJLMZ"],
    _render_mockups_WTRTXCEBTD_component__WEBPACK_IMPORTED_MODULE_3__["WTRTXCEBTD"],
    _render_mockups_CSPVSRVFFA_component__WEBPACK_IMPORTED_MODULE_4__["CSPVSRVFFA"],
    _render_mockups_JKHGNQQNFB_component__WEBPACK_IMPORTED_MODULE_5__["JKHGNQQNFB"],
    _render_mockups_ZEKIXAMPRV_component__WEBPACK_IMPORTED_MODULE_6__["ZEKIXAMPRV"],
    _render_mockups_IUFGIYBLOO_component__WEBPACK_IMPORTED_MODULE_7__["IUFGIYBLOO"],
    _render_mockups_KCDCPBREEZ_component__WEBPACK_IMPORTED_MODULE_8__["KCDCPBREEZ"],
    _render_mockups_CATDKXSVBD_component__WEBPACK_IMPORTED_MODULE_9__["CATDKXSVBD"]
];
const SlidesListMap = [
    { path: 'mockups', component: _node_modules_slides_render_angular_src_app_slides_slides_listing_slides_listing_component__WEBPACK_IMPORTED_MODULE_0__["SlidesListingComponent"] },
    { path: 'mockups/CMEBOCIEEO', component: _render_mockups_CMEBOCIEEO_component__WEBPACK_IMPORTED_MODULE_1__["CMEBOCIEEO"] },
    { path: 'mockups/AAQPKTJLMZ', component: _render_mockups_AAQPKTJLMZ_component__WEBPACK_IMPORTED_MODULE_2__["AAQPKTJLMZ"] },
    { path: 'mockups/WTRTXCEBTD', component: _render_mockups_WTRTXCEBTD_component__WEBPACK_IMPORTED_MODULE_3__["WTRTXCEBTD"] },
    { path: 'mockups/CSPVSRVFFA', component: _render_mockups_CSPVSRVFFA_component__WEBPACK_IMPORTED_MODULE_4__["CSPVSRVFFA"] },
    { path: 'mockups/JKHGNQQNFB', component: _render_mockups_JKHGNQQNFB_component__WEBPACK_IMPORTED_MODULE_5__["JKHGNQQNFB"] },
    { path: 'mockups/ZEKIXAMPRV', component: _render_mockups_ZEKIXAMPRV_component__WEBPACK_IMPORTED_MODULE_6__["ZEKIXAMPRV"] },
    { path: 'mockups/IUFGIYBLOO', component: _render_mockups_IUFGIYBLOO_component__WEBPACK_IMPORTED_MODULE_7__["IUFGIYBLOO"] },
    { path: 'mockups/KCDCPBREEZ', component: _render_mockups_KCDCPBREEZ_component__WEBPACK_IMPORTED_MODULE_8__["KCDCPBREEZ"] },
    { path: 'mockups/CATDKXSVBD', component: _render_mockups_CATDKXSVBD_component__WEBPACK_IMPORTED_MODULE_9__["CATDKXSVBD"] }
];


/***/ }),

/***/ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
  \********************************************************************************/
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
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\slides-bare-angular\render\node_modules\slides-render-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);