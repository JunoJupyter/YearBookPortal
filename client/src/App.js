// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Homepage />
            {/* <Navbar /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
