import {api} from '#base'
import {IPurchase} from '#modules'

export const createPurchase = async (purchase: IPurchase) => {
  const {data} = await api.post('/carts', purchase)
  return data
}
