import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public shippingService: ShippingService,
              private translateService: TranslateService) {}

  ngOnInit(): void {
    this.openShipments$ = this.shippingService.getOpenShipments();
  }

  navigateTo(where: string): void {
    this.router.navigate([where], { relativeTo: this.activatedRoute });
  }

  switchLanguage(lang: string): void {
    this.translateService.use(lang);
  }

  titleText(): string {
    return this.translateService.instant('shipments.open');
  }

}
