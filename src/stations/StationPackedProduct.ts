import { ID as IDType } from '../ID'
import { StationNameType } from './Station'

type StationPackedProductType<I extends IDType> = {
  productID: I
  invoiceID: I
  stationName: StationNameType
  userID: I
  quantity: number
}
export default StationPackedProductType
