import React from 'react'
import Navbar from '../components/navbar/Navbar'

import '../components/myProfile/MyProfile.css'
import Friend from '../components/friends_profile/Friend';
import FriendsQues from '../components/friends_profile/FriendsQues';
import FriendsTestimonials from '../components/friends_profile/FriendsTestimonials';

function MyProfileRight() {
    return (
        <div className='myprofilefull'>
            <div className='myprofilebody'>
                <div className='MyProfileRight'>
                    <Navbar />
                    <div className='MyProfile_Left'>
                        <Friend />
                        <FriendsQues />
                    </div>
                        <FriendsTestimonials/>
                </div>
            </div>
            
        </div>
    )
}

export default MyProfileRight