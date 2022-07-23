import { ID as IDType } from '../ID'

export class PackingInvoice<I extends IDType> {
  constructor(public invoiceID: I, public currentStation: string, public packingStatus: string) {}
}
