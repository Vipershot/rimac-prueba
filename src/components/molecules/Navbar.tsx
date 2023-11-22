import { TextMain } from '../atoms/TextMain'
import useWindowWidth from '../../hooks/useWindowWidth'

export const Navbar = () => {
  const windowWidth = useWindowWidth()

  return (
    <div className='navbar-container'>
      <div className='navbar-container nav-brand'>
        <img src='../src/assets/LogoRIMAC.svg' alt='Rimac' />
      </div>
      {windowWidth >= 1050 ? (
        <div className='navbar-container nav-contact-web'>
          <TextMain
            size='sm'
            category='p'
            color='primary'
            weight='light'
            text='¿Tienes alguna duda?'
          />
          <div className='nav-phone'>
            <a className='nav-ref' href='#'>
              <img src='../src/assets/Telf.svg' alt='' />
              <TextMain
                size='sm'
                category='p'
                color='secondary'
                weight='light'
                text='(01) 411 6001'
              />
            </a>
          </div>
        </div>
      ) : (
        <div className='navbar-container nav-contact-mobile'>
          <a className='nav-ref' href='#'>
            <img src='../src/assets/Telf.svg' alt='' />
            <TextMain size='sm' category='p' color='secondary' weight='light' text='Llámanos' />
          </a>
        </div>
      )}
    </div>
  )
}
