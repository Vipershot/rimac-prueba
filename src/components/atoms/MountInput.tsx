import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import useMount from '../../hooks/useMount'
import ButtonIcon from './ButtonIcon'
import { TextMain } from './TextMain'

export const MountInput = () => {
  const { priceMax } = useContext(UserContext)
  const { increment, decrement } = useMount({ initialValue: 12500, min: 12500, max: 16500 })
  return (
    <div className='mount-input__container'>
      <ButtonIcon onClick={decrement} size='lg' border='transparent' color='default' icon='-' />
      <TextMain category='p' color='primary' size='md' weight='light' text={`$ ${priceMax}`} />
      <ButtonIcon onClick={increment} size='lg' border='transparent' color='default' icon='+' />
    </div>
  )
}
