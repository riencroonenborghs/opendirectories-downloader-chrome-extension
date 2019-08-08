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

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.sass.shim.ngstyle */ "./src/app/app.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_downloads_downloads_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/downloads/downloads.component.ngfactory */ "./src/app/components/downloads/downloads.component.ngfactory.js");
/* harmony import */ var _components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/downloads/downloads.component */ "./src/app/components/downloads/downloads.component.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _components_topbar_topbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topbar/topbar.component.ngfactory */ "./src/app/components/topbar/topbar.component.ngfactory.js");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_chrome_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/chrome-storage.service */ "./src/app/services/chrome-storage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_AppComponent = [_app_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "downloads", [], null, null, null, _components_downloads_downloads_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DownloadsComponent_0"], _components_downloads_downloads_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DownloadsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_3__["DownloadsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_4__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_5__["CommService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "topbar", [], null, null, null, _components_topbar_topbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TopbarComponent_0"], _components_topbar_topbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TopbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], [_services_comm_service__WEBPACK_IMPORTED_MODULE_5__["CommService"], _services_downloads_service__WEBPACK_IMPORTED_MODULE_4__["DownloadsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "add-download"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "button", [["mat-mini-fab", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addDownload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_to_queue"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.commService.signedIn; _ck(_v, 3, 0, currVal_0); _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_3, currVal_4); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], [_services_comm_service__WEBPACK_IMPORTED_MODULE_5__["CommService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _services_chrome_storage_service__WEBPACK_IMPORTED_MODULE_20__["ChromeStorageService"], _services_downloads_service__WEBPACK_IMPORTED_MODULE_4__["DownloadsService"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.sass.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.sass.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".add-download[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9vcGVuZGlyZWN0b3JpZXMtZG93bmxvYWRlci1jaHJvbWUtZXh0ZW5zaW9uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWRvd25sb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE2cHg7XG4gIHJpZ2h0OiAxNnB4OyB9XG4iXX0= */"];



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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in-dialog/sign-in-dialog.component */ "./src/app/components/sign-in-dialog/sign-in-dialog.component.ts");
/* harmony import */ var _components_add_download_dialog_add_download_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-download-dialog/add-download-dialog.component */ "./src/app/components/add-download-dialog/add-download-dialog.component.ts");
/* harmony import */ var _services_chrome_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/chrome-storage.service */ "./src/app/services/chrome-storage.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/downloads.service */ "./src/app/services/downloads.service.ts");





// for the chrome background script

var AppComponent = /** @class */ (function () {
    function AppComponent(commService, dialog, chromeStorageService, 
    // for the chrome background script
    downloadsService) {
        var _this = this;
        this.commService = commService;
        this.dialog = dialog;
        this.chromeStorageService = chromeStorageService;
        this.downloadsService = downloadsService;
        this.title = 'opendirectories-downloader';
        this.validateToken();
        commService.signInEvents$.subscribe(function (signIn) {
            _this.validateToken();
        });
    }
    AppComponent.prototype.validateToken = function () {
        var _this = this;
        this.chromeStorageService.get().then(function (serverSettings) {
            _this.commService.serverSettings = serverSettings;
            if (_this.commService.serverSettings.authorizationToken == null) {
                setTimeout(function () { return _this.showLogin(); }, 500);
            }
            else {
                _this.commService.signedIn = true;
                _this.commService.reload();
            }
        }, function (error) { return setTimeout(function () { return _this.showLogin(); }, 500); });
    };
    AppComponent.prototype.showLogin = function () {
        this.dialog.open(_components_sign_in_dialog_sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SignInDialogComponent"]);
    };
    AppComponent.prototype.addDownload = function () {
        var dialogRef = this.dialog.open(_components_add_download_dialog_add_download_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddDownloadDialogComponent"]);
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _components_sign_in_dialog_sign_in_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-in-dialog/sign-in-dialog.component.ngfactory */ "./src/app/components/sign-in-dialog/sign-in-dialog.component.ngfactory.js");
/* harmony import */ var _components_settings_dialog_settings_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings-dialog/settings-dialog.component.ngfactory */ "./src/app/components/settings-dialog/settings-dialog.component.ngfactory.js");
/* harmony import */ var _components_add_download_dialog_add_download_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-download-dialog/add-download-dialog.component.ngfactory */ "./src/app/components/add-download-dialog/add-download-dialog.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBarNgFactory"], _components_sign_in_dialog_sign_in_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SignInDialogComponentNgFactory"], _components_settings_dialog_settings_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SettingsDialogComponentNgFactory"], _components_add_download_dialog_add_download_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AddDownloadDialogComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, new _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"](p1_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _services_comm_service__WEBPACK_IMPORTED_MODULE_17__["CommService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_19__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_19__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_19__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_19__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_30__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_30__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_34__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_34__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_44__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_44__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_47__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_47__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-download-dialog/add-download-dialog.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/add-download-dialog/add-download-dialog.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_AddDownloadDialogComponent, View_AddDownloadDialogComponent_0, View_AddDownloadDialogComponent_Host_0, AddDownloadDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddDownloadDialogComponent", function() { return RenderType_AddDownloadDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddDownloadDialogComponent_0", function() { return View_AddDownloadDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddDownloadDialogComponent_Host_0", function() { return View_AddDownloadDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDownloadDialogComponentNgFactory", function() { return AddDownloadDialogComponentNgFactory; });
/* harmony import */ var _add_download_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-download-dialog.component.sass.shim.ngstyle */ "./src/app/components/add-download-dialog/add-download-dialog.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/core/typings/index.ngfactory */ "./node_modules/@angular/material/core/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/select/typings/index.ngfactory */ "./node_modules/@angular/material/select/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/slide-toggle/typings/index.ngfactory */ "./node_modules/@angular/material/slide-toggle/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _add_download_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-download-dialog.component */ "./src/app/components/add-download-dialog/add-download-dialog.component.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_AddDownloadDialogComponent = [_add_download_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddDownloadDialogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddDownloadDialogComponent, data: {} });

function View_AddDownloadDialogComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[15, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit; _ck(_v, 2, 0, currVal_9); }); }
function View_AddDownloadDialogComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[10, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Audio Format"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 1, 8, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "valueChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("valueChange" === en)) {
        var pd_3 = ((_co.download.audio_format = $event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"]], { value: [0, "value"] }, { valueChange: "valueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { optionGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 17, { customTrigger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddDownloadDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_37 = _co.download.audio_format; _ck(_v, 14, 0, currVal_37); var currVal_38 = _co.audioFormats; _ck(_v, 20, 0, currVal_38); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).appearance == "standard"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).appearance == "fill"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).appearance == "outline"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).appearance == "legacy"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._control.errorState; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._canLabelFloat; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldLabelFloat(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._hasFloatingLabel(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._hideControlPlaceholder(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._control.disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._control.autofilled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._control.focused; var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color == "accent"); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color == "warn"); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("untouched"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("touched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("pristine"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("dirty"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("valid"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("invalid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._shouldForward("pending"); var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationsEnabled; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).id; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tabIndex; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._getAriaLabel(); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._getAriaLabelledby(); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).required.toString(); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled.toString(); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).errorState; var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._optionIds : null); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).multiple; var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._ariaDescribedby || null); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._getAriaActiveDescendant(); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).errorState; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).required; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).empty; _ck(_v, 12, 1, [currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36]); }); }
function View_AddDownloadDialogComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.download.srt_subs = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSlideToggle_0"], _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSlideToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Convert Subtitles to SRT "]))], function (_ck, _v) { var _co = _v.component; var currVal_13 = _co.download.srt_subs; _ck(_v, 3, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled ? null : (0 - 1)); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).checked; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).labelPosition == "before"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); }); }
function View_AddDownloadDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.download.audio_only = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSlideToggle_0"], _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSlideToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Audio Only "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddDownloadDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 11, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.download.download_subs = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSlideToggle_0"], _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSlideToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Download Subtitles "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddDownloadDialogComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "row"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "space-between center"; _ck(_v, 4, 0, currVal_2); var currVal_16 = _co.download.audio_only; _ck(_v, 8, 0, currVal_16); var currVal_17 = _co.download.audio_only; _ck(_v, 13, 0, currVal_17); var currVal_18 = "row"; _ck(_v, 15, 0, currVal_18); var currVal_19 = "space-between center"; _ck(_v, 16, 0, currVal_19); var currVal_33 = _co.download.download_subs; _ck(_v, 20, 0, currVal_33); var currVal_34 = _co.download.download_subs; _ck(_v, 25, 0, currVal_34); }, function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).id; var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled ? null : (0 - 1)); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).checked; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled; var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).labelPosition == "before"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).id; var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled ? null : (0 - 1)); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).checked; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled; var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).labelPosition == "before"); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 17, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]); }); }
function View_AddDownloadDialogComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[32, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.label; _ck(_v, 2, 0, currVal_9); }); }
function View_AddDownloadDialogComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_AddDownloadDialogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 102, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 98, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 9, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "url"], ["placeholder", "URL"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "keyup"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("keyup" === en)) {
        var pd_7 = (_co.parseURL() !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = ((_co.download.url = $event) !== false);
        ad = (pd_8 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddDownloadDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 39, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 16, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 18, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 19, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "file_filter"], ["placeholder", "File Filter"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.download.file_filter = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[18, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 26, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 27, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, [[27, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["File Filter Preset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, 1, 8, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "valueChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("valueChange" === en)) {
        var pd_3 = ((_co.download.file_filter = $event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"]], { value: [0, "value"] }, { valueChange: "valueChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { optionGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 34, { customTrigger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[25, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddDownloadDialogComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 35, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 16, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 35, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 36, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 37, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "http_username"], ["placeholder", "HTTP Username"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.download.http_username = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[35, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 16, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 42, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 43, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 44, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 46, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 47, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 48, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "http_password"], ["placeholder", "HTTP Password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.download.http_password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddDownloadDialogComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 9, "div", [["class", "mat-dialog-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "end end"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_18__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 2, "button", [["mat-flat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.save() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_23 = true; _ck(_v, 5, 0, currVal_23); var currVal_41 = ""; _ck(_v, 15, 0, currVal_41); var currVal_42 = "url"; var currVal_43 = _co.download.url; _ck(_v, 18, 0, currVal_42, currVal_43); var currVal_44 = "URL"; var currVal_45 = ""; _ck(_v, 21, 0, currVal_44, currVal_45); var currVal_46 = _co.youtubeURL; _ck(_v, 24, 0, currVal_46); var currVal_47 = "row"; _ck(_v, 26, 0, currVal_47); var currVal_70 = true; _ck(_v, 28, 0, currVal_70); var currVal_87 = "file_filter"; var currVal_88 = _co.download.file_filter; _ck(_v, 39, 0, currVal_87, currVal_88); var currVal_89 = "File Filter"; _ck(_v, 42, 0, currVal_89); var currVal_127 = _co.download.file_filter; _ck(_v, 58, 0, currVal_127); var currVal_128 = _co.presets; _ck(_v, 64, 0, currVal_128); var currVal_129 = "row"; _ck(_v, 66, 0, currVal_129); var currVal_152 = true; _ck(_v, 68, 0, currVal_152); var currVal_169 = "http_username"; var currVal_170 = _co.download.http_username; _ck(_v, 79, 0, currVal_169, currVal_170); var currVal_171 = "HTTP Username"; _ck(_v, 82, 0, currVal_171); var currVal_194 = true; _ck(_v, 85, 0, currVal_194); var currVal_211 = "http_password"; var currVal_212 = _co.download.http_password; _ck(_v, 96, 0, currVal_211, currVal_212); var currVal_213 = "HTTP Password"; _ck(_v, 99, 0, currVal_213); var currVal_214 = (_co.error != ""); _ck(_v, 102, 0, currVal_214); var currVal_215 = "row"; _ck(_v, 104, 0, currVal_215); var currVal_216 = "end end"; _ck(_v, 105, 0, currVal_216); var currVal_221 = "primary"; _ck(_v, 111, 0, currVal_221); }, function (_ck, _v) { var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "standard"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "fill"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "outline"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "legacy"); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.errorState; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._canLabelFloat; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldLabelFloat(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasFloatingLabel(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hideControlPlaceholder(); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.disabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.autofilled; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.focused; var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "accent"); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "warn"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("untouched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("touched"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pristine"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("dirty"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("valid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("invalid"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pending"); var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsEnabled; _ck(_v, 4, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).required ? "" : null); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isServer; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).placeholder; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required; var currVal_37 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isNativeSelect) || null); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._ariaDescribedby || null); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).errorState; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required.toString(); _ck(_v, 13, 1, [currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40]); var currVal_48 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).appearance == "standard"); var currVal_49 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).appearance == "fill"); var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).appearance == "outline"); var currVal_51 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).appearance == "legacy"); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._control.errorState; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._canLabelFloat; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldLabelFloat(); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._hasFloatingLabel(); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._hideControlPlaceholder(); var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._control.disabled; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._control.autofilled; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._control.focused; var currVal_60 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color == "accent"); var currVal_61 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).color == "warn"); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("untouched"); var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("touched"); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("pristine"); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("dirty"); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("valid"); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("invalid"); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._shouldForward("pending"); var currVal_69 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._animationsEnabled; _ck(_v, 27, 1, [currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69]); var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._isServer; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).id; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).placeholder; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).disabled; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).required; var currVal_83 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._isNativeSelect) || null); var currVal_84 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._ariaDescribedby || null); var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).errorState; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).required.toString(); _ck(_v, 36, 1, [currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86]); var currVal_90 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).appearance == "standard"); var currVal_91 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).appearance == "fill"); var currVal_92 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).appearance == "outline"); var currVal_93 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).appearance == "legacy"); var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._control.errorState; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._canLabelFloat; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldLabelFloat(); var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._hasFloatingLabel(); var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._hideControlPlaceholder(); var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._control.disabled; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._control.autofilled; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._control.focused; var currVal_102 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).color == "accent"); var currVal_103 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).color == "warn"); var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("untouched"); var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("touched"); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("pristine"); var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("dirty"); var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("valid"); var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("invalid"); var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._shouldForward("pending"); var currVal_111 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._animationsEnabled; _ck(_v, 44, 1, [currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111]); var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).id; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).tabIndex; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._getAriaLabel(); var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._getAriaLabelledby(); var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).required.toString(); var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).disabled.toString(); var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).errorState; var currVal_119 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._optionIds : null); var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).multiple; var currVal_121 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._ariaDescribedby || null); var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._getAriaActiveDescendant(); var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).disabled; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).errorState; var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).required; var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).empty; _ck(_v, 56, 1, [currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126]); var currVal_130 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).appearance == "standard"); var currVal_131 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).appearance == "fill"); var currVal_132 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).appearance == "outline"); var currVal_133 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).appearance == "legacy"); var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._control.errorState; var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._canLabelFloat; var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldLabelFloat(); var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._hasFloatingLabel(); var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._hideControlPlaceholder(); var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._control.disabled; var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._control.autofilled; var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._control.focused; var currVal_142 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).color == "accent"); var currVal_143 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).color == "warn"); var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("untouched"); var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("touched"); var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("pristine"); var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("dirty"); var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("valid"); var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("invalid"); var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._shouldForward("pending"); var currVal_151 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68)._animationsEnabled; _ck(_v, 67, 1, [currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151]); var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassUntouched; var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassTouched; var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassPristine; var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassDirty; var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassValid; var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassInvalid; var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).ngClassPending; var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._isServer; var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).id; var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).placeholder; var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).disabled; var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).required; var currVal_165 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._isNativeSelect) || null); var currVal_166 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._ariaDescribedby || null); var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).errorState; var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).required.toString(); _ck(_v, 76, 1, [currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168]); var currVal_172 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).appearance == "standard"); var currVal_173 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).appearance == "fill"); var currVal_174 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).appearance == "outline"); var currVal_175 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).appearance == "legacy"); var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._control.errorState; var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._canLabelFloat; var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldLabelFloat(); var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._hasFloatingLabel(); var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._hideControlPlaceholder(); var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._control.disabled; var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._control.autofilled; var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._control.focused; var currVal_184 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).color == "accent"); var currVal_185 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).color == "warn"); var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("untouched"); var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("touched"); var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("pristine"); var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("dirty"); var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("valid"); var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("invalid"); var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._shouldForward("pending"); var currVal_193 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._animationsEnabled; _ck(_v, 84, 1, [currVal_172, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193]); var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassUntouched; var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassTouched; var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassPristine; var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassDirty; var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassValid; var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassInvalid; var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassPending; var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._isServer; var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).id; var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).placeholder; var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).disabled; var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).required; var currVal_207 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._isNativeSelect) || null); var currVal_208 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99)._ariaDescribedby || null); var currVal_209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).errorState; var currVal_210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).required.toString(); _ck(_v, 93, 1, [currVal_195, currVal_196, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201, currVal_202, currVal_203, currVal_204, currVal_205, currVal_206, currVal_207, currVal_208, currVal_209, currVal_210]); var currVal_217 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).disabled || null); var currVal_218 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108)._animationMode === "NoopAnimations"); _ck(_v, 107, 0, currVal_217, currVal_218); var currVal_219 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).disabled || null); var currVal_220 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._animationMode === "NoopAnimations"); _ck(_v, 110, 0, currVal_219, currVal_220); }); }
function View_AddDownloadDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-download-dialog", [], null, null, null, View_AddDownloadDialogComponent_0, RenderType_AddDownloadDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_download_dialog_component__WEBPACK_IMPORTED_MODULE_24__["AddDownloadDialogComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogRef"], _services_downloads_service__WEBPACK_IMPORTED_MODULE_25__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_26__["CommService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddDownloadDialogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-download-dialog", _add_download_dialog_component__WEBPACK_IMPORTED_MODULE_24__["AddDownloadDialogComponent"], View_AddDownloadDialogComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/add-download-dialog/add-download-dialog.component.sass.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/add-download-dialog/add-download-dialog.component.sass.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["mat-form-field[_ngcontent-%COMP%] {\n  margin: 4px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9vcGVuZGlyZWN0b3JpZXMtZG93bmxvYWRlci1jaHJvbWUtZXh0ZW5zaW9uL3NyYy9hcHAvY29tcG9uZW50cy9hZGQtZG93bmxvYWQtZGlhbG9nL2FkZC1kb3dubG9hZC1kaWFsb2cuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1kb3dubG9hZC1kaWFsb2cvYWRkLWRvd25sb2FkLWRpYWxvZy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiA0cHg7IH1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/components/add-download-dialog/add-download-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/add-download-dialog/add-download-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddDownloadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDownloadDialogComponent", function() { return AddDownloadDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _models_download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/download */ "./src/app/models/download.ts");





var AddDownloadDialogComponent = /** @class */ (function () {
    function AddDownloadDialogComponent(dialogRef, downloadsService, commService) {
        this.dialogRef = dialogRef;
        this.downloadsService = downloadsService;
        this.commService = commService;
        this.error = "";
        this.download = new _models_download__WEBPACK_IMPORTED_MODULE_4__["Download"]();
        this.presets = [
            { value: "*720*", label: "720" },
            { value: "*1080*", label: "1080" },
            { value: "*S01*", label: "Season 1" },
            { value: "*S02*", label: "Season 2" },
            { value: "*S03*", label: "Season 3" },
            { value: "*S04*", label: "Season 4" },
            { value: "*S05*", label: "Season 5" },
            { value: "*S06*", label: "Season 6" },
            { value: "*S07*", label: "Season 7" },
            { value: "*S08*", label: "Season 8" },
            { value: "*S09*", label: "Season 9" },
            { value: "*S10*", label: "Season 10" },
        ];
        this.audioFormats = ["best", "aac", "flac", "mp3", "m4a", "opus", "vorbis", "wav"];
        this.youtubeURL = false;
    }
    AddDownloadDialogComponent.prototype.ngOnInit = function () {
    };
    AddDownloadDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    AddDownloadDialogComponent.prototype.save = function () {
        var _this = this;
        this.downloadsService.create(this.download).subscribe(function (result) {
            _this.commService.showMessage("Download added.");
            _this.dialogRef.close(false);
            _this.commService.reload();
        });
    };
    AddDownloadDialogComponent.prototype.parseURL = function () {
        this.youtubeURL = this.download.url.match(/youtu/) != null;
    };
    return AddDownloadDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/download_details/download_details.component.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/components/download_details/download_details.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_DownloadDetailsComponent, View_DownloadDetailsComponent_0, View_DownloadDetailsComponent_Host_0, DownloadDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DownloadDetailsComponent", function() { return RenderType_DownloadDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DownloadDetailsComponent_0", function() { return View_DownloadDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DownloadDetailsComponent_Host_0", function() { return View_DownloadDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadDetailsComponentNgFactory", function() { return DownloadDetailsComponentNgFactory; });
/* harmony import */ var _download_details_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download_details.component.sass.shim.ngstyle */ "./src/app/components/download_details/download_details.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/progress-spinner/typings/index.ngfactory */ "./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/expansion/typings/index.ngfactory */ "./node_modules/@angular/material/expansion/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../icon/icon.component.ngfactory */ "./src/app/components/icon/icon.component.ngfactory.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../icon/icon.component */ "./src/app/components/icon/icon.component.ts");
/* harmony import */ var _download_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./download_details.component */ "./src/app/components/download_details/download_details.component.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var styles_DownloadDetailsComponent = [_download_details_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DownloadDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DownloadDetailsComponent, data: {} });

function View_DownloadDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Started on ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.download.started_at, "medium")); _ck(_v, 1, 0, currVal_0); }); }
function View_DownloadDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Started on ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" Finished on ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.download.started_at, "medium")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.download.finished_at, "medium")); _ck(_v, 4, 0, currVal_1); }); }
function View_DownloadDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.download.error; _ck(_v, 1, 0, currVal_0); }); }
function View_DownloadDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["color", "warn"], ["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel(_co.download) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["cancel"]))], function (_ck, _v) { var currVal_2 = "warn"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); }); }
function View_DownloadDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["diameter", "24"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"], mode: [1, "mode"] }, null)], function (_ck, _v) { var currVal_7 = "24"; var currVal_8 = "indeterminate"; _ck(_v, 1, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._noopAnimations; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_3 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 0 : null); var currVal_4 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 100 : null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_DownloadDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "buttons"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.cancelling; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.cancelling; _ck(_v, 5, 0, currVal_2); }, null); }
function View_DownloadDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["color", "warn"], ["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.remove(_co.download) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete"]))], function (_ck, _v) { var currVal_2 = "warn"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); }); }
function View_DownloadDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["diameter", "24"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"], mode: [1, "mode"] }, null)], function (_ck, _v) { var currVal_7 = "24"; var currVal_8 = "indeterminate"; _ck(_v, 1, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._noopAnimations; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_3 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 0 : null); var currVal_4 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 100 : null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_DownloadDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["color", "primary"], ["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.queue(_co.download) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_to_queue"]))], function (_ck, _v) { var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); }); }
function View_DownloadDetailsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["diameter", "24"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"], mode: [1, "mode"] }, null)], function (_ck, _v) { var currVal_7 = "24"; var currVal_8 = "indeterminate"; _ck(_v, 1, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._noopAnimations; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_3 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 0 : null); var currVal_4 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 100 : null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_DownloadDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "buttons"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.removing; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.removing; _ck(_v, 5, 0, currVal_2); var currVal_3 = !_co.queueing; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.queueing; _ck(_v, 9, 0, currVal_4); }, null); }
function View_DownloadDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 27, "mat-expansion-panel", [["class", "download mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 9, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, { collapsedHeight: 0, expandedHeight: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, { value: 0, params: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 5, "mat-panel-title", [["class", "url mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "icon", [], null, null, null, _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_IconComponent_0"], _icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, null, 0, _icon_icon_component__WEBPACK_IMPORTED_MODULE_18__["IconComponent"], [], { icon: [0, "icon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "full-url"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" Added by ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 2, 5, "mat-action-row", [["class", "mat-action-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelActionRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = "link"; _ck(_v, 12, 0, currVal_10); var currVal_13 = (_co.download.status == "started"); _ck(_v, 18, 0, currVal_13); var currVal_14 = ((_co.download.status == "finished") || (_co.download.status == "error")); _ck(_v, 20, 0, currVal_14); var currVal_15 = (_co.download.status == "error"); _ck(_v, 22, 0, currVal_15); var currVal_16 = (_co.download.status == "queued"); _ck(_v, 26, 0, currVal_16); var currVal_17 = (((_co.download.status == "finished") || (_co.download.status == "error")) || (_co.download.status == "cancelled")); _ck(_v, 28, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).expanded; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._hasSpacing(); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).panel._headerId; var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled ? (0 - 1) : 0); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._getPanelId(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._isExpanded(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).panel.disabled; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._isExpanded(); var currVal_9 = _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._getExpandedState(), _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).expandedHeight)); _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = _co.download.url; _ck(_v, 14, 0, currVal_11); var currVal_12 = _co.download.user.email; _ck(_v, 16, 0, currVal_12); }); }
function View_DownloadDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "download-details", [], null, null, null, View_DownloadDetailsComponent_0, RenderType_DownloadDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _download_details_component__WEBPACK_IMPORTED_MODULE_19__["DownloadDetailsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_20__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_21__["CommService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DownloadDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("download-details", _download_details_component__WEBPACK_IMPORTED_MODULE_19__["DownloadDetailsComponent"], View_DownloadDetailsComponent_Host_0, { download: "download" }, {}, []);



/***/ }),

/***/ "./src/app/components/download_details/download_details.component.sass.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/download_details/download_details.component.sass.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".download[_ngcontent-%COMP%] {\n  margin: 4px; }\n  .download[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    padding-right: 8px; }\n  .download[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]   .full-url[_ngcontent-%COMP%] {\n    padding-top: 3px;\n    word-break: break-all; }\n  .download[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n    margin-right: 8px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9vcGVuZGlyZWN0b3JpZXMtZG93bmxvYWRlci1jaHJvbWUtZXh0ZW5zaW9uL3NyYy9hcHAvY29tcG9uZW50cy9kb3dubG9hZF9kZXRhaWxzL2Rvd25sb2FkX2RldGFpbHMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7RUFEYjtJQU1NLGtCQUFrQixFQUFBO0VBTnhCO0lBUU0sZ0JBQWdCO0lBQ2hCLHFCQUFxQixFQUFBO0VBVDNCO0lBYU0saUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rvd25sb2FkX2RldGFpbHMvZG93bmxvYWRfZGV0YWlscy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZCB7XG4gIG1hcmdpbjogNHB4O1xuICAudXJsIHtcbiAgICAvLyB3aWR0aDogODUlXG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXNcbiAgICBpY29uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDsgfVxuICAgIC5mdWxsLXVybCB7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsOyB9IH1cblxuICAuYnV0dG9ucyB7XG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9IH0gfVxuIl19 */"];



/***/ }),

/***/ "./src/app/components/download_details/download_details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/download_details/download_details.component.ts ***!
  \***************************************************************************/
/*! exports provided: DownloadDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadDetailsComponent", function() { return DownloadDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/download */ "./src/app/models/download.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");




var DownloadDetailsComponent = /** @class */ (function () {
    function DownloadDetailsComponent(downloadsService, commService) {
        this.downloadsService = downloadsService;
        this.commService = commService;
        this.removing = false;
        this.queueing = false;
        this.cancelling = false;
    }
    DownloadDetailsComponent.prototype.ngOnInit = function () {
    };
    DownloadDetailsComponent.prototype.remove = function (download) {
        this.removing = true;
        this.downloadsService.delete(download).subscribe();
        this.commService.showMessage("Download removed.");
        this.commService.reload();
    };
    DownloadDetailsComponent.prototype.queue = function (download) {
        this.queueing = true;
        this.downloadsService.queue(download).subscribe();
        this.commService.showMessage("Download queued.");
        this.commService.reload();
    };
    DownloadDetailsComponent.prototype.cancel = function (download) {
        this.cancelling = true;
        this.downloadsService.cancel(download).subscribe();
        this.commService.showMessage("Download cancelled.");
        this.commService.reload();
    };
    return DownloadDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/downloads/downloads.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/downloads/downloads.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_DownloadsComponent, View_DownloadsComponent_0, View_DownloadsComponent_Host_0, DownloadsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DownloadsComponent", function() { return RenderType_DownloadsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DownloadsComponent_0", function() { return View_DownloadsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DownloadsComponent_Host_0", function() { return View_DownloadsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponentNgFactory", function() { return DownloadsComponentNgFactory; });
/* harmony import */ var _downloads_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./downloads.component.sass.shim.ngstyle */ "./src/app/components/downloads/downloads.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */ "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../download_details/download_details.component.ngfactory */ "./src/app/components/download_details/download_details.component.ngfactory.js");
/* harmony import */ var _download_details_download_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../download_details/download_details.component */ "./src/app/components/download_details/download_details.component.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tabs/typings/index.ngfactory */ "./node_modules/@angular/material/tabs/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _downloads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./downloads.component */ "./src/app/components/downloads/downloads.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_DownloadsComponent = [_downloads_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DownloadsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DownloadsComponent, data: {} });

function View_DownloadsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "query"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_BAR_LOCATION"]]], { mode: [0, "mode"] }, null)], function (_ck, _v) { var currVal_3 = "query"; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isNoopAnimation; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_DownloadsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["list_alt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [["class", "mat-badge"], ["matBadgeColor", "accent"], ["matBadgeOverlap", "false"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], overlap: [1, "overlap"], content: [2, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Queued"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_12 = "accent"; var currVal_13 = "false"; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.queuedDownloads.length, ""); _ck(_v, 4, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).overlap; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "small"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "medium"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "large"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hasContent); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_DownloadsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "download-details", [], null, null, null, _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DownloadDetailsComponent_0"], _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DownloadDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _download_details_download_details_component__WEBPACK_IMPORTED_MODULE_11__["DownloadDetailsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_12__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_13__["CommService"]], { download: [0, "download"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DownloadsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["get_appw"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [["class", "mat-badge"], ["matBadgeColor", "accent"], ["matBadgeOverlap", "false"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], overlap: [1, "overlap"], content: [2, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Started"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_12 = "accent"; var currVal_13 = "false"; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.startedDownloads.length, ""); _ck(_v, 4, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).overlap; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "small"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "medium"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "large"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hasContent); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_DownloadsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "download-details", [], null, null, null, _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DownloadDetailsComponent_0"], _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DownloadDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _download_details_download_details_component__WEBPACK_IMPORTED_MODULE_11__["DownloadDetailsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_12__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_13__["CommService"]], { download: [0, "download"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DownloadsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["check"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [["class", "mat-badge"], ["matBadgeColor", "accent"], ["matBadgeOverlap", "false"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], overlap: [1, "overlap"], content: [2, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Finished"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_12 = "accent"; var currVal_13 = "false"; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.finishedDownloads.length, ""); _ck(_v, 4, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).overlap; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "small"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "medium"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "large"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hasContent); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_DownloadsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "download-details", [], null, null, null, _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DownloadDetailsComponent_0"], _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DownloadDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _download_details_download_details_component__WEBPACK_IMPORTED_MODULE_11__["DownloadDetailsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_12__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_13__["CommService"]], { download: [0, "download"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DownloadsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["error_outline "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [["class", "mat-badge"], ["matBadgeColor", "accent"], ["matBadgeOverlap", "false"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], overlap: [1, "overlap"], content: [2, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Failed"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_12 = "accent"; var currVal_13 = "false"; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.failedDownloads.length, ""); _ck(_v, 4, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).overlap; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "small"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "medium"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "large"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hasContent); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_DownloadsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "download-details", [], null, null, null, _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DownloadDetailsComponent_0"], _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DownloadDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _download_details_download_details_component__WEBPACK_IMPORTED_MODULE_11__["DownloadDetailsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_12__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_13__["CommService"]], { download: [0, "download"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DownloadsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [["class", "mat-badge"], ["matBadgeColor", "accent"], ["matBadgeOverlap", "false"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], [[2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], overlap: [1, "overlap"], content: [2, "content"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancelled"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_12 = "accent"; var currVal_13 = "false"; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.cancelledDownloads.length, ""); _ck(_v, 4, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).overlap; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAbove(); var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isAfter(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "small"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "medium"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).size === "large"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hasContent); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_DownloadsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "download-details", [], null, null, null, _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DownloadDetailsComponent_0"], _download_details_download_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DownloadDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _download_details_download_details_component__WEBPACK_IMPORTED_MODULE_11__["DownloadDetailsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_12__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_13__["CommService"]], { download: [0, "download"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DownloadsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DownloadsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 42, "mat-tab-group", [["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MAT_TABS_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 7, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, [[2, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 16777216, null, null, 7, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, [[4, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 16777216, null, null, 7, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, [[6, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 16777216, null, null, 7, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, [[8, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 16777216, null, null, 7, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, [[10, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_DownloadsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.busy; _ck(_v, 1, 0, currVal_0); _ck(_v, 6, 0); var currVal_3 = _co.queuedDownloads; _ck(_v, 12, 0, currVal_3); _ck(_v, 14, 0); var currVal_4 = _co.startedDownloads; _ck(_v, 20, 0, currVal_4); _ck(_v, 22, 0); var currVal_5 = _co.finishedDownloads; _ck(_v, 28, 0, currVal_5); _ck(_v, 30, 0); var currVal_6 = _co.failedDownloads; _ck(_v, 36, 0, currVal_6); _ck(_v, 38, 0); var currVal_7 = _co.cancelledDownloads; _ck(_v, 44, 0, currVal_7); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).dynamicHeight; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).headerPosition === "below"); _ck(_v, 2, 0, currVal_1, currVal_2); }); }
function View_DownloadsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "downloads", [], null, null, null, View_DownloadsComponent_0, RenderType_DownloadsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _downloads_component__WEBPACK_IMPORTED_MODULE_16__["DownloadsComponent"], [_services_downloads_service__WEBPACK_IMPORTED_MODULE_12__["DownloadsService"], _services_comm_service__WEBPACK_IMPORTED_MODULE_13__["CommService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DownloadsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("downloads", _downloads_component__WEBPACK_IMPORTED_MODULE_16__["DownloadsComponent"], View_DownloadsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/downloads/downloads.component.sass.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/components/downloads/downloads.component.sass.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".mat-tab-body-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9vcGVuZGlyZWN0b3JpZXMtZG93bmxvYWRlci1jaHJvbWUtZXh0ZW5zaW9uL3NyYy9hcHAvY29tcG9uZW50cy9kb3dubG9hZHMvZG93bmxvYWRzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rvd25sb2Fkcy9kb3dubG9hZHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7IH1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/components/downloads/downloads.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/downloads/downloads.component.ts ***!
  \*************************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");




var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent(downloadsService, commService, snackBar) {
        var _this = this;
        this.downloadsService = downloadsService;
        this.commService = commService;
        this.snackBar = snackBar;
        this.downloads = [];
        this.queuedDownloads = [];
        this.startedDownloads = [];
        this.finishedDownloads = [];
        this.failedDownloads = [];
        this.cancelledDownloads = [];
        this.busy = true;
        commService.reloadEvents$.subscribe(function (reload) {
            _this.getDownloads();
        });
        commService.snackBarEvents$.subscribe(function (message) {
            _this.showMessage(message);
        });
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    DownloadsComponent.prototype.getDownloads = function () {
        var _this = this;
        this.busy = true;
        this.resetDownloads();
        this.downloadsService.get().subscribe(function (downloads) {
            _this.downloads = downloads;
            _this.filterAllDownloads();
            _this.busy = false;
        });
    };
    DownloadsComponent.prototype.showMessage = function (message) {
        this.snackBar.open(message, "", { duration: 2000 });
    };
    DownloadsComponent.prototype.resetDownloads = function () {
        this.downloads = [];
        this.queuedDownloads = [];
        this.startedDownloads = [];
        this.finishedDownloads = [];
        this.failedDownloads = [];
        this.cancelledDownloads = [];
    };
    DownloadsComponent.prototype.filterAllDownloads = function () {
        this.queuedDownloads = this.filterDownloads("queued");
        this.startedDownloads = this.filterDownloads("started");
        this.finishedDownloads = this.filterDownloads("finished");
        this.failedDownloads = this.filterDownloads("error");
        this.cancelledDownloads = this.filterDownloads("cancelled");
    };
    DownloadsComponent.prototype.filterDownloads = function (status) {
        return this.downloads.filter(function (download, index, array) { return download.status == status; });
    };
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/components/icon/icon.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/icon/icon.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_IconComponent, View_IconComponent_0, View_IconComponent_Host_0, IconComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IconComponent", function() { return RenderType_IconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IconComponent_0", function() { return View_IconComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IconComponent_Host_0", function() { return View_IconComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponentNgFactory", function() { return IconComponentNgFactory; });
/* harmony import */ var _icon_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.component.sass.shim.ngstyle */ "./src/app/components/icon/icon.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.component */ "./src/app/components/icon/icon.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_IconComponent = [_icon_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IconComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IconComponent, data: {} });

function View_IconComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon; _ck(_v, 1, 0, currVal_0); }); }
function View_IconComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "icon", [], null, null, null, View_IconComponent_0, RenderType_IconComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IconComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("icon", _icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], View_IconComponent_Host_0, { icon: "icon" }, {}, []);



/***/ }),

/***/ "./src/app/components/icon/icon.component.sass.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/icon/icon.component.sass.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zYXNzIn0= */"];



/***/ }),

/***/ "./src/app/components/icon/icon.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var IconComponent = /** @class */ (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/components/settings-dialog/settings-dialog.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/components/settings-dialog/settings-dialog.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_SettingsDialogComponent, View_SettingsDialogComponent_0, View_SettingsDialogComponent_Host_0, SettingsDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SettingsDialogComponent", function() { return RenderType_SettingsDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SettingsDialogComponent_0", function() { return View_SettingsDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SettingsDialogComponent_Host_0", function() { return View_SettingsDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDialogComponentNgFactory", function() { return SettingsDialogComponentNgFactory; });
/* harmony import */ var _settings_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-dialog.component.sass.shim.ngstyle */ "./src/app/components/settings-dialog/settings-dialog.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _settings_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings-dialog.component */ "./src/app/components/settings-dialog/settings-dialog.component.ts");
/* harmony import */ var _services_chrome_storage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/chrome-storage.service */ "./src/app/services/chrome-storage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_SettingsDialogComponent = [_settings_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SettingsDialogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SettingsDialogComponent, data: {} });

function View_SettingsDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_SettingsDialogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 44, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 40, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 9, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "server"], ["placeholder", "Server"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.server = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "port"], ["placeholder", "Port"], ["required", ""], ["type", "number"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(false) !== false);
        ad = (pd_7 && ad);
    } if (("focus" === en)) {
        var pd_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(true) !== false);
        ad = (pd_8 && ad);
    } if (("input" === en)) {
        var pd_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._onInput() !== false);
        ad = (pd_9 && ad);
    } if (("ngModelChange" === en)) {
        var pd_10 = ((_co.port = $event) !== false);
        ad = (pd_10 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_be"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_be"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SettingsDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 9, "div", [["class", "mat-dialog-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "end end"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "button", [["mat-flat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.save() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_23 = true; _ck(_v, 5, 0, currVal_23); var currVal_41 = ""; _ck(_v, 15, 0, currVal_41); var currVal_42 = "server"; var currVal_43 = _co.server; _ck(_v, 18, 0, currVal_42, currVal_43); var currVal_44 = "Server"; var currVal_45 = ""; _ck(_v, 21, 0, currVal_44, currVal_45); var currVal_68 = true; _ck(_v, 24, 0, currVal_68); var currVal_86 = ""; _ck(_v, 35, 0, currVal_86); var currVal_87 = "port"; var currVal_88 = _co.port; _ck(_v, 38, 0, currVal_87, currVal_88); var currVal_89 = "Port"; var currVal_90 = ""; var currVal_91 = "number"; _ck(_v, 41, 0, currVal_89, currVal_90, currVal_91); var currVal_92 = (_co.error != ""); _ck(_v, 44, 0, currVal_92); var currVal_93 = "row"; _ck(_v, 46, 0, currVal_93); var currVal_94 = "end end"; _ck(_v, 47, 0, currVal_94); var currVal_99 = "primary"; _ck(_v, 53, 0, currVal_99); }, function (_ck, _v) { var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "standard"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "fill"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "outline"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "legacy"); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.errorState; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._canLabelFloat; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldLabelFloat(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasFloatingLabel(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hideControlPlaceholder(); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.disabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.autofilled; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.focused; var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "accent"); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "warn"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("untouched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("touched"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pristine"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("dirty"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("valid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("invalid"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pending"); var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsEnabled; _ck(_v, 4, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).required ? "" : null); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isServer; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).placeholder; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required; var currVal_37 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isNativeSelect) || null); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._ariaDescribedby || null); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).errorState; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required.toString(); _ck(_v, 13, 1, [currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40]); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "standard"); var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "fill"); var currVal_48 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "outline"); var currVal_49 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "legacy"); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.errorState; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._canLabelFloat; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldLabelFloat(); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._hasFloatingLabel(); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._hideControlPlaceholder(); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.disabled; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.autofilled; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.focused; var currVal_58 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color == "accent"); var currVal_59 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color == "warn"); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("untouched"); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("touched"); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("pristine"); var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("dirty"); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("valid"); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("invalid"); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("pending"); var currVal_67 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationsEnabled; _ck(_v, 23, 1, [currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67]); var currVal_69 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).required ? "" : null); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isServer; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).id; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).placeholder; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required; var currVal_82 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isNativeSelect) || null); var currVal_83 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._ariaDescribedby || null); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errorState; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required.toString(); _ck(_v, 32, 1, [currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85]); var currVal_95 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled || null); var currVal_96 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._animationMode === "NoopAnimations"); _ck(_v, 49, 0, currVal_95, currVal_96); var currVal_97 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled || null); var currVal_98 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._animationMode === "NoopAnimations"); _ck(_v, 52, 0, currVal_97, currVal_98); }); }
function View_SettingsDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-settings-dialog", [], null, null, null, View_SettingsDialogComponent_0, RenderType_SettingsDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _settings_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SettingsDialogComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _services_chrome_storage_service__WEBPACK_IMPORTED_MODULE_19__["ChromeStorageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SettingsDialogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-settings-dialog", _settings_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SettingsDialogComponent"], View_SettingsDialogComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/settings-dialog/settings-dialog.component.sass.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/settings-dialog/settings-dialog.component.sass.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtZGlhbG9nL3NldHRpbmdzLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"];



/***/ }),

/***/ "./src/app/components/settings-dialog/settings-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings-dialog/settings-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDialogComponent", function() { return SettingsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_chrome_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chrome-storage.service */ "./src/app/services/chrome-storage.service.ts");
/* harmony import */ var _models_server_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/server-settings */ "./src/app/models/server-settings.ts");




var SettingsDialogComponent = /** @class */ (function () {
    function SettingsDialogComponent(dialogRef, chromeStorageService) {
        this.dialogRef = dialogRef;
        this.chromeStorageService = chromeStorageService;
        this.error = "";
    }
    SettingsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chromeStorageService.get().then(function (res) {
            _this.server = res.server;
            _this.port = res.port;
            _this.authorizationToken = res.authorizationToken;
        }, function (error) { return console.error(error); });
    };
    SettingsDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    SettingsDialogComponent.prototype.save = function () {
        var _this = this;
        var serverSettings = new _models_server_settings__WEBPACK_IMPORTED_MODULE_3__["ServerSettings"](this.server, this.port, this.authorizationToken);
        this.chromeStorageService.set(serverSettings).then(function (res) {
            _this.dialogRef.close(true);
        }, function (error) { return console.error(error); });
    };
    return SettingsDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in-dialog/sign-in-dialog.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sign-in-dialog/sign-in-dialog.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_SignInDialogComponent, View_SignInDialogComponent_0, View_SignInDialogComponent_Host_0, SignInDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SignInDialogComponent", function() { return RenderType_SignInDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignInDialogComponent_0", function() { return View_SignInDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignInDialogComponent_Host_0", function() { return View_SignInDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInDialogComponentNgFactory", function() { return SignInDialogComponentNgFactory; });
/* harmony import */ var _sign_in_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-dialog.component.sass.shim.ngstyle */ "./src/app/components/sign-in-dialog/sign-in-dialog.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sign-in-dialog.component */ "./src/app/components/sign-in-dialog/sign-in-dialog.component.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_SignInDialogComponent = [_sign_in_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SignInDialogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SignInDialogComponent, data: {} });

function View_SignInDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_SignInDialogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 43, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 39, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 9, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "email"], ["placeholder", "Email"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.email = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 7520256, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { floatLabel: [0, "floatLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 1, 9, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "password"], ["placeholder", "Password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignInDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "div", [["class", "mat-dialog-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "end end"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logIn() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Sign in"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_23 = true; _ck(_v, 5, 0, currVal_23); var currVal_41 = ""; _ck(_v, 15, 0, currVal_41); var currVal_42 = "email"; var currVal_43 = _co.email; _ck(_v, 18, 0, currVal_42, currVal_43); var currVal_44 = "Email"; var currVal_45 = ""; _ck(_v, 21, 0, currVal_44, currVal_45); var currVal_68 = true; _ck(_v, 24, 0, currVal_68); var currVal_86 = ""; _ck(_v, 34, 0, currVal_86); var currVal_87 = "password"; var currVal_88 = _co.password; _ck(_v, 37, 0, currVal_87, currVal_88); var currVal_89 = "Password"; var currVal_90 = ""; var currVal_91 = "password"; _ck(_v, 40, 0, currVal_89, currVal_90, currVal_91); var currVal_92 = (_co.error != ""); _ck(_v, 43, 0, currVal_92); var currVal_93 = "row"; _ck(_v, 45, 0, currVal_93); var currVal_94 = "end end"; _ck(_v, 46, 0, currVal_94); var currVal_97 = "primary"; _ck(_v, 49, 0, currVal_97); }, function (_ck, _v) { var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "standard"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "fill"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "outline"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "legacy"); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.errorState; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._canLabelFloat; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldLabelFloat(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasFloatingLabel(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hideControlPlaceholder(); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.disabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.autofilled; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.focused; var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "accent"); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "warn"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("untouched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("touched"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pristine"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("dirty"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("valid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("invalid"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pending"); var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsEnabled; _ck(_v, 4, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).required ? "" : null); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isServer; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).placeholder; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required; var currVal_37 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isNativeSelect) || null); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._ariaDescribedby || null); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).errorState; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required.toString(); _ck(_v, 13, 1, [currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40]); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "standard"); var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "fill"); var currVal_48 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "outline"); var currVal_49 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).appearance == "legacy"); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.errorState; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._canLabelFloat; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldLabelFloat(); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._hasFloatingLabel(); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._hideControlPlaceholder(); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.disabled; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.autofilled; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._control.focused; var currVal_58 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color == "accent"); var currVal_59 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color == "warn"); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("untouched"); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("touched"); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("pristine"); var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("dirty"); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("valid"); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("invalid"); var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._shouldForward("pending"); var currVal_67 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationsEnabled; _ck(_v, 23, 1, [currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67]); var currVal_69 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).required ? "" : null); var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassUntouched; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassTouched; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassPristine; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassDirty; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassValid; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassInvalid; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).ngClassPending; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._isServer; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).id; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).placeholder; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required; var currVal_82 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._isNativeSelect) || null); var currVal_83 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._ariaDescribedby || null); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).errorState; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required.toString(); _ck(_v, 32, 1, [currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85]); var currVal_95 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).disabled || null); var currVal_96 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._animationMode === "NoopAnimations"); _ck(_v, 48, 0, currVal_95, currVal_96); }); }
function View_SignInDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sign-in-dialog", [], null, null, null, View_SignInDialogComponent_0, RenderType_SignInDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SignInDialogComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _services_comm_service__WEBPACK_IMPORTED_MODULE_19__["CommService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SignInDialogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sign-in-dialog", _sign_in_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SignInDialogComponent"], View_SignInDialogComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/sign-in-dialog/sign-in-dialog.component.sass.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/sign-in-dialog/sign-in-dialog.component.sass.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi1kaWFsb2cvc2lnbi1pbi1kaWFsb2cuY29tcG9uZW50LnNhc3MifQ== */"];



/***/ }),

/***/ "./src/app/components/sign-in-dialog/sign-in-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/sign-in-dialog/sign-in-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: SignInDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInDialogComponent", function() { return SignInDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");




var SignInDialogComponent = /** @class */ (function () {
    function SignInDialogComponent(dialogRef, commService, authService) {
        this.dialogRef = dialogRef;
        this.commService = commService;
        this.authService = authService;
        this.error = "";
    }
    SignInDialogComponent.prototype.ngOnInit = function () {
    };
    SignInDialogComponent.prototype.logIn = function () {
        var _this = this;
        this.authService.signIn(this.email, this.password).subscribe(function (res) {
            if (res) {
                _this.dialogRef.close();
                _this.commService.signedIn = true;
                _this.commService.reload();
            }
            else {
                _this.error = "Invalid authorization";
            }
        }, function (error) {
            console.error(error);
            _this.error = error.error.errors.join(", ");
        });
    };
    return SignInDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/topbar/topbar.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_TopbarComponent, View_TopbarComponent_0, View_TopbarComponent_Host_0, TopbarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TopbarComponent", function() { return RenderType_TopbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopbarComponent_0", function() { return View_TopbarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopbarComponent_Host_0", function() { return View_TopbarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponentNgFactory", function() { return TopbarComponentNgFactory; });
/* harmony import */ var _topbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.component.sass.shim.ngstyle */ "./src/app/components/topbar/topbar.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/progress-spinner/typings/index.ngfactory */ "./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _topbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topbar.component */ "./src/app/components/topbar/topbar.component.ts");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_TopbarComponent = [_topbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TopbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TopbarComponent, data: {} });

function View_TopbarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.settings() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Downloader"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "span", [["class", "spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.signIn() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["lock_open"]))], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 13, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations"); _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).inline; var currVal_7 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "warn")); _ck(_v, 12, 0, currVal_6, currVal_7); }); }
function View_TopbarComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["color", "accent"], ["diameter", "24"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { color: [0, "color"], diameter: [1, "diameter"], mode: [2, "mode"] }, null)], function (_ck, _v) { var currVal_7 = "accent"; var currVal_8 = "24"; var currVal_9 = "indeterminate"; _ck(_v, 1, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._noopAnimations; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_3 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 0 : null); var currVal_4 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 100 : null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_TopbarComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete_sweep"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_2, currVal_3); }); }
function View_TopbarComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["color", "accent"], ["diameter", "24"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { color: [0, "color"], diameter: [1, "diameter"], mode: [2, "mode"] }, null)], function (_ck, _v) { var currVal_7 = "accent"; var currVal_8 = "24"; var currVal_9 = "indeterminate"; _ck(_v, 1, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._noopAnimations; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter; var currVal_3 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 0 : null); var currVal_4 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate") ? 100 : null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_TopbarComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["autorenew"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_2, currVal_3); }); }
function View_TopbarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.settings() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Downloader"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "span", [["class", "spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopbarComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopbarComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopbarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopbarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.signOut() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["lock"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_4 = _co.clearing; _ck(_v, 11, 0, currVal_4); var currVal_5 = !_co.clearing; _ck(_v, 13, 0, currVal_5); var currVal_6 = _co.reloading; _ck(_v, 15, 0, currVal_6); var currVal_7 = !_co.reloading; _ck(_v, 17, 0, currVal_7); _ck(_v, 21, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._animationMode === "NoopAnimations"); _ck(_v, 18, 0, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).inline; var currVal_11 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color !== "warn")); _ck(_v, 20, 0, currVal_10, currVal_11); }); }
function View_TopbarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_TopbarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_TopbarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); var currVal_3 = !_co.commService.signedIn; _ck(_v, 4, 0, currVal_3); var currVal_4 = _co.commService.signedIn; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_TopbarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "topbar", [], null, null, null, View_TopbarComponent_0, RenderType_TopbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _topbar_component__WEBPACK_IMPORTED_MODULE_14__["TopbarComponent"], [_services_comm_service__WEBPACK_IMPORTED_MODULE_15__["CommService"], _services_downloads_service__WEBPACK_IMPORTED_MODULE_16__["DownloadsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TopbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("topbar", _topbar_component__WEBPACK_IMPORTED_MODULE_14__["TopbarComponent"], View_TopbarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/topbar/topbar.component.sass.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.sass.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9vcGVuZGlyZWN0b3JpZXMtZG93bmxvYWRlci1jaHJvbWUtZXh0ZW5zaW9uL3NyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvOyB9XG4iXX0= */"];



/***/ }),

/***/ "./src/app/components/topbar/topbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_downloads_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/downloads.service */ "./src/app/services/downloads.service.ts");
/* harmony import */ var _settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings-dialog/settings-dialog.component */ "./src/app/components/settings-dialog/settings-dialog.component.ts");






// import { AddDownloadDialogComponent } from '../add-download-dialog/add-download-dialog.component';
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(commService, downloadsService, authService, dialog) {
        this.commService = commService;
        this.downloadsService = downloadsService;
        this.authService = authService;
        this.dialog = dialog;
        this.clearing = false;
        this.reloading = false;
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent.prototype.settings = function () {
        this.dialog.open(_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SettingsDialogComponent"]);
    };
    TopbarComponent.prototype.reload = function () {
        this.reloading = true;
        this.commService.reload();
        this.reloading = false;
    };
    TopbarComponent.prototype.clear = function () {
        this.clearing = true;
        this.downloadsService.clear().subscribe();
        this.commService.showMessage("Downloads cleared.");
        this.commService.reload();
        this.clearing = false;
    };
    // addDownload() {
    //   let dialogRef = this.dialog.open(AddDownloadDialogComponent);
    // }
    TopbarComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().subscribe(function (result) { return _this.commService.showMessage("Signed out."); }, function (error) { return console.error(error); });
    };
    TopbarComponent.prototype.signIn = function () {
        this.commService.signIn();
    };
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/token-interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token-interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor, TokenInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorProviders", function() { return TokenInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_comm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/comm.service */ "./src/app/services/comm.service.ts");


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(commService) {
        this.commService = commService;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        if (this.commService.serverSettings && this.commService.serverSettings.authorizationToken) {
            return next.handle(req.clone({
                headers: req.headers.append("Authorization", this.commService.serverSettings.authorizationToken)
            }));
        }
        return next.handle(req);
    };
    return TokenInterceptor;
}());

var TokenInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: TokenInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/models/download.ts":
/*!************************************!*\
  !*** ./src/app/models/download.ts ***!
  \************************************/
/*! exports provided: Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
var Download = /** @class */ (function () {
    function Download() {
    }
    Download.prototype.toJSON = function () {
        this.parseUrl();
        return JSON.stringify({
            "url": this.url,
            "audio_format": this.audio_format,
            "audio_only": this.audio_only,
            "download_subs": this.download_subs,
            "srt_subs": this.srt_subs,
            "file_filter": this.file_filter,
            "http_username": this.http_username,
            "http_password": this.http_password
        });
    };
    Download.prototype.parseUrl = function () {
        if (this.url.match(/\:\/\/released.tv\/files\/(.*)/) != null) {
            this.http_username = "released";
            this.http_password = "released";
        }
    };
    return Download;
}());



/***/ }),

/***/ "./src/app/models/server-settings.ts":
/*!*******************************************!*\
  !*** ./src/app/models/server-settings.ts ***!
  \*******************************************/
/*! exports provided: ServerSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSettings", function() { return ServerSettings; });
var ServerSettings = /** @class */ (function () {
    function ServerSettings(server, port, authorizationToken) {
        if (server === void 0) { server = "http://localhost"; }
        if (port === void 0) { port = 3000; }
        if (authorizationToken === void 0) { authorizationToken = null; }
        this.server = server;
        this.port = port;
        this.authorizationToken = authorizationToken;
    }
    ServerSettings.prototype.toJSON = function () {
        return JSON.stringify({ server: this.server, port: this.port, authorizationToken: this.authorizationToken });
    };
    return ServerSettings;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _comm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _chrome_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrome-storage.service */ "./src/app/services/chrome-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var AuthService = /** @class */ (function () {
    function AuthService(httpClient, commService, chromeStorageService) {
        this.httpClient = httpClient;
        this.commService = commService;
        this.chromeStorageService = chromeStorageService;
    }
    AuthService.prototype.signIn = function (email, password) {
        var _this = this;
        var signInUrl = this.buildFullPath("/users/sign_in");
        var data = { user: { email: email, password: password } };
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.httpClient.post(signInUrl, data).subscribe(function (response) {
                _this.commService.serverSettings.authorizationToken = response["token"];
                _this.chromeStorageService.set(_this.commService.serverSettings).then(function (result) {
                    observer.next(true);
                });
            }, function (error) { return observer.next(false); });
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.commService.signOut();
            _this.chromeStorageService.set(_this.commService.serverSettings).then(function (result) {
                observer.next(true);
            });
        });
    };
    AuthService.prototype.buildFullPath = function (path) {
        return this.commService.serverSettings.server + ":" + this.commService.serverSettings.port + path;
    };
    AuthService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"]({ factory: function AuthService_Factory() { return new AuthService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_comm_service__WEBPACK_IMPORTED_MODULE_2__["CommService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_chrome_storage_service__WEBPACK_IMPORTED_MODULE_3__["ChromeStorageService"])); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chrome-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/chrome-storage.service.ts ***!
  \****************************************************/
/*! exports provided: ChromeStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeStorageService", function() { return ChromeStorageService; });
/* harmony import */ var _models_server_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/server-settings */ "./src/app/models/server-settings.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChromeStorageService = /** @class */ (function () {
    function ChromeStorageService() {
        this.storeKey = "serverSettings";
    }
    ChromeStorageService.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageData = localStorage.getItem(_this.storeKey);
            if (storageData != null) {
                var data = JSON.parse(storageData);
                resolve(new _models_server_settings__WEBPACK_IMPORTED_MODULE_0__["ServerSettings"](data.server, data.port, data.authorizationToken));
            }
            else {
                resolve(new _models_server_settings__WEBPACK_IMPORTED_MODULE_0__["ServerSettings"]());
            }
        });
    };
    ChromeStorageService.prototype.set = function (serverSettings) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                localStorage.setItem(_this.storeKey, serverSettings.toJSON());
                resolve(true);
            }
            catch (_) {
                resolve(false);
            }
        });
    };
    ChromeStorageService.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            localStorage.removeItem(_this.storeKey);
            resolve(true);
        });
    };
    ChromeStorageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function ChromeStorageService_Factory() { return new ChromeStorageService(); }, token: ChromeStorageService, providedIn: "root" });
    return ChromeStorageService;
}());



/***/ }),

/***/ "./src/app/services/comm.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/comm.service.ts ***!
  \******************************************/
/*! exports provided: CommService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommService", function() { return CommService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommService = /** @class */ (function () {
    function CommService() {
        this.signedIn = false;
        this.reloadEvents$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signInEvents$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snackBarEvents$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CommService.prototype.reload = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 500; }
        setTimeout(function () { return _this.reloadEvents$.emit(true); }, timeout);
    };
    CommService.prototype.signIn = function () {
        var _this = this;
        setTimeout(function () { return _this.signInEvents$.emit(true); }, 500);
    };
    CommService.prototype.signOut = function () {
        this.serverSettings.authorizationToken = null;
        this.signedIn = false;
    };
    CommService.prototype.showMessage = function (message) {
        this.snackBarEvents$.emit(message);
    };
    CommService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function CommService_Factory() { return new CommService(); }, token: CommService, providedIn: "root" });
    return CommService;
}());



/***/ }),

/***/ "./src/app/services/downloads.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/downloads.service.ts ***!
  \***********************************************/
/*! exports provided: DownloadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsService", function() { return DownloadsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _comm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comm.service */ "./src/app/services/comm.service.ts");
/* harmony import */ var _chrome_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chrome-storage.service */ "./src/app/services/chrome-storage.service.ts");
/* harmony import */ var _models_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/download */ "./src/app/models/download.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var DownloadsService = /** @class */ (function () {
    function DownloadsService(httpClient, chromeStorageService, commService) {
        this.httpClient = httpClient;
        this.chromeStorageService = chromeStorageService;
        this.commService = commService;
    }
    DownloadsService.prototype.get = function () {
        var url = this.buildFullPath("/api/v1/downloads.json");
        return this.httpClient.get(url);
    };
    DownloadsService.prototype.create = function (download) {
        var url = this.buildFullPath("/api/v1/downloads");
        return this.httpClient.post(url, { "download": download.toJSON() });
    };
    DownloadsService.prototype.createFromBackgroundJS = function (url) {
        var _this = this;
        this.chromeStorageService.get().then(function (serverSettings) {
            _this.commService.serverSettings = serverSettings;
            var createUrl = _this.buildFullPath("/api/v1/downloads");
            var download = new _models_download__WEBPACK_IMPORTED_MODULE_3__["Download"]();
            download.url = url;
            _this.httpClient.post(createUrl, { "download": download.toJSON() }).subscribe();
        }, function (error) { return console.error("nope"); });
    };
    DownloadsService.prototype.cancel = function (download) {
        var url = this.buildFullPath("/api/v1/downloads/" + download.id + "/cancel");
        return this.httpClient.put(url, {});
    };
    DownloadsService.prototype.delete = function (download) {
        var url = this.buildFullPath("/api/v1/downloads/" + download.id);
        return this.httpClient.delete(url);
    };
    DownloadsService.prototype.queue = function (download) {
        var url = this.buildFullPath("/api/v1/downloads/" + download.id + "/queue");
        return this.httpClient.put(url, {});
    };
    DownloadsService.prototype.clear = function () {
        var url = this.buildFullPath("/api/v1/downloads/clear");
        return this.httpClient.post(url, {});
    };
    DownloadsService.prototype.buildFullPath = function (path) {
        return this.commService.serverSettings.server + ":" + this.commService.serverSettings.port + path;
    };
    DownloadsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"]({ factory: function DownloadsService_Factory() { return new DownloadsService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_chrome_storage_service__WEBPACK_IMPORTED_MODULE_2__["ChromeStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_comm_service__WEBPACK_IMPORTED_MODULE_1__["CommService"])); }, token: DownloadsService, providedIn: "root" });
    return DownloadsService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Real Code/personal/opendirectories-downloader-chrome-extension/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map