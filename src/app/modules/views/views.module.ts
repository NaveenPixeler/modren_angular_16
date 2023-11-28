import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ItemListComponent } from './item-list/item-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from 'src/app/shared/divider/shared.module';


@NgModule({
  declarations: [
    ViewsComponent,
    ItemListComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
