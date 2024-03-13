import React from "react";
import { useState } from "react";

function Contact_form(props){

    const[name, setName] = useState("");
    const [email, setEmail] =useState("");
    const [number,setNumber] =useState("");
    

    const sendconfirmation=props.sendconfirmation 

        function handleNamechange(e){
            setName(e.target.value);
        }
        function handleEmailchange(e){
            setEmail(e.target.value);
        }
        function handleNumberchange(e){
            setNumber(e.target.value);
        }

        function handleSubmit(e){
            e.preventDefault();
            
            //handle form submision here

            alert(`Name: ${name} \n Email:${email}\n Number:${number}`);
            sendconfirmation(name, email, number);

        }
    return(<>
    <h2>Contact Form</h2>
    <form onSubmit={handleSubmit} className="contact-form">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNamechange} required/>
        </div>
        <div>
            <label  htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"  value={email} onChange={handleEmailchange} required/>
        </div>
        <div>
            <label  htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={number} onChange={handleNumberchange}required/>
        </div>
        <button type="submit">Submit</button>
    </form>
    </>)
}

export default Contact_form;