import {createPortal} from 'react-dom'
import {Routes, Route, Navigate} from 'react-router-dom'
import {useIsFetching} from '@tanstack/react-query'
import {CircularProgress, Fade} from '@mui/material'

import './App.scss'
import {Header, ROUTE} from '#base'
import {Products, Product, Cart} from '#modules'

export default function App() {
  const queryFetchCount = useIsFetching()

  return (
    <>
      <div className="App">
        <Header />
        <main className="App-Content">
          <Routes>
            <Route path={ROUTE.products} element={<Products />} />
            <Route path={`${ROUTE.products}/:id`} element={<Product />} />
            <Route path={ROUTE.cart} element={<Cart />} />
            <Route
              path="*"
              element={<Navigate replace to={ROUTE.products} />}
            />
          </Routes>
        </main>
      </div>
      {createPortal(
        <Fade in={Boolean(queryFetchCount)}>
          <div className="App-Fething">
            <CircularProgress color="inherit" size={24} />
          </div>
        </Fade>,
        document.body
      )}
    </>
  )
}
