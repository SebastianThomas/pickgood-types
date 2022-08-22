import { ID as IDType } from './ID'
import { StationNameType } from './stations/Station'

export enum UserRank {
  Administrator = 'Administrator',
  User = 'User',
}

type UserType<I extends IDType> = {
  userID: I
  firstName: string
  lastName: string
  stationName: StationNameType | null
  rank: UserRank
}
export default UserType
