
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      <div className="child1">
        <h1>Child Component 1</h1>
        <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
      </div>

      <div className="child2">
        <h1>Child Component 2</h1>
        <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
      </div>
      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
