import logo from "./logo.svg";
import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
