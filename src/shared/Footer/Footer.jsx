import { Grid, Row } from 'carbon-components-react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import appStoreImg from '../../assets/app store.png'
import googlePlayImg from '../../assets/google-play.png'
import s from './Footer.module.scss'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/terms', label: 'Term of Use' },
  { href: '/legal', label: 'Legal Notices' },
  { href: '/help', label: 'Help' },
  { href: '/account', label: 'Manage Account' },
]

const appLinks = [
  { href: 'https://www.apple.com/app-store/', label: 'App Store', img: appStoreImg },
  { href: 'https://play.google.com/', label: 'Google Play Store', img: googlePlayImg },
]

const Footer = () => (
  <Grid as="footer" className={s.footer}>
    <Row>
      <Link to="/">
        <img className={s.logo} src={logoImg} alt="Dreadful Tomato" />
      </Link>
    </Row>

    <Row as="nav" className={s.row}>
      {navLinks.map(({ href, label }) => (
        <Link key={label} to={href} className={s.link}>
          {label}
        </Link>
      ))}
    </Row>

    <Row as="section" className={s.row}>
      {appLinks.map(({ href, label, img }) => (
        <a key={label} href={href}>
          <img src={img} alt={label} />
        </a>
      ))}
    </Row>

    <small className={s.copyright}>&copy; Copyright 2020 Deadfull Tomato Streaming. All Rights Reserved.</small>
  </Grid>
)

export default Footer
