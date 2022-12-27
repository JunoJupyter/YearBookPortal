import React from 'react'
import list from '../../database/testimonial.json'


function ForYou() {
  return (
    <div className='MyProfileR_c'>
      <div className='MyProfileR_c_a'>
        {
          list.data.map((e) => {
            return (
              <React.Fragment key={e.id}>
                <div className='MyProfileR_card' >
                  <div className='MyProfileR_card_image'>
                    <img src={require('../../assets/myprofile/index.jpeg')} className='MyProfileR_card_img' />
                  </div>
                  <div className='MyProfileR_card_detail'>
                    <div className='MyProfileR_card_card_name'>
                      {e.name}
                    </div>
                    <div className='MyProfileR_card_card_banch'>
                      {`${e.branch}, ${e.degree} ${e.year}`}
                    </div>
                    <div className='MyProfileR_card_card_testimony'>
                      {e.testimonial}
                    </div>
                    <div className='MyProfileR_card_card_buttons'>

                    </div>
                  </div>
                </div>
                <hr className='MyProfileR_card_hr'/>
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default ForYou