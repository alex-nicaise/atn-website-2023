import { useState } from "react";

function App() {

  const [number, setNumber] = useState(0);

  const handleClick = ():void => {
    setNumber(Math.random)
  }

  return (
    <>
      <h1>Hello {number}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </>
  )
}

export default App;
