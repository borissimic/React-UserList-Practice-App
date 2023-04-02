import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";
const UsersList = (props) => {
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
