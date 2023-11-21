import { useNavigate } from 'react-router-dom'
import ButtonIcon from '../../atoms/ButtonIcon'
import { TextMain } from '../../atoms/TextMain'
import useWindowWidth from '../../../hooks/useWindowWidth'

export const BarProgress = () => {
  const navigate = useNavigate()
  const windowWidth = useWindowWidth()
  const handledClick = () => {
    navigate('/')
  }
  return (
    <>
      {windowWidth > 1050 ? (
        <div className='progress-bar__container-web'>
          <div className='progress-bar__web'>
            <div className='progress-bar__option'>
              <span>1</span>
              <TextMain category='p' size='sm' color='light-grey' weight='bold' text='Datos' />
            </div>
            <div className='progress-bar__option select'>
              <span>2</span>
            <TextMain category='p' size='sm' color='primary' weight='light' text='Arma tu plan' />
            </div>
            <div className='progress-bar__back-container'>
              <ButtonIcon size='md' color='alert' icon='<' onClick={handledClick} />
              <TextMain category='p' color='light-grey' size='md' weight='light' text='VOLVER' />
            </div>
          </div>
        </div>
      ) : (
        <div className='progress-bar__container'>
          <div className='progress-bar__mobile'>
            <ButtonIcon color='default' icon='<' onClick={handledClick} />
            <TextMain category='p' size='xs' color='primary' weight='bold' text='PASO 2 DE 2' />
            <div className='progress-bar__divider' />
          </div>
        </div>
      )}
    </>
  )
}
