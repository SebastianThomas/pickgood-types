import { ID as IDType } from '../ID'

type InvoiceType<I extends IDType, StatusType extends string[] | readonly string[]> = {
  invoiceID: I
  status: StatusType[number]
}
export default InvoiceType
