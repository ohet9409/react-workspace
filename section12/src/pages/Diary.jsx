import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../util/get-stringed-date';
import usePageTitle from '../hooks/usePageTitle';

const Diary = () => {
  const param = useParams();
  const nav = useNavigate();
  console.log(param);
  usePageTitle(`${param.id}번 일기`);
  const curDiaryItem = useDiary(param.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const {createdDate, emotionId, content} = curDiaryItem;
  console.log('📢 [Diary.jsx:11]', curDiaryItem);

  const title = getStringedDate(new Date(createdDate))

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => {nav(-1)}}/>}
        rightChild={<Button text={"수정하기"} onClick={() => {nav(`/edit/${param.id}`)}}/>}
      />
      <Viewer emotionId={emotionId} content={content}/>
    </div>
  )
};

export default Diary;