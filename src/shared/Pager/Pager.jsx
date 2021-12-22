import { useMemo } from 'react'
import { ChevronLeft24, ChevronRight24 } from '@carbon/icons-react'

import s from './Pager.module.scss'

function makePages(total, perPage) {
  const pageCount = Math.ceil(total / perPage)
  const pages = Array(pageCount).fill(0)

  return pages.map((_, i) => i + 1)
}

const Pager = ({ total, perPage, page, onChange, className }) => {
  const pages = useMemo(() => makePages(total, perPage), [total, perPage])
  const lastPage = pages.length

  return (
    <div className={`${s.container} ${className}`} data-testid="pager">
      <button className={s.button} aria-label="Previous page" onClick={() => onChange(page - 1)} disabled={page === 1}>
        <ChevronLeft24 />
      </button>

      {pages.map((n) => (
        <button
          key={n}
          data-selected={page === n}
          className={s.page}
          aria-label={`Page ${n}`}
          onClick={() => onChange(n)}
        >
          {n}
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
