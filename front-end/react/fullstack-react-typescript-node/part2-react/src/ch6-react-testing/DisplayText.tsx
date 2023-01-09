import React, { FC, useState } from 'react';

const DisplayText: FC = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickShowMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMessage(`Welcome to React Testing : ${ text }`);
  }

  return (
    <form>
      <div>
        <label>Enter any text</label>
      </div>
      <div>
        <input data-testid="user-input" value={ text } onChange={ onChangeText }/>
      </div>

      <div>
        <button data-testid="input-submit" onClick={ onClickShowMessage }>
          Show Message
        </button>
      </div>
      <div>
        <strong data-testid="final-msg">{ message }</strong>
      </div>
    </form>
  );
};

export default DisplayText;