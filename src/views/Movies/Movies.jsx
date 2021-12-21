import { useEffect, useState } from 'react'
import { Content } from 'carbon-components-react'
import ProgramPager from '../../shared/ProgramPager/ProgramPager'
import getPrograms from '../../service/programsService'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getPrograms('movie').then((data) => {
      setMovies(data)
    })
  }, [])

  return (
    <Content className="main">
      <ProgramPager title="Popular Movies" programs={movies} perPage={10} />
    </Content>
  )
}

export default Movies
