import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailsComponent } from './hero-details.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';



const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'details/:id', component: HeroDetailsComponent },
	{ path: 'heroes', component: HeroComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})


export class AppRoutingModule {}
