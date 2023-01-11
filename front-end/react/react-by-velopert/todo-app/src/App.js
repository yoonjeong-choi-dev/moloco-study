import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoLayout from './component/TodoLayout';
import TodoCreate from './component/TodoCreate';
import TodoListContainer from './component/TodoListContainer';

const initialTodos = [
  {
    id: 1,
    content: 'Learn React!',
    checked: true,
  },
  {
    id: 2,
    content: 'Learn Typescript!',
    checked: false,
  },
  {
    id: 3,
    content: 'Learn Express!',
    checked: false,
  },
];

// 최적화를 위한 벌크 데이터
const createBulkTodos = () => {
  const todos = [];
  for (let i = 0; i <= 2500; i++) {
    todos.push({
      id: i,
      content: `Todo #${i}`,
      checked: i % 2 === 0,
    });
  }

  return todos;
};

// Todo CRUD 함수를 위한 리듀서 정의
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'CHANGE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
      )
    default:
  }
}

function App() {
  //const [todos, setTodos] = useState(initialTodos);
  //const [todos, setTodos] = useState(createBulkTodos);

  // useReducer 사용 시, 초기 상태는 객체 or 함수를 인자로 넘겨준다
  //const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // next id 를 만들기 위함 : nextId 는 렌더링 관련 정보가 아니므로 state 대신 ref 사용
  const nextId = useRef(initialTodos.length + 1);

  // action for child component
  const createTodo = useCallback((content) => {
    const todo = {
      id: nextId.current,
      content,
      checked: false,
    };

    //setTodos([...todos, todo]);
    dispatch({type: 'INSERT', todo});
    nextId.current += 1;
  }, []);

  const removeTodo = useCallback((id) => {
    //setTodos(todos.filter(todo => todo.id !== id));
    dispatch({type: 'REMOVE', id});
  }, []);

  const toggleTodo = useCallback((id) => {
    // setTodos(todos.map(todo =>
    //   todo.id === id ? {...todo, checked: !todo.checked} : todo,
    // ));
    dispatch({type: 'CHANGE', id});
  }, []);



  return (
    <TodoLayout>
      <TodoCreate onCreate={createTodo}/>
      <TodoListContainer value={todos} onRemove={removeTodo} onChange={toggleTodo}/>
    </TodoLayout>
  );
}

export default App;
