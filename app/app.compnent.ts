import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>Creating a new Angular 3 app'

})

export class AppComponent{
	
}

@Component({
	selector: 'app-nav',
	template: '<nav><ul><li *ngFor="let navItem of navItems"><a href="{{navItem.linkLocation}}">{{ navItem.linkName }}</a></li></ul></nav>'

})

export class NavAppComponent{
		navItems = [
		{linkName: 'Home', linkLocation: '#'},
		{linkName: 'About Us', linkLocation: '#'},
		{linkName: 'Blog', linkLocation: 'http://dreamcpu.com/wordpress'},
		{linkName: 'Blog', linkLocation: '#'}
	];
}