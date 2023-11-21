import { useContext, useEffect } from 'react'
import axios from '../../axios'
import { UserContext } from '../../context/userContext'
import { BarProgress } from '../molecules/Plan/BarProgress'
import { CardMount } from '../molecules/Plan/CardMount'
import { CardPrice } from '../molecules/Plan/CardPrice'

export const Plan = () => {
  const { setUser, user } = useContext(UserContext)
  function getRandomElement(array: []) {
    var rand = Math.floor(Math.random() * array.length)
    return array[rand]
  }
  useEffect(() => {
    axios.get('/users').then((response) => {
      const dataSelect:{name:string} = getRandomElement(response.data)
      setUser({...user,name:dataSelect.name})
      console.log(dataSelect)
    })
  }, [])

  return (
    <div className='plan-container'>
      <BarProgress />
      <CardMount name={user.name} plate={user.licensePlate} />
      <CardPrice />
    </div>
  )
}
