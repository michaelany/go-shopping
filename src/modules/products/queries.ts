import {useQuery} from '@tanstack/react-query'

import {fetchProducts, fetchProduct} from '#modules'

export const useFetchProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

export const useFetchProduct = (id: string) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  })
