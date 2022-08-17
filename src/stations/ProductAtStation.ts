import { ID as IDType } from '../ID'
import { StationNameType } from './Station'

type ProductAtStationType<I extends IDType> = {
  stationName: StationNameType
  productID: I
  lastPacked: Date
  countPacked: number
}
export default ProductAtStationType
