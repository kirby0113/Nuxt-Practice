export const parseDate = (dateStr: string) => {
  const date = new Date(dateStr)

  const year = date.getFullYear()

  const month = date.getMonth()

  const day = date.getDay()

  return `${year}-${month}-${day}`
}
