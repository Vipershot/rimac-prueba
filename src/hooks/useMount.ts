import { useContext } from 'react'
import { UserContext } from '../context/userContext'

interface UseCounterProps {
  initialValue: number
  min: number
  max: number
}

const useMount = ({ min, max }: UseCounterProps) => {
  const { setPriceMax } = useContext(UserContext)


  const increment = () => setPriceMax((prevCount) => (prevCount < max ? prevCount + 100 : prevCount))
  const decrement = () => setPriceMax((prevCount) => (prevCount > min ? prevCount - 100 : prevCount))

  return {  increment, decrement }
}

export default useMount
