import React from 'react';
import styled from 'styled-components';

const SCLayout = styled.div`
  width: 512px;
  margin: 6rem auto;
  border-radius: 4px;
  overflow: hidden;
`;

const SCHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  
  background: #22b8cf;
  color: #fff;
  font-size: 1.5rem;
`;

const SCContent = styled.div`
  background: #fff;
`;

const TodoLayout = ({children}) => {
  return (
    <SCLayout>
      <SCHeader>일정 관리</SCHeader>
      <SCContent>{children}</SCContent>
    </SCLayout>
  );
};

export default TodoLayout;
