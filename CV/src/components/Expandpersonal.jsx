import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../style/personal.css"

export default function Expandpersonal({onformdata}) {
  const { register, handleSubmit,setValue, formState: { errors } } = useForm();
  const [localdata,setlocaldata]=useState({})
  
  const onSubmit = data => {
    console.log(data);  
    setlocaldata(data);
    onformdata(data)
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
    <form className='personalform' onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
      </select>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

      <input type="submit" />
      <button type='button' onClick={onedit}>Edit</button>
    </form>
    </div>
  );
}