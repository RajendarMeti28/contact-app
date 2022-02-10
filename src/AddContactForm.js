import React, { useState } from "react";
import "./ContactForm.css";

const AddContactForm = function (props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");

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
    if (name.trim() !== "" && email.trim() !== "" && place.trim() !== "")
      props.onContactInput({ name, email, place });
    setName("");
    setEmail("");
    setPlace("");
  };

  return (
    <React.Fragment>
      <h2>ADD CONTACT</h2>
      <form className="form-controls" onSubmit={formSubmitHandler}>
        <span>
          <label>Name: </label>
          <input type="text" onChange={nameChangeHandler} value={name}></input>
          <label>Email: </label>
          <input
            type="email"
            onChange={emailChangeHandler}
            value={email}
          ></input>
          <label>Place: </label>
          <input
            type="text"
            onChange={placeChangeHandler}
            value={place}
          ></input>
          <button>ADD</button>
        </span>
      </form>
    </React.Fragment>
  );
};

export default AddContactForm;
