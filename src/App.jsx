import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
export default function App() {
  const [value, setValue] = useState(0);
  const callValue = (e) => setValue(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={value} />
        <form>
          <label>Input Percentage:</label>
          <input type="number" min="0" max="100" value={value} onChange={callValue} />
        </form>
      </div>
    </>
  );
}
