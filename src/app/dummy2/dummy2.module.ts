import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from '../comp2/comp2.component';
import { Dummy3Module } from '../dummy3/dummy3.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    Dummy3Module
  ],
  exports: [
    Dummy3Module
  ]
})
export class Dummy2Module { }
