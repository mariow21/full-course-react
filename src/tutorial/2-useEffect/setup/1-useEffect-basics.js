import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

    useEffect(()=>{
      console.log('call useEffect')
      // document.title = `New Message(${value})`
      //useEffect conditional
      if(value >= 1){
        document.title = `New Message(${value})`
      }
    }/*Dependency List*/, [value])

    useEffect(() => {
      console.log('hello world')
    },[])
  
  console.log('render component')
  return (
  <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=> setValue(value + 1)}>Click Me</button>
  </>
  )
};

export default UseEffectBasics;