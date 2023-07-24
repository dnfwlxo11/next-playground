export function extractToDate(timestamp: number) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
  }
}