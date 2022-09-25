import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { mockData, podcast } from '../../mockData';
import './sidebar.css'

export const Sidebar = () => {
  const { podcastId } = useParams()

  const item = podcast.results[0]

  const { artworkUrl100, artistName, collectionName } = item

  const dataFiltered = mockData["feed"]["entry"].find(elem => elem.id.attributes['im:id'] === podcastId)

  return (
    <div className='sidebar-wrapper'>
      <img src={artworkUrl100} alt={''} />
      <div className='main-info'>
        <Link to={`/podcast/${podcastId}`}>{collectionName}</Link>
        <p>by {artistName}</p>
      </div>
      <div className='description'>
        <p>Description:</p>
        <p>{dataFiltered.summary.label}</p>
      </div>
    </div>
  )
}
