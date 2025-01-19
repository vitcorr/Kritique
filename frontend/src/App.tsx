import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-gradient-to-r from-gray-700 to-gray-950">
      <Hero />
    </div>
  );
}

export default App;
