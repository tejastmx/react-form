import Home from "./Components/Home";
import Business from "./Components/Business";
import Personal from "./Components/Personal";
import Bankd from "./Components/Bankd";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <Home />
        </div>
        <Switch>
          <Route path="/Personal">
            <Personal />
          </Route>
          <Route path="/Business">
            <Business />
          </Route>
          <Route path="/Bankd">
            <Bankd />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
