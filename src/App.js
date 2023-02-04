import "./App.css";
import "./global.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HeroSection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
