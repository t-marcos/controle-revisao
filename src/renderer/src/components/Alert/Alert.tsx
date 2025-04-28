import styled from '@emotion/styled'

interface Props {
  status: boolean
  msg: string
  handleClose?: () => void
}

export const Alert = ({ status, msg, handleClose }: Props) => {
  return (
    <AlertBox bgColor={status}>
      {msg}
      <button onClick={handleClose} >x</button>
    </AlertBox>
  )
}

interface StyleProps {
  bgColor: boolean
}

const AlertBox = styled.div<StyleProps>`

    background-color: ${({ bgColor }) => (bgColor ? '#66ff66' : '#ff4d4d')};
    position: absolute;
    right: 40px;
    bottom: 40px;
    padding: 15px 30px;
    border: 1px solid #757575;
    border-radius: 5px;
    font-size: 24px;
    color: #3f3f3f;

    button {
      position:absolute;
      right: -7px;
      top: -7px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--primary-color);
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
    }
`
