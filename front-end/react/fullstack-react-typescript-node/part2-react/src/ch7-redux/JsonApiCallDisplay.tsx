import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const JsonApiCallDisplay: FC = () => {

  const numApiCall = useSelector((state: AppState) => state.callCount);

  return (
    <React.Fragment>
      <h3>Api Call Info</h3>
      <h4>Call Count : {numApiCall?.count}</h4>
      <h4>Last Call Url : {numApiCall?.url}</h4>
    </React.Fragment>
  );
}

export default React.memo(JsonApiCallDisplay);