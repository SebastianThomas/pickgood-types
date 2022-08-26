import { ID as IDType } from '../ID'

type InvoiceType<I extends IDType, StatusType extends string[] | readonly string[]> = {
  invoiceID: I
  status: StatusType[number]
}

const invoiceStatus = [
  'Ordered',
  'Payed',
  'Packing',
  'Sent',
  'Completed',

  'PaymentReminder',
  'ProblemOrQuestion',
  'PendingClientAnswer',
  'PendingProductDelivery',
] as const

type InvoiceStatusPossibilitiesType = typeof invoiceStatus
type InvoiceStatusType = typeof invoiceStatus[number]

export default InvoiceType
export { InvoiceStatusType, InvoiceStatusPossibilitiesType, invoiceStatus }
