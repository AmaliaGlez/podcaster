export function formatDate(date) {
  let newDate
  
  if (date) {
    const d = new Date(date)
    let month = d.getMonth() + 1
    let day = d.getDate()
    let year = d.getFullYear()
    newDate = `${month}/${day}/${year}`
  }
  
  return newDate
}

export function formatTime(time) {
  let newTime

  if (time) {
    let hours
    let minutes
    let seconds
    if (time.includes(':')) {
      const a = time.split(':')
      hours = a.length === 3 ? a[0] : '00'
      minutes = a.length === 3 ? a[1] : a[0]
      seconds = a.length === 3 ? a[2] : a[1]
    } else {
      const sec = parseInt(time, 10)
      hours = Math.floor(sec / 3600)
      minutes = Math.floor((sec - hours * 3600) / 60)
      seconds = sec - hours * 3600 - minutes * 60
    }
    newTime = `${hours}:${minutes}:${seconds}`
  }

  return newTime
}
