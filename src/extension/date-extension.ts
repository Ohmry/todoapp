export {}

declare global {
  interface Date {
    toFormatString(): string | undefined
  }
}

Date.prototype.toFormatString = function toFormatString(): string | undefined {
  const year = this.getFullYear()
  const month = this.getMonth() + 1
  const day = this.getDate()
  const hours = this.getHours()
  const minutes = this.getMinutes()
  const seconds = this.getSeconds()
  const milliseconds = this.getMilliseconds()

  return (
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (day < 10 ? '0' + day : day) +
    ' ' +
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds) +
    '.' +
    (milliseconds < 10 ? '0' + milliseconds : milliseconds)
  )
}
