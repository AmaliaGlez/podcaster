import { useParams } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useGetPodcast } from '../../utils/customHooks'
import './episodeDetail.css'

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams()

  const { isLoading, podcast } = useGetPodcast(podcastId)

  const episode = podcast?.episodes.find((item) => item.id === episodeId)

  return (
    <main className='container detail'>
      {!isLoading && episode ? (
        <>
          <Sidebar podcastId={podcastId} />
          <div className='episode-info'>
            <h1>{episode.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: episode.description }} />
            <audio controls>
              <source src={episode.audio} type='audio/ogg' />
            </audio>
          </div>
        </>
      ) : null}
    </main>
  )
}
