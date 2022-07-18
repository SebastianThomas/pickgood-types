export type ProductType = {
  ID: string
  title: string
  quantity: string
  description: string
  images: string[]
  configurableFields: { [field: string]: string }
}

export class Product implements ProductType {
  constructor(
    public ID: string,
    public title: string,
    public quantity: string,
    public description: string,
    public images: string[],
    public configurableFields: { [field: string]: string },
  ) {}

  getAttribute(attribute: string): string {
    switch (attribute) {
      case 'id':
      case 'ID':
        return this.ID
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
