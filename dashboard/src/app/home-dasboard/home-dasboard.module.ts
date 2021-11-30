import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeDasboardRoutingModule } from './home-dasboard-routing.module';
import { HomeComponent } from './home/home.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule } from 'ng-zorro-antd/icon';
import Amplify from 'aws-amplify';
import { NzDividerModule, NzCardModule, NzInputModule, NzButtonModule, NzAlertModule, NzSpinModule, NzTableModule, NzMessageServiceModule, NzSelectModule, NzEmptyModule, NzProgressModule, NzModalModule, NzCheckboxModule, NzFormModule, NzRadioModule, NzInputNumberModule, NzPageHeaderModule, NzSwitchModule, NzPopoverModule, NzDatePickerModule, NzBadgeModule, NzBreadCrumbModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


const antdModule = [
  NzDividerModule,
  NzCardModule,
  NzInputModule,
  NzDatePickerModule,
  NzButtonModule,
  NzAlertModule,
  NzSpinModule,
  NzTableModule,
  NzMessageServiceModule,
  NzIconModule,
  NzSelectModule,
  NzEmptyModule,
  NzProgressModule,
  NzModalModule,
  NzCheckboxModule,
  NzFormModule,
  NzRadioModule,
  NzInputNumberModule,
  NzPageHeaderModule,
  NzSwitchModule,
  NzPopoverModule,
  NzBadgeModule,
  NzBreadCrumbModule

]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeDasboardRoutingModule,
    ...antdModule
  ],
  providers: [  
   
    DatePipe
  ]
})
export class HomeDasboardModule { }

