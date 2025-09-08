import { useState } from "react";
import "./form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <h1 style={{ marginBottom: "1.2rem" }}>Full Name Display</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label>
            First Name:{" "}
            <input
              style={{ width: "12vw" }}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Last Name:{" "}
            <input
              style={{ width: "12vw" }}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>

        <button style={{ marginBottom: "0.75rem" }} type="submit">
          Submit
        </button>
      </form>

      {/* Full Name Display */}
      {fullName && (
        <p style={{ fontSize: "18px", fontWeight: "600" }}>
          Full Name: {fullName}
        </p>
      )}
    </div>
  );
}

export default Form;
