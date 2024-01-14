import { is } from '@electron-toolkit/utils'
import path from 'path'
import BetterSqlite3 from 'better-sqlite3'
import DataBase from 'better-sqlite3'

export class Storage {
  private static instance: BetterSqlite3.Database
  private static _databasePath: string
  private static _databaseFileName: string

  static {
    this._databaseFileName = 'database.db'
    this._databasePath = path.join(
      is.dev ? 'resources' : process.resourcesPath + '/app.asar.unpacked/resources'
    )
  }

  static getInstance(): BetterSqlite3.Database {
    if (Storage.instance) {
      return this.instance
    }
    this.instance = new DataBase(path.join(this._databasePath, this._databaseFileName))
    return this.instance
  }
}
