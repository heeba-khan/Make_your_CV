import React,{useState} from 'react'
import Expandexp from './Expandexp'

function Exp() {
  const [isExpand,setIsExpand]=useState(false)
    const handleExpand=()=>{
        setIsExpand(true)
    }
    const handleCollapse=()=>{
        setIsExpand(false)
    }
  return (
    <div>
        <div className="container">
            <h2>Work Experience</h2>
            <div className="expand">
                <button onClick={handleExpand}>+</button>
                <button onClick={handleCollapse}>-</button>
            </div>
        </div>
        <div>
          {isExpand&&<Expandexp />}
        </div>
    </div>
  )
}

export default Exp