import React from "react";
import { useState } from "react";

function Confirmation(){
    return(
     <>
        <h2 className="Confirmation heading">Your table has been Successfully booked!!</h2>
        <img className="Confirmation" src="../public/confirmation_table.png" alt="icon" />
        <p className="Confirmation heading">Thank you</p>
    </>
    )
}


export default Confirmation;