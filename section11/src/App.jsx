
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import getEmotionImage from './utill/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'

// assets 경로에 이미지를 넣을 경우 한번 불러오면 갱신해도 계속 요청하지 않음




function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  // 1. "/": 모든 일기를 조회하는 Home 페이지
  // 2. "/new": 새로운 일기를 작성하는 New 페이지
  // 3. "/diary": 일기를 상세히 조회하는 Diary 페이지

  return (
    <>
      <Header title={"Header"}
        leftChild={<Button text={"Left"}/>}
        rightChild={<Button text={"Right"}/>}
      />
      <Button text={123} onClick={() => {console.log("123번 클릭")}} type={"DEFAULT"}/>
      <Button text={123} onClick={() => {console.log("123번 클릭")}} type={"POSITIVE"}/>
      <Button text={123} onClick={() => {console.log("123번 클릭")}} type={"NEGATIVE"}/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/diary' element={<Diary/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </>
  )
}

export default App
