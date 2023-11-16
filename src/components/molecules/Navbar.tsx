import React from 'react'
import { TextMain } from '../atoms/TextMain'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-container nav-brand'>
        <img src='../src/assets/LogoRIMAC.svg' alt='' />
      </div>
      <div className='navbar-container nav-contact'>
        <img src='../src/assets/Telf.svg' alt='' />
        <TextMain size='sm' category='p' color='secondary' weight='light' text='Llámanos' />
      </div>
    </div>
  )
}
