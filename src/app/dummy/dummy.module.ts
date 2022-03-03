import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Dummy2Module } from '../dummy2/dummy2.module';



@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    CommonModule,
    Dummy2Module
  ],
  exports:[
    Comp1Component,
    Dummy2Module
  ]
})
export class DummyModule { }
