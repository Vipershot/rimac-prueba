import { useState } from 'react';

interface UseCounterProps {
    initialValue: number;
    min: number;
    max: number;
   }
   

const useMount = ({ initialValue, min, max }: UseCounterProps) => {
 const [count, setCount] = useState(initialValue);

 const increment = () => setCount(prevCount => prevCount < max ? prevCount + 100 : prevCount);
 const decrement = () => setCount(prevCount => prevCount > min ? prevCount - 100 : prevCount);

 return { count, increment, decrement };
};

export default useMount;

