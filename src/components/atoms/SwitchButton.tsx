
interface SwitchProps {
  disabled?: boolean
  type?: string
  onClick?:() => void
}

const SwitchButton = ({disabled, type, onClick}:SwitchProps) => {

 return (
   <button disabled={disabled} className={`switch switch-${type}`} onClick={onClick}>
     <span className="switch-label"><div className='ball'></div></span>
   </button>
 );
};

export default SwitchButton;
