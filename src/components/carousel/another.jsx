import React, {useState} from "react";
// import './style.css';
import data from "./TemplateData.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  Profile from '../profileboxes/profilebox'
import "./carousel.css"

import { Pagination, Navigation } from "swiper";


function Another() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <Swiper
                      slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
                     >
        <div className="template_Container">
          {
           
                   
            {/* data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              }) */}
              .map((val) => {
                return(
                  <div className="template">
                    
          <SwiperSlide >
          <Profile    key={val.id}
              name = {val.title}     
           />
           </SwiperSlide>
                    
                  </div> 
                )
              })
          }
        </div>
        </Swiper>
      </div>
    </>
  )
}

export default Another;