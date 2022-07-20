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
  dateTest = new Date()
  product: Product<number, ['test'], [], ['dateTest']> = new Product<number, ['test'], [], ['dateTest']>(
    1,
    this.titleValue,
    this.descriptionValue,
    this.priceValue,
    ['img.jpg', 'test.png'],
    {
      test: 'MyTest',
    },
    {},
    {
      dateTest: this.dateTest,
    },
  )

  @test 'normal properties should equal'() {
    this.product.getAttribute('title').should.equal(this.titleValue)
    this.product.getAttribute('description').should.equal(this.descriptionValue)
    this.product.getAttribute('price').should.equal(this.priceValue)
  }
  @test 'custom property should equal'() {
    this.product.getAttribute('test').should.equal('MyTest')
    this.product.getAttribute('dateTest').should.equal(this.dateTest)
  }
}
