import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true); // empty box validation

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); //helps to update state value on every value changes on input box
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return; // if enteredname is empty it will return which means it will not move forward.
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    setEnteredName(""); //helps to empty input box after form submission
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />

        {enteredNameIsValid === false && <small>Name must not be empty</small>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
