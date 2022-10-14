import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from '../../models/shipping.models';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'da-shipping-overview-page',
  templateUrl: './shipping-overview-page.component.html',
  styleUrls: ['./shipping-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewPageComponent implements OnInit {
  openShipments$!: Observable<Shipment[]>;

  constructor(public shippingService: ShippingService) {}

  ngOnInit(): void {
    this.openShipments$ = this.shippingService.getOpenShipments();
  }

}
