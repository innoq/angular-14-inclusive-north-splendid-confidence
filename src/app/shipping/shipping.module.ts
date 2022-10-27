import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ShippingDetailComponent } from './components/shipping-detail-component/shipping-detail.component';
import { ShippingOverviewListComponent } from './components/shipping-overview-list/shipping-overview-list.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';
import { ShippingRoutingModule } from './shipping-routing.module';

@NgModule({
  declarations: [
    ShippingOverviewListComponent,
    ShippingOverviewPageComponent,
    ShippingDetailComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ShippingRoutingModule,
  ],
  exports: [
    ShippingOverviewPageComponent,
    ShippingDetailComponent,
  ],
})
export class ShippingModule { }
