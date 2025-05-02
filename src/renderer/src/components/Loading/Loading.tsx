/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import React from 'react'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

const spinnerStyle = (color: string, size: number = 48) => css`
  width: ${size}px;
  height: ${size}px;
  border: 8px solid ${color};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const Spinner: React.FC = () => {
  return (
    <div css={containerStyle}>
      <div css={spinnerStyle('#3b82f6', 60)} /> {/* Azul - pequeno */}
      <div css={spinnerStyle('#10b981', 60)} /> {/* Verde - médio */}
      <div css={spinnerStyle('#f59e0b', 60)} /> {/* Amarelo - grande */}
    </div>
  )
}
