import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOverviewListComponent } from './components/shipping-overview-list/shipping-overview-list.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';
import { ComponentsModule } from '../components/components.module';
import { ShippingFilteredOverviewPageComponent } from './pages/shipping-filtered-overview-page/shipping-filtered-overview-page.component';
import { ShippingsRoutingModule } from './shipping-routing.module';



@NgModule({
  declarations: [
    ShippingOverviewListComponent,
    ShippingOverviewPageComponent,
    ShippingFilteredOverviewPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ShippingsRoutingModule,
  ]
})
export class ShippingModule { }
