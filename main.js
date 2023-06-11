const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const load_characters = require('./load_characters.js')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow();

    // Could cause issues if load_characters doesn't
    // finish before the ipcRenderer invokes
    load_characters().then((characters) => {
        ipcMain.handle('get', () => characters)
    }).catch((e) => {
        console.log(e)
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})