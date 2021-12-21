import { Content } from 'carbon-components-react'
import ProgramPager from '../../shared/ProgramPager/ProgramPager'

import series from '../../assets/series.png'

const programs = Array(50)
  .fill({
    link: '/movies',
    img: series,
    title: 'Breaking Bad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit quidem ex minus quae.',
    date: 2018,
  })
  .map((v, i) => ({ ...v, title: `${v.title} ${i + 1}` }))

const Series = () => (
  <Content className="main">
    <ProgramPager title="Popular Series" programs={programs} perPage={10} />
  </Content>
)

export default Series
