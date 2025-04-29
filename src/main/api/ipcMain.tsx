import { ipcMain } from "electron";
import { executarQuery } from "./conection";

// Exemplo de uso:
// SELECT
// executarQuery('SELECT * FROM usuarios').then(console.log);

// INSERT
// executarQuery('INSERT INTO usuarios (nome, email) VALUES (?, ?)', ['João', 'joao@email.com']);

// UPDATE
// executarQuery('UPDATE usuarios SET nome = ? WHERE id = ?', ['João da Silva', 1]);


ipcMain.handle('criarRevisao', async (event, data: any)=>{
   const query = ''
   return await executarQuery(query);
});

ipcMain.handle('selectRevisao', async ()=>{
    const query = 'Select * from revisao'
    return await executarQuery(query);
 });