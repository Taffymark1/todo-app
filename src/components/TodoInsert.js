import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
 
const TodoInsert = ({ onInsert }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
  
  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);
 
  const onSubmit = useCallback(
    e => {
      onInsert(title, text);
      setTitle(''); // value 값 초기화
      setText('');

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, title, text],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        className='title'
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <input
        className='text'
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChangeText}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
 
export default TodoInsert;