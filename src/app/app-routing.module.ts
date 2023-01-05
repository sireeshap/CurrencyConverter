import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/shared/sharedComponents/home/home.component';
import { EurToUsdComponent } from './components/eur-to-usd/eur-to-usd.component';
const routes: Routes = [
  {
    path: 'Home',
    component:HomeComponent
  },
  {
    path: 'Home/:id',
    component:EurToUsdComponent
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
