import React from 'react';

export const TextArea = ({cols , rows,  type='text',name,placeholder,hundle,classInput,value}) => {
  return (

      <textarea
         onChange={hundle}
         rows = {rows|2}
         cols = {cols}
         name={name}
         type={type}
         placeholder={placeholder}
         value={value}
        className={'focus:outline-none px-2 py-2 rounded-lg w-full  ' + (classInput && (classInput)  ) } >

        </textarea>
  )
}


//

const Input = ({type='text',name,placeholder,hundle,classInput,value}) => {
  return (

      <input
         onChange={hundle}
         name={name}
         type={type}
         placeholder={placeholder}
         value={value}
        className={'focus:outline-none px-2 py-2 rounded-lg w-full  ' + (classInput && (classInput)  ) } />
  )
}


export default Input;
