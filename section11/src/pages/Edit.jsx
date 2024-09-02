import { replace, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import Editor from '../components/Editor';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Edit = () => {
  const param = useParams();
  const nav = useNavigate();
  usePageTitle(`${param.id}번 일기 수정`);
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
  
  const curDiaryItem = useDiary(param.id);

  const onClickDelete = () => {
    if(
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")
    ) {
      // 일기 삭제 로직
      onDelete(param.id)
      // 뒤로 가기 방지
      nav('/', {replace: true})
    }
  };

  const onSubmit = (input) => {
    if (
      window.confirm("일기를 정말 수정할까요?")
    ) {
      onUpdate(param.id, input.createdDate.getTime(), input.emotionId, input.content)
      nav('/', {replace: true})
    }
  }

  return (<div>
    <Header
      title={"일기 수정하기"}
      leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)}/>}
      rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}></Header>
    <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
  </div>)
}

export default Edit;