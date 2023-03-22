import "./App.css";
import "./global.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Selections from "./Components/Selections";
import Products from "./Components/Products";
import Navbar from "./Components/navbar";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="background-color text-fluid">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HeroSection />
            <Selections />
            <Contact />
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
