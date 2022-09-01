export type BillbeeContactType = {
  Id: number
  TypeId: number
  TypeName: string
  SubType: string
  Value: string
}
export type BillbeeShopInfoType = {
  Platform: string
  BillbeeShopName: string
  BillbeeShopId: number
  Id: string
  Nick: string
  FirstName: string
  LastName: string
  FullName: string
  Email: string
}
export type BillbeeImageType = {
  Url: string
  IsDefaultImage: boolean
  Position: number
  ExternalId: string
}
export type BillbeeProductType = {
  OldId: string
  Id: string
  Title: string
  Weight: number
  SKU: string
  SkuOrId: string
  IsDigital: boolean
  Images: BillbeeImageType[]
  EAN: string
  PlatformData: string
  TARICCode: string
  CountryOfOrigin: string
  BillbeeId: number
}
export type BillbeeAttributeType = {
  Id: string
  Name: string
  Value: string
  Price: number
}
export type BillbeeOrderItemType = {
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
  TypeId: number
}
export type BillbeeCommentType = {
  Id: number
  FromCustomer: boolean
  Text: string
  Name: string
  Created: Date
}
export type BillbeeShippingIDType = {
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

export type BillbeeOrderType = {
  RebateDifference: number
  ShippingIds: BillbeeShippingIDType[]
  AcceptLossOfReturnRight: boolean
  Id: string
  OrderNumber: string
  State: number
  VatMode: number
  CreatedAt: Date
  ShippedAt: Date
  ConfirmedAt: Date
  PayedAt: Date
  SellerComment: string
  Comments: BillbeeCommentType[]
  InvoiceNumberPrefix: string
  InvoiceNumberPostfix: string
  InvoiceNumber: number
  InvoiceDate: Date
  InvoiceAddress: BillbeeAddressType
  ShippingAddress: BillbeeAddressType
  PaymentMethod: number
  ShippingCost: number
  TotalCost: number
  AdjustmentCost: number
  AdjustmentReason: string
  OrderItems: BillbeeOrderItemType[]
  Currency: string
  Seller: BillbeeShopInfoType
  Buyer: BillbeeShopInfoType
  UpdatedAt: Date
  TaxRate1: number
  TaxRate2: number
  BillBeeOrderId: number
  BillBeeParentOrderId: number
  VatId: string
  Tags: string[]
  ShipWeightKg: number
  LanguageCode: string
  PaidAmount: number
  ShippingProfileId: string
  ShippingProviderId: number
  ShippingProviderProductId: number
  ShippingProviderName: string
  ShippingProviderProductName: string
  ShippingProfileName: string
  PaymentInstruction: string
  IsCancelationFor: string
  PaymentTransactionId: string
  DistributionCenter: string
  DeliverySourceCountryCode: string
  CustomInvoiceNote: string
  CustomerNumber: string
  PaymentReference: string
  ShippingServices: BillbeeShippingServiceType[]
  Customer: BillbeeCustomerType
  History: BillbeeHistoryEventType[]
  Payments: BillbeePaymentType[]
  LastModifiedAt: Date
  ApiAccountId: number
  ApiAccountName: string
  MerchantVatId: string
  CustomerVatId: string
  IsFromBillbeeApi: true
}
