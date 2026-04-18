import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div className="container">
      <h2>Add User</h2>
      <Child onAddUser={addUser} />

      <div className="list">
        <div className="header">
          <span>Name</span>
          <span>Age</span>
        </div>

        {users.map((u, i) => (
          <div className="row " key={i}>
            <span>{u.name}</span>
            <span>{u.age}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parent;
