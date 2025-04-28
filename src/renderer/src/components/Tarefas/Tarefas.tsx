import { TarefaItem } from "./TarefaItem"
import styled from '@emotion/styled'

export const Tarefas= ()=>{


    return (
        <TarefasContainer>
            <TarefaItem/>
        </TarefasContainer>
    )
}

const TarefasContainer = styled.ul`
    padding: 60px;
`;