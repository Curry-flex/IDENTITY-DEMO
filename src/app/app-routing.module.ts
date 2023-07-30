import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardBackComponent } from './card-back/card-back.component';

const routes: Routes = [
 // {path:'back', component: CardBackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
