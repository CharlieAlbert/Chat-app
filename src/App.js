import "./App.css";
import "./global.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Selections from "./Components/Selections";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HeroSection />
            <Selections />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
