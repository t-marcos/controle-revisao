import { MenuContainer } from './MenuContainer'
import add from '../../assets/add.svg'
import { Input } from '../Inputs/Input'
import { useState } from 'react'
import { createTarefa } from '../../services/serviceTarefa'

interface Props {
  handleAlert: (msg: string, status: boolean) => void
  startLoading: () => void
  stopLoading: () => void
}

export const Menu = ({ handleAlert, startLoading, stopLoading }: Props) => {
  const [data, setData] = useState({ Disciplina: '', Conteudo: '', dataInicio: '' })
  const [dataInicio, setDataInicio] = useState('')

  function handleValor(valor: { key: string; value: string }) {
    setData({ ...data, [valor.key]: valor.value, dataInicio: dataInicio })
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    if (data.Conteudo !== '' && data.Disciplina !== '' && dataInicio !== '') {
      startLoading()

      createTarefa(data)
        .then((task) => {
          handleAlert('A Tarefa foi salva com sucesso!', true)
        })
        .catch((err) => {
          console.log(err)
          handleAlert('Erro ao salvar a tarefa!', false)
        })
        .finally(() => {
          stopLoading() // Isso garante que o loading vai sempre fechar
        })
    } else {
      handleAlert('Nao foi possível criar a tarefa!', false)
    }
  }

  return (
    <MenuContainer>
      <div>
        <Input props={dicisplina} handleValue={handleValor} />
        <Input props={conteudo} handleValue={handleValor} />
        <label className="data">
          Data Inicio
          <input
            value={dataInicio}
            onChange={(e) => {
              setDataInicio(e.currentTarget.value)
              setData({ ...data, dataInicio: e.currentTarget.value })
            }}
            type="date"
            required
          />
        </label>
      </div>
      <button onClick={(e) => handleSubmit(e)}>
        <img src={add} alt="" />
        Criar
      </button>
    </MenuContainer>
  )
}

const dicisplina = {
  placeholder: 'Digite a Disciplina',
  label: 'Disciplina'
}
const conteudo = {
  placeholder: 'Digite o Conteudo',
  label: 'Conteudo'
}
