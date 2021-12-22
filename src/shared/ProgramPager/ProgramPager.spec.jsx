import { render, screen, regex } from '../../__test__/utils'
import ProgramPager from './ProgramPager'

import getPrograms from '../../service/programsService'

let dPrograms = []

beforeAll(async () => {
  dPrograms = await getPrograms('movie')
})

function renderPager({ title = 'Most viewed', perPage = 10, programs = dPrograms } = {}) {
  render(<ProgramPager title={title} programs={programs} perPage={perPage} />)
}

describe('ProgramPager component', () => {
  it('should render title', () => {
    renderPager()

    const title = screen.getByText(regex('most viewed'))

    expect(title).toBeInTheDocument()
  })

  describe('programs', () => {
    it('should render first page programs', () => {
      renderPager()

      dPrograms.slice(0, 10).forEach(({ title }) => {
        const program = screen.queryByText(regex(`^${title}$`))

        expect(program).toBeInTheDocument()
      })
    })

    it('should hide extra pages programs', () => {
      renderPager()

      dPrograms.slice(10).forEach(({ title }) => {
        const program = screen.queryByText(regex(title))

        expect(program).not.toBeInTheDocument()
      })
    })
  })

  describe('pager', () => {
    it('should render pager', () => {
      renderPager()

      const pager = screen.queryByTestId('pager')

      expect(pager).toBeInTheDocument()
    })

    it('should not render pager if the items is less than the "perPage" param', () => {
      renderPager({ programs: [] })

      const pager = screen.queryByTestId('pager')

      expect(pager).not.toBeInTheDocument()
    })
  })
})
