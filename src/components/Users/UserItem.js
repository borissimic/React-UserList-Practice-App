import React from "react";
import "./UserItem.css";
import Card from "../UI/Card";
const UserItem = (props) => {
  return (
    <Card className="user-item">
      <div className="user-item__description">
        <p>{props.name}</p>
        <p>({props.age} years old)</p>
      </div>
    </Card>
  );
};

export default UserItem;
