import { Card, Search } from '../../components'
import { mockData } from '../../mockData';
import './home.css'

export const Home = () => {
  return (
    <main className='container'>
      <Search />
      <div className="podcasts-list">
        {mockData["feed"]["entry"].map(podcast => <Card key={podcast.id.attributes['im:id']} item={podcast} />)}
      </div>
    </main>
  )
}
