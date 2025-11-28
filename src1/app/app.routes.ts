import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ItemComponent } from './shopping-cart/item/item.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

export const childRoutes:Routes=[

    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'item', component: ItemComponent },
    // { path: 'cart', component: CartComponent}
];

export const routes: Routes = [
    //  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: ItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'item', component: ItemComponent}
    // { path:'item', component: ItemComponent,children:childRoutes}
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule {}