import React, {useState} from 'react'

function AppThree() {
    const resetFoods = [
    'spaghetti', 
    'ice cream', 
    'sushi',
    'bologna']
    
    const [foods, setFoods] = useState([
        'spaghetti', 
        'ice cream', 
        'sushi',
        'bologna', 
        'cheese'
    ])

    const filterFoods = (param) => {
        const filteredArr = foods.filter((food) => 
        food.toLocaleLowerCase().includes(param)
        );
        setFoods(param === "" ? resetFoods : filteredArr)
    }

  return (
    <div>
        <input placeholder='text' 
        type='text' 
        onChange={(e) => filterFoods(e.target.value)}></input>
        {foods.map((item, index) => {
            <hi key={index}>{item}</hi>
        })}
    </div>
  )
}

export default AppThree