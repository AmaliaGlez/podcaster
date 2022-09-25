import { Link, useParams } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './podcastDetail.css'

export const PodcastDetail = () => {
  const { podcastId } = useParams()

  return (
    <main className='container detail'>
      <Sidebar podcastId={podcastId} />
      <div className='detail-list'>
        <div>Episodes: 66</div>
        <div>
          <table>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td><Link to={`/podcast/${podcastId}/episode/${'873465'}`}>Podcast title - More title</Link></td>
              <td>1/3/2022</td>
              <td>15:07</td>
            </tr>
            <tr>
              <td><Link to={`/podcast/${podcastId}/episode/${'873465'}`}>Podcast title - More title</Link></td>
              <td>1/3/2022</td>
              <td>15:07</td>
            </tr>
            <tr>
              <td><Link to={`/podcast/${podcastId}/episode/${'873465'}`}>Podcast title - More title</Link></td>
              <td>1/3/2022</td>
              <td>15:07</td>
            </tr>
            <tr>
              <td><Link to={`/podcast/${podcastId}/episode/${'873465'}`}>Podcast title - More title</Link></td>
              <td>1/3/2022</td>
              <td>15:07</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  )
}
