import { Link } from 'react-router-dom'
import { Calendar16 } from '@carbon/icons-react'

import s from './Poster.module.scss'

const Poster = ({ link, img, title, date, description, className, ...props }) => (
  <Link to={link} className={`${s.container} ${className}`} {...props}>
    <figure>
      <img className={s.img} src={img} alt={`${title} poster`} />

      <figcaption className={s.details}>
        <h3 className={s.title}>{title}</h3>

        <time className={s.date} dateTime={date}>
          <Calendar16 />
          {date}
        </time>

        <p className={s.description}>{description}</p>
      </figcaption>
    </figure>
  </Link>
)

export default Poster
