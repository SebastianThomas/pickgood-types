import { Model } from 'sequelize/types'
import { ID as IDType } from './ID'

export type DirectSearchableProductType = {
  title: string
  description: string
  price: string
}

export type ProductType<S extends string[], N extends string[], D extends string[]> = DirectSearchableProductType & {
  ID: IDType
  images: string[]
  configurableStringFields: ConfigurableFieldsType<string, S>
  configurableNumberFields: ConfigurableFieldsType<number, N>
  configurableDateFields: ConfigurableFieldsType<Date, D>
}

export type ConfigurableFieldsType<V extends number | string | Date, T extends string[]> = {
  [F in T[number]]: V
}

/**
 * A Product with an `ID` (`typeof string | number`) dynamic fields:
 * - `CS` represent a list of keys for dynamic fields that are `string` values
 * - `CN` represent a list of keys for dynamic fields that are `number` values
 * - `CD` represent a list of keys for dynamic fields that are `Date`s
 */
export class Product<I extends IDType, CS extends string[], CN extends string[], CD extends string[]>
  extends Model
  implements ProductType<CS, CN, CD>
{
  constructor(
    public ID: I,
    public title: string,
    public description: string,
    public price: string,
    public images: string[],
    public configurableStringFields: ConfigurableFieldsType<string, CS>,
    public configurableNumberFields: ConfigurableFieldsType<number, CN>,
    public configurableDateFields: ConfigurableFieldsType<Date, CD>,
  ) {
    super()
  }

  /**
   * Get an attribute of a product. Excluded are `ID` and `images` so the method always returns a string value.
   * @param attribute The attribute to get from the Product
   * @returns The value of the desired attribute or undefined if the attribute is not defined on the Product and `configurableFields`
   */
  getAttribute(
    attribute: keyof DirectSearchableProductType | CS[number] | CN[number] | CD[number],
  ): string | number | Date {
    switch (attribute) {
      case 'title':
        return this.title
      case 'price':
        return this.price
      case 'description':
        return this.description
      default:
        return this.getConfigurableAttribute(attribute)
    }
  }

  static isC<C extends string[], T extends string | number | Date>(
    attributes: ConfigurableFieldsType<T, C>,
    attribute: string,
  ): attribute is C[number] {
    const valueSet: Set<string> = new Set(Object.keys(attributes))
    return valueSet.has(attribute)
  }

  private getConfigurableAttribute(attribute: CN[number] | CS[number] | CD[number]): string | number | Date {
    if (Product.isC<CN, number>(this.configurableNumberFields, attribute))
      return this.configurableNumberFields[attribute]
    else if (Product.isC<CS, string>(this.configurableStringFields, attribute))
      return this.configurableStringFields[attribute]
    else if (Product.isC<CD, Date>(this.configurableDateFields, attribute))
      return this.configurableDateFields[attribute]
    throw new Error(`Unknown attribute ${attribute}`)
  }
}
