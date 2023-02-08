import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
const TodoListDone = ({ todos, onRemove, onToggle  }) => {
  return (
    <div className="TodoListDone">
      <div className='Done'>Done..!🎉</div>
      {todos.filter(todo => todo.checked).map(todo => (
        <TodoListItem 
        todo={todo} 
        key={todo.id} 
        onRemove={onRemove}
        onToggle={onToggle}
        />
      ))}
    </div>
  );
};
 
export default TodoListDone;