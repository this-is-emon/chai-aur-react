import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Cards userName="Hitesh" btnTxt="Check Me!" />
      <br />
      <Cards userName="Emon" />
    </>
  );
}

export default App;
