import { useState } from "react";

function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    const newError = {};

    if (!name.trim()) {
      newError.name = "Name is required";
    }
    if (!age || isNaN(age) || Number(age) <= 18) {
      newError.age = "Age is required and must be a number greater than 18";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    onAddUser({ name, age: Number(age) });

    setName("");
    setAge("");
    setError("");
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name.."
      />
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age.."
      />
      {error.age && <p style={{ color: "red" }}>{error.age}</p>}

      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}

export default UserForm;
