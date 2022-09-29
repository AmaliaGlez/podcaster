import { formatTime } from './timeFormatter'

export const formatPodcasts = (data) => {
  return {
    id: data.id?.attributes?.['im:id'],
    name: data['im:name']?.label,
    author: data['im:artist']?.label,
    images: data['im:image'],
  }
}

export const formatPodcastDetail = (data) => {
  return {
    id: data.collectionId,
    name: data.collectionName,
    author: data.artistName,
    description: data['itunes:summary'] || 'No description provided',
    image: data['artworkUrl600'],
    episodes: formatEpisodes(data.item, data.collectionId).reverse(),
  }
}

export const formatEpisodes = (episodes, podcastId) => {
  return episodes.map((episode, index) => ({
    id: `${index}_${podcastId}`,
    title: episode.title || 'No title provided',
    description: episode.description || 'No description provided',
    pubDate: episode.pubDate ? new Date(episode.pubDate).toLocaleDateString() : '-',
    duration: episode['itunes:duration'] ? formatTime(episode['itunes:duration'].toString()) : '-',
    audio: episode.enclosure?.['@_url'] || null,
  }))
}
