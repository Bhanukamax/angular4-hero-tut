import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

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
		AppRoutingModule
	],
	providers: [HeroService],
	bootstrap: [AppComponent]
})

export class AppModule { 

}
