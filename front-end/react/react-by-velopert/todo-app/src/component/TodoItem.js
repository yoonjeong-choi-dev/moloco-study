import React from 'react';
import styled, { css } from 'styled-components';

import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

// virtualized 의 List 컴포넌트 사용을 위해 List 컴포넌트를 구성하는 각 항목(TodoItem)의 크기 필요
export const TodoItemHeight = 57;
export const TodoItemWidth = 512;

const SCContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;

  :nth-child(even) {
    background: #f8f9fa;
  }
  
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const SCContent = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }

  .content {
    flex: 1;
    margin-left: 0.5rem;
  }

  ${props => props.checked &&
          css`
            svg {
              color: #22b8cf;
            }

            .content {
              color: #adb5db;
              text-decoration: line-through;
            }
          `
  };
`;
const SCRemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b5b;
  cursor: pointer;

  :hover {
    color: #ff8787;
  }
`;

const TodoItem = ({value: todo, onRemove, onChange}) => {
  const {id, content, checked} = todo;

  return (
    <SCContainer>
      <SCContent checked={checked} onClick={() => onChange(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className="content">{content}</div>
      </SCContent>
      <SCRemoveButton onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </SCRemoveButton>
    </SCContainer>
  );
};

// props 가 변경되지 않으면, 부모 컴포넌트가 리렌더링되어도 해당 TodoItem 리렌더링을 하지 않는다
export default React.memo(TodoItem);