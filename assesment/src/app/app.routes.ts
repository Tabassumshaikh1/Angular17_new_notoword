import { Routes } from '@angular/router';
import { Component1Component } from './core/pipe/module1/component1/component1.component';

export const routes: Routes = [
    {
        path: 'comp1', loadChildren: () => import("./core/pipe/module1/module1.module").then((comp) => comp.Module1Module)
    },
    {
        path: 'comp2', loadChildren: () => import("./core/pipe/module2/module2.module").then((comp) => comp.Module2Module)
    },
    {
        path: 'comp3', loadChildren: () => import("./core/pipe/module3/module3.module").then((comp) => comp.Module3Module)
    },
    {
        path: '', redirectTo: 'comp1', pathMatch: 'full'
    }
];
