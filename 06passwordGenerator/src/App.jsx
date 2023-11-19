import { useCallback, useState } from "react";
import "./App.css";

function App() {
  //Initiating states for dependency variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(""); //intial value of password will be given later

  // Password Generator Function
  const passwordGenerator = useCallback(() => {
    // store the generated password here to set it in the "password" variable later
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=[]{}`~";

    for (let i = 1; i <= length; i++) {
      // to get a random number to use as index of 'str'
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [
    length, //dependency as variable
    numberAllowed,
    charAllowed,
    setPassword, //dependency as method
  ]);

  return (
    <>
      <div className=" w-full bg-slate-600 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
        <h1 className="text-3xl text-white my-3">Password Generator!</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
