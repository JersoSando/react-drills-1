import React, {useState} from 'react'

function AppTwo() {
    const arr = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
  return (
    <div>
        {arr.map((item, index) => {
            <hi key={index}>{item}</hi>
        })}

    </div>
  )
}

export default AppTwo