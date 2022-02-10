import React from "react";

const Contact = function (props) {
  const editContactHandler = () => {
    props.onEditRequest(props.id, props.name, props.email,props.place);
  };

  const deleteContactHandler = () => {
    props.onDeleteRequest(props.id);
  };

  return (
    <React.Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.place}</td>
        <td>
          <button onClick={editContactHandler}>Edit</button>
        </td>
        <td>
          <button onClick={deleteContactHandler}>Delete</button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Contact;
