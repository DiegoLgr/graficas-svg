import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { SankeyComponent } from './sankey/sankey.component';
import { ActividadComponent } from './actividad/actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    SankeyComponent,
    ActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
