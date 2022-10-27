import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOverviewListComponent } from './components/shipping-overview-list/shipping-overview-list.component';
import { ShippingOverviewPageComponent } from './pages/shipping-overview-page/shipping-overview-page.component';
import { ComponentsModule } from '../components/components.module';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [
    ShippingOverviewListComponent,
    ShippingOverviewPageComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShippingOverviewPageComponent
  ]
})
export class ShippingModule { }
