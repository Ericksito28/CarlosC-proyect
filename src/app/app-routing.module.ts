import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'proyects', component: ProyectsComponent},
  {path:'prices', component: PricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
