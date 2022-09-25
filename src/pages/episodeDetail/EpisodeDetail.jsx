import { useParams } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './episodeDetail.css'

export const EpisodeDetail = () => {
  const { podcastId } = useParams()

  return (
    <main className='container detail'>
      <Sidebar podcastId={podcastId} />
      <div className='episode-info'>
        <div className="player">
          {/* <audio src={data.currentEpisode.mediaUrl} controls></audio> */}
        </div>
      </div>
    </main>
  )
}
