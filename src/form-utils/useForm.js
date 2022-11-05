import {useState} from 'react'

const useForm = validate => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

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
    if(JSON.stringify(errors) == '{}'){
        console.log('Success')
    }
  }

  return{handleChange, values, handleSubmit, errors}
}

export default useForm