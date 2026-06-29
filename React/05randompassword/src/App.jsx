import { useCallback, useEffect, useState } from 'react'
import React from 'react'


function App() {
const [value,setValue] = useState("8")
const [numbers,setNumbers] = useState(false)
const [symbol,setSymbols] = useState(false)
const [password,setPassword] = useState("")

const passwordChanger = useCallback(()=>{

    let str = "ABUCEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""

    if(numbers) str += "0123456789"
    if(symbol) str += "!@#$%^&*()_+"


    for (let i = 1; i <= value; i++) {
      let ran = Math.floor(Math.random() * str.length)
      pass += str.charAt(ran)
      console.log(pass);
      console.log(ran);
      
      
      
    }
        setPassword(pass)

}
,[value,numbers,symbol])

useEffect(()=>{
  passwordChanger()
},[passwordChanger])


  return (
  
    <div className = 'class="h-10 w-full'>
      <div>
        <input type='text' value={password} readOnly/>
        <button className='border-2 p-1'>COPY</button>
      </div>
      
      <div className='flex gap-4'>
  <input
    type="range"
    min={6}
    max={100}
    value={value}
    onChange={(e) => setValue (Number(e.target.value))}
  />
  <span>{value} UPTO</span>
    <label>
    <input 
    type = "checkbox"
    checked={numbers}
          id="numberInput"
          onChange={() => {
              setNumbers((prev) => !prev);
          }}
    />
    Add Numbers</label>
    <input 
    type = "checkbox"
    checked={symbol}
              id="characterInput"
              onChange={() => {
                  setSymbols((prev) => !prev )
              }}
      />
    <label>Add Symbols</label>
</div>
    </div>
    
      
    
  )
}

export default App
