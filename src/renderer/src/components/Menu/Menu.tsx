import { MenuContainer } from "./MenuContainer"
import add from '../../assets/add.svg'
import { Input } from "../Inputs/Input"
import { useState } from "react"


interface Props {
    handleAlert: (msg: string, status: boolean) => void
}

export const Menu = ({handleAlert}: Props)=>{
    const [data, setData] = useState({Disciplina: '', Conteudo:'', dataInicio: ''})
    const [dataInicio, setDataInicio] = useState('')


    function handleValor(valor: {key:string, value: string}){
        setData({...data, [valor.key]: valor.value, dataInicio: dataInicio })
    }

    function handleSubmit (){
        if (data.Conteudo !== '' && data.Disciplina !== '' && dataInicio !== ''){
            handleAlert('A Tarefa foi salva com sucesso!', true);
            console.log(data.dataInicio)
        }else{
            handleAlert('Nao foi possível criar a tarefa!', false);
        }
    }

    return (
        <MenuContainer>
            <div>
                <Input props={dicisplina} handleValue={handleValor}/>
                <Input props={conteudo} handleValue={handleValor}/>
                <label className="data">
                    Data Inicio
                    <input value={dataInicio} onChange={(e)=> setDataInicio(e.currentTarget.value)} type="date" />
                </label>
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