import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  Profile from '../profileboxes/profilebox'
import "./carousel.css"

import { Pagination, Navigation } from "swiper";

function Carousel() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
      <div>
      <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div>
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
          <SwiperSlide>
          <Profile>

          </Profile>
          </SwiperSlide>
          <SwiperSlide>
          <Profile> 
        </Profile>
        </SwiperSlide>
          <SwiperSlide>
          <Profile>       
          </Profile>
          </SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
          <SwiperSlide><Profile></Profile></SwiperSlide>
        </Swiper>
        </div>
        </div>
      </>
    );
  }
  export default Carousel;