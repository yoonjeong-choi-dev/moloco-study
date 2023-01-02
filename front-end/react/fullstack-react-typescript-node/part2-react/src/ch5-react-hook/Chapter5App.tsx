import React, { FC, useCallback, useEffect, useReducer, useState } from "react";
import Greeting from "./Greeting";
import GreetingFunctional from "./GreetingFunctional";
import ListCreator, { ListItem } from "./ListCreator";

const reducer = (state: any, action: any) => {
  console.log('Start Name-Reducer');

  switch (action.type) {
    case 'enterName':
      if (state.enterName === action.payload) {
        return state;
      }
      return {...state, enterName: action.payload};
    case 'message':
      return {
        ...state,
        message: `Hello, ${action.payload}`
      };
    default:
      throw new Error(`Invalid action type : ${action.type}`);
  }
};

const initState = {
  enterName: '',
  message: '',
};

const Chapter5App: FC = () => {

  const [{message, enterName}, dispatch] = useReducer(reducer, initState);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'enterName',
      payload: e.target.value,
    });
    dispatch({
      type: 'message',
      payload: e.target.value,
    });
  };

  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);
  const setCountCallback = useCallback(() => {
    console.log(`useCallback called : ${startCount}, ${count}`);
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [startCount, count]);
  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  };
  const onClickIncrementBtn = () => {
    setCountCallback();
  };


  const [listItems, setListItems] = useState<Array<ListItem>>();
  useEffect(() => {
    const list = [];
    for (let i = 0; i <= count; i++) {
      list.push({id: i});
    }
    setListItems(list);
  }, [count]);

  return <>
    <h1>
      Chapter 5: React Hook
    </h1>

    <h3>reducer example</h3>
    <input value={enterName} onChange={onChangeName}/>
    <Greeting name={enterName}/>
    <GreetingFunctional message={message}/>

    <hr/>
    <h3>useCallback example</h3>
    <label>Enter a number to increase: </label>
    <input value={startCount} onChange={onChangeStartCount}/>
    <br/>
    <strong>Current Count : {count} {'   '}</strong>
    <button onClick={onClickIncrementBtn}>Increment Count</button>

    <hr/>
    <h3>React.memo example</h3>
    <div>
      <ListCreator listItems={listItems}/>
    </div>
  </>;
};

export default Chapter5App;