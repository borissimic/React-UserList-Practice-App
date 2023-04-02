import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./UserForm.css";

const UsersForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [error, setError] = useState("");

  const emptyName = enteredName.trim().length === 0;
  const emptyAge = enteredAge.trim().length === 0;
  const minusAge = +enteredAge < 0;

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (emptyName || emptyAge) {
      setIsErrorModalOpen(true);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (minusAge) {
      setIsErrorModalOpen(true);
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    const userData = {
      name: enteredName,
      age: +enteredAge,
    };
    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      {isErrorModalOpen && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={closeErrorModal}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>Username</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              value={enteredName}
            />
          </div>
          <div className="new-user__control">
            <label>Age (Years)</label>
            <input
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
          </div>
        </div>
        <Button type="submit"> Add User </Button>
      </form>
    </div>
  );
};

export default UsersForm;
