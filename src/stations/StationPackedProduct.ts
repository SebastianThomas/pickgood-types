import { Model } from 'sequelize'
import { ID as IDType } from '../ID'
import { StationNameType } from './Station'

export default class StationPackedProduct<I extends IDType> extends Model {
  constructor(public productID: I, public invoiceID: I, public stationName: StationNameType, public userID: I) {
    super()
  }
}
