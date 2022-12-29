import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'EUR-USD',
    loadChildren: () => import('./modules/eur-to-usd/eur-to-usd.module').then(m => m.EurToUsdModule)
  },
  {
    path: 'EUR-GBP',
    loadChildren: () => import('./modules/eur-to-gbp/eur-to-gbp.module').then(m => m.EurToGbpModule)
  },
   {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
