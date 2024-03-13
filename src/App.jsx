import { useState, useEffect } from 'react'
import './styles/App.css';

import Reserve_form from './assets/Reserve_form.jsx'
import Contact_form from './assets/Contact_form.jsx'
import Confirmation from './assets/Confirmation.jsx'
import Home from './assets/Home.jsx'
import Table from './assets/Table.jsx'
import './styles/table.css'
import Axios from 'axios'

function App() {

  var [islist,setIsList] = useState(0);
  const [filterObj, setFilterobj] = useState({});

//   function showList(){
//     console.log("showing table list")
//     setIsList(1)

//   }
  var [selectedQuantity, setSelectedQuantity] = useState(0);
  var [contact_array, setContact_array] = useState([])

  var [page, setPage] = useState(0);
  function startBook() {
    setPage(1)
  }

  function contactform(args) {
    console.log(args);
    setPage(2)
  }

  function contactFN(name, email, number) {
    console.log(name, email, number);

    const formDataObject = { name, email, number };
    setContact_array(oldarray => [...oldarray, formDataObject])
    setPage(3)
  }

  var [tableArray, setTableArray] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:5500/tables/restaurant?quantity=${selectedQuantity}`)
      .then(tableArray => setTableArray(tableArray.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedQuantity]);

  function showList(filterObj) {
    console.log("showing table list");
    setIsList(1);
    setFilterobj(filterObj);
  }

  //   let val = tableArray.map((item)=>{
  //     return <li key={item.name}>{item.person}</li>
  // });

  return (
    <>
      <div className="name">Feastoo Restaurant</div>

      {page === 0 ? <Home startBook={startBook} /> : null}
      {page === 1 ? <Reserve_form showList={showList} setSelectedQuantity={setSelectedQuantity}/> : null}
      {page === 1 ? <div className="table-list">
        {tableArray.map((Element) => (
          <Table key={Element.Table_id} Element={Element} contactform={contactform} />
        ))}
      </div> : null}
      
      {page === 2 ? <Contact_form sendconfirmation={contactFN} filterobj={filterObj} /> : null}
      {page === 3 ? <Confirmation /> : null}
    </>
  )
}

export default App
