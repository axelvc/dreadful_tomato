import { useState, useRef } from 'react'
import { HeaderGlobalAction, Search } from 'carbon-components-react'
import { Calendar24 } from '@carbon/icons-react'
import { useClickAway } from 'react-use'

import s from './Header.module.scss'

const Filters = () => {
  const [filtersShown, setFiltersShown] = useState(true)
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')
  const container = useRef(null)

  useClickAway(container, () => setFiltersShown(false))

  return (
    <div ref={container}>
      <HeaderGlobalAction aria-label="Filters" onClick={() => setFiltersShown(!filtersShown)} className={s.filters}>
        <span>Filters</span>
      </HeaderGlobalAction>

      {filtersShown && (
        <div className={s.filtersBox}>
          <Search labelText="Name" placeholder="Name" size="sm" />

          <div className={s.dateRange}>
            <Calendar24 className={s.icon} />

            <input
              type="number"
              placeholder="From"
              value={startYear}
              onChange={(ev) => setStartYear(ev.target.value)}
              min={0}
              maxLength={4}
            />
            <input
              type="number"
              placeholder="To"
              value={endYear}
              onChange={(ev) => setEndYear(ev.target.value)}
              min={0}
              maxLength={4}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters
