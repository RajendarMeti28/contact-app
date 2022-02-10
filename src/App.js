import React, { useState } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import EditContactForm from "./EditContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editContact, setEditContact] = useState({});

  const contactInputHandler = (contact) => {
    setContacts((prevContacts) => {
      contact = { id: Math.round(Math.random() * 1000000), ...contact };
      return [contact, ...prevContacts];
    });
  };

  const contactEditHandler = (contact) => {
    setContacts((prevContacts) => {
      contact = { id: Math.round(Math.random() * 1000000), ...contact };
      return [contact, ...prevContacts];
    });
    setIsEdit(false);
  };
  const deleteHandler = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const editHandler = (id, name, email, place) => {
    setIsEdit(true);
    deleteHandler(id);
    setEditContact({ id, name, email, place });
  };

  return (
    <React.Fragment>
      <h1>Contacts App</h1>
      {!isEdit ? (
        <AddContactForm onContactInput={contactInputHandler} />
      ) : (
        <EditContactForm
          editContact={editContact}
          onContactEdit={contactEditHandler}
        />
      )}
      <ContactList
        onDelete={deleteHandler}
        onEdit={editHandler}
        contacts={contacts}
      />
    </React.Fragment>
  );
}

export default App;
