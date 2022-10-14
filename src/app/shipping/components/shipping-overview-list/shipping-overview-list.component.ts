import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipping-overview-list',
  templateUrl: './shipping-overview-list.component.html',
  styleUrls: ['./shipping-overview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewListComponent {
  shipment: Shipment = { name: 'Shipment-1', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-18') };
  content = 'Content';
  numericContent= 3;
  image = { src: 'https://placekitten.com/400/400', description: 'Picture of a Kitten'};
  isHighlighted = false;
  classes = ['bold', 'italic'];

  classesForElement() {
    return {
      bold: true,
      italic: Date.now()%2 === 0,
      padding: true,
    }
  }
}
