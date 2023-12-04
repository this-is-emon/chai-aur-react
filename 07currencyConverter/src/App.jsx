import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  //method for getting keys
  const options = Object.keys(currencyInfo);

  //method for 'swap' button
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // method for getting converted amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-5">Currency Converter!</h1>
      <InputBox />
    </>
  );
}

export default App;
