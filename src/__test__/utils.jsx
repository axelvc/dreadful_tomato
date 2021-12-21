import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HashRouter as Router } from 'react-router-dom'

const Wrapper = ({ children }) => <Router>{children}</Router>

const render = (ui, options) => rtlRender(ui, { wrapper: Wrapper, ...options })

const regex = (str, options = 'i') => new RegExp(str, options)

export { render, regex, userEvent }

export * from '@testing-library/react'
