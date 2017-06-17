import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
	declarations: [
		AppComponent,
		HeroDetailsComponent,
		HeroComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
			{
				path: 'heroes',
				component: HeroComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'

			}
		])
	],
	providers: [HeroService],
	bootstrap: [AppComponent]
})

export class AppModule { 

}
