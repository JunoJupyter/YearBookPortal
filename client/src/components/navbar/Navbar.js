import sail from '../../assets/navbar/sail.png';
import yearbook from '../../assets/navbar/Links.png';
import userImg from '../../assets/navbar/userImg.jpg';
import menu from '../../assets/navbar/menu.png';
import bell from'../../assets/navbar/bell.png';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [userClick, setUserClick] = useState(false);

    return ( 
        <div className="navbar">
            <div className="nav-images">
                <img src={sail} alt="SAIL" class="nav-sail"/>
                <img src={yearbook} alt="YEARBOOK" class="nav-yearbook"/>
            </div>
            <div className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/polls">Polls</Link>
                <Link to="/leaderboard">Leaderboard</Link>
            </div>
            {
                openMenu && 
                <div className="nav-hamburg">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/polls">Polls</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                    </ul>
                </div>
                
            }
            
            <div class="nav-search-cont">
                <input type="text" className='nav-search-box' placeholder='Search for friend'/>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-search-icon">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <img src={bell} alt="bell" className="nav-bell" />
            <img src={userImg} alt="USER" className="nav-user-img" onClick={() => {
                setUserClick(
                    (prev) => !prev
                );
                setOpenMenu(false)
            }}  />
            {

                userClick &&
                <div className="nav-hamburg2">
                    <ul>
                        <li><Link to="/myprofile">My Profile</Link></li>
                        <li><Link to="#">Hidden Testimonials</Link></li>
                        <li><button className="nav-log-out nav-out">Log out</button></li>
                    </ul>
                </div>

            }
            <img src={menu} alt="" className="nav-menu" onClick={() => {
                setOpenMenu(
                    (prev) => !prev
                );
                setUserClick(false)
            }}  />
        </div>
     );
}
 
export default Navbar;