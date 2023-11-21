import { Outlet as Page } from 'react-router-dom'
import { Navbar } from './molecules/Navbar'

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <Page/>
    </>
  )
}
