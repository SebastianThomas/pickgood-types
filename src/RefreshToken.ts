import { ID as IDType } from './ID'

type RefreshTokenType<I extends IDType> = {
  token: string
  userID: I
  expiryDate: Date
}
export default RefreshTokenType
