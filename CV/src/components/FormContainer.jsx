import React, { useState } from 'react'
import Personal from './Personal'
import Education from './Education'
import Exp from './Exp'
import Button from './Button'

function FormContainer() {
    const [formdata, setFormdata] = useState({
        personaldata: {},
        educationdata: {},
        expdata: {}
      });

    const handleformdata=(section,data)=>{
        setFormdata(prev=>({
            ...prev,
            [section]:data
        }))
    }

  return (
    <div>
        <Personal onformdata={(data)=>handleformdata('personaldata',data)} />
        <Education onformdata={(data)=>handleformdata('educationdata',data)} />
        <Exp onformdata={(data)=>handleformdata('expdata',data)} />
        <Button formdata={formdata}/>
    </div>
  )
}

export default FormContainer