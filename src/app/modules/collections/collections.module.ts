import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { BiographyComponent } from './biography/biography.component';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/divider/shared.module';



@NgModule({
  declarations: [
    CollectionsComponent,
    BiographyComponent,
    CollectionHomeComponent,
    CompaniesComponent,
    PartnersComponent,
    TableComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollectionsRoutingModule,
    SharedModule,
  ]
})
export class CollectionsModule { }
