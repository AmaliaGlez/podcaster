import { Link } from 'react-router-dom'
import './card.css'

export const Card = ({ item }) => {
  console.log(item)
  const image = item['im:image'].filter((imageData) => imageData.attributes.height === '170')[0].label

  return (
    <Link to={`/podcast/${item.id.attributes['im:id']}`}>
      <div className='card'>
        <img src={image} alt={''} />
        <p className='title'>{item['im:name'].label}</p>
        <p className='subtitle'>Author: {item['im:artist'].label}</p>
      </div>
    </Link>
  )
}
