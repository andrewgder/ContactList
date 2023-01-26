import React, { useState } from "react";
import dummyContacts from "../dummyData";
import { ContactList } from "./";

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

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
