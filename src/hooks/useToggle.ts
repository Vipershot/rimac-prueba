import { useState } from 'react';

type ToggleReturnType = [boolean, () => void];

const useToggle = (initialValue = true): ToggleReturnType => {
 const [isToggled, setToggle] = useState<boolean>(initialValue);

 const handleToggle = () => {
   setToggle(!isToggled);
 };

 return [isToggled, handleToggle];
};

export default useToggle;
