import { Model } from 'sequelize'
import { ID as IDType } from '../ID'
import { StationNameType } from './Station'

class StationPackedProduct<I extends IDType> extends Model {
  constructor(public productID: I, public invoiceID: I, public stationName: StationNameType, public userID: I) {
    super()
  }
}

type StationPackedProductType<I extends IDType> = {
  productID: I
  invoiceID: I
  stationName: StationNameType
  userID: I
}
export default StationPackedProductType
