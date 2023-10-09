import {ipcRenderer} from 'electron'
export const useIPC = () => {
    const sendNotification = ()=>{
        ipcRenderer.send('notification', 'hello world')
    }
    return {
        sendNotification
    }
}