import React, { useState } from "react";
import "./ContactForm.css";

const AddContactForm = function (props) {
  const [name, setName] = useState(props.editContact.name);
  const [email, setEmail] = useState(props.editContact.email);
  const [place, setPlace] = useState(props.editContact.place);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const placeChangeHandler = (event) => {
    setPlace(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onContactEdit({ name, email, place });
    setName("");
    setEmail("");
    setPlace("");
  };

  return (
    <React.Fragment>
      <h2>EDIT CONTACT</h2>
      <form className="form-controls" onSubmit={formSubmitHandler}>
        <span>
          <label>Name: </label>
          <input type="text" onChange={nameChangeHandler} value={name}></input>
          <label>Email:</label>
          <input
            type="email"
            onChange={emailChangeHandler}
            value={email}
          ></input>
          <label>Place:</label>
          <input
            type="text"
            onChange={placeChangeHandler}
            value={place}
          ></input>
          <button>EDIT</button>
        </span>
      </form>
    </React.Fragment>
  );
};

export default AddContactForm;
