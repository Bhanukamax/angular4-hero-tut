import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
	  AppComponent,
	  HeroDetailsComponent,
	  HeroComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
