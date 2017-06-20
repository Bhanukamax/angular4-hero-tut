import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	constructor(
		private HeroService: HeroService,
		private router: Router
	) {}
	ngOnInit(): void {
		this.getHeroes();
	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.HeroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	gotoDetail(): void {
		this.router.navigate(['/details', this.selectedHero.id]);
	}
}





