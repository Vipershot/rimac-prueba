import { useState } from 'react';

const SwitchButton = () => {
 const [isToggled, setToggle] = useState(false);

 const handleToggle = () => {
   setToggle(!isToggled);
 };

 return (
   <div className={`switch ${isToggled ? 'switch-on' : 'switch-off'}`} onClick={handleToggle}>
     <span className="switch-label"><div className='ball'></div></span>
   </div>
 );
};

export default SwitchButton;
