/**
 * This module holds all custom directives and pipes, along with Common and Forms Modules.
 * Refere to the following link for an explanation of why this is a good practice:
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* MomentJS for Angular */
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [MomentModule],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MomentModule,
  ]
})
export class SharedModule { }
