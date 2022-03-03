import React, {useState} from 'react'

function Display() {
    const [input, setInput] = useState('')


  return (
    <div>
        <input placeholder='text' onChange={(e) => setInput(e.target.value)}></input>
        <h1>{input}</h1>
    </div>
  )
}

export default Display