import React from 'react';
import { useForm } from 'react-hook-form';

export default function Expandexp() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();
  const isCurrentlyWorking=watch('currentlyWorking')
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
}