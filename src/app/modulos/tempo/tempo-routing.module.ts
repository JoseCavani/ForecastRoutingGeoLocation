import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';

const routes: Routes = [ { path: 'busca', component: BuscaCidadeComponent }, { path: '', redirectTo: '/tempo/tempo', pathMatch: 'full' },  { path: 'tempo', component: TempoAtualComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempoRoutingModule { }
