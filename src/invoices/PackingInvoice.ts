import { Model } from 'sequelize/types'
import { ID as IDType } from '../ID'

export default class PackingInvoice<I extends IDType> extends Model {
  constructor(public invoiceID: I, public currentStation: string, public packingStatus: string) {
    super()
  }
}
