import { useState, useRef } from 'react'
import { HeaderGlobalAction, Search } from 'carbon-components-react'
import { Calendar24 } from '@carbon/icons-react'
import { useClickAway } from 'react-use'
import useFilters from '../useFilters'

import s from './Header.module.scss'

const FIRST_MOVIE_YEAR = 1888

const Filters = () => {
  const [filtersShown, setFiltersShown] = useState(false)
  const { filters, setFilters } = useFilters()
  const container = useRef(null)

  useClickAway(container, () => setFiltersShown(false))

  return (
    <div ref={container}>
      <HeaderGlobalAction aria-label="Filters" onClick={() => setFiltersShown(!filtersShown)} className={s.filters}>
        <span>Filters</span>
      </HeaderGlobalAction>

      {filtersShown && (
        <div className={s.filtersBox}>
          <Search
            labelText="Name"
            placeholder="Name"
            size="sm"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          />

          <div className={s.dateRange}>
            <Calendar24 className={s.icon} />

            <input
              type="number"
              placeholder="From"
              value={filters.minYear}
              onChange={(ev) => setFilters({ ...filters, minYear: ev.target.value })}
              min={FIRST_MOVIE_YEAR}
              maxLength={4}
            />
            <input
              type="number"
              placeholder="To"
              value={filters.maxYear}
              onChange={(ev) => setFilters({ ...filters, maxYear: ev.target.value })}
              min={FIRST_MOVIE_YEAR}
              maxLength={4}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters
