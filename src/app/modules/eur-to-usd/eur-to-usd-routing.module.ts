import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EurToUsdComponent } from './components/eur-to-usd/eur-to-usd.component';
const routes: Routes = [
  {
    path: 'details',
    component:EurToUsdComponent
 },
   {
    path: '**',
    redirectTo: 'details',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EurToUsdRoutingModule { }
