import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab'

import {ShoppingBagRounded as ShoppingBagIcon} from '@mui/icons-material'

import './CartCheckout.scss'
import {Price} from '#common'
import {useCreatePurchase, ICartProduct} from '#modules'

interface ICartCheckoutProps {
  cartProducts: ICartProduct[]
}

export default function CartCheckout({cartProducts}: ICartCheckoutProps) {
  const {mutate: createPurchase, isPending: isCreatePurchasePending} =
    useCreatePurchase()

  const handlePurchase = () =>
    createPurchase({
      userId: 1,
      date: '2020-02-03',
      products: cartProducts.map((item) => ({
        productId: item.product.id,
        quantity: item.count,
      })),
    })

  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.count * item.product.price,
    0
  )

  return (
    <div className="CartCheckout">
      <div className="CartCheckout-Content">
        <Stack>
          <p className="CartCheckout-Subtotal">Subtotal:</p>
          <Price large amount={totalPrice} />
        </Stack>
        <p className="CartCheckout-Gst">* Includes GST</p>
        <LoadingButton
          fullWidth
          className="CartCheckout-Button"
          size="large"
          variant="contained"
          loading={isCreatePurchasePending}
          endIcon={<ShoppingBagIcon />}
          onClick={handlePurchase}
        >
          Checkout now
        </LoadingButton>
      </div>
    </div>
  )
}
