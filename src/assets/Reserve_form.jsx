import React, { useState } from 'react';
import Axios from 'axios';

const Reserve_form = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('7 PM');
  const [location, setLocation] = useState('Coimbatore');
  const [quantity, setQuantity] = useState(4);
  const {setSelectedQuantity,showList}=props
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateFormatted = maxDate.toISOString().split('T')[0];

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

async function handleSubmit  (e)  {
    e.preventDefault();
    // Handle form submission here
    // alert(`date:${date} , ${time} \n location:${location}\n person:${quantity}`);
    // var dbobj={date:date,time:time,location:location,person:quantity}
    // var res =await Axios.post("http://localhost:5500/filters",dbobj)
   
    alert(`date:${date} , ${time} \n location:${location}\n person:${quantity}`);
    var dbobj = { date: date, time: time, location: location, person: quantity };
    showList(dbobj)
    // Pass the selected quantity to the parent component
    setSelectedQuantity(quantity);

    var res = await Axios.post("http://localhost:5500/filters", dbobj);

 
  };

  return (
    <form onSubmit={handleSubmit} className='reserve-form'>
      <div>
        <label>Date:</label>
        <input type="date" placeholder='Date' value={date} onChange={handleDateChange} min={today} max={maxDateFormatted} required/>
      </div>
      <div>
        <label>Time:</label>
        <select value={time}  onChange={handleTimeChange} required>
          <option value="5 PM">5 PM</option>
          <option value="7 PM">7 PM</option>
          <option value="9 PM">9 PM</option>
          <option value="11 PM">11 PM</option>
         </select>
      </div>
      <div>
        <label>Location:</label>
        <select value={location}  onChange={handleLocation} required>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Pollachi">Pollachi</option>
         </select>
      </div>
      <div>
        <label>Quantity:</label>
        <select type="number" value={quantity} onChange={handleQuantityChange} required>
          <option value="2">2 Person</option>
          <option value="4">4 Person</option>
          <option value="6">6 Person</option>
          <option value="8">8 Person</option>
          <option value="10">10 Person</option>  
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Reserve_form;
