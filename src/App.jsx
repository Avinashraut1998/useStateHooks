import { useState } from "react";
import "./App.css";
function App() {
  let [color, setColor] = useState("White");

  let [count, setCount] = useState(0);
  function add() {
    count = count + 1;
    setCount(count);
    console.log(count);
  }

  function rem() {
    count = count - 1;
    setCount(count);
    console.log(count);
  }

  return (
    <>
      <h1>This is our Counter Value {count}</h1>
      <button onClick={add}>Add Value</button>
      <button onClick={rem}>Remove Value</button>
      <hr />
      <h1>This is Our {color} colour...!</h1>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Yellow")}>Yellow</button>
    </>
  );
}

export default App;
