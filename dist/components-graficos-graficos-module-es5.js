(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-graficos-graficos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/graficos/graficos.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/graficos/graficos.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  graficos works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/graficos/graficos-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/graficos/graficos-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: GraficosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficosRoutingModule", function() { return GraficosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _graficos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graficos.component */ "./src/app/components/graficos/graficos.component.ts");




var routes = [
    {
        path: '',
        component: _graficos_component__WEBPACK_IMPORTED_MODULE_3__["GraficosComponent"],
        data: {
            title: 'Graficos'
        },
    }
];
var GraficosRoutingModule = /** @class */ (function () {
    function GraficosRoutingModule() {
    }
    GraficosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GraficosRoutingModule);
    return GraficosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/graficos/graficos.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/graficos/graficos.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhZmljb3MvZ3JhZmljb3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/graficos/graficos.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/graficos/graficos.component.ts ***!
  \***********************************************************/
/*! exports provided: GraficosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficosComponent", function() { return GraficosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraficosComponent = /** @class */ (function () {
    function GraficosComponent() {
    }
    GraficosComponent.prototype.ngOnInit = function () {
    };
    GraficosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graficos',
            template: __webpack_require__(/*! raw-loader!./graficos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/graficos/graficos.component.html"),
            styles: [__webpack_require__(/*! ./graficos.component.scss */ "./src/app/components/graficos/graficos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraficosComponent);
    return GraficosComponent;
}());



/***/ }),

/***/ "./src/app/components/graficos/graficos.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/graficos/graficos.module.ts ***!
  \********************************************************/
/*! exports provided: GraficosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficosModule", function() { return GraficosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _graficos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graficos-routing.module */ "./src/app/components/graficos/graficos-routing.module.ts");
/* harmony import */ var _graficos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graficos.component */ "./src/app/components/graficos/graficos.component.ts");





var GraficosModule = /** @class */ (function () {
    function GraficosModule() {
    }
    GraficosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_graficos_component__WEBPACK_IMPORTED_MODULE_4__["GraficosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _graficos_routing_module__WEBPACK_IMPORTED_MODULE_3__["GraficosRoutingModule"]
            ]
        })
    ], GraficosModule);
    return GraficosModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-graficos-graficos-module-es5.js.map