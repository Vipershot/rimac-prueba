import { TextMain } from '../atoms/TextMain'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-container nav-brand'>
        <img src='../src/assets/LogoRIMAC.svg' alt='Rimac' />
      </div>
      {/* Mobile */}
      <div className='navbar-container nav-contact-mobile'>
        <img src='../src/assets/Telf.svg' alt='' />
        <TextMain size='sm' category='p' color='secondary' weight='light' text='Llámanos' />
      </div>
      {/* Web */}
      <div className='navbar-container nav-contact-web'>
        <TextMain
          size='sm'
          category='p'
          color='primary'
          weight='light'
          text='¿Tienes alguna duda?'
        />
        <div className='nav-phone'>
          <img src='../src/assets/Telf.svg' alt='' />
          <TextMain size='sm' category='p' color='secondary' weight='light' text='(01) 411 6001' />
        </div>
      </div>
    </div>
  )
}
