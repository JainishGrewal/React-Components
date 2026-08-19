import React from 'react'
import {usesState} from 'react'


function Counter(){
    const[count,setCount]=useState(0)
    function Increment(){
       setCount(count+1)
    }
    return(
        <div>
            <p>0</p>
            <button onClick={Incrememt}>Increment</button>
          
            <button>Decrement</button>
            <button>IncreaseBy5</button>
            </div>
    )
}
export default Counter