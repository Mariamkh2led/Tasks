import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Too short");

  useEffect(() => {
    if (text.length < 10) {
      setStatus("Too short");
    } else if (text.length <= 20) {
      setStatus("Good");
    } else {
      setStatus("Too long");
    }
  }, [text]);

  function handleChange(e) {
    if (e.target.value.length <= 30) {
      setText(e.target.value);
    }
  }

  return (
    <div>
      <input value={text} placeholder="write here.." onChange={handleChange} />
      <p>Number of letters {text.length}</p>
      <p>status {status}</p>
    </div>
  );
}

export default App;
