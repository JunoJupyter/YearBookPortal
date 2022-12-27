import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  Profile from '../profileboxes/profilebox'
import "./carousel.css"
import data from "./TemplateData.json";
import { Pagination, Navigation } from "swiper";

function Carousel() {
  const [searchInput, setSearchInput] = useState("");

  
 
 const handleChange = (e) => {
   e.preventDefault();
   setSearchInput(e.target.value);
 };
 console.log(searchInput);
 if (searchInput.length > 0) {
  const arr = data.filter(val => val.title.includes(searchInput))
  arr.map((val) =>(
        <SwiperSlide>
          <Profile
              key={val.id}
              name = {val.title}  
          />
          </SwiperSlide>
           ))
  //  arr.map(movie => return <Profile key={movie.Title} data={movie} />)
 }
  
    return (
      <>
      <div>
      <input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
      {/* <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div> */}
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
       { data.map((val) =>(
        <SwiperSlide>
          <Profile
              key={val.id}
              name = {val.title}  
          />
          </SwiperSlide>
       ))}
          
        </Swiper>
        </div>
       
        </div>
        
       
      </>
    );
   
  }
  export default Carousel;

