import { Model } from 'sequelize/types'
import { ID as IDType } from '../ID'
import { StationNameType } from './Station'

/**
 * Type `I` = type of `ProductID`s
 */
export default class ProductAtStation<I extends IDType> extends Model {
  constructor(
    public stationName: StationNameType,
    public productID: I,
    public lastPacked: Date,
    public countPacked: number,
  ) {
    super()
  }
}
