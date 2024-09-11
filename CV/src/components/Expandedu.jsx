import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import "../style/education.css"

export default function Expandedu() {
  const { register, handleSubmit,watch,setValue, formState: { errors } } = useForm();
  const isCurrentlyStudying=watch('currentlyStudying')
  const [formdata,setFormdata]=useState({})
  const onSubmit = data => {
    console.log(data);
    setFormdata(data);
  }

  const onedit=()=>{
    Object.keys(formdata).forEach(key=>setValue(key,formdata[key]))
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