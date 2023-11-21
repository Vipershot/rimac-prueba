import useWindowWidth from '../../../hooks/useWindowWidth'
import { MountInput } from '../../atoms/MountInput'
import { AutoCard } from './AutoCard'
import { AutoHead } from './AutoHead'
import { AutoPrice } from './AutoPrice'
import { FeatPlan } from './FeatPlan'

export const CardMount = ({plate, cart, name}:any) => {
  const windowWidth = useWindowWidth()
  return (
    <>
      {windowWidth > 1050 ? (
        <div className='cardMount__container-web'>
          <AutoHead user={`${name}!`} />
          <div className='cardMount__auto-card'>
            <AutoCard plate={plate} cart={cart}/>
          </div>
          <div className='cardMount__mount'>
            <AutoPrice />
            <MountInput />
          </div>
          <FeatPlan />
        </div>
      ) : (
        <>
          <div className='cardMount__container'>
            <div className='cardMount__mobile'>
              <div className='cardMount__info'>
                <AutoHead />
                <AutoCard />
              </div>
              <div className='cardMount__mount-info'>
                <AutoPrice />
                <MountInput />
              </div>
            </div>
          </div>
          <FeatPlan />
        </>
      )}
    </>
  )
}
