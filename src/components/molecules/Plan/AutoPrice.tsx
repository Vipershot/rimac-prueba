import { TextMain } from '../../atoms/TextMain'

export const AutoPrice = () => {
  return (
    <>
      <div className='orice-container'>
        <TextMain
          category='p'
          color='primary'
          size='md'
          weight='light'
          text='Indica la suma asegurada'
        />
        <TextMain
          category='p'
          color='grey'
          size='sm'
          weight='light'
          text='MIN $12,500  |  MAX $16,500'
        />
      </div>
    </>
  )
}
