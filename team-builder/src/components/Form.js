import React, { useState } from "react";


const Form = props => {

    // created state for name, email and role

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    // created event handlers

    const handleName = event => setName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handleRole = event => setRole(event.target.value);

    // Created handlesubmit function for onclick, used in form

    const handleSubmit = event => {
        event.preventDefault();
            if (name && email && role ) {
            props.setList([...props.list, { name, email, role }]);
            resetState();
        }
    };

    // Created resetState function to reset form after submissions
     
    const resetState = () => {
        setName("");
        setEmail("");
        setRole("");

    }

  return (
    <form
      onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input
        onChange={handleName}
        id="name"
        type="text"
        size="30"
        name="name"
        value={name}
        placeholder="Please Enter Your Name Here"
      />
      <label for="email">Email: </label>
      <input
        onChange={handleEmail}
        id="email"
        type="email"
        patter=".+@gmail.com"
        placeholder="Please Enter Your Email Here"
        title="Please provide a correct email address"
        size="30"
        name="email"
        minLength="5"
        value={email}
        
      />
      <label for="role">Role: </label>
      <input
        onChange={handleRole}
        id="role"
        type="text"
        size="30"
        name="role"
        value={role}
        placeholder="Please Enter Your Title Here"
      />
      <div>
      <button type="submit">Add Team Member</button>
      </div>
    </form>

  );
};

export default Form;