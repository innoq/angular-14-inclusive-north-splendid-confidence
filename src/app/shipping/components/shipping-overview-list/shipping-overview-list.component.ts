import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipping-overview-list',
  templateUrl: './shipping-overview-list.component.html',
  styleUrls: ['./shipping-overview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewListComponent implements OnChanges {

  @Input()
  shipments!: Shipment[];

  @Input()
  pageSize!: number;

  @Output()
  shipmentLost: EventEmitter<Shipment> = new EventEmitter();

  displayList!: Shipment[];

  ngOnChanges(changes: SimpleChanges): void {
    const newLength = this.pageSize;
    if (newLength <= this.shipments.length) {
      this.displayList = this.shipments.slice(0, newLength);
    } else {
      this.displayList = this.shipments;
    }
  }

  onShipmentLost(s: Shipment): void {
    this.shipmentLost.emit(s);
  }
}
