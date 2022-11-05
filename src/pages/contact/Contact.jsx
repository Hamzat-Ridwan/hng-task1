import React from 'react'
import useForm from '../../form-utils/useForm'
import validate from '../../form-utils/validateInfo'
import Footer from '../../components/footer/Footer'
import './Contact.css'

const Contact = () => {
    const {values, handleChange, handleSubmit, errors} = useForm(validate)
  return (
    <>
    <form className='contact-page' onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
        <div className='input-fields'>
            <div className='names'>
                <div>
                    <label htmlFor='first_name'>First name</label>
                    <input id='first_name' type='text' placeholder='Enter your first name'
                    className={`${errors.firstName ? 'error': ''}`}
                    name='firstName'
                    value={values.firstName} 
                    onChange ={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div>
                    <label htmlFor='last_name'>Last name</label>
                    <input id='last_name' type='text' placeholder='Enter your last name'
                    className={`${errors.lastName ? 'error': ''}`}
                    name= 'lastName'
                    value={values.lastName} 
                    onChange ={handleChange}
                     />
                     {errors.lastName && <p>{errors.lastName}</p>}
                </div>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' placeholder='yourname@email.com'
                className={`${errors.email ? 'error': ''}`}
                name='email'
                value={values.email} 
                onChange ={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor='message'>Message</label>
                <textarea placeholder="Send me a message and I'll reply you as soon as possible..."
                className={`${errors.message ? 'error': ''}`}
                name='message'
                value={values.message} 
                onChange ={handleChange}
                />
                {errors.message && <p>{errors.message}</p>}
            </div>
        </div>
        <div className='agreement'>
            <input type='checkbox' className='checkbox'/>
            <p>You agree to providing your data to RidwanHamzat who may contact you.</p>
        </div>
        <button type='submit' id='btn__submit'>Send message</button>
    </form>
    <Footer />
    </>
  )
}

export default Contact