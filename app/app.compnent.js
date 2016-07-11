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
            template: '<h1>Welcome To DreamCPU</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

var NavAppComponent = (function () {
    function NavAppComponent() {
        this.navItems = [
            { linkName: 'Home', linkLocation: '#top' },
            { linkName: 'Services', linkLocation: '#services' },
			 { linkName: 'Contact Us', linkLocation: '#contact' },
            { linkName: 'Blog', linkLocation: 'http://ProgrammingBlog.dreamcpu.com/' },
            { linkName: 'RSS Feed', linkLocation: '#rsslocation' }
        ];
    }
    NavAppComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: '<ul><li *ngFor="let navItem of navItems"><a href="{{navItem.linkLocation}}">{{ navItem.linkName }}</a></li></ul>'
        }), 
        __metadata('design:paramtypes', [])
    ], NavAppComponent);
    return NavAppComponent;
}());
exports.NavAppComponent = NavAppComponent;

var ServiceAppComponent = (function () {
    function ServiceAppComponent() {
        this.navItems = [
           
        ];
    }
    ServiceAppComponent= __decorate([
        core_1.Component({
            selector: 'app-service',
            template: `<article id="contact" class="container small">
					<header>
						<h2>Want to hire me? Get in touch!</h2>
						
					</header>
					<div>
						<div class="row">
							<div class="12u">
								<form action="">
									<div>
										<div class="row half">
											<div class="6u">
												<input type="text" name="name" id="name"  placeholder="name"/>
											</div>
											<div class="6u">
												<input type="text" name="email" id="email"  placeholder="email"/>
											</div>
										</div>
										<div class="row half">
											<div class="12u">
												<input type="text" name="subject" id="subject" placeholder="subject"/>
											</div>
										</div>
										<div class="row half">
											<div class="12u">
												<textarea name="message" id="message" placeholder="message"></textarea>
											</div>
										</div>
										<div class="row">
											<div class="12u">
												<button class="button form-button-submit" id="sendrequest">Send Message</button>
												<button class="button button-alt form-button-reset">Clear Form</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						
							</div>
							</article>`
        }), 
        __metadata('design:paramtypes', [])
    ],ServiceAppComponent);
    return ServiceAppComponent;
}());
exports.ServiceAppComponent = ServiceAppComponent;