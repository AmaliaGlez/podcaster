import axios from 'axios'
import { CORS_URL, PODCASTS_URL, PODCAST_URL } from '../utils/constants'
import { XMLParser } from 'fast-xml-parser'

const getCorsURL = (url) => `${CORS_URL}${encodeURIComponent(url)}`

const getFeed = (url) =>
  axios.get(getCorsURL(url)).then(({ data }) => {
    const parser = new XMLParser()
    console.log('parser', parser.parse(data.contents))
    return parser.parse(data.contents).rss.channel
  })

export const getPodcasts = () =>
  axios.get(getCorsURL(PODCASTS_URL)).then(({ data }) => JSON.parse(data.contents))

export const getPodcast = (id) =>
  axios.get(getCorsURL(`${PODCAST_URL}?id=${id}`)).then(async ({ data }) => {
    const result = JSON.parse(data.contents).results[0]
    return { ...result, ...(await getFeed(result.feedUrl)) }
  })
