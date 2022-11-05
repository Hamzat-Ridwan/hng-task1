import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const useForm = validate => {
    const navigate = useNavigate()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = e =>{
    const {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    })
    
  }

  const handleSubmit = e =>{
    e.preventDefault()
    console.log(values)
    setErrors(validate(values))
    setIsSubmitted(true)
    
  }

  useEffect(()=>{
    if(Object.keys(errors).length == 0 && isSubmitted){
        alert('Submitted')
        navigate('/')
    }
  }, [errors])

  return{handleChange, values, handleSubmit, errors}
}

export default useForm