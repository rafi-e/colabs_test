import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center h-80 bg-sky-400">

        <h1 className="flex text-xl font-bold text-red-300">Test</h1>
      </div>
    </>
  );
}

export default App;
