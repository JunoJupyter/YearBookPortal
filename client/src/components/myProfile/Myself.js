import  profile_photo from '../../assets/myprofile/profile_photo.png';
import  instagram from '../../assets/myprofile/Instagram.png';
import  linkdin from '../../assets/myprofile/Linkdin.png';
import  profile_icon from '../../assets/myprofile/profile_icon.png';
import userData from '../../database/profile.json'
import { useState, useEffect } from 'react';

function Myself(){
    const[pop, setpop] = useState(0);

    useEffect(()=>{
        if(pop){
            document.querySelector('.myprofilebody').style.filter="blur(8px)"
            document.querySelector('.boxpp').style.visibility = "visible"
            setpop(0);
        }
    }, [pop])
    return(
        <div className='main'>    
            <div className='Logo_myself'>
                <img className="profile" alt="profile" src={profile_photo} />
                <img className="bioLogo" alt="bioLogo" src={profile_icon} onClick={()=> setpop(1) }/>
            </div>
            <div className='name'>{userData.profile[0].name}</div>
            <div className='info'>{userData.profile[0].branch}, {userData.profile[0].course}, {userData.profile[0].passout_year}</div>
            <div className='logos'>
                <a href={userData.profile[0].insta_handle}>
                    <img className="linkdin" alt="linkdin" src={linkdin} />
                </a>
                <a href={userData.profile[0].insta_handle}>
                    <img className="instagram" alt="instagram" src={instagram} />
                </a>
            </div>
            <div className='bio'>
                {userData.profile[0].bio}
            </div>
        </div>
    )
}

export default Myself