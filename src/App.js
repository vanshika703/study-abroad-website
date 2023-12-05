import "./App.css";
import Home from "./components/Home";
import NavbarComponent from "./components/Navbar";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home />
      <OurServices/>
    </div>
  );
}

export default App;
