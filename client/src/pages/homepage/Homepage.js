import "./homepage.css";
import CamImg from "../../assets/homepage/camerabg.png";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {

  return (
    <div className="homepage">
      <Navbar />
      <img src={CamImg} alt="CamImg" className="camera-img" />
      <Link to="#">
        <div className="search">YEARBOOK 2022 &nbsp; &#128279;</div>
      </Link>
      <div className="announcement">
        <h2>Announcement</h2>
      </div>
    </div>
  );
};

export default Homepage;
