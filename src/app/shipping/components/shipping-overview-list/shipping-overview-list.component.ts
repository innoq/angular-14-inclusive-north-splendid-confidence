import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipping-overview-list',
  templateUrl: './shipping-overview-list.component.html',
  styleUrls: ['./shipping-overview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewListComponent implements OnInit {
  shipments!: Shipment[];

  ngOnInit(): void {
    this.shipments = [
      { name: 'Shipment-1', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-13') },
      { name: 'Shipment-2', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-06'), arrivalDate: new Date('2022-10-14') },
      { name: 'Shipment-3', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-07'), arrivalDate: new Date('2022-10-17') },
      { name: 'Shipment-4', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-08'), arrivalDate: new Date('2022-10-18') },
      { name: 'Shipment-5', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-09'), arrivalDate: new Date('2022-10-22') },
    ]
  }
}
