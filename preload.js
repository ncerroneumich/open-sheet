const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    get_characters: () => ipcRenderer.invoke('get_characters'),
    get_data: () => ipcRenderer.invoke('get_data')
})