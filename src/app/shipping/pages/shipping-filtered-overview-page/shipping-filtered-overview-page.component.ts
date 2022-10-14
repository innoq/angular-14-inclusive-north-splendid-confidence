import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Shipment } from '../../models/shipping.models';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'da-shipping-filtered-overview-page',
  templateUrl: './shipping-filtered-overview-page.component.html',
  styleUrls: ['./shipping-filtered-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingFilteredOverviewPageComponent implements OnInit, OnDestroy {

  selectedCustomer: string = '';
  openShipments$: Observable<Shipment[]>;
  destroyed$: Subject<boolean> = new Subject<boolean>;
  showEditor: boolean = false;

  constructor(public activatedRoute: ActivatedRoute,
              public shippingService: ShippingService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      tap((params: ParamMap) => {
        this.selectedCustomer = params.get('name');
        this.openShipments$ = this.shippingService.getOpenShipmentsByCustomer(this.selectedCustomer);
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onEdit(): void {
    this.showEditor = !this.showEditor;
  }

  onShipmentSaved(saved: boolean) {
    if (saved) {
      this.openShipments$ = this.shippingService.getOpenShipmentsByCustomer(this.selectedCustomer);
    }
    // toggle the view back
    this.showEditor = !this.showEditor;
  }

}
