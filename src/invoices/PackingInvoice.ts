import { ID as IDType } from '../ID'

type PackingInvoiceType<I extends IDType> = {
  invoiceID: I
  currentStation: string
  packingStatus: string
}
export default PackingInvoiceType
