import { ID as IDType } from '../ID'

type PackingInvoiceType<I extends IDType, StatusType extends string[] | readonly string[]> = {
  invoiceID: I
  currentStation: string
  packingStatus: StatusType[number]
}
export default PackingInvoiceType
