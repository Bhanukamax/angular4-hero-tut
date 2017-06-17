import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
 	selector: 'my-heroes',
 	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css'],
	providers: [HeroService]
})

export class HeroComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;
	constructor(private HeroService: HeroService) {}
	ngOnInit(): void {
		this.getHeroes();
	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.HeroService.getHeroes().then(heroes => this.heroes = heroes);
	}
}





