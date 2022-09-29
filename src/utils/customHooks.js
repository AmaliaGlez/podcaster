import { useQuery } from '@tanstack/react-query'
import { getPodcast, getPodcasts } from '../service'
import { formatPodcastDetail, formatPodcasts } from './apiFormatter'

export const useGetPodcasts = () => {
  const { isLoading, error, data } = useQuery(['podcastsList'], getPodcasts)
  return { isLoading, error, podcasts: data?.feed?.entry.map(formatPodcasts) }
}

export const useGetPodcast = (id) => {
  const { isLoading, error, data } = useQuery([`podcast-${id}`], () => getPodcast(id))
  return { isLoading, error, podcast: data && formatPodcastDetail(data) }
}
