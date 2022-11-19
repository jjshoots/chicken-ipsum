import { useState } from "react";
import "./App.css";
import { generateChicken } from "./utils";

function App() {
  const [chicken, setChicken] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Chicken Chicken Chicken</h1>
      <button onClick={() => setChicken(generateChicken())}>chicken</button>
      <p>{chicken}</p>
    </div>
  );
}

export default App;
