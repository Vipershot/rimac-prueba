import { MouseEvent } from 'react';

interface IconButtonProps {
  icon?: string | any
  border?: "transparent"
  color: "default" | "alert"
  onClick?:(event: MouseEvent<HTMLButtonElement>) => void
  size?: "md" | "lg"
}

const ButtonIcon = ({ size="md",icon, color, onClick, border }: IconButtonProps) => {
  return <button onClick={onClick} className={`icon-button icon-button__${size} icon-button__${color} icon-button__${border}`}>{icon}</button>
}

export default ButtonIcon
