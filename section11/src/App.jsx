
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import getEmotionImage from './utill/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'
import Edit from './pages/Edit'
import { act, createContext, useReducer, useRef } from 'react'

// assets 경로에 이미지를 넣을 경우 한번 불러오면 갱신해도 계속 요청하지 않음

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-09-01").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-09-19").getTime(),
    emotionId: 1,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-08-25").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  }
  ,
  {
    id: 4,
    createdDate: new Date("2024-07-29").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  }
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => String(item.id) === String(action.data.id)? action.data : item)
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id))
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,  
      },
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  // 1. "/": 모든 일기를 조회하는 Home 페이지
  // 2. "/new": 새로운 일기를 작성하는 New 페이지
  // 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

  return (
    <>
      <button onClick={
        () => onCreate(new Date().getTime, "1", "Hello")
      }>
        일기 추가 테스트
      </button>

      <button onClick={() => {
        onUpdate("4", new Date().getTime, 4, "수정된 일기입니다.")
      }}>
        일기 수정 테스트
      </button>

      <button onClick={() => {
        onDelete("2")
      }}>
        일기 삭제 테스트
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/new' element={<New/>}></Route>
            <Route path='/diary/:id' element={<Diary/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
