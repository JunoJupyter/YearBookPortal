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
//   const [searchInput, setSearchInput] = useState("");
  const [ Query,setQuery] = useState("");
  
 console.log(data.filter(user=>user.title.toLowerCase().includes("gr")));
//  const handleChange = (e) => {
//    e.preventDefault();
//    setSearchInput(e.target.value);
//  };
//  console.log(searchInput);
//  if (searchInput.length > 0) {
//   const arr = data.filter(val => val.title.includes(searchInput))
//   arr.map((val) =>(
//         <SwiperSlide>
//           <Profile
//               key={val.id}
//               name = {val.title}  
//           />
//           </SwiperSlide>
//            ))
 
//  }
  
    return (
      <>
      <div className="carousel">
      <div className="search">
        <input
          type="text"
          placeholder="Search...."
          className="Searchone"
           onChange={(e) => setQuery(e.target.value)}
        />
        
       
      </div>
        <div className="swipe" >
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
       { data.filter(user=>user.title.toLowerCase().includes(Query)).map((user) =>(
        <SwiperSlide>
          <Profile
              key={user.id}
              name = {user.title}  
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

