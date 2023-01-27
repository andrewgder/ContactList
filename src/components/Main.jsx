import React from "react";
import dummyContacts from "../dummyData";
import ContactList from "../ContactList";
console.log(ContactList);
const Main = () => {
  const [contacts, setContacts] = React.useState(dummyContacts);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts={contacts}></ContactList>
      </div>
    </div>
  );
};

export default Main;
