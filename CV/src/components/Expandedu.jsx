import {useState} from 'react';
import { useForm } from 'react-hook-form';
import "../style/education.css"

export default function Expandedu({onformdata}) {
  const { register, handleSubmit,watch,setValue, formState: { errors } } = useForm();
  const isCurrentlyStudying=watch('currentlyStudying')
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
    <div className="personal-container">
    <form className="educationform" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="School name" {...register("School name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Course" {...register("Course", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Major" {...register("Major", {required: true, maxLength: 100})} />
      <div>
        <label htmlFor='startdate'>Start Date :</label>
        <input type='date' id='startdate' {...register('startdate',{required:true})} />
      </div>
      <div>
        <input type='checkbox' id='currentlyStudying' {...register('currentlyStudying')} />
        <label htmlFor='currentlyStudying'>Currently Studying Here</label>
      </div>
      <div>
        <label htmlFor='enddate'>End Date :</label>
        <input type='date' id='enddate' {...register('enddate')} disabled={isCurrentlyStudying} />
      </div>

      <input type="submit" />
      <button type="button" onClick={onedit}>Edit</button>
    </form>
    </div>
  );
}