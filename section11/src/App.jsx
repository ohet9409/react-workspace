
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
import { useReducer } from 'react'

// assets 경로에 이미지를 넣을 경우 한번 불러오면 갱신해도 계속 요청하지 않음

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime,
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime,
    emotionId: 2,
    content: "2번 일기 내용",
  }
  ,
  {
    id: 3,
    createdDate: new Date().getTime,
    emotionId: 3,
    content: "3번 일기 내용",
  }
]

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  // 1. "/": 모든 일기를 조회하는 Home 페이지
  // 2. "/new": 새로운 일기를 작성하는 New 페이지
  // 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/diary/:id' element={<Diary/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </>
  )
}

export default App
