import { Footer} from "flowbite-react";
import "./App.css";
import Home from "./components/Home";
import Locations from "./components/Locations";
import NavbarComponent from "./components/Navbar";
import OurServices from "./components/OurServices";
import logo from "../src/img/graduation-hat.png";
import FooterComponentCustom from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
      <OurServices />
      <Locations />
      <FooterComponentCustom/>
      
    </div>
  );
}

export default App;
