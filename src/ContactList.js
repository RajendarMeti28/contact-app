import React from "react";
import Contact from "./Contact";

const ContactList = function (props) {
  const editRequestHandler = (id, name, email, place) => {
    props.onEdit(id, name, email, place);
  };

  const deleteRequestHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <React.Fragment>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Place</td>
          </tr>
        </thead>
        <tbody>
          {props.contacts &&
            props.contacts.map((contact) => (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                place={contact.place}
                onDeleteRequest={deleteRequestHandler}
                onEditRequest={editRequestHandler}
              ></Contact>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
