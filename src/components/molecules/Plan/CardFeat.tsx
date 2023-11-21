import { Button, ButtonAdd, SwitchButton, TextMain } from '../../atoms/index'
import { useWindowWidth, useToggle } from '../../../hooks/index'
import { useState } from 'react'

interface CardFeatProps {
  srcSVG?: string
  title?: string | any
  information?: string | any
}

export const CardFeat = ({ srcSVG, title, information }: CardFeatProps) => {
  const [isToggled, handleToggle] = useToggle()
  const windowWidth = useWindowWidth()
  const [agree, setAgree] = useState(true)
  const handleAgree = () => {
    setAgree(!agree)
  }

  return (
    <div className='cardFeat__container'>
      <div className='cardFeat__info'>
        <div className='cardFeat__head'>
          <div className='cardFeat__head-info'>
            <img src={srcSVG} alt='' />
            <TextMain category='p' color='primary' size='md' weight='light' text={title} />
          </div>
          <div className='cardFeat__head-switch'>
            {windowWidth > 1050 ? (
              <Button
                style={isToggled === true ? 'transparent-default' : 'transparent-default'}
                onClick={handleToggle}
                text={isToggled === true ? '▼' : '▲'}
              />
            ) : (
              <SwitchButton />
            )}
          </div>
        </div>
        {windowWidth > 1050 ? (
          <div className='cardFeat__add-container'>
            <ButtonAdd
              onClick={handleAgree}
              icon={agree === true ? '+' : '-'}
              text={agree === true ? 'AGREGAR' : 'QUITAR'}
            />
          </div>
        ) : (
          <></>
        )}
        {isToggled === false ? (
          <div className='cardFeat__text'>
            <TextMain category='p' color='grey' size='sm' weight='light' text={information} />
          </div>
        ) : (
          <></>
        )}
        <div className='cardFeat__button'>
          <div className='cardFeat__button-container'>
            {windowWidth > 1050 ? (
              <></>
            ) : (
              <Button
                style={isToggled === true ? 'transparent-open' : 'transparent-close'}
                onClick={handleToggle}
                text={isToggled === true ? 'VER MAS >' : 'VER MENOS <'}
              />
            )}
          </div>
        </div>
      </div>
      <hr className='cardFeat__divider' />
    </div>
  )
}
