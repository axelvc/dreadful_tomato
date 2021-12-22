import { render, screen, regex } from '../../__test__/utils'
import Home from './Home'

beforeEach(() => render(<Home />))

describe('Home component', () => {
  describe('category links', () => {
    it.each(['movies', 'series'])('should a have link to %s', (name) => {
      const link = screen.getByRole('link', { name: regex(name) })

      expect(link).toHaveAttribute('href', expect.stringMatching(regex(`/${name}`)))
    })
  })
})
