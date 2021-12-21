import { useState, useMemo } from 'react'
import Poster from '../Poster/Poster'
import Pager from '../Pager/Pager'
import useFilters from '../useFilters'

import s from './ProgramPager.module.scss'

const ProgramPager = ({ title, programs, perPage }) => {
  const [page, setPage] = useState(0)
  const { filters } = useFilters()
  const filteredPrograms = useMemo(() => {
    const { name, minYear, maxYear } = filters

    return programs.filter(({ title, date }) => {
      const matchName = name === '' || title.toLowerCase().includes(name.toLowerCase())
      const matchminYear = minYear === '' || Number(minYear) <= date
      const matchmaxYear = maxYear === '' || Number(maxYear) >= date

      return matchName && matchminYear && matchmaxYear
    })
  }, [filters, programs])

  const total = filteredPrograms.length
  const start = page * perPage
  const end = start + perPage

  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>

      {filteredPrograms.slice(start, end).map((data) => (
        <Poster key={data.id} {...data} />
      ))}

      {total > perPage && <Pager total={total} perPage={perPage} page={page} onChange={setPage} className={s.row} />}
    </section>
  )
}

export default ProgramPager
