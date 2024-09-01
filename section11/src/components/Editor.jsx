import { useEffect, useState } from 'react';
import Button from './Button';
import "./Editor.css"
import EmotionItem from './EmotionItem';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/get-stringed-date';

const Editor = ({initData, onSubmit}) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if(initData){
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      })
    }
  }, [initData])

  const onChangeInput = (e) => {
    console.log('📢 [Editor.jsx:54]', e.target.name); // 어떤 요소에 입력이 들어온건지
    console.log('📢 [Editor.jsx:55]', e.target.value); // 입력된 값이 무엇인지?

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name] : value,
    })
  }

  const onClickSubmitButton= () => {
    onSubmit(input);
  }

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input name='createdDate' onChange={onChangeInput} type="date" value={getStringedDate(input.createdDate)}/>
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
              <EmotionItem onClick={()=>onChangeInput({
                target: {
                  name: "emotionId",
                  value: item.emotionId,
                }
              })}
              key={item.emotionId} {...item} isSelected={item.emotionId===input.emotionId}></EmotionItem>
            )
          )}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea name="content" value={input.content} onChange={onChangeInput} placeholder='오늘은 어땠나요?'>

        </textarea>
      </section>
      <section className='button_section'>
        <Button text={"취소하기"} onClick={() => nav(-1)}></Button>
        <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickSubmitButton}></Button>
      </section>
    </div>
  );
}

export default Editor;