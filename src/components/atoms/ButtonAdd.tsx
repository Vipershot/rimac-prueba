import { MouseEvent } from 'react';

interface IconButtonProps {
  icon?: string | any
  text?: string | any
  onClick?:(event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonAdd = ({ icon, onClick, text }: IconButtonProps) => {
  return <button onClick={onClick} className={`button-add`}><span className='icon'>{icon}</span>{text}</button>
}

export default ButtonAdd