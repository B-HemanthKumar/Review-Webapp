import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <form id='form'>  
        <h2> FORM </h2>
        <label>
            <input  placeholder=' Enter Your Name' className='input1' type='text' name='Username'   />
        </label>
        <label>
            <input placeholder=' Enter Descrition' className='input1' type='text' name='Description' />
        </label>
        <label> Choose Rating
        <select>
            <option>1</option>
            <option>1.5</option>
            <option>2</option>
            <option>2.5</option>
            <option>3</option>
            <option>3.5</option>
            <option>4</option>
            <option>4.5</option>
            <option>5</option>

        </select>
        </label>
        <input className="submit1" type='Submit' />
    </form>
  )
}

export default Form