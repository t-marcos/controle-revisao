import styled from "@emotion/styled"

export const MenuContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 20px;
    background-color: #000;
    padding: 10px 40px;
    width: 100%;
    color:#FFF;

    div{
        display: flex;
        gap: 10px;
        flex:1;
    }

    button {
        display: flex;
        align-items:center;
        gap:4px;
        background-color: var(--primary-color);
        color: #4d3d00;
        border: none;
        border-radius: 4px;
        padding: 8px 30px;
        font-size: 1.3rem;
        cursor: pointer;

        :hover{
            background-color: var(--btn-hover);
        }
        img{
            margin:0;
            padding:0;
        }
    }
`;