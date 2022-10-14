import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOverviewListComponent } from './components/shipping-overview-list/shipping-overview-list.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';
import { ComponentsModule } from '../components/components.module';
import { ShippingFilteredOverviewPageComponent } from './pages/shipping-filtered-overview-page/shipping-filtered-overview-page.component';
import { ShippingsRoutingModule } from './shipping-routing.module';
import { ShipmentFormComponent } from './components/shipment-form/shipment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    ShippingOverviewListComponent,
    ShippingOverviewPageComponent,
    ShippingFilteredOverviewPageComponent,
    ShipmentFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
    ComponentsModule,
    ShippingsRoutingModule,
  ]
})
export class ShippingModule { }
