import { Content } from 'carbon-components-react'
import clsx from 'clsx'

import Poster from './Poster'
import moviesImg from '../../assets/movies.png'
import seriesImg from '../../assets/series.png'
import s from './Home.module.scss'

const Home = () => (
  <Content className={clsx('main', s.container)}>
    <Poster link="/movies" img={moviesImg} title="Movies" />
    <Poster link="/series" img={seriesImg} title="Series" />
  </Content>
)

export default Home
