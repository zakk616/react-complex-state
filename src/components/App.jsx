import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "fName") {
      setContact((prev) => {
        return { fName: value, lName: prev.lName, email: prev.email };
      });
    } else if (name === "lName") {
      setContact((prev) => {
        return { fName: prev.fName, lName: value, email: prev.email };
      });
    } else if (name === "email") {
      setContact((prev) => {
        return { fName: prev.fName, lName: prev.lName, email: value };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName} !
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
