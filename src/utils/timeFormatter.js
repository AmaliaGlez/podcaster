export function formatTime(time) {
  const sec = parseInt(time, 10)
  let hours = Math.floor(sec / 3600)
  let minutes = Math.floor((sec - hours * 3600) / 60)
  let seconds = sec - hours * 3600 - minutes * 60

  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds

  if (hours) return `${hours}:${minutes}:${seconds}`
  if (minutes) return `${minutes}:${seconds}`
  return `${seconds}`
}
