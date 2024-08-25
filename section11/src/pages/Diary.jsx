import { useParams } from 'react-router-dom';

const Diary = () => {
  const param = useParams();
  console.log(param);

  return <div>{param.id}번 일기입니다.</div>
};

export default Diary;