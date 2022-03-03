import React, {useState} from 'react'

function AppFour() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        alert(`username:${username}, password:${password}`)
    }

  return (
  <React.Fragment>
      <input placeholder='username'
      onChange={(e) => setUsername(e.target.value)}>
      </input>

      <input placeholder='password' 
      onChange={(e) => setPassword(e.target.value)}>
      </input>
      
      <button onClick={() => handleClick()}>Submit</button>
  </React.Fragment>)
}

export default AppFour