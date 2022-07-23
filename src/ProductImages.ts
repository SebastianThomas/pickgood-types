import { ID as IDType } from './ID'

export default class ProductImages<I extends IDType> {
  constructor(public productID: I, public imgURL: string) {}
}
