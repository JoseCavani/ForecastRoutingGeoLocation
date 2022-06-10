import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', redirectTo: '/tempo/tempo', pathMatch: 'full' }, { path: 'tempo', loadChildren: () => import('./modulos/tempo/tempo.module').then(m => m.TempoModule) }, { path: 'poluicao', loadChildren: () => import('./modulos/poluicao/poluicao.module').then(m => m.PoluicaoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
