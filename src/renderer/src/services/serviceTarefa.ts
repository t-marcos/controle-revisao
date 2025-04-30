import { TyInsertResumo } from "~/src/Types/InsertResumo"
import { Tarefa } from "~/src/Types/ResumoData";


export function createTarefa (dados: TyInsertResumo){
    return window.api.insertRevisao(dados);
}

export function saveTarefa (dados: Tarefa){
    return window.api.updateRevisao(dados)
}

export function selectTarefas (){
    return window.api.selectRevisao()
}


