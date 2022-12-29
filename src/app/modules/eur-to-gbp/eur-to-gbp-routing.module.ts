import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EurToGbpComponent } from './components/eur-to-gbp/eur-to-gbp.component';
const routes: Routes = [
  {
    path: 'details',
    component:EurToGbpComponent
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
export class EurToGbpRoutingModule { }
