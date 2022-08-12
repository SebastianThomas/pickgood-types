import { Model } from 'sequelize'
import { ID as IDType } from './ID'

class ProductImagesModel<I extends IDType> extends Model {
  constructor(public productID: I, public imgURL: string) {
    super()
  }
}

type ProductImages<I extends IDType> = {
  productID: I
  imgURL: string
}
export default ProductImages
