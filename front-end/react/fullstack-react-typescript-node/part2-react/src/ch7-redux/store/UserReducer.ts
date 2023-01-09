export const USER_TYPE = 'USER_TYPE';
export const NO_USER = 'NO_USER';

export interface User {
  id: number;
  username: string;
  email: string;
  city: string;
}

export interface UserAction {
  type: string;
  payload: User | null;
}

export const UserReducer = (state: User | null = null, action: UserAction): User | null => {
  switch (action.type) {
    case USER_TYPE:
      return action.payload;
    case NO_USER:
      return null;
    default:
      return state;
  }
};