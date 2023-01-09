import React, { FC, useContext } from 'react';
import { TestContext } from './ContextTester';

const UserAgeDisplay: FC = () => {
  const { userAge } = useContext(TestContext);
  return (
    <React.Fragment>
      <h3>User Age</h3>
      <strong>{ userAge }</strong>
      <hr/>
    </React.Fragment>
  );
};

export default UserAgeDisplay;