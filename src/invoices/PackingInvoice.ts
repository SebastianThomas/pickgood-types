import { ID as IDType } from '../ID'

const packingInvoiceStatus = [
  'Pending',
  'QueuedAtStation',
  'PackingAtStation',
  'Question',
  'ProblemOrQuestion',
] as const

type PackingInvoiceStatusPossibilitiesType = typeof packingInvoiceStatus
type PackingInvoiceStatusType = typeof packingInvoiceStatus[number]

type PackingInvoiceType<I extends IDType, StatusType extends string[] | readonly string[]> = {
  invoiceID: I
  currentStation: string
  packingStatus: StatusType[number]
}
export default PackingInvoiceType
export { packingInvoiceStatus, PackingInvoiceStatusPossibilitiesType, PackingInvoiceStatusType }
