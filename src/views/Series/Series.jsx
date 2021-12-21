import { useEffect, useState } from 'react'
import { Content } from 'carbon-components-react'
import ProgramPager from '../../shared/ProgramPager/ProgramPager'
import getPrograms from '../../service/programsService'

const Series = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    getPrograms('series').then(setSeries)
  }, [])

  return (
    <Content className="main">
      <ProgramPager title="Popular Series" programs={series} perPage={10} />
    </Content>
  )
}

export default Series
