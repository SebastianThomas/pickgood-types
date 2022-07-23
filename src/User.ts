import { ID as IDType } from './ID'
import { StationNameType } from './stations/Station'

export default class User<I extends IDType> {
  constructor(
    public userID: I,
    public firstName: string,
    public lastName: string,
    public stationName: StationNameType | null,
  ) {}
}
