import { ID as IDType } from './ID'

export type ProductType = {
  ID: IDType
  title: string
  quantity: string
  description: string
  images: string[]
  configurableFields: { [field: string]: string }
}

export class Product<I extends IDType> implements ProductType {
  constructor(
    public ID: I,
    public title: string,
    public quantity: string,
    public description: string,
    public images: string[],
    public configurableFields: { [field: string]: string },
  ) {}

  /**
   * Get an attribute of a product. Excluded are `ID` and `images` so the method always returns a string value.
   * @param attribute The attribute to get from the Product
   * @returns The value of the desired attribute or undefined if the attribute is not defined on the Product and `configurableFields`
   */
  getAttribute(attribute: string): string {
    switch (attribute) {
      case 'title':
        return this.title
      case 'quantity':
        return this.quantity
      case 'description':
        return this.description
      default:
        return this.configurableFields[attribute]
    }
  }
}
