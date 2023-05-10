import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner1 =()=> {
  
    return (
        <div className='text-center '>
        <img className='my-3' src={loading} alt='loading' width="20px"/>
      </div>
    )
  }


export default Spinner1
