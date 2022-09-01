import { BillbeeImageType } from '../billbee'

/**
 * A product from the Billbee API.
 */
export type BillbeeProductType = {
  OldId: string
  Id: string
  Title: string
  Weight: number
  SKU: string
  SkuOrId: string
  IsDigital: boolean
  Images: BillbeeImageType[]
  EAN: string
  PlatformData: string
  TARICCode: string
  CountryOfOrigin: string
  /**
   * Billbee's internal Product ID, PK.
   */
  BillbeeId: number
}
