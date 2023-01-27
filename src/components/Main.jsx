import React from "react";
// import dummyContacts from "../dummyData";
import ContactList from "../ContactList";
import SingleContact from "../SingleContact";
console.log(ContactList);
const Main = () => {
  const [contacts, setContacts] = React.useState([]);
  const [selectedContact, setSelectedContact] = React.useState({});
  const getContacts = async () => {
    try {
      const response = await fetch(
        "http://jsonplace-univclone.herokuapp.com/users"
      );
      const result = await response.json();

      setContacts(result);
    } catch (error) {
      console.err(error);
    }
  };
  const selectContact = async (contactId) => {
    const response = await fetch(
      `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
    );
    const contact = await response.json();
    setSelectedContact(contact);
  };

  React.useEffect(() => {
    getContacts();
  }, []); // <= empty dependency array
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ? (
          <SingleContact selectedContact={selectedContact}></SingleContact>
        ) : (
          <ContactList
            contacts={contacts}
            selectContact={selectContact}
          ></ContactList>
        )}
      </div>
    </div>
  );
};

export default Main;
