import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatalogueComponent } from './components/food-catalogue.component';
import { OrderSummaryComponent } from '../order-summary/component/order-summary.component';

const routes: Routes = [
  { path: 'food-catalogue/:id', component: FoodCatalogueComponent },
  { path: 'orderSummary', component: OrderSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCatalogueRoutingModule {}
