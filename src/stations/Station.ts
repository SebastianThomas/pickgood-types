import { Model } from 'sequelize'

export type StationNameType = string
export type StationIDType = StationNameType

class StationModel extends Model {
  constructor(public name: StationNameType, public description: string) {
    super()
  }
}

type StationType = { name: StationNameType; description: string }
export default StationType
