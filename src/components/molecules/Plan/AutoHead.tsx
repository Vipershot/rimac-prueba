import useWindowWidth from '../../../hooks/useWindowWidth'
import { TextMain } from '../../atoms/TextMain'

export const AutoHead = ({user="usuario!"}) => {
  const windowWidth = useWindowWidth()
  return (
    <>
      <div className='auto-head-container'>
        <div className='title-container'>
        <TextMain category='h1' color='grey' size='lg' weight='light' text={windowWidth > 1050 ? `!Hola, ` : 'Mira las coberturas'} />
        {windowWidth > 1050 ? <TextMain category='h1' color='terteary' size='lg' weight='light' text={` ${user}`} /> : <></>}
        </div>
        <TextMain
          category='p'
          color='grey'
          size='md'
          weight='light'
          text='Conoce las coberturas para tu plan'
        />
      </div>
    </>
  )
}
