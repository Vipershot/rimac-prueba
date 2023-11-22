import useWindowWidth from '../../../hooks/useWindowWidth'
import Button from '../../atoms/Button'
import Check from '../../../assets/Check.svg'
import { TextMain } from '../../atoms/TextMain'
import { UserContext } from '../../../context/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const CardPrice = () => {
  const windowWidth = useWindowWidth()
  const navigate = useNavigate()
  
  const {price} = useContext(UserContext)
  return (
    <>
      {windowWidth > 1050 ? (
        <div className='cardPrice__container-web'>
          <div className='cardPrice__component'>
            <div className='cardPrice__price-container'>
              <TextMain category='p' color='primary' size='sm' weight='light' text='Monto' />
              <TextMain category='p' color='primary' size='lg' weight='light' text={`$${price}.00`} />
              <TextMain category='p' color='primary' size='xs' weight='light' text='Mensuales' />
            </div>
            <hr className='cardFeat__divider' />
            <div className='cardPrice__feat-container'>
              <TextMain
                category='p'
                color='primary'
                size='md'
                weight='light'
                text='El precio incluye:'
              />
              <div className='cardPrice__text-container'>
                <div className='cardPrice__feat-items'>
                  <img src={Check} alt='' />
                  <TextMain
                    category='p'
                    color='primary'
                    size='sm'
                    weight='light'
                    text='Llanta de repuesto'
                  />
                </div>
                <div className='cardPrice__feat-items'>
                  <img src={Check} alt='' />
                  <TextMain
                    category='p'
                    color='primary'
                    size='sm'
                    weight='light'
                    text='Analisis de motor'
                  />
                </div>
                <div className='cardPrice__feat-items'>
                  <img src={Check} alt='' />
                  <TextMain
                    category='p'
                    color='primary'
                    size='sm'
                    weight='light'
                    text='Aros gratis'
                  />
                </div>
              </div>
              <div className='cardPrice__button-container'>
                <Button onClick={() => navigate("/gracias")} style='default' text='Lo quiero' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='cardPrice__container'>
            <div className='cardPrice__text'>
              <TextMain category='p' color='primary' size='lg' weight='light' text={`$${price}.00`} />
              <TextMain category='p' color='primary' size='xs' weight='bold' text='MENSUAL' />
            </div>
            <div className='cardPrice__button'>
              <Button onClick={() => navigate("/gracias")} style='default' text='Lo quiero' />
            </div>
          </div>
        </>
      )}
    </>
  )
}
