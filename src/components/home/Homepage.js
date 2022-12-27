import "./homepage.css";
import CamImg from "../../assets/homepage/camerabg.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src={CamImg} alt="CamImg" className="camera-img" />
      <span>
        <input
          type="text"
          placeholder="&#128269; Search for friends"
          className="search"
        />
        <i className="fa fa-search"></i>
      </span>
      <div className="announcement">
        <h2>Announcement</h2>
      </div>
    </div>
  );
};

export default Homepage;
