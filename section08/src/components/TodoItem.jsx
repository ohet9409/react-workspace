import './TodoItem.css';

const TodoItem = ({id, isDone, date, content, onUpdate, onDelete}) => {

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

export default TodoItem;