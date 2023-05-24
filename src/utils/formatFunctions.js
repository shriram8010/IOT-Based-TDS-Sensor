const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const formatDate = (date, timeFormat) => {
  if (!date) return

  var d = new Date(date)
  d?.toISOString().substring(0, 10)

  let formattedDate

  formattedDate = `${days[d?.getDay()]}, ${d?.getUTCDate('EN-IN')} ${months[d?.getMonth()]} ${d?.getFullYear()} ${timeFormat === '12hr' ? d.toLocaleTimeString('en-in') : d.toLocaleTimeString('en-in', { hour12: false })}`
  return formattedDate
}

export const getDate = (date) => {
  if (!date) return

  var d = new Date(date)
  d?.toISOString().substring(0, 10)

  let formattedDate

  formattedDate = `${months[d?.getMonth()]} ${d?.getUTCDate('EN-IN')}, ${d?.getFullYear()}`
  return formattedDate
}

export const getDay = (date) => {
  if (!date) return

  var d = new Date(date)
  d?.toISOString().substring(0, 10)

  let formattedDay

  formattedDay = `${days[d?.getDay()]}`
  return formattedDay
}

export const getTime = (date, timeFormat) => {
  if (!date) return

  var d = new Date(date)
  d?.toISOString().substring(0, 10)

  let formattedTime

  formattedTime = `${timeFormat === '12hr' ? d.toLocaleTimeString('en-in') : d.toLocaleTimeString('en-in', { hour12: false })}`
  return formattedTime
}