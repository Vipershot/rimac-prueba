import ButtonIcon from './ButtonIcon'
import { TextMain } from './TextMain'
import useMount from '../../hooks/useMount';

export const MountInput = () => {
    const { count, increment, decrement } = useMount({ initialValue: 12500, min: 12500, max: 16500 });
  return (
    <div className='mount-input__container'>
        <ButtonIcon onClick={decrement} size='lg' border='transparent' color='default' icon="-"/>
        <TextMain category='p' color='primary' size='md' weight='light' text={`$ ${count}`}/>
        <ButtonIcon onClick={increment} size='lg' border='transparent' color='default' icon="+"/>
    </div>
  )
}
