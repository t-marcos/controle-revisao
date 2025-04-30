import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { Tarefa } from "~/src/Types/ResumoData"


interface Props {
    row: Tarefa,
    status: 'p' | 'f' | 'a'
    handleClick: (row: Tarefa) => void
}

export const ConcluirTarefa = ({row, status, handleClick}: Props) => {
    const [alterColor, setAlterColor] = useState(status);

    const bg = alterColor === 'f' ? '#00cc00' : '#cc0000'
    const cl = alterColor === 'f' ? '#e6ffe6' : '#ffe6e6'
    const hover = alterColor === 'f' ? '#008300' : '#8d0101'


    return (
        <StyledBtn 
            bgColor={alterColor === 'p'? null : bg } 
            fColor={alterColor === 'p'? null : cl} 
            hover={alterColor === 'p'? null : hover} 
            onClick={()=> {
                handleClick(row)
                setAlterColor('f')
            }}
        >
            {alterColor === 'p'? 'Pendente' : alterColor === 'f'? 'Feito' : 'Atrazado'}
        </StyledBtn>
    )
}


interface StyleProps{
    bgColor: string | null,
    fColor: string | null,
    hover: string | null,
}

const StyledBtn = styled.button<StyleProps>`
    padding: 6px 9px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    background-color: ${({bgColor})=> bgColor ? bgColor : "#4e5765"};
    color: ${({fColor})=> fColor ? fColor : "#e2e5e9"};
    width: 100%;
    font-weight: 600;
    letter-spacing: 0.05rem; 

    :hover{
        background-color: ${({hover})=> hover ? hover : "#373e48"};
    }
`;