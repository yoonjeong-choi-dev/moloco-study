import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NO_USER, USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';
import { AppState } from './store/AppState';
import { JSON_API_CALL, JSON_API_CALL_INIT } from './store/JsonApiCallReduer';
import JsonApiCallDisplay from './JsonApiCallDisplay';
import PostDisplay from './PostDisplay';
import { NO_POST, POST_TYPE } from './store/PostReducer';

const Chapter7ReduxApp: FC = () => {
  const dispatch = useDispatch();

  const updateNumApiCall = useCallback((url: string|null = null) => {
    if(url) {
      dispatch({
        type: JSON_API_CALL,
        payload: { url },
      });
    } else {
      dispatch({
        type: JSON_API_CALL_INIT,
      });
    }
  }, [dispatch]);

  useEffect(()=>{
    updateNumApiCall();
  },[updateNumApiCall]);


  const [userId, setUserId] = useState(0);

  const fetchUserData = async () => {
    // reducer
    const userUrl = `https://jsonplaceholder.typicode.com/users/${ userId }`;
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${ userId }`;

    updateNumApiCall(`${userUrl} & ${postUrl}`);
    const userResponse = await fetch(userUrl);
    if (userResponse.ok) {
      console.log(userResponse);

      const user = await userResponse.json();
      dispatch({
        type: USER_TYPE,
        payload: {
          id: user.id,
          username: user.name,
          email: user.email,
          city: user.address.city,
        },
      });
    } else {
      dispatch({
        type: NO_USER,
      });
    }

    const postResponse = await fetch(postUrl);
    if(postResponse.ok) {
      const post = await postResponse.json();
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body,
        }
      })
    } else {
      dispatch({
        type: NO_POST,
      });
    }
  };

  const onChangeUserIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setUserId(userIdFromInput);
  }

  return (
    <React.Fragment>
      <h1>Chapter 7: Redux</h1>
      <hr/>

      <JsonApiCallDisplay/>
      <hr/>

      <h3>Search user via Id</h3>
      <label>User Id</label>
      <input type="number" value={ userId } onChange={ onChangeUserIdInput }/>
      <button onClick={ fetchUserData }>Find!</button>

      <UserDisplay/>
      <PostDisplay/>
    </React.Fragment>
  )
};

export default Chapter7ReduxApp;
