import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { ShippingDetailComponent } from './components/shipping-detail-component/shipping-detail.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShippingOverviewPageComponent,
  },
  {
    path: '**',
    component: ShippingDetailComponent,
  },
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
export class ShippingRoutingModule { }
