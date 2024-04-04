import {forwardRef} from 'react'
import {NavLink, NavLinkProps} from 'react-router-dom'
import cn from 'clsx'
import {AppBar, Button, Badge} from '@mui/material'
import {ShoppingCartRounded as ShoppingCartIcon} from '@mui/icons-material'

import './Header.scss'
import logoImg from '#assets/images/logo.svg'
import {useStore, ROUTE} from '#base'
import {countTotalCartItems} from '#modules'

export default function Header() {
  const handleScrollTop = () =>
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

  return (
    <AppBar className="Header" color="default">
      <Button
        className="Header-Link Header-Link_logo"
        onClick={handleScrollTop}
      >
        <img src={logoImg} width={36} alt="GO Shopping" />
        <p>GO shopping</p>
      </Button>
      <nav className="Header-Navigation">
        <Button
          LinkComponent={NavLinkBehavior}
          href={ROUTE.products}
          color="secondary"
        >
          Products
        </Button>
        <CartLink />
      </nav>
    </AppBar>
  )
}

const CartLink = () => {
  const cart = useStore((state) => state.cart)

  return (
    <Button
      LinkComponent={NavLinkBehavior}
      href={ROUTE.cart}
      color="secondary"
      aria-label="go to cart"
    >
      <Badge badgeContent={countTotalCartItems(cart)} color="primary">
        <ShoppingCartIcon className="Header-CartIcon" />
      </Badge>
    </Button>
  )
}

const NavLinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, 'to'> & {href: NavLinkProps['to']}
>(({href, className, ...other}, ref) => (
  <NavLink
    ref={ref}
    to={href}
    className={({isActive}) =>
      cn(className, 'Header-Link', isActive && 'Header-Link_active')
    }
    {...other}
  />
))
