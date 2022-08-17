import { ID as IDType } from '../ID'

type InvoiceType<I extends IDType, StatusType extends string[]> = {
  invoiceID: I
  status: StatusType
}
export default InvoiceType
