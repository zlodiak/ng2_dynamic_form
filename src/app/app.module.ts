import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NformComponent } from './components/nform/nform.component';
import { Nfrom2Component } from './components/nfrom2/nfrom2.component';


@NgModule({
  declarations: [
    AppComponent,
    NformComponent,
    Nfrom2Component
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
