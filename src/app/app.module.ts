import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	  AppComponent,
	  HeroDetailsComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
