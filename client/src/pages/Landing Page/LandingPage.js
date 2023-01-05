import { Link } from "react-router-dom";
import "./landing.css";
import SailLogo from "../../assets/landingpage/SailLogo.svg";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <img src={SailLogo} alt="" className="saillogo-img" />
      <div className="landing-intro">
        <h1 className="landing-heading">YEAR BOOK</h1>
        <hr className="landing-border" />
        <h4>#LET'S WRITE MEMORIES</h4>
        <Link to="/home">
          <button className="loginbtn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
