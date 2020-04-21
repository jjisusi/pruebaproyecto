import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FractalRoutingModule } from './fractal-routing.module';
import { MandelbrotComponent } from './mandelbrot/mandelbrot.component';


@NgModule({
  declarations: [MandelbrotComponent],
  imports: [
    CommonModule,
    FractalRoutingModule
  ],
  exports: [
    MandelbrotComponent
  ]
})
export class FractalModule { }
