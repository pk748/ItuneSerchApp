import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { LoginComponent } from './login/login.component';
import { NzDividerModule, NzSpinModule, NzMessageServiceModule, NzIconModule, NzSelectModule, NzEmptyModule, NzTableModule, NzProgressModule, NzModalModule, NzRadioModule, NzInputNumberModule, NzPageHeaderModule, NzSwitchModule, NzPopoverModule, NzDescriptionsModule, NzBadgeModule } from 'ng-zorro-antd';
import { Router } from '@angular/router';

;

const antdModule= [
    NzDividerModule,
    NzCardModule,
    NzInputModule,
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
    NzDescriptionsModule,
    NzBadgeModule
]


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        ...antdModule
    ],
    declarations: [
        LoginComponent,
    ],
    providers: []
})

export class AuthenticationModule {
    constructor(public router: Router){
        
    }
}
