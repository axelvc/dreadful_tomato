import { NavLink as RNavLink } from 'react-router-dom'
import { HeaderMenuItem } from 'carbon-components-react'

import s from './Header.module.scss'

const NavLink = ({ href, className, children }) => {
  return (
    <HeaderMenuItem element={RNavLink} to={href} className={s.navLink}>
      <span className={`${s.navLink} ${className}`}>{children}</span>
    </HeaderMenuItem>
  )
}

export default NavLink
