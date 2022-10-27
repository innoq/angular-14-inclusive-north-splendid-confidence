import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOverviewListComponent } from './components/shipping-overview-list/shipping-overview-list.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';
import { ComponentsModule } from '../components/components.module';
import { ShipmentDetailComponent } from './components/shipment-detail/shipment-detail.component';



@NgModule({
  declarations: [
    ShippingOverviewListComponent,
    ShippingOverviewPageComponent,
    ShipmentDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ShippingOverviewPageComponent
  ]
})
export class ShippingModule { }
