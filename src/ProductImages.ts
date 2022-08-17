import { ID as IDType } from './ID'

type ProductImages<I extends IDType> = {
  productID: I
  imgURL: string
}
export default ProductImages
