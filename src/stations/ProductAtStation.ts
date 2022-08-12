import { Model } from 'sequelize'
import { ID as IDType } from '../ID'
import { StationNameType } from './Station'

/**
 * Type `I` = type of `ProductID`s
 */
class ProductAtStationModel<I extends IDType> extends Model {
  constructor(
    public stationName: StationNameType,
    public productID: I,
    public lastPacked: Date,
    public countPacked: number,
  ) {
    super()
  }
}

type ProductAtStationType<I extends IDType> = {
  stationName: StationNameType
  productID: I
  lastPacked: Date
  countPacked: number
}
export default ProductAtStationType
