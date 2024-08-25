
/**
 * 이미지 불러오는 예시
 */

import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

// assets 경로에 이미지를 넣을 경우 한번 불러오면 갱신해도 계속 요청하지 않음
import emotion1 from './assets/emotion1.png';
import emotion2 from './assets/emotion2.png';
import emotion3 from './assets/emotion3.png';
import emotion4 from './assets/emotion4.png';
import emotion5 from './assets/emotion5.png';


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
      {/* public 경로에서 가져오면 리랜더링 될 때마다 이미지 갱신 */}
      <div>
        <img src="/emotion1.png" alt="" />
        <img src="/emotion2.png" alt="" />
        <img src="/emotion3.png" alt="" />
        <img src="/emotion4.png" alt="" />
        <img src="/emotion5.png" alt="" />
      </div>

      {/* assets 경로에서 가져올때 : data uri를 통한 이미지 최적화 진행 -> 브라우저 메모리에 캐시된 이미지를 사용*/}
      <div>
        <img src={emotion1} alt="" />
        <img src={emotion2} alt="" />
        <img src={emotion3} alt="" />
        <img src={emotion4} alt="" />
        <img src={emotion5} alt="" />
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
