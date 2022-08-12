import { Model } from 'sequelize'
import { ID as IDType } from '../ID'

class InvoiceModel<I extends IDType, StatusType extends string[]> extends Model {
  constructor(public invoiceID: I, public status: StatusType) {
    super()
  }
}

type InvoiceType<I extends IDType, StatusType extends string[]> = {
  invoiceID: I
  status: StatusType
}
export default InvoiceType
