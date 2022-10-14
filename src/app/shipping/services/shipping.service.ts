import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shipment } from '../models/shipping.models';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  getOpenShipments(): Observable<Shipment[]> {
    return of([
      { name: 'Shipment-1', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-18') },
      { name: 'Shipment-2', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-19') },
      { name: 'Shipment-3', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-18') },
      { name: 'Shipment-4', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-12') },
      { name: 'Shipment-5', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-22') },
      { name: 'Shipment-6', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-11') },
      { name: 'Shipment-7', customer: 'Test', description: 'Test Shipment', shippingDate: new Date('2022-10-05'), arrivalDate: new Date('2022-10-17') },
    ]);
  }
}
