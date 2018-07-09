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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".supermassivebox{\n    height: 100vh;\n}\n\n.bigbox{\n    width: 100%;\n    max-width: 500px;\n    height: 80%;\n}\n\n.hugebox{\n    height: 100%;\n    overflow: scroll;\n}\n\n.sortbuttons{\n\n}\n\n.appheader{\n    height: 130px;\n}\n\n.filters{\n\n}\n\n.circle{\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    padding: 6px;\n    font-size: 10px;\n    line-height: 1.42;\n    border-radius: 15px;\n}\n\n.oneclick{\n    color: red;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid supermassivebox\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"text-center mt-5\">todo</h1>\n    </div>\n  </div>\n\n  <!-- Where the todo box is going to be -->\n  <div class=\"d-flex flex-row justify-content-center hugebox\">\n    <!-- Container for the whole todo box -->\n    <div class=\"d-flex flex-column bigbox px-4 shadow-lg\">\n      <div *ngIf=\"!newtask\" class=\"appheader\">\n        <!-- Sorting buttons -->\n        <div class=\"d-flex flex-row sorters justify-content-end\">\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-sm sortbuttons px-1\">\n            Alphabetical\n            <i class=\"fas fa-sort-alpha-down\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-sm sortbuttons px-1\">\n            Due Date\n            <i class=\"fas fa-calendar-alt\"></i>\n            <span class=\"px-1\">\n              <i class=\"fas fa-sort-down\"></i>\n            </span>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-secondary btn-sm sortbuttons px-1\">\n            Date Created\n            <i class=\"fas fa-sort-numeric-down\"></i>\n          </button>\n        </div>\n        <!-- /Sorting Buttons -->\n        <!-- Create Button -->\n        <div class=\"d-flex flex-row justify-content-between align-items-center pb-3\">\n          <div>\n            <button class=\"btn btn-outline-dark btn-block\" (click)=\"newTodo()\">New Event</button>\n          </div>\n          <div class=\"d-flex flex-row filters align-items-center\">\n            Filter:\n            <div class=\"circles\">\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(1)\">Mon</button>\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(2)\">Tue</button>\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(3)\">Wed</button>\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(4)\">Thu</button>\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(5)\">Fri</button>\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(6)\">Sat</button>\n              <button class=\"btn btn-outline-primary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"filterPress(0)\">Sun</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"newtask\" class=\"appheader d-flex flex-column\">\n        <!-- First Row -->\n        <div class=\"d-flex flex-row justify-content-end\">\n          <div class=\"mr-auto\">New Task</div>\n          <button class=\"btn btn-outline-dark btn-sm\" (click)=\"newTodo()\">\n            <i class=\"fas fa-times-circle\"></i>\n          </button>\n        </div>\n        <!-- Second Row -->\n        <div class=\"d-flex flex-row justify-content-end\">\n          <input type=\"text\" [(ngModel)]=\"newobj.todoname\" placeholder=\"Task Name\" class=\"mr-auto w-75 form-control is-required\">\n          <button class=\"btn btn-outline-dark btn-sm px-3\" (click)=\"addNewTask()\">Add</button>\n        </div>\n        <!-- Third Row -->\n        <div class=\"d-flex flex-row justify-content-between\">\n          <div class=\"mr-auto\">\n            Priority:\n            <select [(ngModel)]=\"newobj.priority\">\n              <option value=\"1\">High !!</option>\n              <option value=\"4\" selected=\"selected\">Normal </option>\n              <option value=\"7\">Low --</option>\n            </select>\n          </div>\n          <div>\n            Due Date:\n            <input type=\"checkbox\" [(ngModel)]=\"newobjdate\">\n          </div>\n          <div class=\"pl-4\">\n            <fieldset [disabled]=\"!newobjdate\">\n              <input type=\"date\" [(ngModel)]=\"newobj.expiration\" (change)=\"parseDate()\">\n            </fieldset>\n          </div>\n        </div>\n        <!-- Fourth Row -->\n        <div class=\"d-flex flex-row\">\n          <div class=\"circles ml-auto\">\n            Repeat:\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(1)\">Mon</button>\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(2)\">Tue</button>\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(3)\">Wed</button>\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(4)\">Thu</button>\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(5)\">Fri</button>\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(6)\">Sat</button>\n            <button class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPress(0)\">Sun</button>\n          </div>\n        </div>\n      </div>\n      <!-- /Create Button -->\n      <div class=\"row\"><div class=\"col-12\"><hr></div></div>\n      <!-- DISPLAY LIST STARTS HERE -->\n      <div *ngFor=\"let chore of todos; let i = index\">\n        <div *ngIf=\"!chore.editable && displayFilter(i)\" class=\"d-flex flex-row\" (mouseover)=\"hover=i\" (mouseleave)=\"hover=-1\">\n          {{ chore.todoname }}\n          <div class=\"ml-auto\">\n            <span *ngIf=\"!anyedited && hover == i\" (click)=\"editTodo(i)\">\n              <i class=\"fas fa-pencil-alt\"></i>\n            </span>\n            <span *ngIf=\"!anyedited && hover == i\" (click)=\"deleteTodo(i)\" [ngClass]=\"tbdeleted == i ? ' modbuttons oneclick' : 'modbuttons'\">\n              <i class=\"fas fa-trash\"></i>\n            </span>\n          </div>\n        </div>\n        <div *ngIf=\"chore.editable\">\n          <!-- First Row -->\n          <div class=\"d-flex flex-row justify-content-end\">\n            <input type=\"text\" [(ngModel)]=\"chore.todoname\" placeholder=\"Task Name\" class=\"mr-auto w-75 form-control is-required\">\n            <button class=\"btn btn-outline-dark btn-sm px-3\" (click)=\"finishEdit(i)\">Done</button>\n          </div>\n          <!-- Second Row -->\n          <div class=\"d-flex flex-row justify-content-between\">\n            <div class=\"mr-auto\">\n              Priority:\n              <select [(ngModel)]=\"chore.priority\">\n                <option value=\"1\">High !!</option>\n                <option value=\"4\" selected=\"selected\">Normal </option>\n                <option value=\"7\">Low --</option>\n              </select>\n            </div>\n            <div>\n              Due Date:\n              <input type=\"checkbox\" [(ngModel)]=\"editobjdate\">\n            </div>\n            <div class=\"pl-4\">\n              <fieldset [disabled]=\"!editobjdate\">\n                <input type=\"date\" [(ngModel)]=\"chore.expiration\" (change)=\"parseDate()\">\n              </fieldset>\n            </div>\n          </div>\n          <!-- Third Row -->\n          <div class=\"d-flex flex-row\">\n            <div class=\"circles ml-auto\">\n              Repeat:\n              <button [ngClass] = \"activeFilter(1, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(1, i)\">Mon</button>\n              <button [ngClass] = \"activeFilter(2, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(2, i)\">Tue</button>\n              <button [ngClass] = \"activeFilter(3, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(3, i)\">Wed</button>\n              <button [ngClass] = \"activeFilter(4, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(4, i)\">Thu</button>\n              <button [ngClass] = \"activeFilter(5, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(5, i)\">Fri</button>\n              <button [ngClass] = \"activeFilter(6, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(6, i)\">Sat</button>\n              <button [ngClass] = \"activeFilter(0, i) ? 'active' : ''\" class=\"btn btn-outline-secondary btn-sm px-1 circle\" type=\"button\" data-toggle=\"button\" aria-pressed=\"true\" (click)=\"repeatPressx(0, i)\">Sun</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todoclass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoclass */ "./src/app/todoclass.ts");
/* harmony import */ var _default_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-todos */ "./src/app/default-todos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.todos = _default_todos__WEBPACK_IMPORTED_MODULE_2__["Default_Todo"];
        this.anyedited = false;
        this.sortdesc = true;
        this.newtask = false;
        this.properties = [
            "todoname",
            "editable",
            "checked",
            "created",
            "priority",
            "expiration",
            "repeat"
        ];
        this.filter = 0;
        this.repeat = 0;
        this.newobj = new _todoclass__WEBPACK_IMPORTED_MODULE_1__["Todoclass"]();
        this.newobjdate = false;
        this.editobjdate = false;
        this.tempdate = new Date();
        this.tempdatex = new Date();
        this.tbdeleted = -1;
        this.hover = -1;
        this.name = "Cesar";
    }
    AppComponent.prototype.addNewTask = function () {
        //Initialize! Errorcount is just to be flexible in case we want to add true verification later. We use loose comparison "==" to check for both null and undefined. Using strict comparison "===" would only check for null.
        var errorcount = 0;
        if (this.newobj.todoname == null) {
            errorcount++;
        }
        if (this.newobj.priority == null) {
            this.newobj.priority = 4;
        }
        this.newobj.checked = false;
        this.newobj.created = new Date(Date.now());
        this.newobj.editable = false;
        this.newobj.repeat = this.repeat;
        //if we don't find errors, go ahead and push it to the list and run newTodo to clean up and go back to the main screen
        if (errorcount == 0) {
            this.todos.push(this.newobj);
            this.newTodo();
        }
    };
    AppComponent.prototype.newTodo = function () {
        //clear out the old information
        if (this.newtask == true) {
            this.newobj = new _todoclass__WEBPACK_IMPORTED_MODULE_1__["Todoclass"]();
            this.newobjdate = false;
            this.repeat = 0;
        }
        else {
            this.newobj.priority = 4;
        }
        //flip the switch
        this.newtask = !this.newtask;
        this.filter = 0;
    };
    AppComponent.prototype.parseDate = function () {
        console.log(this.newobj.expiration);
        this.tempdate = new Date(this.newobj.expiration);
        this.newobj.dueday = 1 >> ((this.tempdate.getDay()) % 7);
    };
    AppComponent.prototype.parseDatex = function (input) {
        this.tempdatex = new Date(this.todos[input].expiration);
        this.todos[input].dueday = 1 >> ((this.tempdate.getDay()) & 7);
    };
    AppComponent.prototype.reSort = function (prop, order) {
    };
    AppComponent.prototype.filterPress = function (input) {
        //Using binary logic, XOR 2 to the power of the filter ID, starting at 0 for Sunday and ending at 6 for Saturday. This ensures that each number has its own binary representation. The filter for Sunday, for example, will only be 0000001 for Sunday, 1000000 for Saturday, and 1000001 for Saturday AND Sunday. XOR will compare the current filter and assign a 1 if the current overall filter and the filter button being pressed have different bits, and a 0 if they have the same bits. In essence, it's establishing a toggle. If it's already on, XORing the 1's will put out a 0 at that ID, and if it's off, XORing the 1 of the filter being applied and the 0 of the current filter will put out a 1 at that ID.
        this.filter ^= 1 << input;
    };
    AppComponent.prototype.repeatPress = function (input) {
        this.repeat ^= 1 << input;
    };
    AppComponent.prototype.repeatPressx = function (input, indexx) {
        this.todos[indexx].repeat ^= 1 << input;
    };
    AppComponent.prototype.displayFilter = function (input) {
        //We're first going to make sure that this function won't break even if the value of repeat, since the class Todoclass has it defined as optional, is not instantiated. So if repeat is not defined, we're always going to return as true.
        if (this.todos[input].repeat == undefined) {
            return true;
        }
        //We're still catching if repeat is given a value of zero, and we're also making sure we display all elements if the filter is not being applied.
        if (this.todos[input].repeat == 0 || this.filter == 0) {
            return true;
        }
        else {
            //Here we use bitwise and to only flag as true if the repeat value includes the filter. This is similar to the XOR logic above, but bitwise AND will return a 1 at every digit that is a 1 on both numbers you're comparing. So, in the case that repeat = 3 (sunday and monday, 1+2 = 3) and the filter is at 50 (monday, thursday, and friday, 2+16+32 = 50), it will return 1.
            var temp = this.todos[input].repeat & this.filter;
            return (temp > 0) ? true : false;
        }
    };
    AppComponent.prototype.cancelTodo = function (input) {
        this.todos[input].editable = false;
        this.anyedited = false;
    };
    AppComponent.prototype.activeFilter = function (input, indexx) {
        var p = this.todos[indexx].repeat & (1 << input);
        return (p > 0) ? true : false;
    };
    //create an array of todos
    AppComponent.prototype.editTodo = function (input) {
        this.todos[input].editable = true;
        this.anyedited = true;
        this.editobjdate = (this.todos[input].dueday != null) ? true : false;
    };
    AppComponent.prototype.deleteTodo = function (input) {
        if (this.tbdeleted == input) {
            this.todos.splice(input, 1);
            this.tbdeleted = -1;
            this.hover = -1;
        }
        else {
            this.tbdeleted = input;
        }
    };
    AppComponent.prototype.finishEdit = function (input) {
        var errorcount = 0;
        if (this.todos[input].todoname == null) {
            errorcount++;
        }
        if (this.editobjdate == false) {
            this.todos[input].dueday = null;
            this.todos[input].expiration = null;
        }
        if (errorcount == 0) {
            this.anyedited = false;
            this.todos[input].editable = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_3__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/default-todos.ts":
/*!**********************************!*\
  !*** ./src/app/default-todos.ts ***!
  \**********************************/
/*! exports provided: Default_Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default_Todo", function() { return Default_Todo; });
var Default_Todo = [
    { todoname: "feed dog",
        editable: false,
        created: new Date(Date.now()),
        checked: false,
        priority: 1,
        repeat: 3 },
    { todoname: "go to burger joint",
        created: new Date(Date.now()),
        editable: false,
        checked: false,
        priority: 4,
        repeat: 9 },
];


/***/ }),

/***/ "./src/app/todoclass.ts":
/*!******************************!*\
  !*** ./src/app/todoclass.ts ***!
  \******************************/
/*! exports provided: Todoclass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todoclass", function() { return Todoclass; });
var Todoclass = /** @class */ (function () {
    function Todoclass() {
    }
    return Todoclass;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cesargarza/Code/week4/todo copy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map