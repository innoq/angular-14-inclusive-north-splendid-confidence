import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent {

  @Input()
  shipment!: Shipment;

  @Output()
  shipmentLost: EventEmitter<Shipment> = new EventEmitter();

  onClick(): void {
    this.shipmentLost.emit(this.shipment);
  }
}
