"use client";
import React from 'react'

const Button = (props: any) => {
    let {
        onBtnClick, 
        label
    } = props
  
    const handleOnClick = () => {
        console.log(onBtnClick)
    } 

    return (
        <button 
            className='bg-cyan-600 text-white px-5 py-2 rounded-md'
            onClick={(e) => handleOnClick()}
        >
            {label}
        </button>
    )
}

export default Button