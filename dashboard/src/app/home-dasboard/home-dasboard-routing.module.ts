import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import Amplify from 'aws-amplify';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      headerDisplay: "none"
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
   
  ]
})
export class HomeDasboardRoutingModule { }
