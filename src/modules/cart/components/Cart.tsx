import {Link} from 'react-router-dom'
import {Box, Badge, Button, CircularProgress} from '@mui/material'
import {GridViewRounded as GridViewRoundedIcon} from '@mui/icons-material'

import './Cart.scss'
import {useStore, ROUTE} from '#base'
import {
  CartItem,
  CartCheckout,
  useFetchProducts,
  countTotalCartItems,
  ICartProduct,
} from '#modules'

export default function Cart() {
  const cart = useStore((state) => state.cart)

  return (
    <section>
      <h1 className="Title">
        <Badge badgeContent={countTotalCartItems(cart)} color="secondary">
          My Cart
        </Badge>
      </h1>
      {cart.length ? (
        <CartContent />
      ) : (
        <>
          <Box component="p" mb={3}>
            Your cart is empty...
          </Box>
          <Button
            component={Link}
            className="Cart-Button"
            size="large"
            variant="contained"
            endIcon={<GridViewRoundedIcon />}
            to={ROUTE.products}
          >
            Go to products
          </Button>
        </>
      )}
    </section>
  )
}

const CartContent = () => {
  const cart = useStore((state) => state.cart)
  const {data: products} = useFetchProducts()

  if (!products) return <CircularProgress />

  const cartProducts: ICartProduct[] = cart.map((item) => ({
    product: products.find((product) => product.id === item.productId)!,
    count: item.count,
  }))

  return (
    <>
      <ul>
        {cartProducts.map((item) => (
          <CartItem
            key={item.product.id}
            product={item.product}
            count={item.count}
          />
        ))}
      </ul>
      <CartCheckout cartProducts={cartProducts} />
    </>
  )
}
