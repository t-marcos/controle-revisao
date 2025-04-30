import { useEffect, useState } from 'react'
import { Alert } from '../Alert/Alert'
import { Menu } from '../Menu/Menu'
import { Tarefas } from '../Tarefas/Tarefas'
import styled from '@emotion/styled'
import { Tarefa } from '../../../../Types/ResumoData'
import { saveTarefa, selectTarefas } from '../../services/serviceTarefa'

export const Layout = () => {
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState(false)
  const [revisoes, setRevisoes] = useState<Tarefa[]>([])

  useEffect(() => {
    selectTarefas().then((lista) => {
      const hoje = new Date().toLocaleDateString()
      if (lista.length > 0) {
        const newData = lista.filter((item) => {     
          return (item.dias7 === hoje && item.n_revisao === 0) || 
                  (item.dias15 === hoje && item.n_revisao === 1) || 
                  (item.mensal === hoje && item.n_revisao >= 2)
        });
        setRevisoes(newData);
      }
    })
  }, [])

  function handleAlert(msg: string, status: boolean) {
    setMsg(msg)
    setStatus(status)
  }

  function closeAlert() {
    setMsg('')
    setStatus(false)
  }

  function handleTarefas(row: Tarefa) {
    saveTarefa(row)
  }

  return (
    <Container
      data-name
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.getAttribute('data-name')) {
          closeAlert()
        }
      }}
    >
      <Menu handleAlert={handleAlert} />
      <Tarefas data={revisoes as Tarefa[]} handleClick={handleTarefas} />
      {msg !== '' && <Alert msg={msg} status={status} handleClose={closeAlert} />}
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const sampleData = [
  {
    id: 1,
    materia: 'Matemática',
    aula: 'Equações Lineares',
    dias7: '2025-05-01',
    dias15: '2025-05-08',
    mensal: '2025-05-28',
    status: 'p'
  },
  {
    id: 2,
    materia: 'História',
    aula: 'Revolução Francesa',
    dias7: '2025-05-02',
    dias15: '2025-05-09',
    mensal: '2025-05-29',
    status: 'a'
  },
  {
    id: 3,
    materia: 'Química',
    aula: 'Tabela Periódica',
    dias7: '2025-05-03',
    dias15: '2025-05-10',
    mensal: '2025-05-30',
    status: 'f'
  }
]
