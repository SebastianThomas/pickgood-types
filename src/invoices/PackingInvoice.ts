import { Model } from 'sequelize'
import { ID as IDType } from '../ID'

class PackingInvoiceModel<I extends IDType> extends Model {
  constructor(public invoiceID: I, public currentStation: string, public packingStatus: string) {
    super()
  }
}

type PackingInvoiceType<I extends IDType> = {
  invoiceID: I
  currentStation: string
  packingStatus: string
}
export default PackingInvoiceType
