import "./App.css";
import Home from "./components/Home";
import Locations from "./components/Locations";
import NavbarComponent from "./components/Navbar";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
      <OurServices />
      <Locations />
    </div>
  );
}

export default App;
