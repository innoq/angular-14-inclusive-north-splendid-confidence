import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Shipment } from '../models/shipping.models';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  loadOpenShipments(): Observable<Shipment[]> {
    return of([
      { name: 'Shipment-1', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-13') },
      { name: 'Shipment-2', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-06'), arrivalDate: new Date('2022-10-14') },
      { name: 'Shipment-3', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-07'), arrivalDate: new Date('2022-10-17') },
      { name: 'Shipment-4', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-08'), arrivalDate: new Date('2022-10-18') },
      { name: 'Shipment-5', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-09'), arrivalDate: new Date('2022-10-22') },
    ]).pipe(
      delay(3000)
    )
  }

  loadRecentlyClosedShipments(): Observable<Shipment[]> {
    return of([
      { name: 'Shipment-6', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-20'), arrivalDate: new Date('2022-10-26') },
    ]).pipe(
      delay(5000)
    );
  }
}
