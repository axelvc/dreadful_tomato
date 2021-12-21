import { useState } from 'react'
import Poster from '../Poster/Poster'
import Pager from '../Pager/Pager'

import s from './ProgramPager.module.scss'

const ProgramPager = ({ title, programs, perPage }) => {
  const [page, setPage] = useState(0)
  const start = page * perPage
  const end = start + perPage

  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>

      {programs.slice(start, end).map((data) => (
        <Poster key={data.id} {...data} />
      ))}

      <Pager total={programs.length} perPage={perPage} page={page} onChange={setPage} className={s.row} />
    </section>
  )
}

export default ProgramPager
