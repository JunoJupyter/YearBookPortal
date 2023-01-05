import "./homepage.css";
import CamImg from "../../assets/homepage/camerabg.png";
import MegaphoneIcon from "../../assets/homepage/megaphoneIcon.svg";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Homepage() {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/announcements")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        
      });
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <img src={CamImg} alt="CamImg" className="camera-img" />
      <Link to="#">
        <div className="search">YEARBOOK 2022 &nbsp; &#128279;</div>
      </Link>
      <div className="announcement">
        <h2>Announcement</h2>
        <div className="para">
          {isPending && <div>Loading.....</div>}
          {data &&
            data.map((data) => (
              <div key={data.id} className="databody">
                {data.id}. {data.body}
                <img src={MegaphoneIcon} alt="" className="megaphoneicon" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
