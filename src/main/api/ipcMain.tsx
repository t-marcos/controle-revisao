import { ipcMain } from 'electron'
import { executarQuery } from './conection'
import { TyInsertResumo } from '~/src/Types/InsertResumo'
import { dataTransformed } from './transformeData'
import { Tarefa } from '~/src/Types/ResumoData'

// Exemplo de uso:
// SELECT
// executarQuery('SELECT * FROM usuarios').then(console.log);

// INSERT
// executarQuery('INSERT INTO usuarios (nome, email) VALUES (?, ?)', ['João', 'joao@email.com']);

// UPDATE
// executarQuery('UPDATE usuarios SET nome = ? WHERE id = ?', ['João da Silva', 1]);

ipcMain.handle('criarRevisao', async (event, data: TyInsertResumo) => {
  const query = `INSERT INTO revisao (id, materia, aula, dias7, dias15, mensal, revisao, status, data_inicio) VALUE (?,?,?,?,?,?,?,?,?)`
  const valores = dataTransformed(data)

  return await executarQuery(query, valores)
})

ipcMain.handle('selectRevisao', async () => {
  const query = `
     SELECT id, materia, aula, 
            DATE_FORMAT(dias7, "%d/%m/%Y") AS dias7, 
            DATE_FORMAT(dias15, "%d/%m/%Y") AS dias15, 
            DATE_FORMAT(mensal, "%d/%m/%Y") AS mensal, 
            n_revisao, status, data_inicio 
     FROM revisao
   `
  return await executarQuery(query)
})

ipcMain.handle('updateRevisao', async (event, data: Tarefa) => {
  const hoje = new Date().toLocaleDateString()
  const numero = (await executarQuery(
    `SELECT n_revisao FROM revisao WHERE id = ${data.id}`
  )) as Tarefa[] 
  const query = `UPDATE revisao SET n_revisao = ? WHERE id = ?`
  if (numero[0].n_revisao === data.n_revisao) {
    return await executarQuery(query, [data.id, numero[0].n_revisao + 1])
  }
})
