import { Model } from 'sequelize/types'
import { ID as IDType } from './ID'

export default class ProductImages<I extends IDType> extends Model {
  constructor(public productID: I, public imgURL: string) {
    super()
  }
}
