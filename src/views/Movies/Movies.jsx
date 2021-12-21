import { Content } from 'carbon-components-react'
import ProgramPager from '../../shared/ProgramPager/ProgramPager'

import movies from '../../assets/movies.png'
import s from './Movies.module.scss'

const programs = Array(50)
  .fill({
    link: '/movies',
    img: movies,
    title: 'Avengers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit quidem ex minus quae.',
    date: 2018,
  })
  .map((v, i) => ({ ...v, title: `${v.title} ${i + 1}` }))

const Movies = () => (
  <Content className={s.container}>
    <ProgramPager title="Popular Movies" programs={programs} perPage={10} />
  </Content>
)

export default Movies
