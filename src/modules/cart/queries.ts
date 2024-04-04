import {useNavigate} from 'react-router-dom'
import {useMutation} from '@tanstack/react-query'

import {useStore, showSnackbar, ROUTE} from '#base'
import {createPurchase} from '#modules'

export const useCreatePurchase = () => {
  const navigate = useNavigate()
  const clearCart = useStore((state) => state.clearCart)

  return useMutation({
    mutationFn: createPurchase,
    onSuccess: (newPurchase) => {
      navigate(ROUTE.products)
      showSnackbar(
        `Purchase completed successfully! Your order number is #${newPurchase.id}`
      )
      clearCart()
    },
  })
}
