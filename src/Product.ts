import { ID as IDType } from './ID'

/**
 * A Product with a `productID` (`typeof string | number`)
 */
export type ProductType = {
  productID: IDType
  billbeeProductID: number

  title: string
  description: string
  price: string

  in_stock: number
  ordered: number
  available: number
  last_ordered: string
  last_stock_control: string
}

export type ProductWithImagesType = ProductType & {
  images: string
}
