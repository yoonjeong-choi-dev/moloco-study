import React, { createContext, FC, useState } from 'react';
import UserAgeDisplay from './UserAgeDisplay';
import UserNameDisplay from './UserNameDisplay';

interface UserInfo {
  userName: string;
  userAge: number;
}

export const TestContext = createContext<UserInfo>({
  userName: '',
  userAge: 0
});

const ContextTester: FC = () => {
  const [age, setAge] = useState(31);
  const [localState, setLocalState] = useState(0);

  const onClickAge = () => {
    setAge(age + 1);
  };

  const onClickLocalSate = () => {
    setLocalState(localState + 1);
  }

  return (
    <React.Fragment>
      <button onClick={ onClickAge }>Add Age</button>
      <TestContext.Provider value={ { userName: 'YJ', userAge: age } }>
        <UserAgeDisplay/>
        <UserNameDisplay/>
      </TestContext.Provider>

      <h3>Click the button which is out of context provider</h3>
      <button onClick={ onClickLocalSate }>Update Local State</button>
      &nbsp;<label>{ localState }</label>
    </React.Fragment>
  )
}

export default ContextTester;