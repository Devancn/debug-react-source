import { useState,createContext,useEffect, useLayoutEffect } from 'react'
import * as React from './react-source/packages/react'
import * as ReactDOM from './react-source/packages/react-dom'

const Context = createContext(10)

// function App()  {
  // const [list,setList] = React.useState([0,1])
  // const [list2,setList2] = React.useState([0,2])
  // const handleOnClick = React.useCallback((item) => { 
  //   setList([...list,list.length])
  // }, [list])
  // return (
  //   <div>
  //     <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
  //     <button onClick={handleOnClick}>添加</button>
  //   </div>
  // )
  // const [counter,setCounter] = useState(0);
  // function handleOnClick(event) {
  //     console.log(event, 'event')
  //   setCounter(counter+1)
  // } 
  // return <button onClick={handleOnClick}>{counter}</button>
// }

class Foo extends React.Component {
  static contextType = Context
  shouldComponentUpdate() {
    return false  
  }
  
  render() {
    return <button onClick={() => this.context.setCount(this.context.count + 1)}>{this.context.count}</button>
  }
}

class Bar extends React.Component {
  state = {
    count: 1
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>
  }
}
// class App extends  React.Component{
//   state = {
//     isBool: false
//   }
//   setCount = newCount => {
//     console.log(1111)
//     // this.setState({count: newCount})
//   }
//   render() {
//     return <div>123</div>
//   }
// }
class Test extends React.Component{
  componentDidMount() {
    console.log('componentDidMount')
  }
  render() {
    return <div>哈哈哈</div>
  }
}
function App() {
  // return <ul>
  //   {
  //     Array.from({length: 3000}).map((_,i) => <li>{i}</li> )
  //   }
  // </ul>
  const [counter,setCounter] = useState(0);
  const [counter1,setCounter1] = useState(0)
  return <div>
    <Test key={counter}/>
    <button onClick={() => {
      setCounter(counter+1)
    }}>更新key</button>
    <button onClick={() => {
      setCounter1(counter1 + 1)
    }}>更新 counter1 {counter1} 的值</button>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))