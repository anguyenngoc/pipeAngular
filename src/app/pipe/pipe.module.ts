import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { TitleString } from './upper-case.pipe';



@NgModule({
  declarations: [
    TitleString,
    UpperCasePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class PipeModule { }
