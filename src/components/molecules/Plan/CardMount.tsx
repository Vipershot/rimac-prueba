import useWindowWidth from '../../../hooks/useWindowWidth'
import { MountInput } from '../../atoms/MountInput'
import { AutoCard } from './AutoCard'
import { AutoHead } from './AutoHead'
import { AutoPrice } from './AutoPrice'
import { FeatPlan } from './FeatPlan'

export const CardMount = () => {
  const windowWidth = useWindowWidth()
  return (
    <>
      {windowWidth > 1050 ? (
        <div className='cardMount__container-web'>
          <AutoHead />
          <div className='cardMount__auto-card'>
            <AutoCard />
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
