import React, { useState } from "react";

let timeNow = new Date().toLocaleTimeString();

function App() {
  setInterval(currentTime, 1000);
  const [timeNew, setState] = useState(timeNow);

  function currentTime() {
    setState(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{timeNew}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
