import { shell, BrowserWindow } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import { BrowserType, BrowserOptions } from './index'

export class BrowserFactory {
  static create(type: BrowserType, options: BrowserOptions | undefined = undefined): BrowserWindow {
    const browser = new BrowserWindow({
      width: options?.width ?? 900,
      height: options?.height ?? 670,
      show: false,
      frame: false,
      titleBarStyle: process.platform == 'darwin' ? 'hiddenInset' : 'default',
      backgroundColor: '#F7F7F7',
      trafficLightPosition: { x: 20, y: 13 },
      autoHideMenuBar: options?.autoHideMenuBar ?? true,
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      }
    })

    browser.on('ready-to-show', () => {
      browser.show()
    })

    browser.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    if (type === BrowserType.Main) {
      // HMR for renderer base on electron-vite cli.
      // Load the remote URL for development or the local html file for production.
      if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        browser.loadURL(process.env['ELECTRON_RENDERER_URL'])
      } else {
        browser.loadFile(join(__dirname, '../renderer/index.html'))
      }
    } else {
      browser.loadFile(join(__dirname, '../renderer/index.popup.html'))
    }

    return browser
  }
}
