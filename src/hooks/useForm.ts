import { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

interface Values {
  cellPhone: string
  contractAccepted: boolean
  docNumber: string
  licensePlate: string
}

const useForm = (initialValues: Values) => {
  const [values, setValues] = useState(initialValues)
  const formRef = useRef<HTMLFormElement>(null)
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (formRef.current?.checkValidity()) {
      setUser({licensePlate: values.licensePlate})
      navigate('/arma-tu-plan')
      console.log(values)
    }
  }

  return {
    values,
    handleChange,
    handleSubmit,
    formRef,
  }
}

export default useForm
