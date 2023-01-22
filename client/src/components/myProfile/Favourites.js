import React from 'react'
import list from '../../database/testimonial.json'

function Favourites(search) {
  let filteredData = () => {
    return list.data.filter(x => Object.values(x)
     .join(' ')
     .toLowerCase()
     .includes(search.search.toLowerCase()))
    }
  return (
    <div className="MyProfileR_c">
      <div className="MyProfileR_c_a">
        {filteredData().map((e) => {
            return (
              <React.Fragment key={e.id}>
                <div className='MyProfileR_card' >
                  <div className='MyProfileR_card_image'>
                    <img alt='' src={require('../../assets/myprofile/index2.jpeg')} className='MyProfileR_card_img' />
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
                <hr className='MyProfileR_card_hr' />
              </React.Fragment>)
          })
        }
      </div>
    </div>
  )
}

export default Favourites