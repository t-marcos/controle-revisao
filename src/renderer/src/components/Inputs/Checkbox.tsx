/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';


export const StyledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <CustomCheckbox
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    </div>
  );
}

export const CustomCheckbox = ({ checked, onChange }: {
    checked: boolean;
    onChange: () => void;
  }) => {
    return (
      <label css={checkboxWrapper}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          css={hiddenCheckbox}
        />
        <span css={customCheckbox}></span>
      </label>
    );
  };


const checkboxWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const hiddenCheckbox = css`
  display: none;
`;

const customCheckbox = css`
  width: 20px;
  height: 20px;
  border: 2px solid #4a90e2;
  border-radius: 4px;
  background-color: white;
  position: relative;
  transition: all 0.2s;

  input:checked + & {
    background-color: #4a90e2;
  }

  input:checked + &::after {
    content: '✔';
    position: absolute;
    top: -2px;
    left: 3px;
    font-size: 14px;
    color: white;
  }
`;


