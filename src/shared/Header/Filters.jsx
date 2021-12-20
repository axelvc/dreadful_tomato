import { useState, useRef } from 'react'
import { HeaderGlobalAction, Search } from 'carbon-components-react'
import { useClickAway } from 'react-use'

import s from './Header.module.scss'

const Filters = () => {
  const [filtersShown, setFiltersShown] = useState(false)
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
          {/* TODO: date picker */}
        </div>
      )}
    </div>
  )
}

export default Filters
