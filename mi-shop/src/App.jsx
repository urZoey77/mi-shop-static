import { useState } from "react";
import "./App.css";
import TopBar from "./topBar/topBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
    </>
  );
}

export default App;
