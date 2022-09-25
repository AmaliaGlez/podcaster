import { Route, Routes } from 'react-router-dom'
import { EpisodeDetail, Home, NotFound, PodcastDetail } from '../pages'

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/podcast/:podcastId' element={<PodcastDetail />} />
    <Route path='/podcast/:podcastId/episode/:episodeId' element={<EpisodeDetail />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default AppRouter
