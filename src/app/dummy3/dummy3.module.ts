import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dummy4Module } from '../dummy4/dummy4.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Dummy4Module
  ],
  exports: [
    Dummy4Module
  ]
})
export class Dummy3Module { }
