import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Shipment } from '../../models/shipping.models';

@Component({
  selector: 'da-shipping-overview-list',
  templateUrl: './shipping-overview-list.component.html',
  styleUrls: ['./shipping-overview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewListComponent {

  @Input()
  shipments!: Shipment[];

  constructor(private cdref: ChangeDetectorRef) {}

  drop(event: CdkDragDrop<Shipment[]>) {
    // this.service.
    moveItemInArray(this.shipments, event.previousIndex, event.currentIndex);
    this.cdref.markForCheck();
  }
}
