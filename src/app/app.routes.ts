import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/components/food-catalogue.component';
import { OrderSummaryComponent } from './order-summary/component/order-summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurant-listing',
    pathMatch: 'full',
  },
  {
    path: 'restaurant-listing',
    component: RestaurantListingComponent,
  },
  {
    path: 'restaurant-listing',
    component: RestaurantListingComponent,
  },
  { path: 'food-catalogue/:id', component: FoodCatalogueComponent },
  { path: 'orderSummary', component: OrderSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
