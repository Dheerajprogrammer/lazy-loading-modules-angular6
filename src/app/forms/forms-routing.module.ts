import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';


const routes: Routes = [
  {
    path: '',
    component: FormsTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
