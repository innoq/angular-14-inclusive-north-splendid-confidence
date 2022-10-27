import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipping-overview-page',
  templateUrl: './shipping-overview-page.component.html',
  styleUrls: ['./shipping-overview-page.component.scss'],
})
export class ShippingOverviewPageComponent implements OnInit {
  shipments: Shipment[] = [];
  doneShipments!: Shipment[];

  size = 5;

  ngOnInit(): void {

    this.doneShipments = [
      { name: 'Shipment-6', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-20'), arrivalDate: new Date('2022-10-26') },
    ]

    setTimeout(() => {
      this.shipments = [
        { name: 'Shipment-1', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-13') },
        { name: 'Shipment-2', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-06'), arrivalDate: new Date('2022-10-14') },
        { name: 'Shipment-3', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-07'), arrivalDate: new Date('2022-10-17') },
        { name: 'Shipment-4', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-08'), arrivalDate: new Date('2022-10-18') },
        { name: 'Shipment-5', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-09'), arrivalDate: new Date('2022-10-22') },
      ];
    }, 2000);
  }

  onShipmentLost(s: Shipment): void {
    console.log('Shipment lost', s);
  }

}
