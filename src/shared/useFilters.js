import { useState, useEffect, useContext, createContext } from 'react'
import { useLocation } from 'react-router-dom'

const initialState = {
  name: '',
  minYear: '',
  maxYear: '',
}

const context = createContext(initialState)

const useFilters = () => useContext(context)

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState(initialState)
  const location = useLocation()

  useEffect(() => {
    console.log(location.pathname)

    setFilters(initialState)
  }, [location.pathname])

  return <context.Provider value={{ filters, setFilters }}>{children}</context.Provider>
}

export default useFilters
