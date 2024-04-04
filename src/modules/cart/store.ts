import {TCreateSlice} from '#base'
import {ICartItem, TSetCartItem} from '#modules'

export interface ICartSlice {
  cart: ICartItem[]
  addNewCartItem: TSetCartItem
  addCartItemCount: TSetCartItem
  removeCartItemCount: TSetCartItem
  removeCartItem: TSetCartItem
  clearCart: () => void
}

export const createCartSlice: TCreateSlice<ICartSlice> = (set) => ({
  cart: [],
  addNewCartItem: (productId) =>
    set((state) => ({cart: [...state.cart, {productId, count: 1}]})),
  addCartItemCount: (productId) =>
    set((state) => {
      const newCart = [...state.cart]
      const currentItem = newCart.find((item) => item.productId === productId)!
      const itemIndex = newCart.findIndex(
        (item) => item.productId === productId
      )
      newCart[itemIndex] = {productId, count: currentItem.count + 1}
      return {cart: newCart}
    }),
  removeCartItemCount: (productId) =>
    set((state) => {
      const newCart = [...state.cart]
      const currentItem = newCart.find((item) => item.productId === productId)!
      const itemIndex = newCart.findIndex(
        (item) => item.productId === productId
      )
      newCart[itemIndex] = {productId, count: currentItem.count - 1}
      return {cart: newCart}
    }),
  removeCartItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
  clearCart: () =>
    set(() => ({
      cart: [],
    })),
})
