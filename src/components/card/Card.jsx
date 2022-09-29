import { Link } from 'react-router-dom'
import './card.css'

export const Card = ({ item }) => {
  const image = item.images.filter((imageData) => imageData.attributes.height === '170')[0].label

  return (
    <Link to={`/podcast/${item.id}`}>
      <div className='card'>
        <img src={image} alt={'podcast-cover'} />
        <p className='title'>{item.name}</p>
        <p className='subtitle'>Author: {item.author}</p>
      </div>
    </Link>
  )
}
