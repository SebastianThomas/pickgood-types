import { Model } from 'sequelize'
import { ID as IDType } from './ID'
import { StationNameType } from './stations/Station'

class UserModel<I extends IDType> extends Model {
  constructor(
    public userID: I,
    public firstName: string,
    public lastName: string,
    public stationName: StationNameType | null,
  ) {
    super()
  }
}

type UserType<I extends IDType> = {
  userID: I
  firstName: string
  lastName: string
  stationName: StationNameType | null
}
export default UserType
