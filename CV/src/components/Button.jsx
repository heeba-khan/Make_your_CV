import React from 'react'
import '../style/button.css'
import {useNavigate} from 'react-router-dom'

function Button({formdata}) {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/display',{state:formdata})
  }

  return (
    <div>
        <button onClick={handleClick} className='submitbtn'>Submit</button>
    </div>
  )
}

export default Button