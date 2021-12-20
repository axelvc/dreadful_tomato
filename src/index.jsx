import { StrictMode } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'

import './index.scss'

render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root'),
)
