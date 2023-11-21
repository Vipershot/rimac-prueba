import { BarProgress } from '../molecules/Plan/BarProgress'
import { CardMount } from '../molecules/Plan/CardMount'
import { CardPrice } from '../molecules/Plan/CardPrice'

export const Plan = () => {
  return (
    <div className='plan-container'>
      <BarProgress />
      <CardMount />
      <CardPrice/>
    </div>
  )
}
