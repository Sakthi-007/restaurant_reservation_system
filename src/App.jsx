import { useState } from 'react'
import './App.css'
import Reserve_form from './assets/Reserve_form.jsx'
import  Contact_form from './assets/Contact_form.jsx'
import Confirmation from './assets/Confirmation.jsx'

function App() {

  var [contact_array,setContact_array] =useState([])

  var [confirm,setConfirm] =useState(false);

  function contactFN(name,email,number){
    console.log(name,email,number);

    const formDataObject={name,email,number};
    setContact_array(oldarray=>[...oldarray,formDataObject])
    setConfirm(true)
  }


  return (
    <>
     <Reserve_form/>
    { confirm || <Contact_form  sendconfirmation={contactFN} />}
     { confirm && <Confirmation/>}
    </>
  )
}

export default App
