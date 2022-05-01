// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './Todo';
import {Paper, List} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items2: [
        {id: 0, title: 'Hello World 1', done: true},
        {id: 1, title: 'Hello World 2', done: false},
      ],
    };
  }

  render() {
    var todoItems = this.state.items2.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items2.map((item, idx) => (
            <Todo item={item} key = {item.id}/>
          ))}
        </List>
      </Paper>
    );
    return <div className="App">{todoItems}</div>;
    
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
