import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../style/exp.css'

export default function Expandexp({onformdata}) {
  const { register, handleSubmit,watch,setValue, formState: { errors } } = useForm();
  const isCurrentlyWorking=watch('currentlyWorking')
  const [localdata,setlocaldata]=useState({})
     
  const onSubmit = data => {
    console.log(data);
    setlocaldata(data);
    onformdata(data);
  }

  const onedit=()=>{
    if (Object.keys(localdata).length > 0){
      Object.keys(localdata).forEach(key=>setValue(key,localdata[key]))
    }else{
      console.log('There is no data');
      
    }
  }
  console.log(errors);
  
  return (
    <div className='personal-container'>
    <form className='expform' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Company name" {...register("Company name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Position" {...register("Position", {required: true, maxLength: 100})} />
      <textarea type="text" placeholder='Job Description' />
      <div>
        <label htmlFor='doj'>Date of Joining :</label>
        <input type='date' id='doj' {...register('doj',{required:true})} />
      </div>
      <div>
        <input type='checkbox' id='currentlyWorking' {...register('currentlyWorking')} />
        <label htmlFor='currentlyWorking'>Currently Working Here</label>
      </div>
      <div>
        <label htmlFor='doc'>Date of Completion :</label>
        <input type='date' id='doc' {...register('doc')} disabled={isCurrentlyWorking} />
      </div>

      <input type="submit" />
     <button type='button' onClick={onedit}>Edit</button>
    </form>
    </div>
  );
}