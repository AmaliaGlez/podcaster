import { Link } from 'react-router-dom'
import { useGetPodcast } from '../../utils/customHooks'
import './sidebar.css'

export const Sidebar = ({ podcastId }) => {
  const { isLoading, podcast } = useGetPodcast(podcastId)

  const { image, author, name, description } = podcast

  return (
    <div className='sidebar-wrapper'>
      {!isLoading ? (
        <>
          <Link to={`/podcast/${podcastId}`}>
            <img src={image} alt={'podcast-cover'} />
          </Link>
          <div className='main-info'>
            <Link to={`/podcast/${podcastId}`}>
              {name}
              <p>by {author}</p>
            </Link>
          </div>
          <div className='description'>
            <p>Description:</p>
            <p>{description}</p>
          </div>
        </>
      ) : null}
    </div>
  )
}
