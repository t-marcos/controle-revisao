import styled from '@emotion/styled'
import { useState } from 'react'

interface Props {
  props: {
    placeholder: string
    label: string
  }
  handleValue: (data:{key:string, value: string}) => void
}

export const Input = ({ props, handleValue }: Props) => {
  const [valor, setValor] = useState('')

  return (
    <Label flex={props.label === 'Conteudo'? 3 : 2}>
      {props.label}
      <input 
        value={valor}
        onChange={(e)=> {
            setValor(e.currentTarget.value)
            handleValue({key: props.label, value: e.currentTarget.value})
        }}
        type="text" 
        name={props.label} 
        placeholder={props.placeholder} 
        required 
      />
    </Label>
  )
}


interface StyledProps{
    flex?: number
}

const Label = styled.label<StyledProps>`
  display:flex;
  flex-direction: column;
  gap: 5px;
  flex: ${({flex})=> flex };
  input {
    font-size: 1rem;
    padding: 10px;
    outline: none;
    border-radius: 4px;
    border: none;
    border: 2px solid transparent;
    :focus{
        border: 2px solid var(--primary-color)
    }
  }
`
