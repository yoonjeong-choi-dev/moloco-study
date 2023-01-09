import React, { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const UserDisplay: FC = () => {
  const renderCount = useRef(0);
  console.log(`renders UserDisplay : ${ renderCount.current++ }`);

  const user = useSelector((state: AppState) => state.user);

  if (!user) return <div>There is no such user</div>;

  return (
    <React.Fragment>
      <h3>Information of the user {user.id}</h3>
      <div>
        <label>username: </label>
        &nbsp;{ user.username };
      </div>
      <div>
        <label>email: </label>
        &nbsp;{ user.email }
      </div>
      <div>
        <label>city: </label>
        &nbsp;{ user.city }
      </div>
    </React.Fragment>
  );
};

export default React.memo(UserDisplay);