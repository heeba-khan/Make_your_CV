import React,{useState} from 'react'
import '../style/personal.css'
import Expandpersonal from './Expandpersonal'


function Personal({onformdata}) {
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
            <h2>Personal Information</h2>
            <div className="expand">
                <button onClick={handleExpand}>+</button>
                <button onClick={handleCollapse}>-</button>
            </div>
        </div>
        <div>
        {isExpand&&<Expandpersonal onformdata={onformdata} />}
        </div>
    </div>
  )
}

export default Personal