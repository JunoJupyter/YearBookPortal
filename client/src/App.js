// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/home/Homepage';
import LandingPage from './pages/LandingPage';
import MyProfilePage from './pages/MyProfileRight';
import ByYou from './components/myProfile/ByYou';
import ForYou from './components/myProfile/ForYou';
import Favourites from './components/myProfile/Favourites';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage/>
            </Route>
          <Route exact path="/home">
            <Navbar/>
            <Homepage/>
          </Route>
          <Route exact path="/myprofile">
            <MyProfilePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
