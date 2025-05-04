// StyledTable.jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { ConcluirTarefa } from '../Buttons/CocluirTarefa'
import { Tarefa } from '../../../../Types/ResumoData'
import { Inbox } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Spinner } from '../Loading/Loading'

interface Props {
  data: Tarefa[]
  handleClick: (row: Tarefa) => void
}

export const Tarefas = ({ data, handleClick }: Props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(data)
    if (data.length === 0) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    } else {
      setLoading(false)
    }
  }, [data])

  return (
    <TableWrapper data-name>
      <StyledTable data-name>
        <thead>
          <tr>
            <th>Status</th>
            <th>Matéria</th>
            <th>Aula</th>
            <th>7 dias</th>
            <th>15 dias</th>
            <th>Mensal</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>
                  <ConcluirTarefa status={item.status} row={item} handleClick={handleClick} />
                </td>
                <td>{item.materia}</td>
                <td>{item.aula}</td>
                <td style={{ background: item.n_revisao === 0 ? '#ff6666' : '' }}>{item.dias7}</td>
                <td style={{ background: item.n_revisao === 1 ? '#ff6666' : '' }}>{item.dias15}</td>
                <td style={{ background: item.n_revisao >= 2 ? '#ff6666' : '' }}>{item.mensal}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <EmptyState>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      <Inbox />
                      <p>Nenhuma Revisão Para Hoje.</p>
                    </>
                  )}
                </EmptyState>
              </td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 30px auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-width: 1200px;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', sans-serif;

  th,
  td {
    padding: 12px 16px;
    text-align: center;
  }

  th {
    background-color: #4a90e2;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f4f8fb;
  }

  tbody tr:hover {
    background-color: #e6f2ff;
  }

  td {
    border-top: 1px solid #ddd;
    font-size: 1.2rem;
    font-weight: 700;
    color: #424242;
  }

  :is(th, td):is(:nth-of-type(1), :nth-of-type(4), :nth-of-type(5), :nth-of-type(6)) {
    width: 150px;
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;
  padding: 40px 0;

  svg {
    width: 200px;
    height: 200px;
    margin-bottom: 12px;
  }

  p {
    font-size: 3rem;
    font-weight: 600;
  }
`
