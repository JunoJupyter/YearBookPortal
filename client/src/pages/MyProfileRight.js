import React from 'react'
import Navbar from '../components/navbar/Navbar'

import '../components/myProfile/MyProfile.css'
import Myself from '../components/myProfile/Myself';
import Question from '../components/myProfile/Question';
import MyProfileTestimonials from '../components/myProfile/MyProfileTestimonials';
import Popup from '../components/myProfile/Popup';

function MyProfileRight() {
    return (
        <div className='myprofilefull'>
            <div className='myprofilebody'>
                <div className='MyProfileRight'>
                    <Navbar />
                    <div className='MyProfile_Left'>
                        <Myself />
                        <Question />
                    </div>
                        <MyProfileTestimonials/>
                </div>
            </div>
            <div className='edit_profile'>
                <Popup />
            </div>
        </div>
    )
}

export default MyProfileRight