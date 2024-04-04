import {useParams, Link} from 'react-router-dom'
import {
  Breadcrumbs,
  CircularProgress,
  Link as MuiLink,
  Box,
  Chip,
  Stack,
  Rating,
} from '@mui/material'

import './Product.scss'
import {Price} from '#common'
import {ProductAddToCart, useFetchProduct} from '#modules'
import {ROUTE} from '#base'

export default function Product() {
  const params = useParams()
  const {data: product} = useFetchProduct(params.id!)

  return (
    <section>
      <Breadcrumbs>
        <MuiLink component={Link} to={ROUTE.products}>
          Products
        </MuiLink>
        <p>{product?.title ?? '...'}</p>
      </Breadcrumbs>
      {product ? (
        <>
          <h1 className="Title">{product.title}</h1>
          <div className="Product-Content">
            <img
              className="Product-Image"
              src={product.image}
              width={100}
              height={100}
              alt={product.title}
              loading="lazy"
            />
            <div>
              <Chip label={product.category} />
              <Box component="p" pt={3} mb={2}>
                {product.description}
              </Box>
              <Stack mb={3}>
                <Rating value={product.rating.rate} />
                <p className="Product-Rating">
                  <strong>{product.rating.rate}</strong> ({product.rating.count}
                  )
                </p>
              </Stack>
              <Stack spacing={3} mb={1}>
                <Price large amount={product.price} />
                <ProductAddToCart large product={product} />
              </Stack>
            </div>
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </section>
  )
}
