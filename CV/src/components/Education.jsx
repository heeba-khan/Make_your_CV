import React,{useState} from 'react'
import Expandedu from './Expandedu'

function Education({onformdata}) {
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
            <h2>Education Details</h2>
            <div className="expand">
                <button onClick={handleExpand}>+</button>
                <button onClick={handleCollapse}>-</button>
            </div>
        </div>
        <div>
          {isExpand&&<Expandedu onformdata={onformdata} />}
        </div>
    </div>
  )
}

export default Education