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

export function extractToMonth(timestamp: number) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekday = date.getDay()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month, 0)

  const firstWeekday = firstDayOfMonth.getDay()
  const firstDay = firstDayOfMonth.getDate()
  const lastWeekday = lastDayOfMonth.getDay()
  const lastDay = lastDayOfMonth.getDate()

  return {
    year,
    month,
    day,
    weekday,
    firstDay,
    lastDay,
    firstWeekday,
    lastWeekday,
  }
}