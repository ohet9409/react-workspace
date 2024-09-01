import { useNavigate } from 'react-router-dom';
import getEmotionImage from '../util/get-emotion-image';
import Button from './Button';
import "./DiaryItem.css"

const DiaryItem = ({id, emotionId, createdDate, content}) => {

  const nav = useNavigate();
  return (
    <div className='DiaryItem'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div className='info_section'>
        <div className='created_date'>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className='content' onClick={() => nav(`/diary/${id}`)}>
          {content}
        </div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)}></Button>
      </div>
    </div>
  )
}

export default DiaryItem;