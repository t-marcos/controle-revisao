import mysql from 'mysql2/promise'

// Cria a conexão com o banco
async function criarConexao() {
  const conexao = await mysql.createConnection({
    host: import.meta.env.MAIN_VITE_DB_HOST,
    user: import.meta.env.MAIN_VITE_DB_USER,
    password: import.meta.env.MAIN_VITE_DB_PASSWORD,
    database: import.meta.env.MAIN_VITE_DB_NAME,
    port: 3306 // <- aqui está o ajuste
  })
  return conexao
}

// Função genérica para executar qualquer query (SELECT, INSERT, UPDATE, DELETE)
export async function executarQuery(query: string, params: any = []) {
  const conexao = await criarConexao()
  console.log('Conexão com o banco realizada com sucesso.')

  try {
    const [resultados] = await conexao.execute(query, params)
    return resultados
  } catch (erro) {
    console.error('Erro ao executar query:', erro)
    throw erro
  } finally {
    await conexao.end()
  }
}
