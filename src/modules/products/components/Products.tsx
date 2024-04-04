import {Badge, CircularProgress} from '@mui/material'

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
      {products ? (
        <ul className="Products-List">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <CircularProgress />
      )}
    </section>
  )
}
