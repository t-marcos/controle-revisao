import { app, shell, BrowserWindow, screen, ipcMain } from 'electron'

// ✅ Adiciona o --no-sandbox antes de qualquer outra chamada
app.commandLine.appendSwitch('no-sandbox')

import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png'
import './api'

function createWindow(): void {
  // Largura e altura do monitor
  const primaryDisplay = screen.getPrimaryDisplay()
  const largura = primaryDisplay.workAreaSize.width
  const altura = primaryDisplay.workAreaSize.height

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: largura - 200,
    height: altura - 100,
    show: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false // Isso já está certo aqui
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
