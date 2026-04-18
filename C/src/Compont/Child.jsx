import { useState } from "react";

function Child({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState({});

  function handleSubmit() {
    const newError = {};

    if (!name.trim()) {
      newError.name = "Name is required";
    }
    if (!age || isNaN(age) || Number(age) <= 18) {
      newError.age = "Age must be a number greater than 18";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    onAddUser({
      name: name.trim(),
      age: Number(age),
    });

    setName("");
    setAge("");
    setError({});
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error.name && <p className="error">{error.name}</p>}

      <input
        type="Number"
        placeholder="Enter age.."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {error.age && <p className="error">{error.age}</p>}
      <button onClick={handleSubmit}>Add User </button>
    </div>
  );
}

export default Child;
