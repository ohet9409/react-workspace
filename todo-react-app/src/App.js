// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './Todo';
import {Paper, List, Container} from "@material-ui/core";
import AddTodo from './AppTodo';
import {call} from "./servixe/ApiServixe";

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

  componentDidMount() {
    // const requestOptions = {
    //   method: "GET",
    //   headers: {"Content-Type": "application/json"},
    // };

    // fetch("http://localhost:8080/todo", requestOptions)
    //   .then((response) => response.json())
    //   .then(
    //     (response) => {
    //       this.setState({
    //         items: response.data,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         error,
    //       });            
    //     }
    //   );
    call("/todo", "GET", null).then((response) => 
      this.setState({items: response.data})
    );
  }

  // (1) 함수 추가
  add = (item) => {
    // const thisItem = this.state.items2;
    // item.id = "ID-" + thisItem.length; // key를 위한 id 추가
    // item.done = false; // done 초기화
    // thisItem.push(item); // 리스트에 아이템 추가
    // this.setState({items2: thisItem});
    // console.log("item: " , this.state.title);

    
      call("/todo", "POST", item).then((response) => 
        this.setState({item: response.data})  
      );
    
  };

  // delete 함수 작성
  delete = (item) => {
    // const thisItems = this.state.items2;
    // console.log("Before Update Items: ", this.state.items2);
    // const newItems = thisItems.filter(e => e.id !== item.id);
    // this.setState({items2: newItems}, () => {
      // 디버깅 콜백
      // console.log("Update Items: ", this.state.items2);

      call("/todo", "DELETE", item).then((response) => 
        this.setState({items: response.data})
      );
  };
  
  update = (item) => {
    call("/todo", "PUT", item).then((response) => 
      this.setState({items: response.data})
    );
  };

  render() {
    var todoItems = this.state.items2.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items2.map((item, idx) => (
            //<Todo item={item} key = {item.id}/>
            // delete 함수 연결
            <Todo item={item} key={item.id} delete={this.delete} update={this.update}/>
          ))}
        </List>
      </Paper>
    );

    // (2) 함수 연결
    return (
      <div className ="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>

    );
    
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
