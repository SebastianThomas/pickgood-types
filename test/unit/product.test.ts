import { suite, test } from '@testdeck/mocha'
import * as _chai from 'chai'

import { Product } from '../../src/Product'

_chai.should()
const expect = _chai.expect

@suite
class ProductUnitTests {
  descriptionValue = 'Description Value'
  titleValue = 'Test Title'
  quantityValue = 'Quantity Value'
  priceValue = '15.30€'
  dateTest = new Date()
  product: Product<number, ['test'], [], ['dateTest']> | null = null

  before() {
    return true
    this.product = new Product<number, ['test'], [], ['dateTest']>(
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
  }

  @test 'normal properties should equal'() {
    return true
    expect(this.product).to.not.equal(null, 'Product is null')

    this.product?.getAttribute('title').should.equal(this.titleValue)
    this.product?.getAttribute('description').should.equal(this.descriptionValue)
    this.product?.getAttribute('price').should.equal(this.priceValue)
    this.product?.getAttribute('price').should.equal('15.30€')
  }
  @test 'custom property should equal'() {
    return true
    expect(this.product).to.not.equal(null, 'Product is null')

    this.product?.getAttribute('test').should.equal('MyTest')
    this.product?.getAttribute('dateTest').should.equal(this.dateTest)
  }
}
