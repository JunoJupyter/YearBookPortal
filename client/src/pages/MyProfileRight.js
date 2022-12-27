import React from 'react'
import Navbar from '../components/navbar/Navbar'

import '../components/myProfile/MyProfile.css'
import Myself from '../components/myProfile/Myself';
import Question from '../components/myProfile/Question';
import MyProfileTestimonials from '../components/myProfile/MyProfileTestimonials';

function MyProfileRight() {

    return (
        <div className='MyProfileRight'>
            <Navbar />
            <div className='MyProfile_Left'>
                <Myself />
                <Question />
            </div>
                <MyProfileTestimonials/>
        </div>

    )
}

export default MyProfileRight