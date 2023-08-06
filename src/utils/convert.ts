export function convertToTitle(columnNumber: number) {
  const sb = []
  while (columnNumber !== 0) {
    columnNumber--
    sb.push(String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0)))
    columnNumber = Math.floor(columnNumber / 26)
  }
  return sb.reverse().join('')
}
