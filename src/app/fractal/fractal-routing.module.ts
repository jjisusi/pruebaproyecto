import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandelbrotComponent } from './mandelbrot/mandelbrot.component';


const routes: Routes = [
  {path:'mandelbrot',component: MandelbrotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FractalRoutingModule { }
