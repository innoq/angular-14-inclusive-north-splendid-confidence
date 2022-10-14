import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Shallow } from "shallow-render";
import { Shipment } from '../../models/shipping.models';
import { ShippingModule } from "../../shipping.module";
import { ShippingOverviewListComponent } from "./shipping-overview-list.component";


describe("Shipping Overview List", () => {
  let shallow: Shallow<ShippingOverviewListComponent>;
  const shipments: Shipment[] = [
    { name: 'Shipment-1', description: 'Test', customer: 'Test', shippingDate: new Date(), arrivalDate: new Date()}
  ];

  beforeEach(() => {
    shallow = new Shallow(ShippingOverviewListComponent, ShippingModule).replaceModule(
      RouterModule,
      RouterTestingModule
    );
  });

  it("shows as many cards as shipments", async () => {
    const { find } = await shallow.render({ bind: { shipments }});
    expect(find("da-card").length).toBe(1);
  });

});
