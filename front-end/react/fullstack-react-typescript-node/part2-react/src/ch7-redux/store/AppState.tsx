import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import { JsonApiCallReducer } from './JsonApiCallReduer';
import { PostReducer } from './PostReducer';

export const rootReducer = combineReducers({
  callCount: JsonApiCallReducer,
  user: UserReducer,
  post: PostReducer,
});

export type AppState = ReturnType<typeof rootReducer>;