import React, { useState } from 'react';
import useForm from './useForm';
import './Grade.css'
import CalcGrade from './CalcGrade';

const Form = () => {
    const { handleChange, values } = useForm();

    const isMark = (mark) => {
      if (!/^([0-9]+\s*)$/.test(mark)) {
        return <h5>Mark needs to be a number </h5> 
      }
      else if (parseInt(values.mark) < 0 || parseInt(values.mark) > 100) {
        return <h5> Mark needs to be in the range from 0 to 100. </h5>
      }
      else {
        return false;
      }
    }

    const isWeight = (weight) => {
      if (!/^([0-9]+\s*)$/.test(weight)) {
        return <h5>Weight needs to be a number </h5> 
      }
      else {
        return false;
      }
    }
  
    return (
      <div className='form-content-right'>
        <form className='form'>
          <div className='form-inputs'>
            <input
              className='form-input'
              type='text'
              name='mark'
              placeholder='Mark'
              value={values.mark}
              onChange={handleChange}
            />
          </div>
          {isMark(values.mark)}
          <div className='form-inputs'>
            <input
              className='form-input'
              type='text'
              name='weight'
              placeholder='Weight'
              value={values.weight}
              onChange={handleChange}
            />
          </div>
          {isWeight(values.weight)}
          {(isMark(values.mark) == false || isWeight(values.weight) == false ) ? <CalcGrade mark={values.mark} weight={values.weight} /> : <h2></h2>}
        </form>
      </div>
    );
  };
  
  export default Form;