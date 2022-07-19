import { ID as IDType } from './ID'

export type DirectSearchableProductType = {
  title: string
  quantity: string
  description: string
  price: string
}

export type ProductType<T extends string[]> = DirectSearchableProductType & {
  ID: IDType
  images: string[]
  configurableFields: ConfigurableFieldsType<T>
}

export type ConfigurableFieldsType<T extends string[]> = {
  [F in T[number]]: string
}

export class Product<I extends IDType, C extends string[]> implements ProductType<C> {
  constructor(
    public ID: I,
    public title: string,
    public quantity: string,
    public description: string,
    public price: string,
    public images: string[],
    public configurableFields: ConfigurableFieldsType<C>,
  ) {}

  /**
   * Get an attribute of a product. Excluded are `ID` and `images` so the method always returns a string value.
   * @param attribute The attribute to get from the Product
   * @returns The value of the desired attribute or undefined if the attribute is not defined on the Product and `configurableFields`
   */
  getAttribute(attribute: keyof DirectSearchableProductType | C[number]): string {
    switch (attribute) {
      case 'title':
        return this.title
      case 'quantity':
        return this.quantity
      case 'price':
        return this.price
      case 'description':
        return this.description
      default:
        return this.getConfigurableAttribute(attribute)
    }
  }

  private getConfigurableAttribute(attribute: C[number]): string {
    return this.configurableFields[attribute]
  }
}
