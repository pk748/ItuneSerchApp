import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../home-dasboard/home-dasboard.module').then(m => m.HomeDasboardModule),
    },   
];