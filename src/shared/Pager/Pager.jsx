import { useMemo } from 'react'
import clsx from 'clsx'
import { ChevronLeft24, ChevronRight24 } from '@carbon/icons-react'

import s from './Pager.module.scss'

function makePages(total, perPage) {
  const pageCount = Math.floor(total / perPage)
  const pages = Array(pageCount).fill(0)

  return pages.map((_, i) => i)
}
const Pager = ({ total, perPage, page, onChange, className }) => {
  const pages = useMemo(() => makePages(total, perPage), [total, perPage])
  const lastPage = pages.length - 1

  return (
    <div className={`${s.container} ${className}`}>
      <button className={s.button} aria-label="Previous page" onClick={() => onChange(page - 1)} disabled={page === 0}>
        <ChevronLeft24 />
      </button>

      {pages.map((n) => (
        <button
          key={n}
          className={clsx([s.page, page === n && s.active])}
          aria-label={`Page ${n}`}
          onClick={() => onChange(n)}
        >
          {n + 1}
        </button>
      ))}

      <button
        className={s.button}
        aria-label="Next page"
        onClick={() => onChange(page + 1)}
        disabled={page === lastPage}
      >
        <ChevronRight24 />
      </button>
    </div>
  )
}

export default Pager
