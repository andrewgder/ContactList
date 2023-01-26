import React from "react";
import { ContactRow } from "./ContactRow";

const ContactList = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {props.contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ContactList;
