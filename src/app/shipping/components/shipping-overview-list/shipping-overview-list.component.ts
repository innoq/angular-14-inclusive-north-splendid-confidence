import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipping-overview-list',
  templateUrl: './shipping-overview-list.component.html',
  styleUrls: ['./shipping-overview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewListComponent {
  shipments: Shipment[] = [
    { id: 1, name: 'Shipment-1', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-18') },
    { id: 2, name: 'Shipment-2', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-06'), arrivalDate: new Date('2022-10-19') },
    { id: 3, name: 'Shipment-3', customer: 'Best', description: 'Test Shipment', shippingDate: new Date('2022-10-07'), arrivalDate: new Date('2022-10-20') },
    { id: 4, name: 'Shipment-4', customer: 'Best', description: 'Test Shipment', shippingDate: new Date('2022-10-12'), arrivalDate: new Date('2022-10-21') },
    { id: 5, name: 'Shipment-5', customer: 'Test-2', description: 'Test Shipment', shippingDate: new Date('2022-10-09'), arrivalDate: new Date('2022-10-22') },
    { id: 6, name: 'Shipment-6', customer: 'Test-3', description: 'Test Shipment', shippingDate: new Date('2022-10-09'), arrivalDate: new Date('2022-10-22') },
  ];

  trackShipments(index: number, item: Shipment): string { return item.name; }

}
