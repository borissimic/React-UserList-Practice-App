import React from "react";
import UserForm from "./UserForm";
import "./NewUser.css";

const NewUser = (props) => {
  console.log(props);
  const saveUserData = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  return (
    <div className="new-user">
      <UserForm onSaveUserData={saveUserData} />
    </div>
  );
};

export default NewUser;
