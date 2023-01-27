import React from "react";
import ContactRow from "./ContactRow";

const ContactList = (props) => {
  console.log("contactlist", props.contacts);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {/* <ContactRow contactRow={props.contacts}></ContactRow> */}
        {props.contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contactRow={contact}
              selectContact={props.selectContact}
            ></ContactRow>
            // <tr key={contact.id}>
            //   <td>{contact.name}</td>
            //   <td>{contact.phone}</td>
            //   <td>{contact.email}</td>
            // </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ContactList;
