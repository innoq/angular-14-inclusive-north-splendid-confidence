import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/endpoints';
import { Shipment } from '../models/shipping.models';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(public http: HttpClient){}

  getOpenShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(ENDPOINTS.SHIPMENTS.allShipments());
  }

  getOpenShipmentsByCustomer(customer: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(ENDPOINTS.SHIPMENTS.shipmentsByCustomer(customer));
  }
}
