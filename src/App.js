import { useState } from "react";
import Users from "./components/Users/Users";
import NewUser from "./components/NewUsers/NewUser";

const App = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
};

export default App;
