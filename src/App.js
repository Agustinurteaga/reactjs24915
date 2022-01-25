import "./App.css";
import "./styles.css";
import NavBar from "./components/NavBar.js";

const name = "test";

const App = () => {
  return (
    <>
    <NavBar>
      <h1>Helo user: {name}</h1>
    </NavBar>
    </>
  )
}

export default App;
