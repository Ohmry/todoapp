export default class Logger {
  static log(type: LoggerType, message: string): void {
    const now = new Date()
    console.log(now.toFormatString() + ' [' + type + '] ' + message)
  }
  static info(message: string): void {
    this.log(LoggerType.INFO, message)
  }
}

enum LoggerType {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}
