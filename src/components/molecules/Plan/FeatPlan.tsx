import Tabs from '../../atoms/Tabs'
import { TextMain } from '../../atoms/TextMain'
import { CardFeat } from './CardFeat'
import { options } from "../../../utils/options";

export const FeatPlan = () => {
  return (
    <>
        <div className='featPlan__container'>
          <div className='featPlan__title'>
            <TextMain
              category='p'
              color='grey'
              size='lg'
              weight='light'
              text='Agrega o quita coberturas'
            />
          </div>
          <div className='featPlant__tabs-card'>
            <Tabs children={options.map((option,i) => <CardFeat key={i} title={option.title} information={option.description} srcSVG={option.img} />)} />
          </div>
        </div>
    </>
  )
}
