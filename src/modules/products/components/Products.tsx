import {Badge, Skeleton} from '@mui/material'

import './Products.scss'
import {ProductItem, useFetchProducts} from '#modules'

export default function Products() {
  const {data: products} = useFetchProducts()

  return (
    <section className="">
      <h1 className="Title">
        <Badge badgeContent={products?.length} color="secondary">
          Products
        </Badge>
      </h1>
      <ul className="Products-List">
        {products
          ? products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          : skeletons.map((_, index) => (
              <Skeleton key={index} component="li" height={432} />
            ))}
      </ul>
    </section>
  )
}

const skeletons = new Array(8).fill('')
