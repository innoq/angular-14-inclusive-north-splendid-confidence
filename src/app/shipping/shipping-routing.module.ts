import { NgModule } from '@angular/core';
import {
  RouterModule, Routes
} from '@angular/router';
import { ShippingFilteredOverviewPageComponent } from './pages/shipping-filtered-overview-page/shipping-filtered-overview-page.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShippingOverviewPageComponent,
  },
  {
    path: ':name',
    component: ShippingFilteredOverviewPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ShippingsRoutingModule {}
