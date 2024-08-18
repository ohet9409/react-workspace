import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import TodoItem from './components/TodoItem'

function App() {
  const mockData = [
    {
      id: 0,
      isDone:false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone:false,
      content: "빨래하기",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone:false,
      content: "잠자기",
      date: new Date().getTime(),
    }
  ]
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  };

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => {
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo
    }))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete= {onDelete}/>
    </div>
  )
}

export default App
