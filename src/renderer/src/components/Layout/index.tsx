import { useState } from "react"
import { Alert } from "../Alert/Alert"
import { Menu } from "../Menu/Menu"
import { Tarefas} from "../Tarefas/Tarefas"
import styled from "@emotion/styled"


export const Layout = ()=>{
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    function handleAlert(msg: string, status: boolean){
        setMsg(msg);
        setStatus(status);
    }

    function closeAlert(){
        setMsg('');
        setStatus(false);
    }

    return(
       <Container 
            data-name
            onClick={(e)=> {
                const target = e.target as HTMLElement;
                if (target.getAttribute('data-name')){
                    closeAlert()
                }
            }}
       >
        <Menu handleAlert= {handleAlert}/>
        <Tarefas/>
        { msg !== '' && <Alert msg={msg} status={status} handleClose={closeAlert}/>}
       </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;
