import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogamesRoutingModule } from './videogames-routing.module';
import { CartaComponent } from './carta/carta.component';
import { ShowCartaComponentComponent } from './show-carta-component/show-carta-component.component';


@NgModule({
  declarations: [CartaComponent, ShowCartaComponentComponent],
  imports: [
    CommonModule,
    VideogamesRoutingModule
  ],
  exports:[
    CartaComponent,
    ShowCartaComponentComponent
  ]
})
export class VideogamesModule { }
