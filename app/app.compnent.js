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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Creating a new Angular 3 app'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var NavAppComponent = (function () {
    function NavAppComponent() {
        this.navItems = [
            { linkName: 'Home', linkLocation: '#' },
            { linkName: 'About Us', linkLocation: '#' },
            { linkName: 'Blog', linkLocation: 'http://dreamcpu.com/wordpress' },
            { linkName: 'Blog', linkLocation: '#' }
        ];
    }
    NavAppComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: '<nav><ul><li *ngFor="let navItem of navItems"><a href="{{navItem.linkLocation}}">{{ navItem.linkName }}</a></li></ul></nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], NavAppComponent);
    return NavAppComponent;
}());
exports.NavAppComponent = NavAppComponent;
//# sourceMappingURL=app.compnent.js.map