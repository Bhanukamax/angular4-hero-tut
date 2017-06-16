import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
 	selector: 'app-root',
 	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HeroService]
})



export class AppComponent implements OnInit {
	title = "Tour of Heros";
	heroes: Hero[];
	//heroes = HEROES;
	selectedHero: Hero;
	constructor(private HeroService: HeroService) {}
	ngOnInit(): void {
		this.getHeroes();

	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.heroes = this.HeroService.getHeroes();
	}


}





