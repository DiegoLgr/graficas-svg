import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadComponent } from './actividad/actividad.component';
import { BarchartComponent } from './barchart/barchart.component';
import { SankeyComponent } from './sankey/sankey.component';

const routes: Routes = [
    { path: 'barchart', component: BarchartComponent },
    { path: 'sankey', component: SankeyComponent },
    { path: 'actividad', component: ActividadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
