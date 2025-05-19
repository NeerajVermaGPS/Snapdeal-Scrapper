import React from 'react'

export default function Loading() {
  return (
    <div className='center full-w column'>
      <div className="loader"></div>
      <span style={{color: "var(--theme-white)", marginTop: "5px"}}>Loading</span>
    </div>
  )
}
