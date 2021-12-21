import { StrictMode } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { FiltersProvider } from './shared/useFilters'
import App from './App'

import './index.scss'

render(
  <StrictMode>
    <Router>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
)
