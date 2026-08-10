import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    },
    {
        path: 'completate',
        loadComponent: () => import('./pages/completate/completate').then((c) => c.Completate),
    }
];
