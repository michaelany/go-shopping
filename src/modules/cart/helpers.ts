import {ICartItem} from '#modules'

export const countTotalCartItems = (cart: ICartItem[]): number =>
  cart.reduce((total, item) => total + item.count, 0)
