import React, { FC, useContext, useRef } from 'react';
import { TestContext } from './ContextTester';

const UserNameDisplay: FC = () => {
  const renders = useRef(0);
  const { userName } = useContext(TestContext);

  return (<React.Fragment>
    <h3>User Name</h3>
    <strong>{ userName }</strong>
    <div>
      Component Render num: { renders.current++ };
    </div>
    <hr/>
  </React.Fragment>);
};

export default React.memo(UserNameDisplay);