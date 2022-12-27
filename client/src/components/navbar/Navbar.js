import sail from '../../assets/navbar/sail.png';
import yearbook from '../../assets/navbar/Links.png';
import userImg from '../../assets/navbar/userImg.jpg';
import menu from '../../assets/navbar/menu.png';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return ( 
        <div className="navbar">
            <div className="images">
                <img src={sail} alt="SAIL" className="sail"/>
                <img src={yearbook} alt="YEARBOOK" className="yearbook"/>
            </div>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/polls">Polls</Link>
                <Link to="/leaderboard">Leaderboard</Link>
            </div>
            {
                openMenu && 
                <div className="hamburg">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/polls">Polls</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                        <li><button className="log-out">Log out</button></li>
                    </ul>
                </div>
                
            }
            
            <input type="text" className='search-box' placeholder='Search for friend'/>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <button className="log-out in">Log out</button>
            <img src={userImg} alt="USER" className="user-img" />
            <img src={menu} alt="" className="menu" onClick={() => setOpenMenu(
                (prev) => !prev
            )}  />
        </div>
     );
}
 
export default Navbar;