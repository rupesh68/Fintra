import React from 'react';
import img from '../assets/VectorCheck.svg';

const WelcomeBonus = () => {
  return (
    <div className='flex gap-3 items-center'>
      <img src={img} alt="" />
      <h5 className='font-montserrat font-semibold'>Welcome Bonus</h5>
    </div>
  )
}

export default WelcomeBonus
