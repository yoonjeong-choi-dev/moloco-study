import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const PostDisplay: FC = () => {
  const post = useSelector((state: AppState) => state.post);
  if(!post) return <div>There is no post</div>;

  return (
    <React.Fragment>
      <h3>Current User({post.id}) Post</h3>
      <div>
        <label>title: </label>
        &nbsp;{ post.title };
      </div>
      <div>
        <label>content: </label>
        &nbsp;{ post.body }
      </div>
    </React.Fragment>
  );
}

export default React.memo(PostDisplay);