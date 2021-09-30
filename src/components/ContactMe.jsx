import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import emailKey from './emailKey';

const ContactMe = (props) => {
    const history = useHistory();
    const [form, setForm] =useState({
        user_name:"",
        user_email:"",
        message:""
    })

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, e.target, emailKey.USER_ID)
            .then((result) => {
                console.log(result.text);
                history.push("/")
            }, (error) => {
                console.log(error.text);
            });

        // setForm({
        //     user_name:"",
        //     user_email:"",
        //     message:""
        // })
    };

    const changeHandler = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <div className="App">
            <h1>Contact Me:</h1>
            <form className="d-flex flex-column emailBox" ref={form} onSubmit={sendEmail}>
                <label>Name:</label>
                <input className="mb-3" onChange={(e)=>changeHandler(e)} type="text" name="user_name" placeHolder="First, Last" value={form.user_name}/>
                <label>Email:</label>
                <input className="mb-3" onChange={(e)=>changeHandler(e)} type="email" name="user_email" placeHolder="Ex... Someone@email.com" value={form.user_email}/>
                <label>Message:</label>
                <textarea cols="30" rows="10" className="mb-3" onChange={(e)=>changeHandler(e)} name="message" value={form.message}/>
                <input className="btn btn-primary subBtn" type="submit"  value="Send" />
            </form>
        </div>
    );
}

export default ContactMe;