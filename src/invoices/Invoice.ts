import { Model } from 'sequelize/types'
import { ID as IDType } from '../ID'

export default class Invoice<I extends IDType, StatusType extends string[]> extends Model {
  constructor(public invoiceID: I, public status: StatusType) {
    super()
  }
}
