import { useState, useRef } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./UserInput.css";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name && age) {
      const user = {
        id: Math.random(),
        name,
        Age: age,
      };
      props.onAddUser(user);
      console.log(name, age);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {error && (
        <Modal title="An Error Occured" message="Something went wrong!" />
      )}
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input type="text" ref={nameInputRef} />
        </label>
        <label>
          Age:
          <input type="number" ref={ageInputRef} />
        </label>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default UserInput;
