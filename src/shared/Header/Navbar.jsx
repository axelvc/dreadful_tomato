import { HeaderNavigation } from 'carbon-components-react'
import NavLink from './NavLink'

const Navbar = ({ title, routes }) => (
  <HeaderNavigation aria-label={title}>
    {routes.map(({ href, label, className }) => (
      <NavLink key={label} href={href} className={className}>
        {label}
      </NavLink>
    ))}
  </HeaderNavigation>
)

export default Navbar
