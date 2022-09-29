import axios from 'axios'
import { PODCASTS_URL, PODCAST_URL } from '../utils/constants'

export const getPodcasts = async () => {
  const { data } = await axios.get(PODCASTS_URL)
  return data
}

export const getPodcast = async (podcastId) => {
  const { data } = await axios.get(`${PODCAST_URL}?id=${podcastId}`)
  return data
}
