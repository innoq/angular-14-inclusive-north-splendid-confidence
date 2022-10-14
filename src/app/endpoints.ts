export const ENDPOINTS = {
  SHIPMENTS: {
    allShipments: () => `http://localhost:8080/shipments`,
    shipmentsByCustomer: (name: string) => `http://localhost:8080/shipments/${name}`,
    createShipment: () => `http://localhost:8080/shipments`,
  },
  USERS: {
    allUsers: () => `http://localhost:8080/users`,
    user: (id: string) => `http://localhost:8080/users/${id}`,
  }
}
