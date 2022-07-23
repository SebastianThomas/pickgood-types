export type StationNameType = string
export type StationIDType = StationNameType

export default class Station {
  constructor(public name: StationNameType, public description: string) {}
}
