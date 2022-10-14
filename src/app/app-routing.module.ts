import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { ShippingOverviewPageComponent } from './shipping/pages/shipping-overview-page/shipping-overview-page.component';

const appRoutes: Routes = [
  {
    path: 'shipments',
    component: ShippingOverviewPageComponent,
    //loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule),
  },
  { path: '',   redirectTo: '/shipments', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
