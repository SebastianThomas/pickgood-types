import { ID as IDType } from './ID'
import { StationNameType } from './stations/Station'

type UserType<I extends IDType> = {
  userID: I
  firstName: string
  lastName: string
  stationName: StationNameType | null
}
export default UserType
