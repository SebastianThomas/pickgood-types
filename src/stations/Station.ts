export type StationNameType = string
export type StationIDType = StationNameType

export class Station {
  constructor(public name: StationNameType, public description: string) {}
}
