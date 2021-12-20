import { Link, useLocation } from 'react-router-dom'
import { Header as CarbonHeader, HeaderGlobalBar, HeaderName } from 'carbon-components-react'
import Navbar from './Navbar'
import Filters from './Filters'

import logoImg from '../../assets/logo.png'
import s from './Header.module.scss'

export const categoryRoutes = [
  { href: '/movies', label: 'Movies', className: s.movies },
  { href: '/series', label: 'Series', className: s.series },
]

const accountRoutes = [
  { href: '/login', label: 'Login', className: s.login },
  { href: '/register', label: 'Start your free trial', className: s.register },
]

const Header = () => {
  const location = useLocation()

  const isCategory = categoryRoutes.some(({ href }) => location.pathname.startsWith(href))

  return (
    <CarbonHeader aria-label="Dreadful Tomato" className={s.header}>
      <HeaderName element={Link} to="/" prefix="">
        <img src={logoImg} alt="Dreadful Tomato" className={s.logo} />
      </HeaderName>

      {isCategory && <Navbar title="Categories" routes={categoryRoutes} />}

      <HeaderGlobalBar>
        {isCategory && <Filters />}

        <Navbar title="Account" routes={accountRoutes} />
      </HeaderGlobalBar>
    </CarbonHeader>
  )
}

export default Header
