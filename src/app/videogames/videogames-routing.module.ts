import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCartaComponentComponent } from './show-carta-component/show-carta-component.component';


const routes: Routes = [
  {path:'showCartaComponent',component: ShowCartaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogamesRoutingModule { }
