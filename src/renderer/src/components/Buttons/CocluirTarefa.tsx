import styled from "@emotion/styled"


interface Props {
    id: number,
    status: 'p' | 'f' | 'a'
    handleClick: (id: number) => void
}

export const ConcluirTarefa = ({id, status, handleClick}: Props) => {

    const bg = status === 'f' ? '#00cc00' : '#cc0000'
    const cl = status === 'f' ? '#e6ffe6' : '#ffe6e6'
    const hover = status === 'f' ? '#008300' : '#8d0101'


    return (
        <StyledBtn 
            bgColor={status === 'p'? null : bg } 
            fColor={status === 'p'? null : cl} 
            hover={status === 'p'? null : hover} 
            onClick={()=> handleClick(id)}
        >
            {status === 'p'? 'Pendente' : status === 'f'? 'Feito' : 'Atrazado'}
        </StyledBtn>
    )
}


interface StyleProps{
    bgColor: string | null,
    fColor: string | null,
    hover: string | null,
}

const StyledBtn = styled.button<StyleProps>`
    padding: 4px 9px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    background-color: ${({bgColor})=> bgColor ? bgColor : "#4e5765"};
    color: ${({fColor})=> fColor ? fColor : "#e2e5e9"};
    width: 100%;

    :hover{
        background-color: ${({hover})=> hover ? hover : "#373e48"};
    }
`;