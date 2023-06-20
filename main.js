const { app, BrowserWindow, ipcMain, session } = require('electron')
const path = require('path')
const load_characters = require('./load_characters.js')
const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

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
        installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
    }
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