import { suite, test } from '@testdeck/mocha'
import * as _chai from 'chai'

import { Product } from '../../src/Product'

_chai.should()

@suite
class ProductUnitTests {
  descriptionValue = 'Description Value'
  titleValue = 'Test Title'
  quantityValue = 'Quantity Value'
  priceValue = '15.30€'
  product: Product<number, ['test']> = new Product<number, ['test']>(
    1,
    this.titleValue,
    this.quantityValue,
    this.descriptionValue,
    this.priceValue,
    ['img.jpg', 'test.png'],
    {
      test: 'MyTest',
    },
  )

  @test 'normal properties should equal'() {
    this.product.getAttribute('title').should.equal(this.titleValue)
    this.product.getAttribute('quantity').should.equal(this.quantityValue)
    this.product.getAttribute('description').should.equal(this.descriptionValue)
    this.product.getAttribute('price').should.equal(this.priceValue)
  }
  @test 'custom property should equal'() {
    this.product.getAttribute('test').should.equal('MyTest')
  }
}
