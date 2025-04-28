import { MenuContainer } from "./MenuContainer"
import add from '../../assets/add.svg'
import { Input } from "../Inputs/Input"
import { useState } from "react"

interface Props {
    handleAlert: (msg: string, status: boolean) => void
}

export const Menu = ({handleAlert}: Props)=>{
    const [data, setData] = useState({Disciplina: '', Conteudo:''})


    function handleValor(valor: {key:string, value: string}){
        setData({...data, [valor.key]: valor.value })
    }

    function handleSubmit (){
        if (data.Conteudo !== '' && data.Disciplina !== ''){
            handleAlert('A Tarefa foi salva com sucesso!', true)
        }else{
            handleAlert('Nao foi possível criar a tarefa!', false)
        }
    }

    return (
        <MenuContainer>
            <div>
                <Input props={dicisplina} handleValue={handleValor}/>
                <Input props={conteudo} handleValue={handleValor}/>
            </div>
            <button onClick={handleSubmit}>
                <img src={add} alt="" />
                Criar
            </button>
        </MenuContainer>
    )
}

const dicisplina = {
    placeholder: 'Digite a Disciplina',
    label: 'Disciplina'
}
const conteudo = {
    placeholder: 'Digite o Conteudo',
    label: 'Conteudo'
}