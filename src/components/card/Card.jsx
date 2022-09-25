import { Link } from 'react-router-dom'
import './card.css'

export const Card = ({ item }) => {
  console.log(item)
  const image = item['im:image'].filter((imageData) => imageData.attributes.height === '170')[0].label

  return (
    <div className='card'>
      <img src={image} alt={''} />
      <Link to={`/podcast/${item.id.attributes['im:id']}`}>{item['im:name'].label}</Link>
      <p>Author: {item['im:artist'].label}</p>
    </div>
  )
}
