
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import getEmotionImage from './utill/get-emotion-image'

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
      {/* assets 경로에서 가져올때 : data uri를 통한 이미지 최적화 진행 -> 브라우저 메모리에 캐시된 이미지를 사용*/}
      <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>

        {/* <a href='/'>Home</a>
        <a href='/new'>New</a>
        <a href='/diary'>Diary</a> */}

      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
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
