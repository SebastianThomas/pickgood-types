import { BillbeeProductType } from './billbee/Product'

export type BillbeeContactType = {
  /**
   * Billbee's internal contact ID, PK.
   */
  Id: number
  /**
   * Type of the contact (e.g., Fax, Phone, Email).
   */
  TypeId: number
  TypeName: string
  SubType: string
  Value: string
}
export type BillbeeShopInfoType = {
  Platform: string
  BillbeeShopName: string
  BillbeeShopId: number
  /**
   * Billbee's internal ID, PK, UUID.
   */
  Id: string
  Nick: string
  FirstName: string
  LastName: string
  FullName: string
  Email: string
}
export type BillbeeImageType = {
  /**
   * Url = PK
   */
  Url: string
  IsDefaultImage: boolean
  Position: number
  ExternalId: string
}

export type BillbeeAttributeType = {
  /**
   * Billbee's internal ID of the Attribute, PK.
   */
  Id: string
  Name: string
  Value: string
  Price: number
}
export type BillbeeOrderItemType = {
  /**
   * Billbee's internal ID of the Order Item, PK.
   */
  BillbeeId: number
  TransactionId: string
  Product: BillbeeProductType
  Quantity: number
  TotalPrice: number
  TaxAmount: number
  TaxIndex: number
  Discount: number
  Attributes: BillbeeAttributeType[]
  GetPriceFromArticleIfAny: boolean
  IsCoupon: boolean
  ShippingProfileId: string
  DontAdjustStock: boolean
  UnrebatedTotalPrice: number
  SerialNumber: string
  InvoiceSKU: string
}
export type BillbeeAddressType = {
  /**
   * Internal ID from the billbee system, PK.
   */
  BillbeeId: number
  FirstName: string
  LastName: string
  Company: string
  NameAddition: string
  Street: string
  HouseNumber: string
  Zip: string
  City: string
  CountryISO2: string
  Country: string
  Line2: string
  Email: string
  State: string
  Phone: string
}
export type BillbeeKeyValue<K, V> = {
  key: K
  value: V
}
export type BillbeeShippingServiceType = {
  DisplayName: string
  DisplayValue: string
  RequiresUserInput: boolean
  ServiceName: string
  typeName: string
  PossibleValueLists: BillbeeKeyValue<string, BillbeeKeyValue<number, string>[]>[]
  CanBeConfigured: boolean
}
export type BillbeeCustomerType = {
  /**
   * Billbee's internal Customer ID, PK.
   */
  Id: number
  Name: string
  Email: string
  Tel1: string
  Tel2: string
  Number: number
  PriceGroupId: number
  LanguageId: number
  DefaultMailAddress: BillbeeContactType
  DefaultCommercialMailAddress: BillbeeContactType
  DefaultStatusUpdatesMailAddress: BillbeeContactType
  DefaultPhone1: BillbeeContactType
  DefaultPhone2: BillbeeContactType
  DefaultFax: BillbeeContactType
  VatId: string
  Type: number
  MetaData: BillbeeContactType[]
}
export type BillbeeHistoryEventType = {
  Created: Date
  EventTypeName: string
  Text: string
  EmployeeName: string
  /**
   * Billbee's internal ID of a specific event, PK.
   */
  TypeId: number
}
export type BillbeeCommentType = {
  /**
   * Billbee's internal comment ID, PK.
   */
  Id: number
  FromCustomer: boolean
  Text: string
  Name: string
  Created: Date
}
export type BillbeeShippingIDType = {
  /**
   * Billbee's internal shipping ID, PK.
   */
  BillbeeId: number
  ShippingId: string
  Shipper: string
  Created: Date
  TrackingUrl: string
  ShippingProviderId: number
  ShippingProviderProductId: number
  ShippingCarrier: number
  ShipmentType: number
}
export type BillbeePaymentType = {
  BillbeeId: number
  TransactionId: string
  PayDate: Date
  PaymentType: number
  SourceTechnology: string
  SourceText: string
  PayValue: number
  Purpose: string
  Name: string
}
