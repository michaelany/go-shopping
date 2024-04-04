import {Link} from 'react-router-dom'
import {IconButton, Link as MuiLink, Stack, Fab} from '@mui/material'
import {DeleteRounded as DeleteIcon} from '@mui/icons-material'
import {AddRounded as AddIcon} from '@mui/icons-material'
import {RemoveRounded as RemoveIcon} from '@mui/icons-material'

import './CartItem.scss'
import {useStore, ROUTE} from '#base'
import {Price} from '#common'
import {IProduct} from '#modules'

interface ICartItemProps {
  product: IProduct
  count: number
}

export default function CartItem({product, count}: ICartItemProps) {
  const addCartItemCount = useStore((state) => state.addCartItemCount)
  const removeCartItemCount = useStore((state) => state.removeCartItemCount)
  const removeCartItem = useStore((state) => state.removeCartItem)

  const handleCountAdd = () => addCartItemCount(product.id)

  const handleCountRemove = () => removeCartItemCount(product.id)

  const handleItemRemove = () => removeCartItem(product.id)

  return (
    <li className="CartItem">
      <Stack>
        <img
          className="CartItem-Image"
          src={product.image}
          width={100}
          height={100}
          alt={product.title}
          loading="lazy"
        />
        <MuiLink
          component={Link}
          className="CartItem-Link"
          to={`${ROUTE.products}/${product.id}`}
        >
          {product.title}
        </MuiLink>
      </Stack>
      <div className="CartItem-Block">
        <Stack spacing={0}>
          <Fab
            aria-label="remove count"
            onClick={count < 2 ? handleItemRemove : handleCountRemove}
          >
            <RemoveIcon />
          </Fab>
          <p className="CartItem-Count">{count}</p>
          <Fab aria-label="add count" onClick={handleCountAdd}>
            <AddIcon />
          </Fab>
        </Stack>
        <Stack spacing={2} justifyContent="end">
          <Price amount={product.price * count} />
          <IconButton aria-label="remove item" onClick={handleItemRemove}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </div>
    </li>
  )
}
