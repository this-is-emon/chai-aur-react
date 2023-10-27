import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Cards userName="chaiAurCode" btnText="Click here !" />
      <br />
      {/* <Cards userName="Hitesh" btnText="View profile" /> */}
      <Cards userName="Hitesh" />
    </>
  );
}

export default App;
