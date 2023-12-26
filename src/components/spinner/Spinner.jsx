import React from 'react'
import './Spinner.scss'
import logo from '../../assets/loader.png'
const Spinner = () => {
  return (
    <div className='loader'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Spinner