import {api} from '#base'
import {IProduct} from '#modules'

export const fetchProducts = async () => {
  const {data} = await api.get<IProduct[]>('/products')
  return data
}

export const fetchProduct = async (id: string) => {
  const {data} = await api.get<IProduct>(`/products/${id}`)
  return data
}
