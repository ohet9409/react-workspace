import { createContext, useCallback, useMemo, useReducer, useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import TodoItem from './components/TodoItem'
import Exam from './components/Exam'

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

const reducer = (state, action) => {
  console.log(state, action);
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => {
        if (item.id === action.targetId) {
          return {...item, isDone: !item.isDone}
        } else {
          return item
        }
      })
    case "DELETE":
      return state.filter((item)=> item.id !== action.targetId)
    default:
      return state
  }
}

// 변해야 하는 값
export const TodoStateContext = createContext();
// 변하지 않는 값
export const TodoDispatchContext = createContext();

function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {

    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   })
  // };

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, [])

  // 다시 생성되지 않도록 memo hook 사용
  const memoizedDispatch = useMemo(() =>{
    return {onCreate, onUpdate, onDelete};
  }, [])

  return (
    <div className='App'>
      <Header/>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor/>
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      
      {/* <Exam/> */}
    </div>
  )
}

export default App
