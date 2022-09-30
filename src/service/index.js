import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import { CORS_URL, PODCASTS_URL, PODCAST_URL } from '../utils/constants'

const getCorsURL = (url) => `${CORS_URL}${encodeURIComponent(url)}`

const getFeed = (url) =>
  axios.get(getCorsURL(url)).then(({ data }) => {
    const parser = new XMLParser({
      ignoreAttributes: false,
    })
    return parser.parse(data.contents).rss.channel
  })

export const getPodcasts = () =>
  axios.get(getCorsURL(PODCASTS_URL)).then(({ data }) => JSON.parse(data.contents))

export const getPodcast = (id) =>
  axios.get(getCorsURL(`${PODCAST_URL}?id=${id}`)).then(async ({ data }) => {
    const result = JSON.parse(data.contents).results[0]
    return { ...result, ...(await getFeed(result.feedUrl)) }
  })
