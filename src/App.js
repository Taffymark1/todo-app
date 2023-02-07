import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
 
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      text: '리액트 기초를 공부해봅시다.',
      checked: false,
    },
    {
      id: 2,
      title : '컴포넌트 스타일링해 보기',
      text: '컴포넌트 스타일링 해봅시다.',
      checked: false,
    },
    {
      id: 3,
      title : '일정 관리 앱 만들어 보기',
      text: '일정 관리 앱 만들어 봅시다.',
      checked: true,
    },
  ]);
 
  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);
 
  const onInsert = useCallback(
    (title,text) => {
      const todo = {
        id: nextId.current,
        title,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
 
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
 
export default App;