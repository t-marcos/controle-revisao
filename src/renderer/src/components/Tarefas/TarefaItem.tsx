import styled from "@emotion/styled"
import { StyledCheckbox } from "../Inputs/Checkbox";

export const TarefaItem = ({})=>{


    return (
        <LiBox>
            <StyledCheckbox/> 
            <p>Lingua Portuguesa</p>
            <p>Substantivo</p>
            <span className="status">Concluida</span>
        </LiBox>
    )
}


const LiBox = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #CCC;
    border-radius: 5px;
    text-transform: uppercase;

    p{
        border-right: 1px solid #CCC;
        padding: 10px 30px;
    }

    .status{
        display: inline-block;
        background-color: green;
        border-radius: 5px;
        padding: 3px;
        text-transform: capitalize;
    }
`;