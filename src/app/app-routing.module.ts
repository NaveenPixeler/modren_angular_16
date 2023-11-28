import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./modules/collections/collections.module').then(
        (c) => c.CollectionsModule
      ),
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('./modules/elements/elements.module').then(
        (m) => m.ElementsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
    import('./modules/views/views.module').then((v)=>
      v.ViewsModule
    ),
  },
  {
    path: 'mods',
    loadChildren: () =>
      import('./modules/mods/mods.module').then((m) => m.ModsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
