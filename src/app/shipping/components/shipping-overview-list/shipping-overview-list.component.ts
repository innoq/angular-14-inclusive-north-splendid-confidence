import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from '../../models/shipping.models';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'da-shipping-overview-list',
  templateUrl: './shipping-overview-list.component.html',
  styleUrls: ['./shipping-overview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewListComponent implements OnInit {

  openShippings$!: Observable<Shipment[]>;

  constructor(public shippingService: ShippingService) { }

  ngOnInit(): void {
    this.openShippings$ = this.shippingService.getOpenShipments();
  }

}
