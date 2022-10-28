import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { catchError, finalize, Subject, takeUntil } from 'rxjs';
import { Shipment } from '../../models/shipping.models';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'da-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  destroyed$: Subject<boolean> = new Subject<boolean>;
  error: string = '';

  @Input()
  customer: string;

  @Output()
  shipmentSaved: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public shippingService: ShippingService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(15)]),
      description: new FormControl('', [Validators.required]),
      customer: new FormControl({ value: this.customer, disabled: true }),
      shippingDate: new FormControl('', [Validators.required]),
      arrivalDate: new FormControl('', [Validators.required]),
    }, [this.checkDates]);
    this.form.patchValue({
      name: 'Guten Morgen'
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  checkDates(control: AbstractControl): ValidationErrors | null {
    const shippingDate = new Date(control.get('shippingDate').value);
    const arrivalDate = new Date(control.get('arrivalDate').value);

    if (shippingDate > arrivalDate) {
      return { shipping_too_late: true };
    }
    return null;
  }

  saveShipment(): void {

    console.log('👀', this.form.value);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const shipment: Shipment = {
      ...this.form.value,
      customer: this.customer,
    };

    const arr = ['1','2'];
    const arr2 = ['3'];

    arr.concat(arr2);
    const arr3 = [...arr2, ...arr];

    this.shippingService.createShipment(shipment).pipe(
      finalize(() => this.shipmentSaved.emit(true)),
      catchError((e: Error) => this.error = e.message),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

}
