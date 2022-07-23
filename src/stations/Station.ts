import { Model } from 'sequelize/types'

export type StationNameType = string
export type StationIDType = StationNameType

export default class Station extends Model {
  constructor(public name: StationNameType, public description: string) {
    super()
  }
}
