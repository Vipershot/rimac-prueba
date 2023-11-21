import { MouseEvent } from 'react';

interface IconButtonProps {
  icon?: string | any
  text?: string | any
  onClick?:(event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const ButtonAdd = ({ icon, onClick, text, disabled }: IconButtonProps) => {
  return <button onClick={onClick} disabled={disabled} className={disabled ? 'button-disabled' : `button-add` }><span className='icon'>{icon}</span>{text}</button>
}

export default ButtonAdd
