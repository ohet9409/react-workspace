import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // home으로 이동 후 뒤로 가기 방지
    nav('/',{replace: true});
  }

  return (
    <div>
      <Header 
        title= {"새 일기 쓰기"} 
        leftChild={<Button onClick={() => {nav(-1)}} text={"< 뒤로가기"}
      />}/>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  )
};

export default New;