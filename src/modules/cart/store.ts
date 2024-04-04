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

// localStorage.setItem(storageProp, JSON.stringify(value))

export const createCartSlice: TCreateSlice<ICartSlice> = (set) => ({
  cart: localStorage[storageProp] ? JSON.parse(localStorage[storageProp]) : [],
  addNewCartItem: (productId) =>
    set((state) => {
      const newCart = [...state.cart, {productId, count: 1}]
      localStorage.setItem(storageProp, JSON.stringify(newCart))
      return {cart: newCart}
    }),
  addCartItemCount: (productId) =>
    set((state) => {
      const newCart = [...state.cart]
      const currentItem = newCart.find((item) => item.productId === productId)!
      const itemIndex = newCart.findIndex(
        (item) => item.productId === productId
      )
      newCart[itemIndex] = {productId, count: currentItem.count + 1}
      localStorage.setItem(storageProp, JSON.stringify(newCart))
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
      localStorage.setItem(storageProp, JSON.stringify(newCart))
      return {cart: newCart}
    }),
  removeCartItem: (productId) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.productId !== productId)
      localStorage.setItem(storageProp, JSON.stringify(newCart))
      return {
        cart: newCart,
      }
    }),
  clearCart: () =>
    set(() => {
      localStorage.clear()
      return {
        cart: [],
      }
    }),
})

const storageProp = 'cart'
