const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const load_characters = require('./load_characters.js')
const data_importer = require('./data_importer.js')

const dev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1238,
        height: 920,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    if (dev) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
    }
}

app.whenReady().then(() => {
    createWindow();

    // Could cause issues if load_characters doesn't
    // finish before the ipcRenderer invokes
    load_characters().then((characters) => {
        ipcMain.handle('get_characters', () => characters)
    }).catch((e) => {
        console.log(e)
    })

    // Handler just calls the function instead of waiting
    // for a promise
    ipcMain.handle('get_data', () => data_importer())





    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})