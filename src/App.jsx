
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Component, useState } from 'react';
import './App.css';

// function App() {
//   return (
//     <>
//       <div></div>
  
//     </>
//   )
// }

// export default App

export default class App extends Component {
  //Frtch API Data example
  //initlization
  state = {
    counter: 1,
    fetchData : {},
  };

  //mounting
  componentDidMount () {
    console.log("Mounting updataion on Rendering");
    this.fetchData(this.state.counter);
  }

  //updation
  componentDidUpdate (receiveProp, receiveState) {
    console.log("Now upation happening", receiveState);
    if (receiveState.counter != this.state.counter) {
      this.fetchData(this.state.counter);
    }
  }
  //Next button count
  addCounter = () => {
    this.setState({ counter: this.state.counter + 1});
  };

  //https://swapi.dev/api/people/

  fetchData(index) {
    fetch(`https://swapi.dev/api/people/${index}`)
    .then((res) => res.json())
    .then((data) => this.setState({fetchData: data}));
  }

  render() {
    return (
      <>
        <Greetings />
        <Counter1 />
        <Counter2 />
        <Information name ={"Govind"} batch ={"B51WD2 Tamil"}/>
        <hr>API FETCH DATA EXAMPLE</hr>
        <div>{this.state.fetchData.name || "Fetching data... Please wait..."}</div>
        <button onClick={this.addCounter}>NEXT</button>
      </>
    );
  }
}
class Counter1 extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  //with binding
  increment() {
    this.setState((prevCount) => ({
      count: prevCount.count +1,
    }));
  }
  //without Binding
  decremant = () => {
    this.setState({ count: this.state.count - 1});
  };
  render() {
    return (
      <>
        <h1>Counter 1</h1>
        <h2>Class Component {this.state.count}</h2>
        <div className='grt'><h3> Add Button working in <mark>with Binding</mark> method</h3></div>
        <button onClick={this.increment}>Add</button>
        <div className='grt'><h3> Remove Button working in <mark>without Binding</mark> method</h3></div>
        <button onClick={this.decremant}>Remove</button>
      </>
    );
  }
}

// export default 
// eslint-disable-next-line react-refresh/only-export-components
function Counter2() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Counter 2</h1>
      <h2> function Component {count}</h2>
      <button onClick={() => setCount(count +1)}>Add</button>
      <button onClick={() => setCount(count -1)}>Remove</button>
      <div className='grt'><h3>Both button working in <mark>function component</mark> mentod using <mark>setState</mark></h3></div>
    </div>
  );
}

class Information extends Component {
  render() {

    return (
      <div>
        Hi I am {this.props.name} and I am from {this.props.batch}
      </div>
    );
  }
}

//Greetings in class components
//wecome all of you, good morning
class Greetings extends Component {
  render() {

    //normal js function in side class component render
    const date = new Date();
    const hours = date.getHours();
    
    console.log(hours);
    let currentTime;
    if (hours < 12) {
      currentTime = "Good Morning";
    } else if (hours >= 12 && hours < 16) {
    currentTime = "Good Afternoon";
    } else if (hours >= 17 && hours < 18) {
      currentTime = "Good Evening"
    } else {
      currentTime = "Good Night"
    }
    return (
      <div className='grt'>
        Hello Coders <b>{currentTime}</b> to all of you! Ready to make a new <b><mark>code</mark></b> today.
      </div>

    )
  }
}