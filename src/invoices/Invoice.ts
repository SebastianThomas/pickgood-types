import { ID as IDType } from '../ID'

export class Invoice<I extends IDType, StatusType extends string[]> {
  constructor(public invoiceID: I, public status: StatusType) {}
}
