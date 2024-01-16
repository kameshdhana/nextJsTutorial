'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <button type="button" onClick={()=>{console.log("client component rendered on runtime")}}>{"Click Me I'm a server component"}</button>
  )
}

export default AddToCart;