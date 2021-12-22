import { render, screen, regex, userEvent } from './utils'
import ProgramPager from '../shared/ProgramPager/ProgramPager'
import Header from '../shared/Header/Header'
import getPrograms from '../service/programsService'

let dPrograms = []

beforeAll(async () => {
  dPrograms = await getPrograms('movie')
})

function renderPager({ title = 'Most viewed', perPage = 10, programs = dPrograms } = {}) {
  render(
    <>
      <Header />
      <ProgramPager title={title} programs={programs} perPage={perPage} />
    </>,
    { entries: ['/movies'] },
  )
}

describe('ProgramPager component (integration)', () => {
  it('should update programs when change filters', () => {
    renderPager()

    // search title
    const filters = screen.getByRole('button', { name: regex('filters') })
    userEvent.click(filters)

    const search = screen.getByRole('searchbox')
    userEvent.type(search, 'hunger')

    expect(screen.getAllByTestId('program')).toHaveLength(4)

    // min year
    const minYear = screen.getByRole('spinbutton', { name: regex('minimum year') })
    userEvent.type(minYear, '2013')

    expect(screen.getAllByTestId('program')).toHaveLength(3)

    /// max year
    const maxYear = screen.getByRole('spinbutton', { name: regex('maximum year') })
    userEvent.type(maxYear, '2014')

    expect(screen.getAllByTestId('program')).toHaveLength(2)
  })

  it('should update programs on click a page', () => {
    renderPager()

    const prev = screen.getByRole('button', { name: regex('previous page') })
    const next = screen.getByRole('button', { name: regex('next page') })
    const page3 = screen.getByRole('button', { name: regex('page 3') })

    userEvent.click(next)
    dPrograms.slice(10, 20).forEach(({ title }) => {
      const program = screen.queryByText(regex(`^${title.trim()}$`))

      expect(program).toBeInTheDocument()
    })

    userEvent.click(prev)
    dPrograms.slice(0, 10).forEach(({ title }) => {
      const program = screen.queryByText(regex(`^${title.trim()}$`))

      expect(program).toBeInTheDocument()
    })

    userEvent.click(page3)
    dPrograms.slice(20, 30).forEach(({ title }) => {
      const program = screen.queryByText(regex(`^${title.trim()}$`))

      expect(program).toBeInTheDocument()
    })
  })
})
