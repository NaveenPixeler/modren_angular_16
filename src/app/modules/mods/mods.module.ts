import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsComponent } from './mods.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SharedModule } from 'src/app/shared/divider/shared.module';


@NgModule({
  declarations: [
    ModsComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
