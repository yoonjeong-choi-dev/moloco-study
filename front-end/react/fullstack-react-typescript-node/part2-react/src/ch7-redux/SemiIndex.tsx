import React, { FC } from 'react';
import App from './Chapter7ReduxApp';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// 리덕스 프로젝트에서의 index.tsx 역할
const SemiIndex: FC = () => {
  return (
    <Provider store={ configureStore() }>
      <App/>
    </Provider>
  )
};

export default SemiIndex;
