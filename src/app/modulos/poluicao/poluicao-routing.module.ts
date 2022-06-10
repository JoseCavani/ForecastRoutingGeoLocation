import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';

const routes: Routes = [  { path: '', redirectTo: '/poluicao/home', pathMatch: 'full' },  { path: 'home', component: PoluicaoHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoluicaoRoutingModule { }
