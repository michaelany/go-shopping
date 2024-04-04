import {IProduct} from '#modules'

export type TSetCartItem = (productId: number) => void

export interface ICartItem {
  productId: number
  count: number
}

export interface ICartProduct {
  product: IProduct
  count: number
}

export interface IPurchase {
  userId: number
  date: string
  products: {productId: number; quantity: number}[]
}
