import { Component } from '@angular/core';

@Component({

	selector: 'my-app',
	template: `
	<a class="title" routerLink="/">
		<h1>{{title}}</h1>
	</a>
	<nav>
		<a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		<a class="nav-link" routerLink="/heroes" routerLinkActive="active">Heroes</a>
	</nav>
	<router-outlet></router-outlet>

	`,
	styleUrls:['./app.component.css']

})

export class AppComponent {
	title = "Tour of Heros";


}

