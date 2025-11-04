import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './shopping-cart/item/item.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

export const routes: Routes = [
    { path: '', component: ItemComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}