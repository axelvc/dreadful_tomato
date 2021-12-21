import { Link } from 'react-router-dom'
import s from './Home.module.scss'

const Poster = ({ link, img, title }) => {
  return (
    <Link to={link} className={s.card}>
      <figure>
        <img src={img} alt={`${title} poster`} />
        <figcaption className={s.details}>
          <h2 className={s.title}>{title}</h2>
        </figcaption>
      </figure>
    </Link>
  )
}

export default Poster
