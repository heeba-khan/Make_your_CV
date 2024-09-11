import React from 'react';
import { useForm } from 'react-hook-form';

export default function Expandedu() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();
  const isCurrentlyStudying=watch('currentlyStudying')
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
}