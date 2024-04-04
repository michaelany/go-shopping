import cn from 'clsx'

import './Price.scss'

interface IPriceProps {
  large?: boolean
  amount: number
}

export default function Price({large, amount}: IPriceProps) {
  return (
    <p className={cn('Price', large && 'Price_large')}>${amount.toFixed(2)}</p>
  )
}
