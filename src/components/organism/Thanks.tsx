import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { ThanksView } from '../molecules/ThanksView'

export const Thanks = () => {

  const {user} = useContext(UserContext)
  
  return (
    <>
    <ThanksView email={user.email}/>
    </>
  )
}
