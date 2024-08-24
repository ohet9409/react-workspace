import { memo, useContext } from 'react';
import './TodoItem.css';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, date, content }) => {

  const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  const onChangeChecbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }
  return (
    <div className='TodoItem'>
      <input type="checkbox" onChange={onChangeChecbox} checked={isDone}/>
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);