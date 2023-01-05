// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import LandingPage from "./pages/Landing Page/LandingPage";
import MyProfilePage from "./pages/MyProfileRight";

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
            
          </Route>
          <Route exact path="/myprofile">
            <MyProfilePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
