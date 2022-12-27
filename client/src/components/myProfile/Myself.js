import './Myself.css';
import  profile_photo from '../../assets/myprofile/profile_photo.png';
import  instagram from '../../assets/myprofile/Instagram.png';
import  linkdin from '../../assets/myprofile/Linkdin.png';
import  profile_icon from '../../assets/myprofile/profile_icon.png';
import userData from '../../database/profile.json'

function Myself(){
    return(
        <div className='main'>
            <img className="profile" alt="profile" src={profile_photo} />
            <img className="bioLogo" alt="bioLogo" src={profile_icon} />
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