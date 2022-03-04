import * as React from './react-source/packages/react'
import * as ReactDOM from './react-source/packages/react-dom'

function App()  {
  const [list,setList] = React.useState([0,1])
  const [list2,setList2] = React.useState([0,2])
  const handleOnClick = React.useCallback((item) => { 
    setList([...list,list.length])
  }, [list])
  return (
    <div>
      <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
      <button onClick={handleOnClick}>添加</button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))