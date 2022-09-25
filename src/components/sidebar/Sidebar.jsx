import { Link } from 'react-router-dom'
import { mockData, podcast } from '../../mockData';
import './sidebar.css'

export const Sidebar = ({ podcastId }) => {
  const item = podcast.results[0]

  const { artworkUrl600, artistName, collectionName } = item

  const dataFiltered = mockData["feed"]["entry"].find(elem => elem.id.attributes['im:id'] === podcastId)

  return (
    <div className='sidebar-wrapper'>
      <Link to={`/podcast/${podcastId}`}><img src={artworkUrl600} alt={''} /></Link>
      <div className='main-info'>
        <Link to={`/podcast/${podcastId}`}>
          {collectionName}
          <p>by {artistName}</p>
        </Link>
      </div>
      <div className='description'>
        <p>Description:</p>
        <p>{dataFiltered.summary.label}</p>
      </div>
    </div>
  )
}
