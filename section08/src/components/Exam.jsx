import { useReducer } from 'react';

function reducer(state, action) {
  console.log(state, action)

  switch(action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
  // if(action.type === 'INCREASE') {
  //   return state + action.data;
  // } else if(action.type === 'DECREASE') {
  //   return state - action.data;
  // }
}

const Exam = () => {

  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () =>{
    dispatch({
      type: "INCREASE",
      data: 1
    })
  }

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1
    })
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam;