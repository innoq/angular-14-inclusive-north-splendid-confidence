import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { ShippingDetailComponent } from './shipping/components/shipping-detail-component/shipping-detail.component';

const appRoutes: Routes = [
  {
    path: 'shipments',
    loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule),
  },
  {
    path: '',
    redirectTo: '/shipments',
    pathMatch: 'full'
  },
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
