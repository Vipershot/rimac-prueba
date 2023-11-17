import { PropsInput } from '../../interface/Input'

export const InputMain = ({type, placeHolder, name, style, value,id}: PropsInput) => {
  return (
    <input className={`input-${style}`} id={id} type={type} placeholder={placeHolder} value={value} name={name}/>
  )
}
