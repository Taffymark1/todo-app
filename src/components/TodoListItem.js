import React from 'react';
import {
  MdUndo,
  MdDone,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
 
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, title, text, checked } = todo;
   
    return (
      <div className="TodoListItem">
        <div className='title'>{title}</div>
          <div className={cn('checkbox', { checked })} >
          <div className="text">{text}</div>
          <div onClick={() => onToggle(id)}>{checked ? <MdUndo /> : <MdDone />}</div>
          </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    );
  };
   
  export default TodoListItem;
