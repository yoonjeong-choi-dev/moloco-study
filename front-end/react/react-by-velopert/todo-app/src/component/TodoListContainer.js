import React, { useCallback } from 'react';
import styled from 'styled-components';
import { List } from 'react-virtualized';

import TodoItem, { TodoItemHeight, TodoItemWidth } from './TodoItem';

const MAX_HEIGHT = 513;

const SCListContainer = styled.div`
  min-height: 320px;
  max-height: ${MAX_HEIGHT}px;
  overflow-y: auto;
`;

const TodoListContainer = ({value: todos, onRemove, onChange}) => {
  // infinite scroll with partial fetch
  const rowRenderer = useCallback(({index, key, style}) => {
    const todo = todos[index];
    return (
      <TodoItem
        value={todo}
        key={key}
        onRemove={onRemove}
        onChange={onChange}
        style={<style></style>}
      />
    );
  }, [onChange, onRemove, todos]);

  return (
    <SCListContainer>
      {todos.map(todo => (
        <TodoItem
          value={todo}
          key={todo.id}
          onRemove={onRemove}
          onChange={onChange}
        />
      ))}
      {/*<List*/}
      {/*  width={TodoItemWidth}*/}
      {/*  height={MAX_HEIGHT}*/}
      {/*  rowCount={todos.length}*/}
      {/*  rowHeight={TodoItemHeight}*/}
      {/*  rowRenderer={rowRenderer}*/}
      {/*  list={todos}*/}
      {/*  style={{outline: 'none'}}   // Reset style of 'List' component*/}
      {/*/>*/}
    </SCListContainer>
  );
};

// 부모 컴포넌트인 App 상태 변경이 되어 리렌더링되어도 해당 컴포넌트 리렌더링은 되지 않도록 함
// 현재 코트 상으로는 해당 작업 불필요
export default React.memo(TodoListContainer);
