import { TyInsertResumo } from '~/src/Types/InsertResumo'

// dataTransformed: transforma os dados do resumo para o formato desejado
export const dataTransformed = (data: TyInsertResumo) => {
  console.log(data)
  console.log(adicionaDias(data.dataInicio, 7))
  return [
    null,
    data.Disciplina.toUpperCase(),
    data.Conteudo.toUpperCase(),
    adicionaDias(data.dataInicio, 7),
    adicionaDias(data.dataInicio, 15),
    adicionaDias(data.dataInicio, 30),
    0,
    'p',
    data.dataInicio
  ]
}

// adicionaDias: soma um número de dias à data (yyyy-mm-dd) com precisão
export function adicionaDias(data: string, dias: number) {
  // Divide a data no formato yyyy-mm-dd
  const [ano, mes, dia] = data.split('-').map(Number)

  // Cria a data corretamente no fuso local (sem confusão de horário)
  const baseDate = new Date(ano, mes - 1, dia)

  // Soma os dias
  baseDate.setDate(baseDate.getDate() + dias)

  // Formata para yyyy-mm-dd
  const novoAno = baseDate.getFullYear()
  const novoMes = String(baseDate.getMonth() + 1).padStart(2, '0')
  const novoDia = String(baseDate.getDate()).padStart(2, '0')

  return `${novoAno}-${novoMes}-${novoDia}`
}
