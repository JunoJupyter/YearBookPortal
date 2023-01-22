import './friendsTestimonials.css'
import React from "react";
import list from "../../database/testimonial.json";

function FriendsTestimonials(){
    return(
        <div className="FT_right">
            <div className='Heading_FT'>
                Testimonials
            </div>
            <div className='write_testimonial_FT'>
                <textarea className='text_FT' placeholder='Write Testimonial'></textarea>
            </div>
        
        <div className="MyProfileR_c">
        <div className="MyProfileR_c_a">
          {list.data.map((e) => {
              return (
                  <React.Fragment key={e.id}>
                <div className="MyProfileR_card">
                  <div className="MyProfileR_card_image">       
                    <img
                      alt=""
                      src={require("../../assets/myprofile/index3.jpg")}
                      className="MyProfileR_card_img"
                      />
                  </div>
                  <div className="MyProfileR_card_detail">
                    <div className="MyProfileR_card_card_name">{e.name}</div>
                    <div className="MyProfileR_card_card_banch">
                      {`${e.branch}, ${e.degree} ${e.year}`}
                    </div>
                    <div className="MyProfileR_card_card_testimony">
                      {e.testimonial}
                    </div>
                    <div className="MyProfileR_card_card_buttons"></div>
                  </div>
                </div>
                <hr className="MyProfileR_card_hr" />
              </React.Fragment>
            );
        })}
        </div>
      </div>
      </div>
    )
}
export default FriendsTestimonials