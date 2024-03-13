import React from "react";
import axios from "axios";
import '../styles/table.css';

function Table(props) {
    const Element = props.Element;
    const { Table_id, seat, availablity } = Element;
    const contactform = props.contactform;

  async  function handleClick(Table_id) {
        try {
            // Make axios request to update availability
            await axios.post('http://localhost:5500/tables/book', { Table_id });
            
            // Update parent component or perform any other actions if needed
            contactform(Table_id);
        } catch (error) {
            console.error("Error updating availability:", error);
        }
            contactform(Table_id)
    }

    return (
        <div className="table">
            <div>Table {Table_id}</div>
            <div>Seating : {seat}</div>
            <button className="table-select-btn" onClick={() => { handleClick(Table_id) }}>Book</button>
        </div>
    );
}

export default Table;
