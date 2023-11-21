import { TextMain } from '../../atoms/TextMain'

interface AutoCardProps {
  plate?:string,
  cart?:string
}

export const AutoCard = ({plate="C2U-114",cart="Wolkswagen 2019 Golf"}:AutoCardProps) => {
  return (
    <>
      <div className='auto-card'>
        <div className='auto-card__container'>
          <TextMain
            category='p'
            color='light-grey'
            size='sm'
            weight='light'
            text={`Place: ${plate}`}
          />
          <TextMain
            category='p'
            color='grey'
            size='md'
            weight='light'
            text={cart}
          />
        </div>
        <div>
          <img src='../src/assets/AgenteRimac.svg' alt='' />
        </div>
      </div>
    </>
  )
}
