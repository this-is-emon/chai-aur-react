import { useState } from "react";
import "./App.css";

function App() {
  let [counter, chaiCounter] = useState(15);

  //let counter = 15;
  const addValue = () => {
    //console.log("value added", Math.random());
    if (counter <= 20) {
      counter = counter + 1;
      chaiCounter(counter);
    } else {
      console.log("Value over 20 is not permitted!");
    }
    //console.log("clicked", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      chaiCounter(counter);
    } else {
      console.log("Value less then 0 is not permitted!");
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
