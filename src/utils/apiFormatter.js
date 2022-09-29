import * as timeFormatter from './timeFormatter'

export const formatList = (data) => {
  return {
    id:
      data['id'] && data['id']['attributes'] ? data['id']['attributes']['im:id'] : null,
    name: data['im:name'] ? data['im:name']['label'] : null,
    author: data['im:artist'] ? data['im:artist']['label'] : null,
    image:
      data['im:image'] && data['im:image'][2] ? data['im:image'][2]['label'] : null,
  }
}

export const formatDetail = (data) => {
  return {
    id: data['collectionId'] || null,
    name: data['collectionName'] || null,
    author: data['artistName'] || null,
    description: data['itunes:summary'] ? data['itunes:summary'][0] : null,
    image: data['artworkUrl600'] || null,
    episodes: formatEpisodes(data['item'], data['collectionId']).reverse(),
  }
}

export const formatEpisodes = (episodes, podcastId) => {
  const episodesFormatted = []

  episodes.forEach((episode, index) => {
    const formatEpisodes = {
      id: `${index}_${podcastId}`,
      podcastId,
      title: episode['title'] ? episode['title'][0] : '-',
      description: episode['description'] ? episode['description'][0] : null,
      pubDate: episode['pubDate'] ? timeFormatter.formatDate(episode['pubDate'][0]) : '-',
      duration: episode['itunes:duration']
        ? timeFormatter.formatTime(episode['itunes:duration'][0])
        : '-',
      mp3:
        episode['enclosure'] && episode['enclosure'][0] && episode['enclosure'][0]['$']
          ? episode['enclosure'][0]['$']['url']
          : null,
    }
    episodesFormatted.push(formatEpisodes)
  })

  return episodesFormatted
}
