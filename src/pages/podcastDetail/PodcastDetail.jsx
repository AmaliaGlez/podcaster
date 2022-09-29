import { Link, useParams } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useGetPodcast } from '../../utils/customHooks'
import './podcastDetail.css'

export const PodcastDetail = () => {
  const { podcastId } = useParams()
  const { isLoading, podcast } = useGetPodcast(podcastId)

  console.log('podcast', podcast)
  if (isLoading) return

  return (
    <main className='container detail'>
      <Sidebar podcastId={podcastId} />
      <div className='detail-list'>
        <div>Episodes: {podcast.episodes.length}</div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {podcast.episodes.map((episode) => (
                <tr key={episode.id}>
                  <td>
                    <Link to={`/podcast/${podcastId}/episode/${episode.id}`}>{episode.title}</Link>
                  </td>
                  <td>{episode.pubDate}</td>
                  <td>{episode.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
