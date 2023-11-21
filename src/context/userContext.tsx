import { createContext, useState } from 'react';
import { Data } from "../interface/Users";

interface Props {
    children: React.ReactNode
  }

type UserData = {
    user: Data, setUser: React.Dispatch<React.SetStateAction<Data>>
    price: number, setPrice: React.Dispatch<React.SetStateAction<number>>
    priceMax: number, setPriceMax: React.Dispatch<React.SetStateAction<number>>
}

export const UserContext = createContext({} as UserData)

export const UserProvider = ({children}:Props) => {
    const [user, setUser] = useState({})
    const [price, setPrice] = useState(20)
    const [priceMax, setPriceMax] = useState(12500)
    return (
		<UserContext.Provider
			value={{user,setUser,price,setPrice,priceMax,setPriceMax}}>
			{children}
		</UserContext.Provider>
	)
}
