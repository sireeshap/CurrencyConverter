import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherConversionsComponent } from './sharedComponents/other-conversions/other-conversions.component';
import { HomeComponent } from './sharedComponents/home/home.component';
import { MoreDetailsComponent } from './sharedComponents/more-details/more-details.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SharedRoutingModule } from './shared-routing.module';
@NgModule({
  declarations: [OtherConversionsComponent,HomeComponent,MoreDetailsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    SharedRoutingModule
  ],
  exports:[
    HomeComponent,
    OtherConversionsComponent,
    MoreDetailsComponent
  ]
})
export class SharedModule { }
