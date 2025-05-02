import { TyInsertResumo } from '~/src/Types/InsertResumo'

;('materia, aula, dias7, dias15, mensal, revisao, status, data_inicio')

export const dataTransformed = (data: TyInsertResumo) => {
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

export function adicionaDias(data: string, dias: number) {
  const newData = new Date(data)
  newData.setDate(newData.getDate() + dias)
  const dt = newData.toLocaleDateString().split('/')

  return `${dt[2]}-${dt[1]}-${dt[0]}`
}
