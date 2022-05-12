import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { PricesComponent } from './components/prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProyectsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
