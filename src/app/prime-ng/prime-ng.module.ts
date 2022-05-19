import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  imports:[
    CommonModule
  ],
  exports:[
    ButtonModule,
    FieldsetModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
