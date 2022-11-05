
export default function validateInfo(values) {
  let errors ={}
  if(!values.firstName.trim()){
    errors.firstName = 'First name not entered'
  }
  if(!values.lastName.trim()){
    errors.lastName = 'Last name not entered'
  }
  if(!values.email){
    errors.email = 'Email not entered'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email= 'Email address is invalid'
  }
  if(!values.message){
    errors.message = 'Please enter a message'
  }

  return errors
}

