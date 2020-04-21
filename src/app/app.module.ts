import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FractalModule } from './fractal/fractal.module';
import { VideogamesModule } from './videogames/videogames.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FractalModule,
    VideogamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
