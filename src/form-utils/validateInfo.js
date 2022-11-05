
export default function validateInfo(values) {
  let errors ={}
  if(!values.firstName.trim()){
    errors.firstName = 'Please enter first name'
  }
  if(!values.lastName.trim()){
    errors.lastName = 'Please enter last name'
  }
  if(!values.email){
    errors.email = 'Please enter email'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email= 'Email address is invalid'
  }
  if(!values.message){
    errors.message = 'Please enter a message'
  }

  return errors
}

