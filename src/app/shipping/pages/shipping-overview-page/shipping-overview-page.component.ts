import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Shipment } from '../../models/shipping.models';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'da-shipping-overview-page',
  templateUrl: './shipping-overview-page.component.html',
  styleUrls: ['./shipping-overview-page.component.scss'],
})
export class ShippingOverviewPageComponent implements OnInit, OnDestroy {
  destroyed$: Subject<boolean> = new Subject();

  shipments$!: Observable<Shipment[]>;
  doneShipments: Shipment[] = [];

  constructor(public shippingService: ShippingService) {}

  ngOnInit(): void {
    this.shipments$ = this.shippingService.loadOpenShipments();

    this.shippingService.loadRecentlyClosedShipments().pipe(
      tap((shipments: Shipment[]) => this.doneShipments = shipments),
      takeUntil(this.destroyed$)
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onShipmentLost(s: Shipment): void {
    console.log('Shipment lost', s);
  }

}
