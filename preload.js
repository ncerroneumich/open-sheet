const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    get_characters: () => ipcRenderer.invoke('get')
})