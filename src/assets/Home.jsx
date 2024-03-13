import React from "react";
import { useState } from "react";


function Home(props){
    return(<>
        <h2 className="home-para">Have a Great Feast!!</h2>
        <button className="home-btn" onClick={()=>props.startBook()}>Book a Table</button>
        <img className="home-img" src="./home_img.jpg" alt="Home Image"/> 
    </>)
}

export default Home;