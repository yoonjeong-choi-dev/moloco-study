export const POST_TYPE = 'POST_TYPE';
export const NO_POST = 'NO_POST';

export interface Post {
  id: number,
  title: string,
  body: string,
}

export interface PostAction {
  type: string,
  payload: Post | null,
}

export const PostReducer = (state: Post | null = null, action: PostAction) => {
  switch (action.type) {
    case NO_POST:
      return null;
    case POST_TYPE:
      return action.payload;
    default:
      return state;
  }
};

