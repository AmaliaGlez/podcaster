import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, Search } from '../../components'
import { getPodcasts } from '../../service'
import './home.css'

export const Home = () => {
  const [filter, setFilter] = useState(null)
  
  const { isLoading, error, data } = useQuery(['podcastsList'], getPodcasts)

  if (!isLoading) console.log('data', data)

  const filteredData = !filter ? data?.feed.entry : data?.feed.entry.filter(
    (elem) =>
      elem['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
      elem['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <main className='container'>
      {!isLoading ? (
        <>
          <Search number={filteredData?.length} onChange={(e) => setFilter(e.target.value)} />
          <div className='podcasts-list'>
            {filteredData?.map((podcast) => (
              <Card key={podcast.id.attributes['im:id']} item={podcast} />
            ))}
          </div>
        </>
      ) : null}
    </main>
  )
}
