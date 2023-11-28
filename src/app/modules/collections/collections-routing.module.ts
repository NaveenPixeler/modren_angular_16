import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { CollectionsComponent } from './collections.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent,
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'partners',
        component: PartnersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class CollectionsRoutingModule {}
