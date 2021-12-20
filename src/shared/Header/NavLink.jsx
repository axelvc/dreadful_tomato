import { forwardRef } from 'react'
import { NavLink as RNavLink } from 'react-router-dom'
import { HeaderMenuItem } from 'carbon-components-react'

import s from './Header.module.scss'

const NavLink = forwardRef(({ href, className, children }, ref) => (
  <HeaderMenuItem element={RNavLink} to={href} className={s.navLink}>
    <span className={`${s.navLink} ${className}`}>{children}</span>
  </HeaderMenuItem>
))

export default NavLink
