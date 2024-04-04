import {MouseEvent} from 'react'
import {Button} from '@mui/material'
import {ShoppingCartRounded as ShoppingCartIcon} from '@mui/icons-material'
import {ShoppingBagRounded as ShoppingBagIcon} from '@mui/icons-material'

import {useStore} from '#base'
import {IProduct} from '#modules'

interface IProductAddToCartProps {
  large?: boolean
  product: IProduct
}

export default function ProductAddToCart({
  large,
  product,
}: IProductAddToCartProps) {
  const cart = useStore((state) => state.cart)
  const addNewCartItem = useStore((state) => state.addNewCartItem)

  const handleAddToCart = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    e.preventDefault()
    addNewCartItem(product.id)
  }

  const cartItem = cart.find((item) => item.productId === product.id)

  const isInCart = Boolean(cartItem)

  return (
    <Button
      fullWidth
      variant="contained"
      size={large ? 'large' : 'small'}
      endIcon={isInCart ? <ShoppingBagIcon /> : <ShoppingCartIcon />}
      disabled={isInCart}
      onClick={handleAddToCart}
    >
      {isInCart ? `${cartItem!.count} in cart` : 'Add to cart'}
    </Button>
  )
}
