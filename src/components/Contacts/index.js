import {useState,useEffect} from 'react';

import "./styles.css"

import List from './List';
import Form from './Form';

function Contacts() {
  const[contacts,setContacts]=useState([{fullname:"Dilan",phone_number:23232},{fullname:"İbo",phone_number:1234323}]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  
  return (
    <div id="container">
    <h1>Contacts</h1>
    <List contacts={contacts}/>  
    <Form addContact={setContacts} contacts={contacts}/>
    </div>
   
)
}

export default Contacts;