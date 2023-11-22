import ThanksRimac from '../../assets/ThanksRimac.svg'
import ThanksHero from '../../assets/ThanksHero.svg'
import { useWindowWidth } from '../../hooks'
import { Button, TextMain } from '../atoms'

interface ThanksViewProps {
  email: string | any
}

export const ThanksView = ({ email }: ThanksViewProps) => {
  const windowWidth = useWindowWidth()
  return (
    <div className='thanks__container'>
      <div className='thanks__hero'>
        {windowWidth >= 1050 ? (
          <img className='thanks__img' src={ThanksHero} alt='' />
        ) : (
          <img src={ThanksRimac} alt='' />
        )}
      </div>
      <div className='thanks__info'>
        <div className='thanks__head'>
          <TextMain
            category='h1'
            color='terteary'
            size='lg'
            weight='light'
            text='¡Te damos la bienvenida!'
          />
          <TextMain
            category='p'
            color='primary'
            size='lg'
            weight='light'
            text='Cuenta con nosotros para proteger tu vehículo'
          />
        </div>
        <div className='thanks__email'>
          <TextMain
            category='p'
            color='grey'
            size='md'
            weight='light'
            text={`Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:`}
          />
          <TextMain category='p' color='grey' size='md' weight='light' text={email} />
        </div>
        <div className='thanks__button'>
          <Button style='default' text='Cómo usar mi seguro' />
        </div>
      </div>
      {windowWidth > 1050 ? (
        <></>
      ) : (
        <div className='thanks__footer'>
          <TextMain
            category='p'
            color='light-grey'
            size='sm'
            weight='light'
            text='© 2021 RIMAC Seguros y Reaseguros.'
          />
        </div>
      )}
    </div>
  )
}
