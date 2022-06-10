import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempoRoutingModule } from './tempo-routing.module';
import { TempoHomeComponent } from './tempo-home/tempo-home.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TempoHomeComponent,
    TempoAtualComponent,
    BuscaCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TempoRoutingModule
  ]
})
export class TempoModule { }
