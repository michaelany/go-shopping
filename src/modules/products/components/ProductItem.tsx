import {Link} from 'react-router-dom'
import {Box, Chip, Stack, Rating} from '@mui/material'

import './ProductItem.scss'
import {ROUTE} from '#base'
import {Price} from '#common'
import {ProductAddToCart, IProduct} from '#modules'

interface IProductItemProps {
  product: IProduct
}

export default function ProductItem({product}: IProductItemProps) {
  return (
    <li>
      <Link className="ProductItem-Link" to={`${ROUTE.products}/${product.id}`}>
        <Box mb={2}>
          <img
            className="ProductItem-Image"
            src={product.image}
            width={100}
            height={100}
            alt={product.title}
            loading="lazy"
          />
          <Stack mb={2}>
            <Price amount={product.price} />
            <Chip size="small" label={product.category} />
          </Stack>
          <h2 className="ProductItem-Title">{product.title}</h2>
          <Stack spacing={1}>
            <Rating value={product.rating.rate} />
            <p className="ProductItem-Rating">
              <strong>{product.rating.rate}</strong> ({product.rating.count})
            </p>
          </Stack>
        </Box>
        <ProductAddToCart product={product} />
      </Link>
    </li>
  )
}
