import React from "react";
const ContactRow = (props) => {
  //   return (
  //     <tr>
  //       <td>hello</td>
  //       <td>hi</td>
  //       <td>world</td>
  //     </tr>
  //   );
  console.log("contactRow test", props);
  //   props.contactRow.map((contact) => {
  return (
    <tr>
      <td>{props.contactRow.name}</td>
      <td>{props.contactRow.phone}</td>
      <td>{props.contactRow.email}</td>
    </tr>
  );
};
//   );
// };
export default ContactRow;
