import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <p>Current count: {count}</p>

      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>−</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
