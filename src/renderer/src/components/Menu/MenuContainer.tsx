import styled from "@emotion/styled"

export const MenuContainer = styled.form`
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    gap: 20px;
    background-color: #000;
    padding: 30px 40px;
    width: 100%;
    color:#FFF;

    .data{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    [type="date"]{
        height: 100%;
        width: 150px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        padding: 5px;
        box-sizing: border-box;
    }

    div{
        display: flex;
        gap: 10px;
        flex:1;
        max-width: 1000px;
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
        height: 44px;

        :hover{
            background-color: var(--btn-hover);
        }
        img{
            margin:0;
            padding:0;
        }
    }
`;