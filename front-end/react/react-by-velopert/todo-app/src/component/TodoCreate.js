import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const SCContainer = styled.form`
  display: flex;
  background: #495057;
`;

const SCInput = styled.input`
  flex: 1;

  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;

  font-size: 1.125rem;
  line-height: 1.5;
  color: #fff;

  ::placeholder {
    color: #dee2e6;
  }
`;

const SCButton = styled.button`
  display: flex;
  align-items: center;

  background: none;
  outline: none;
  border: none;

  background: #868e96;
  color: white;;

  padding: 0 1rem;
  font-size: 1.5rem;


  cursor: pointer;
  transition: 0.1s background ease-in;

  :hover {
    background: #adb5bd;
  }
`;

const TodoCreate = ({onCreate}) => {
  const [value, setValue] = useState('');
  const inputElement = useRef(null);

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  // submit 이벤트는 input에서 enter 입력 시에도 발생
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onCreate(value);

    setValue('');
    inputElement.current.focus();
  }, [onCreate, value]);

  return (
    <SCContainer onSubmit={onSubmit}>
      <SCInput
        placeholder="Enter your Todo!"
        ref={inputElement}
        value={value}
        onChange={onChange}
      />
      <SCButton type="submit">
        <MdAdd/>
      </SCButton>
    </SCContainer>
  );
};

export default TodoCreate;