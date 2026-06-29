import { useState } from 'react'
import './App.css'

function App() {

    const [count,setCount] = useState(10)
        const [counter,setCounter] = useState(10)


    const increase = ()=>{
        setCount(count + 2)
        setCounter(count => count + 1)

    }

    const decrease = ()=>{
        setCount(count - 2)
    }
 return(
  <>
  <h1>Hooks and using useState</h1>
  <button onClick={increase}>Increse the value{count}{counter}</button>
  <br/>
  <button onClick={decrease}>Decrease the value{count}</button>
  <h2>COunter Value: {count}</h2>
  <p>{count}</p>
  </>
 )
}
export default App
