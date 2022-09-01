import {
  BillbeeAddressType,
  BillbeeCommentType,
  BillbeeCustomerType,
  BillbeeHistoryEventType,
  BillbeeOrderItemType,
  BillbeePaymentType,
  BillbeeShippingIDType,
  BillbeeShippingServiceType,
  BillbeeShopInfoType,
} from '../billbee'

export type BillbeeOrderType = {
  RebateDifference: number
  ShippingIds: BillbeeShippingIDType[]
  AcceptLossOfReturnRight: boolean
  /**
   * ID of the order; might be null
   */
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
  /**
   * Billbee's internal Order ID, PK.
   */
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
