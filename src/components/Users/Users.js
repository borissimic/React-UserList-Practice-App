import React from "react";
import UsersList from "./UsersList";
import Card from "../UI/Card";
import "./Users.css";
const Users = (props) => {
  return (
    <div>
      <Card className="users">
        <UsersList items={props.items} />
      </Card>
    </div>
  );
};

export default Users;
