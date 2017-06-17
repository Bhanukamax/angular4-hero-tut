import { Component } from '@angular/core';

@Component({

	selector: 'my-app',
	template: `
	<a class="title" routerLink="/">
		<h1>{{title}}</h1>
	</a>
	<nav>
		<a class="nav-link" routerLink="/dashboard">Dashboard</a>
		<a class="nav-link" routerLink="/heroes">Heroes</a>
	</nav>
	<router-outlet></router-outlet>

	`,
	styles:[`
		.nav-link,
		.title {
			text-decoration: none;
		}
		.title {
			color: #444;
			font-family: sans-serif;
		}
		.nav-link {
			background-color: #7a8c98;
			color: #fff;
			padding: 5px 10px;
			border-radius: 10px;
		}


		`]

})

export class AppComponent {
	title = "Tour of Heros";


}

