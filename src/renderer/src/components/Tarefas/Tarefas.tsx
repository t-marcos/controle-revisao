// StyledTable.jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { ConcluirTarefa } from '../Buttons/CocluirTarefa';
import { Tarefa } from '@renderer/Types/ResumoData';

interface Props{
    data: Tarefa[],
    handleClick: (id: number) => void 
}
export const Tarefas = ({ data, handleClick }: Props) => (
  <TableWrapper data-name >
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
        {data.map((item) => (
          <tr key={item.id}>
            <td data-name>
                <ConcluirTarefa status={item.status} id={item.id} handleClick={handleClick}/>
            </td>
            <td data-name>{item.materia}</td>
            <td data-name>{item.aula}</td>
            <td data-name>{item.dias7}</td>
            <td data-name>{item.dias15}</td>
            <td data-name>{item.mensal}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 30px auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-width: 1200px
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', sans-serif;

  th, td {
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
  }

  :is(th, td):is(:nth-of-type(1), :nth-of-type(4), :nth-of-type(5), :nth-of-type(6)) {
    width: 150px;
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
