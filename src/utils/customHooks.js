import { useQuery } from '@tanstack/react-query'
import { getPodcasts } from '../service'

export const useGetList = () => {
  const { isLoading, error, data } = useQuery(['podcastsList'], getPodcasts)

  return { isLoading, data, error }
}
