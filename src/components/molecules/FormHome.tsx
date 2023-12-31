import useForm from '../../hooks/useForm'
import useWindowWidth from '../../hooks/useWindowWidth'
import Button from '../atoms/Button'
import { InputMain } from '../atoms/InputMain'
import { InputSelect } from '../atoms/InputSelect'
import { TextMain } from '../atoms/TextMain'

export const FormHome = () => {
  const windowWidth = useWindowWidth()
  const { values, handleChange, handleSubmit, formRef } = useForm({
    docNumber: '',
    cellPhone: '',
    licensePlate: '',
    contractAccepted: false
  });

  return (
    <div className='formHome__container'>
      {windowWidth >= 1050 ? (
        <div className='formHome__hero-web'>
          <div className='formHome__info-web'>
            <div className='formHome__card'>
              <TextMain category='p' size='sm' color='primary' weight='bold' text='¡NUEVO!' />
              <h1 className='formHome__web-text'>
                Seguro <span style={{ color: 'red' }}>Vehicular Tracking</span>
              </h1>
              <TextMain
                category='p'
                size='sm'
                color='grey'
                weight='light'
                text='Cuentanos donde le haras seguimiento a tu seguro'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='formHome__hero-mobile'>
          <div className='formHome__info'>
            <div className='formHome__new'>
              <TextMain category='p' color='primary' size='xs' weight='bold' text='¡NUEVO!' />
            </div>
            <div className='formHome__main'>
              <TextMain
                category='p'
                color='primary'
                size='lg'
                weight='light'
                text='Seguro Vehicular'
              />
              <TextMain category='p' color='terteary' size='lg' weight='light' text='Tracking' />
            </div>
            <div className='formHome__text'>
              <TextMain
                category='p'
                color='grey'
                size='sm'
                weight='light'
                text='Cuentanos donde le haras seguimiento a tu seguro'
              />
            </div>
          </div>
          <div className='formHome__brand'>
            <img src='../src/assets/RimacHero.svg' alt='' />
          </div>
        </div>
      )}
      <div className='formHome__section-web'>
        <div className='formHome__section'>
          <TextMain
            category='p'
            color='primary'
            size='lg'
            weight='light'
            text='Déjanos tus datos'
          />
          <form ref={formRef}  onSubmit={handleSubmit}>
            <div className='formHome__select formHome__input'>
              <InputSelect />
              <InputMain name='docNumber' style='select' placeHolder='Nro. de Doc.' type='number' value={values.docNumber} onChange={handleChange}/>
            </div>
            <div className='formHome__input'>
              <InputMain name='cellPhone' style='main' placeHolder='Celular' type='text'  value={values.cellPhone} onChange={handleChange} />
            </div>
            <div className='formHome__input--last'>
              <InputMain name='licensePlate' style='main' placeHolder='Placa' type='text' value={values.licensePlate}  onChange={handleChange}/>
            </div>
            <div className='formHome__check-container'>
              <div className='formHome__check-box'>
                <InputMain name='contractAccepted' style='check' id='contract' value={values.contractAccepted}  onChange={handleChange} type='checkbox' />
              </div>
              <label className='formHome__check-label' htmlFor='contract'>
                <TextMain
                  category='p'
                  color='primary'
                  size='sm'
                  weight='light'
                  text='Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.'
                />
              </label>
            </div>
            <div className='formHome__button-container'>
              <Button disabled={values.cellPhone === '' && values.docNumber === '' && values.licensePlate === '' && values.contractAccepted === false ? true : false } text='COTÍZALO' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
