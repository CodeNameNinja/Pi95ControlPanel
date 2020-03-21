import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';

import { ShipsPageModule } from './ships/ships.module';

import { UsersComponentModule } from './users/users.module';
import { PortsComponentModule } from './ports/ports.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ShipsPageModule,
    UsersComponentModule,
    PortsComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
