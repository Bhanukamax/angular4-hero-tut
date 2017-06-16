import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'hero-details',
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details...</h2>
			<div><label>id: </label> {{hero.id}}</div>
			<div><label>name: </label> {{hero.name}}</div>


			<div>
				<label>name: </label>
				<input [(ngModel)]="hero.name" placeholder="name"/>
			</div>

		</div>
	`


})

export class HeroDetailsComponent {
	@Input() hero: Hero;
}
