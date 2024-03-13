import React from "react";
import { useState } from "react";
import axios from 'axios'
function Contact_form(props){

    const[name, setName] = useState("");
    const [email, setEmail] =useState("");
    const [number,setNumber] =useState("");
    const { filterobj, sendconfirmation } = props;
    const { date, time, location, quantity, tableno } = filterobj;

    // const sendconfirmation=props.sendconfirmation 

        function handleNamechange(e){
            setName(e.target.value);
        }
        function handleEmailchange(e){
            setEmail(e.target.value);
        }
        function handleNumberchange(e){
            setNumber(e.target.value);
        }

       async function handleSubmit(e){
            e.preventDefault();
            
            //handle form submision here

            alert(`Name: ${name} \n Email:${email}\n Number:${number}`);
            sendconfirmation(name, email, number);
            var dbobj = { name: name, email: email, number: number, date: date, time: time, location: location, tableno: tableno, person: quantity };
             var res = await axios.post("http://localhost:5500/contact", dbobj);
           
            // var dbobj={name:name,email:email,number:number}
            //  var res=await axios.post("http://localhost:5500/contact",dbobj)

        }
    return(<>
    <form onSubmit={handleSubmit} className="contact-form">
    <h2>Contact Form</h2>
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