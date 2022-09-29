import { useState } from 'react'
import { Card, Search } from '../../components'
import { useGetPodcasts } from '../../utils/customHooks'
import './home.css'

export const Home = () => {
  const [filter, setFilter] = useState(null)

  const { isLoading, podcasts } = useGetPodcasts()

  const filteredPodcasts = !filter
    ? podcasts
    : podcasts.filter(
        (elem) =>
          elem.name.toLowerCase().includes(filter.toLowerCase()) ||
          elem.author.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <main className='container'>
      {!isLoading ? (
        <>
          <Search number={filteredPodcasts?.length} onChange={(e) => setFilter(e.target.value)} />
          <div className='podcasts-list'>
            {filteredPodcasts?.map((podcast) => (
              <Card key={podcast.id} item={podcast} />
            ))}
          </div>
        </>
      ) : null}
    </main>
  )
}
