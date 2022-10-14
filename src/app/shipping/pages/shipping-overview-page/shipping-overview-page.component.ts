import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'da-shipping-overview-page',
  templateUrl: './shipping-overview-page.component.html',
  styleUrls: ['./shipping-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingOverviewPageComponent {
  buttonType = 'reset';
}
