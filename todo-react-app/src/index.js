import React from 'react';                            // 리엑트의 사용을 위해 import
import ReactDOM from 'react-dom';              // 리엑트 DOM의 사용을 위해
import './index.css';                                 // css import
import App from './App';                              // App 컴포넌트 import
// import reportWebVitals from './reportWebVitals';    
// import * as serviceWorker from './serviceWorker';     // 지금은 무시해도 됨

ReactDOM.render(  // ReactDOM이 내부의 컴포넌트들을 'root' 엘리멘트에 render 함
  <React.StrictMode>
      
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// reportWebVitals();
