import { render, screen, regex, userEvent } from '../../__test__/utils'
import Pager from './Pager'

const cb = jest.fn()

function renderPager({ total = 50, perPage = 10, page = 0 } = {}) {
  render(<Pager total={total} perPage={perPage} page={page} onChange={cb} />)
}

describe('Pager component', () => {
  describe('number buttons', () => {
    const nums = [1, 2, 3, 4, 5]

    it('should render number buttons', () => {
      renderPager()

      nums.forEach((n) => {
        const button = screen.queryByRole('button', { name: regex(`page ${n}`) })

        expect(button).toBeInTheDocument()
      })
    })

    it('shuold call callback with the selected page', () => {
      renderPager()

      nums.forEach((n) => {
        const button = screen.queryByRole('button', { name: regex(`page ${n}`) })

        userEvent.click(button)

        expect(cb).toBeCalledWith(n - 1)
      })
    })
  })

  describe('previous/next buttons', () => {
    it('should render previous/next buttons', () => {
      renderPager()

      const prev = screen.getByRole('button', { name: regex('previous page') })
      const next = screen.getByRole('button', { name: regex('next page') })

      expect(prev).toBeInTheDocument()
      expect(next).toBeInTheDocument()
    })

    it.each([
      ['previous', 'first', 0],
      ['next', 'last', 4],
    ])("should disable %s button when it's the %s page", (name, _, page) => {
      renderPager({ page })

      const button = screen.getByRole('button', { name: regex(`${name} page`) })

      expect(button).toBeDisabled()
    })

    it.each([
      ['previous', 2, 1],
      ['next', 2, 3],
    ])('should call callback with the %s page number', (name, page, expected) => {
      renderPager({ page: page })

      const button = screen.getByRole('button', { name: regex(`${name} page`) })

      userEvent.click(button)

      expect(cb).toBeCalledWith(expected)
    })
  })
})
