import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'peter',age:24,message:'random'})
  
  // Multiple State Values
  // const [name, setName] = useState('peter')
  // const [age, setAge] = useState(24)
  // const [message, setMessage] = useState('random')
  
  const changeMessage = () => {
    setPerson({...person, message:'hello world'})
    
  }

  // const changeMessage2 = () => {
  //   setMessage('Hello World')
  // }

  return (
  <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>
    Change Message
  </button>
  </>
  )

  // return (
  //   <>
  //   <h3>{name}</h3>
  //   <h3>{age}</h3>
  //   <h3>{message}</h3>
  //   <button className="btn" onClick={changeMessage2}>
  //     Change Message
  //   </button>
  //   </>
  //   )
};

export default UseStateObject;
