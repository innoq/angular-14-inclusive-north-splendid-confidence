export const ENDPOINTS = {
  SHIPMENTS: {
    allShipments: () => `http://localhost:8080/shipments`,
    shipmentsByCustomer: (name: string) => `http://localhost:8080/shipments/${name}`,
  },
  USERS: {
    allUsers: () => `http://localhost:8080/users`,
    user: (id: string) => `http://localhost:8080/users/${id}`,
  }
}
