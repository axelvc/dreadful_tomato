import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Poster from '../Poster/Poster'
import Pager from '../Pager/Pager'
import useFilters from '../useFilters'

import s from './ProgramPager.module.scss'

const ProgramPager = ({ title, programs, perPage }) => {
  const [searchParams, setSearchParams] = useSearchParams()
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

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: 1 })
    }
  }, [])

  const page = Number(searchParams.get('page'))
  const total = filteredPrograms.length
  const start = (page - 1) * perPage
  const end = start + perPage

  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>

      {filteredPrograms.slice(start, end).map((data) => (
        <Poster key={data.id} {...data} />
      ))}

      {total > perPage && (
        <Pager
          total={total}
          perPage={perPage}
          page={page}
          onChange={(page) => setSearchParams({ page })}
          className={s.row}
        />
      )}
    </section>
  )
}

export default ProgramPager
