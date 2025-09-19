export interface GasStationDTO {
  id: number
  name: string
  location: {
    address: string
    postalCode: string
    city: string
    latitude: number
    longitude: number
  }
  contact: {
    telephone: string
    mail: string
  }
  openingHours: [
    {
      day: string
      label: string
      order: 1
      from: string
      to: string
    }
  ]
  offerInformation: {
    service: boolean
    selfService: boolean
    unattended: boolean
  }
  paymentMethods: {
    cash: boolean
    debitCard: boolean
    creditCard: boolean
    others: string
  }
  paymentArrangements: {
    cooperative: boolean
    clubCard: boolean
  }
  otherServiceOffers: string
  position: number
  open: boolean
  prices: [
    {
      fuelType: string
      amount: number
      label: string
    }
  ]
}
