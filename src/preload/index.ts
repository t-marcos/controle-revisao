import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import mysql from 'mysql2/promise';
import { TyInsertResumo } from '../Types/InsertResumo';
import { Tarefa } from '../Types/ResumoData';

// Custom APIs for renderer
const api = {
  selectRevisao: async (): Promise<Tarefa[]> => {
    return await ipcRenderer.invoke('selectRevisao');
  },
  insertRevisao: async (data: TyInsertResumo): Promise<mysql.QueryResult> => {
    return await ipcRenderer.invoke('criarRevisao', data);
  },
  updateRevisao: async (data: Tarefa): Promise<mysql.QueryResult> => {
    return await ipcRenderer.invoke('updateRevisao', data);
  },
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

export type ApiType = typeof api
