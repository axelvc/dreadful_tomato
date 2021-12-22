import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import { FiltersProvider } from '../shared/useFilters'

const render = (ui, options) => {
  const Wrapper = ({ children }) => (
    <Router initialEntries={options?.entries || ['/']}>
      <FiltersProvider>{children}</FiltersProvider>
    </Router>
  )

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

const regex = (str, options = 'i') => new RegExp(str, options)

export { render, regex, userEvent }

export * from '@testing-library/react'
